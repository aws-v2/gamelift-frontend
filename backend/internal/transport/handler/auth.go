package handler

import (
	"log"
	"net/http"

	"backend/internal/domain"
	"backend/internal/interfaces"

	"github.com/gin-gonic/gin"
)

type AuthHandler struct {
	authSvc interfaces.AuthService
}

func NewAuthHandler(authSvc interfaces.AuthService) *AuthHandler {
	return &AuthHandler{authSvc: authSvc}
}

func (h *AuthHandler) Login(c *gin.Context) {
	var req domain.LoginRequest
	if err := c.ShouldBindJSON(&req); err != nil || req.Username == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request"})
		return
	}

	log.Printf("[AUTH] Login request from user: %s", req.Username)

	token, err := h.authSvc.GenerateToken(req.Username)
	if err != nil {
		log.Printf("[AUTH] Token generation failed: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "internal error"})
		return
	}

	c.JSON(http.StatusOK, domain.LoginResponse{Token: token})
}
