package domain

import (
	"time"

	"github.com/gorilla/websocket"
	"github.com/pion/webrtc/v3"
)

type ContextKey string

const UserIDKey ContextKey = "userID"

// Session represents a single user's connection state, tying together
// their identity, WebSocket connection, and WebRTC peer connection.
type Session struct {
	UserID    string
	GameID    string
	Conn      *websocket.Conn
	PeerConn  *webrtc.PeerConnection
	Source    StreamSource
	CreatedAt time.Time
}
