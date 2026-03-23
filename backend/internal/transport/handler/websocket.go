package handler

import (
	"encoding/json"
	"log"
	"net/http"

	"backend/internal/domain"
	"backend/internal/interfaces"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

type WebSocketHandler struct {
	sessionManager interfaces.SessionManager
}

func NewWebSocketHandler(sm interfaces.SessionManager) *WebSocketHandler {
	return &WebSocketHandler{sessionManager: sm}
}

func (h *WebSocketHandler) Handle(c *gin.Context) {
	userID := c.GetString(string(domain.UserIDKey))

	conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		log.Printf("[WS] Upgrade error for %s: %v", userID, err)
		return
	}

	session := h.sessionManager.CreateSession(userID, "")
	session.Conn = conn

	log.Printf("[WS] Client connected: %s", userID)

	defer func() {
		h.sessionManager.RemoveSession(userID)
		conn.Close()
		log.Printf("[WS] Client disconnected: %s", userID)
	}()

	for {
		_, message, err := conn.ReadMessage()
		if err != nil {
			log.Printf("[WS] Read error for %s: %v", userID, err)
			break
		}

		var msg map[string]interface{}
		if err := json.Unmarshal(message, &msg); err == nil {
			msgType, _ := msg["type"].(string)
			if msgType == "join" {
				gameID, _ := msg["gameId"].(string)
				session.GameID = gameID
				log.Printf("[WS] User %s joined game %s", userID, gameID)
			} else if session.Source != nil {
				var inputEvent domain.InputEvent
				json.Unmarshal(message, &inputEvent)
				session.Source.HandleInput(inputEvent)
			}
		}
	}
}
