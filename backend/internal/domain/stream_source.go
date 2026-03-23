package domain

import "github.com/pion/webrtc/v3"

// StreamSource represents an entity that can provide video and audio frames
// to WebRTC tracks and handle incoming user input.
type StreamSource interface {
	// StartStreaming begins pushing media to the provided tracks.
	// It should run in the background and return an error if initialization fails.
	StartStreaming(videoTrack, audioTrack *webrtc.TrackLocalStaticSample) error

	// HandleInput processes an event from the client.
	HandleInput(event InputEvent)

	// Stop terminates the stream and cleans up resources.
	Stop()
}

// InputEvent represents an interaction from the user.
type InputEvent struct {
	Type   string  `json:"type"`             // "mousemove", "mousedown", "mouseup", "keydown", "keyup"
	Key    string  `json:"key,omitempty"`    // e.g., "w", "a", "s", "d"
	Button int     `json:"button,omitempty"` // 0 for left, 2 for right
	X      float64 `json:"x,omitempty"`
	Y      float64 `json:"y,omitempty"`
}
