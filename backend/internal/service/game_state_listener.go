package service

import (
	"encoding/json"
	"log"
	"math"
	"math/rand"
	"time"

	"backend/internal/domain"
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
	// 1. Listen for any game state updates from Godot instances (NATS)
	subj := messaging.Subject{
		Env:        "dev",
		Service:    "game",
		Version:    "v1",
		Domain:     "state",
		ActionType: "broadcast",
	}

	_, err := l.natsClient.Subscribe(subj, func(msg *nats.Msg) {
		log.Printf("[GameStateListener] Relaying Godot State: %d bytes", len(msg.Data))
		l.hub.Broadcast(msg.Data)
	})

	if err != nil {
		log.Printf("[GameStateListener] Failed to subscribe to NATS: %v", err)
	}

	// 2. Start Randomized Mock Data Generator (Hijacking the pipe)
	go l.runMockGenerator()
}

func (l *GameStateListener) runMockGenerator() {
	log.Println("[GameStateListener] Starting Randomized 3D Mock Data Generator...")
	ticker := time.NewTicker(50 * time.Millisecond) // 20Hz updates
	defer ticker.Stop()

	// Initial State
	x, y, z := 0.0, 1.7, 0.0
	yaw, pitch := 0.0, 0.0
	hp := 100
	anim := "idle"
	
	var lastX, lastY, lastZ float64
	var firstTick = true

	// Random walk parameters
	speedMultiplier := 0.2
	turnSpeed := 0.1

	for range ticker.C {
		// Randomize movement
		yaw += (rand.Float64() - 0.5) * turnSpeed
		pitch += (rand.Float64() - 0.5) * 0.05
		pitch = math.Max(-0.5, math.Min(0.5, pitch)) // Clamp pitch

		// Forward movement based on yaw
		moveSpeed := 0.0
		if rand.Float64() > 0.3 { // 70% chance of moving
			moveSpeed = speedMultiplier
			anim = "running"
		} else {
			anim = "idle"
		}

		x += moveSpeed * math.Sin(yaw)
		z += moveSpeed * math.Cos(yaw)

		// Random jumping
		if y <= 1.71 && rand.Float64() > 0.95 {
			y += 2.0 // Instant "jump" velocity (simulated)
			anim = "jumping"
		}

		// Gravity simulation
		if y > 1.7 {
			y -= 0.15
			if y < 1.7 {
				y = 1.7
			}
		}

		// Calculate velocity
		var vx, vy, vz float64
		if !firstTick {
			vx = (x - lastX) / 0.05
			vy = (y - lastY) / 0.05
			vz = (z - lastZ) / 0.05
		}
		lastX, lastY, lastZ = x, y, z
		firstTick = false

		// Random health fluctuation
		if rand.Float64() > 0.98 {
			hp -= rand.Intn(5)
			if hp < 20 {
				hp = 100 // Reset for continuous testing
			}
		}

		state := domain.PlayerState{
			ID:        "player_1",
			X:         x,
			Y:         y,
			Z:         z,
			Yaw:       yaw,
			Pitch:     pitch,
			VX:        vx,
			VY:        vy,
			VZ:        vz,
			Anim:      anim,
			IsOnFloor: y <= 1.75,
			HP:        hp,
		}

		message, _ := json.Marshal(state)
		l.hub.Broadcast(message)
	}
}
