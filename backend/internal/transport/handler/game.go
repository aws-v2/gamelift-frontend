package handler

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"backend/internal/domain"
	"backend/internal/interfaces"
	"backend/internal/messaging"

	"github.com/gin-gonic/gin"
)

type GameHandler struct {
	gameSvc    interfaces.GameRepository
	natsClient *messaging.NatsClient
}

func NewGameHandler(gameSvc interfaces.GameRepository, natsClient *messaging.NatsClient) *GameHandler {
	return &GameHandler{
		gameSvc:    gameSvc,
		natsClient: natsClient,
	}
}

func (h *GameHandler) ListGames(c *gin.Context) {
	games, err := h.gameSvc.ListGames()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "internal error"})
		return
	}

	c.JSON(http.StatusOK, games)
}

func (h *GameHandler) RegisterGame(c *gin.Context) {
	userID := c.GetString(string(domain.UserIDKey))

	err := c.Request.ParseMultipartForm(50 << 20) // 50 MB max in memory
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "failed to parse multipart form"})
		return
	}

	gameName := c.PostForm("game_name")
	vmID := c.PostForm("vm_id")

	if gameName == "" || vmID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing required fields (game_name, vm_id)"})
		return
	}

	file, _, err := c.Request.FormFile("file")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "failed to read uploaded file"})
		return
	}
	defer file.Close()

	// Register game metadata to get ID, ARN, and folder paths
	game, err := h.gameSvc.RegisterGame(gameName, vmID, userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to register game metadata"})
		return
	}

	// Save the uploaded file to disk as 'game.mp4' for consistency
	if err := os.MkdirAll(game.FolderLocation, os.ModePerm); err != nil {
		log.Printf("[GameHandler] Failed to create folder %s: %v", game.FolderLocation, err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to save file"})
		return
	}

	dstPath := filepath.Join(game.FolderLocation, "game.mp4")
	dst, err := os.Create(dstPath)
	if err != nil {
		log.Printf("[GameHandler] Failed to create file %s: %v", dstPath, err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to save file"})
		return
	}
	defer dst.Close()

	if _, err := io.Copy(dst, file); err != nil {
		log.Printf("[GameHandler] Failed to copy file: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to save file"})
		return
	}

	log.Printf("[GameHandler] User %s registered game '%s' -> %s", userID, game.Name, game.ARN)

	c.JSON(http.StatusCreated, game)
}

type InitUploadRequest struct {
	GameName string `json:"game_name" binding:"required"`
	VMID     string `json:"vm_id" binding:"required"`
}

func (h *GameHandler) InitUpload(c *gin.Context) {
	var req InitUploadRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	userID := c.GetString(string(domain.UserIDKey))

	// 1. Create pending game record
	game, err := h.gameSvc.InitUpload(req.GameName, req.VMID, userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to initialize upload"})
		return
	}

	// 2. Request Presigned URL from S3 Service over NATS
	subj := messaging.Subject{
		Env:        "dev",
		Service:    "api",
		Version:    "v1",
		Domain:     "s3",
		ActionType: "create_presigned_url",
	}

	payload := map[string]interface{}{
		"game_id": game.ID,
		"user_id": userID,
		"arn":     game.ARN,
	}
	data, _ := json.Marshal(payload)
	log.Printf("[GameHandler] Sending InitUpload NATS request for user %s: %s", userID, string(data))

	msg, err := h.natsClient.Request(subj, data, 2*time.Second)
	if err != nil {
		log.Printf("[GameHandler] NATS request failed: %v", err)
		c.JSON(http.StatusServiceUnavailable, gin.H{"error": "s3 service unavailable"})
		return
	}

	var resp map[string]interface{}
	if err := json.Unmarshal(msg.Data, &resp); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "invalid response from s3 service"})
		return
	}

	log.Printf("[GameHandler] Received presigned URL from S3 for Game %d: %v", game.ID, resp["upload_url"])

	c.JSON(http.StatusOK, gin.H{
		"game_id":    game.ID,
		"upload_url": resp["upload_url"],
		"arn":        game.ARN,
	})
}
