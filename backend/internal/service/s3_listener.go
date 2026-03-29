package service

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"backend/internal/domain"
	"backend/internal/interfaces"
	"backend/internal/messaging"

	"github.com/nats-io/nats.go"
)

type S3Listener struct {
	gameRepo      interfaces.GameRepository
	natsClient    *messaging.NatsClient
	validationSvc *ValidationService
}

func NewS3Listener(gameRepo interfaces.GameRepository, natsClient *messaging.NatsClient, validationSvc *ValidationService) *S3Listener {
	return &S3Listener{
		gameRepo:      gameRepo,
		natsClient:    natsClient,
		validationSvc: validationSvc,
	}
}

func (l *S3Listener) Start() {
	subj := messaging.Subject{
		Env:        "dev",
		Service:    "s3",
		Version:    "v1",
		Domain:     "game",
		ActionType: "stored",
	}

	_, err := l.natsClient.Subscribe(subj, func(msg *nats.Msg) {
		log.Printf("[S3Listener] Received message from NATS: %s", string(msg.Data))
		var payload struct {
			GameID     int    `json:"game_id"`
			StorageARN string `json:"s3_arn"`
			Status     string `json:"status"`
		}

		if err := json.Unmarshal(msg.Data, &payload); err != nil {
			log.Printf("[S3Listener] Failed to unmarshal message: %v", err)
			return
		}

		if payload.Status == "success" {
			log.Printf("[S3Listener] S3 Upload successful for Game %d. Starting Async Validation...", payload.GameID)

			// 1. Get Game Record
			game, err := l.gameRepo.GetGame(payload.GameID)
			if err != nil {
				log.Printf("[S3Listener] Failed to find game %d: %v", payload.GameID, err)
				return
			}

			// 2. Request Download URL from S3 Service
			downSubj := messaging.Subject{
				Env:        "dev",
				Service:    "s3",
				Version:    "v1",
				Domain:     "s3",
				ActionType: "get_download_url",
			}
			reqPayload := map[string]interface{}{
				"game_id": payload.GameID,
				"user_id": "system",
				"key":     fmt.Sprintf("uploads/games/%d/game.zip", payload.GameID),
			}
			reqData, _ := json.Marshal(reqPayload)
			msg, err := l.natsClient.Request(downSubj, reqData, 5*time.Second)
			if err != nil {
				log.Printf("[S3Listener] Failed to get download URL: %v", err)
				return
			}

			var downResp struct {
				DownloadURL string `json:"download_url"`
			}
			json.Unmarshal(msg.Data, &downResp)

			// 3. Download to Temp Location
			tempZip := filepath.Join("/tmp", fmt.Sprintf("val_%d.zip", payload.GameID))
			tempDir := filepath.Join("/tmp", fmt.Sprintf("val_ext_%d", payload.GameID))
			defer os.RemoveAll(tempZip)
			defer os.RemoveAll(tempDir)

			if err := l.downloadFile(downResp.DownloadURL, tempZip); err != nil {
				log.Printf("[S3Listener] Download failed: %v", err)
				l.gameRepo.UpdateGameStatus(payload.GameID, "failed", "")
				return
			}

			// 4. Validate
			var manifest domain.GameManifest
			json.Unmarshal([]byte(game.Manifest), &manifest)

			if err := l.validationSvc.Unzip(tempZip, tempDir); err != nil {
				log.Printf("[S3Listener] Unzip failed: %v", err)
				l.gameRepo.UpdateGameStatus(payload.GameID, "failed", "")
				return
			}

			if err := l.validationSvc.ValidateStructure(tempDir, manifest); err != nil {
				log.Printf("[S3Listener] Validation failed for Game %d: %v", payload.GameID, err)
				l.gameRepo.UpdateGameStatus(payload.GameID, "failed", "")
				return
			}

			// 5. Finalize
			log.Printf("[S3Listener] Validation passed! Finalizing game %d", payload.GameID)
			err = l.gameRepo.UpdateGameStatus(payload.GameID, domain.GameStatusStored, payload.StorageARN)
			if err != nil {
				log.Printf("[S3Listener] Failed to update status: %v", err)
			}
		}
	})

	if err != nil {
		log.Fatalf("[S3Listener] Failed to subscribe to NATS: %v", err)
	}
}

func (l *S3Listener) downloadFile(url, dest string) error {
	resp, err := http.Get(url)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	out, err := os.Create(dest)
	if err != nil {
		return err
	}
	defer out.Close()

	_, err = io.Copy(out, resp.Body)
	return err
}
