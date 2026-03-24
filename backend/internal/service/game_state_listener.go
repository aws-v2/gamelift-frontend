package service

import (
	"log"

	"backend/internal/messaging"
	"backend/internal/transport/handler"

	"github.com/nats-io/nats.go"
)

type GameStateListener struct {
	natsClient *messaging.NatsClient
	hub        *handler.Hub
}

func NewGameStateListener(natsClient *messaging.NatsClient, hub *handler.Hub) *GameStateListener {
	return &GameStateListener{
		natsClient: natsClient,
		hub:        hub,
	}
}

func (l *GameStateListener) Start() {
	// Listen for any game state updates from Godot instances
	subj := messaging.Subject{
		Env:        "dev",
		Service:    "game",
		Version:    "v1",
		Domain:     "state",
		ActionType: "broadcast",
	}

	_, err := l.natsClient.Subscribe(subj, func(msg *nats.Msg) {
		// Log for debug transparency as requested
		log.Printf("[GameStateListener] Relaying Godot State: %d bytes", len(msg.Data))
		
		// Push directly into the WebSocket Hub for all connected clients
		l.hub.Broadcast(msg.Data)
	})

	if err != nil {
		log.Printf("[GameStateListener] Failed to subscribe to NATS: %v", err)
	}
}
