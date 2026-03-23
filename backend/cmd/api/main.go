package main

import (
	"log"
	"net/http"

	"backend/internal/config"
	"backend/internal/messaging"
	"backend/internal/service"
	"backend/internal/transport"
)

func main() {
	cfg := config.Load()

	// Services
	authSvc := service.NewAuthService(cfg)
	gameSvc := service.NewGameService()

	// Messaging (placeholder)
	nats := messaging.NewNatsClient(cfg.NatsURL)
	if err := nats.Connect(); err != nil {
		log.Printf("[MAIN] NATS connection failed: %v", err)
	}
	defer nats.Close()

	// Router
	router := transport.NewRouter(authSvc, gameSvc)

	log.Printf("[SERVER] Listening on %s", cfg.ServerPort)
	log.Fatal(http.ListenAndServe(cfg.ServerPort, router))
}
