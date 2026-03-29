package service

import (
	"encoding/json"
	"log"
	"time"

	"backend/internal/domain"
	"backend/internal/interfaces"
	"backend/internal/messaging"

	"github.com/nats-io/nats.go"
)

type NodeAgent struct {
	NodeID     string
	gameRepo   interfaces.GameRepository
	natsClient *messaging.NatsClient
}

func NewNodeAgent(nodeID string, gameRepo interfaces.GameRepository, natsClient *messaging.NatsClient) *NodeAgent {
	return &NodeAgent{
		NodeID:     nodeID,
		gameRepo:   gameRepo,
		natsClient: natsClient,
	}
}

func (a *NodeAgent) Start() {
	subj := messaging.Subject{
		Env:        "dev",
		Service:    "provisioning",
		Version:    "v1",
		Domain:     "game",
		ActionType: "provision",
	}

	_, err := a.natsClient.Subscribe(subj, func(msg *nats.Msg) {
		var payload struct {
			GameID     int    `json:"game_id"`
			StorageARN string `json:"storage_arn"`
			TargetNode string `json:"target_node"`
		}

		if err := json.Unmarshal(msg.Data, &payload); err != nil {
			log.Printf("[NodeAgent] Failed to unmarshal provisioning request: %v", err)
			return
		}

		// Only handle requests for this specific node
		if payload.TargetNode != a.NodeID {
			return
		}

		log.Printf("[NodeAgent %s] Provisioning request received for game %d", a.NodeID, payload.GameID)

		// Simulating the Initialization Layer:
		// 1. Download artifact from S3 (StorageARN)
		// 2. Unzip & Setup Env
		// 3. Launch Process (Godot Headless)
		go a.initializeGame(payload.GameID, payload.StorageARN)
	})

	if err != nil {
		log.Fatalf("[NodeAgent] Failed to subscribe to provisioning topic: %v", err)
	}
}

func (a *NodeAgent) initializeGame(gameID int, storageARN string) {
	log.Printf("[NodeAgent %s] STARTING INITIALIZATION for Game %d...", a.NodeID, gameID)
	
	// Simulation of cold start delay
	time.Sleep(3 * time.Second) 

	log.Printf("[NodeAgent %s] Process started for Game %d. Listening on port 8080", a.NodeID, gameID)

	// 4. Update status to Active
	err := a.gameRepo.UpdateGameStatus(gameID, domain.GameStatusActive, storageARN)
	if err != nil {
		log.Printf("[NodeAgent %s] Failed to finalize status for game %d: %v", a.NodeID, gameID, err)
		return
	}

	// 5. Notify "Game Ready"
	readySubj := messaging.Subject{
		Env:        "dev",
		Service:    "provisioning",
		Version:    "v1",
		Domain:     "game",
		ActionType: "ready",
	}

	readyPayload := struct {
		GameID int    `json:"game_id"`
		NodeID string `json:"node_id"`
		Port   int    `json:"port"`
	}{
		GameID: gameID,
		NodeID: a.NodeID,
		Port:   8080,
	}

	data, _ := json.Marshal(readyPayload)
	a.natsClient.Publish(readySubj, data)

	log.Printf("[NodeAgent %s] Game %d is now LIVE and READY!", a.NodeID, gameID)
}
