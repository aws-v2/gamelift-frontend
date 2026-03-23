package handler

import (
	"encoding/json"
	"log"
	"net/http"

	"backend/internal/domain"
	"backend/internal/interfaces"
)

type AuthHandler struct {
	authSvc interfaces.AuthService
}

func NewAuthHandler(authSvc interfaces.AuthService) *AuthHandler {
	return &AuthHandler{authSvc: authSvc}
}

func (h *AuthHandler) Login(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req domain.LoginRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil || req.Username == "" {
		http.Error(w, "invalid request", http.StatusBadRequest)
		return
	}

	log.Printf("[AUTH] Login request from user: %s", req.Username)

	token, err := h.authSvc.GenerateToken(req.Username)
	if err != nil {
		log.Printf("[AUTH] Token generation failed: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(domain.LoginResponse{Token: token})
}
