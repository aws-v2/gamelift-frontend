package service

import (
	"encoding/json"
	"log"

	"backend/internal/domain"
	"backend/internal/interfaces"
	"backend/internal/messaging"

	"github.com/nats-io/nats.go"
)

type S3Listener struct {
	gameRepo   interfaces.GameRepository
	natsClient *messaging.NatsClient
}

func NewS3Listener(gameRepo interfaces.GameRepository, natsClient *messaging.NatsClient) *S3Listener {
	return &S3Listener{
		gameRepo:   gameRepo,
		natsClient: natsClient,
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
			log.Printf("[S3Listener] Finalizing game %d with S3 ARN %s", payload.GameID, payload.StorageARN)
			err := l.gameRepo.UpdateGameStatus(payload.GameID, domain.GameStatusActive, payload.StorageARN)
			if err != nil {
				log.Printf("[S3Listener] Failed to update game status for Game %d: %v", payload.GameID, err)
			} else {
				log.Printf("[S3Listener] Game %d is now ACTIVE and visible!", payload.GameID)
			}
		}
	})

	if err != nil {
		log.Fatalf("[S3Listener] Failed to subscribe to NATS: %v", err)
	}
}
