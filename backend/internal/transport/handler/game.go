package handler

import (
	"encoding/json"
	"net/http"

	"backend/internal/interfaces"
)

type GameHandler struct {
	gameSvc interfaces.GameRepository
}

func NewGameHandler(gameSvc interfaces.GameRepository) *GameHandler {
	return &GameHandler{gameSvc: gameSvc}
}

func (h *GameHandler) ListGames(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	games, err := h.gameSvc.ListGames()
	if err != nil {
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(games)
}
