package interfaces

import "backend/internal/domain"

// GameRepository defines the contract for game data access.
// Implement with in-memory store now, swap to Postgres later.
type GameRepository interface {
	ListGames() ([]domain.Game, error)
	GetGame(id int) (*domain.Game, error)
	RegisterGame(name, vmID, accountID string) (*domain.Game, error)
	InitUpload(name, vmID, accountID string) (*domain.Game, error)
	UpdateGameStatus(id int, status domain.GameStatus, storageARN string) error
}

// AuthService defines the contract for authentication operations.
type AuthService interface {
	GenerateToken(username string) (string, error)
	ValidateToken(tokenStr string) (map[string]interface{}, error)
}

// SessionManager defines the contract for managing user sessions.
type SessionManager interface {
	CreateSession(userID, gameID string) *domain.Session
	GetSession(userID string) (*domain.Session, bool)
	RemoveSession(userID string)
}

// SourceManager defines the contract for obtaining stream sources.
type SourceManager interface {
	GetSource(gameID int) (domain.StreamSource, error)
}
