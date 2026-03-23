package service

import (
	"fmt"
	"os"
	"time"

	"backend/internal/config"

	"github.com/golang-jwt/jwt/v5"
)

type AuthServiceImpl struct {
	secret []byte
}

func NewAuthService(cfg *config.Config) *AuthServiceImpl {
	return &AuthServiceImpl{secret: cfg.JWTSecret}
}

func (s *AuthServiceImpl) GenerateToken(username string) (string, error) {
	// Debug override for local testing without full auth service
	if debugID := os.Getenv("DEBUG_USER_ID"); debugID != "" {
		username = debugID
	}

	claims := jwt.MapClaims{
		"username": username,
		"userId":   username, // Explicitly provide both for compatibility
		"exp":      time.Now().Add(24 * time.Hour).Unix(),
		"iat":      time.Now().Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(s.secret)
}

func (s *AuthServiceImpl) ValidateToken(tokenStr string) (map[string]interface{}, error) {
	token, err := jwt.Parse(tokenStr, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", t.Header["alg"])
		}
		return s.secret, nil
	})
	if err != nil {
		return nil, err
	}
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return claims, nil
	}
	return nil, fmt.Errorf("invalid token")
}
