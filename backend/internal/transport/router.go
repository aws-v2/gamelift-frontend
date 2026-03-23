package transport

import (
	"net/http"

	"backend/internal/interfaces"
	"backend/internal/transport/handler"
)

func NewRouter(authSvc interfaces.AuthService, gameSvc interfaces.GameRepository) http.Handler {
	mux := http.NewServeMux()

	authHandler := handler.NewAuthHandler(authSvc)
	gameHandler := handler.NewGameHandler(gameSvc)
	wsHandler := handler.NewWebSocketHandler()
	rtcHandler := handler.NewWebRTCHandler()

	mux.HandleFunc("/login", cors(authHandler.Login))
	mux.HandleFunc("/games", cors(gameHandler.ListGames))
	mux.HandleFunc("/ws", wsHandler.Handle)
	mux.HandleFunc("/offer", cors(rtcHandler.HandleOffer))

	return mux
}

func cors(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}
		next(w, r)
	}
}
