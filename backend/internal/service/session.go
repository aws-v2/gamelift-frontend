package service

import (
	"log"
	"sync"
	"time"

	"backend/internal/domain"
)

type SessionManagerImpl struct {
	sessions map[string]*domain.Session
	mu       sync.RWMutex
}

func NewSessionManager() *SessionManagerImpl {
	return &SessionManagerImpl{
		sessions: make(map[string]*domain.Session),
	}
}

func (m *SessionManagerImpl) CreateSession(userID, gameID string) *domain.Session {
	m.mu.Lock()
	defer m.mu.Unlock()

	// If a session already exists for this user, tear it down first to avoid zombie streams
	if oldSession, exists := m.sessions[userID]; exists {
		log.Printf("[SessionManager] Tearing down existing session for user %s", userID)
		m.cleanupSession(oldSession)
	}

	session := &domain.Session{
		UserID:    userID,
		GameID:    gameID,
		CreatedAt: time.Now(),
	}

	m.sessions[userID] = session
	log.Printf("[SessionManager] Created new session for user %s (game: %s)", userID, gameID)
	return session
}

func (m *SessionManagerImpl) GetSession(userID string) (*domain.Session, bool) {
	m.mu.RLock()
	defer m.mu.RUnlock()

	session, exists := m.sessions[userID]
	return session, exists
}

func (m *SessionManagerImpl) RemoveSession(userID string) {
	m.mu.Lock()
	defer m.mu.Unlock()

	if session, exists := m.sessions[userID]; exists {
		log.Printf("[SessionManager] Removing session for user %s", userID)
		m.cleanupSession(session)
		delete(m.sessions, userID)
	}
}

func (m *SessionManagerImpl) cleanupSession(session *domain.Session) {
	if session.Source != nil {
		session.Source.Stop()
	}
	if session.PeerConn != nil {
		if err := session.PeerConn.Close(); err != nil {
			log.Printf("[SessionManager] Error closing WebRTC PeerConnection for user %s: %v", session.UserID, err)
		}
	}
	if session.Conn != nil {
		if err := session.Conn.Close(); err != nil {
			log.Printf("[SessionManager] Error closing WebSocket for user %s: %v", session.UserID, err)
		}
	}
}
