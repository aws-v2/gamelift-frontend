package handler

import (
	"log"
	"net/http"
	"strconv"

	"backend/internal/domain"
	"backend/internal/interfaces"

	"github.com/gin-gonic/gin"
	"github.com/pion/webrtc/v3"
)

type WebRTCHandler struct {
	sessionManager interfaces.SessionManager
	sourceManager  interfaces.SourceManager
}

func NewWebRTCHandler(sm interfaces.SessionManager, sourceManager interfaces.SourceManager) *WebRTCHandler {
	return &WebRTCHandler{
		sessionManager: sm,
		sourceManager:  sourceManager,
	}
}

func (h *WebRTCHandler) HandleOffer(c *gin.Context) {
	userID := c.GetString(string(domain.UserIDKey))

	session, exists := h.sessionManager.GetSession(userID)
	if !exists {
		log.Printf("[WebRTC] Unauthorized stream request: user %s has no active session", userID)
		c.JSON(http.StatusUnauthorized, gin.H{"error": "active websocket session required"})
		return
	}

	gameID, err := strconv.Atoi(session.GameID)
	if err != nil {
		log.Printf("[WebRTC] Invalid game ID for user %s: %s", userID, session.GameID)
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid game id in session"})
		return
	}

	var offer webrtc.SessionDescription
	if err := c.ShouldBindJSON(&offer); err != nil {
		log.Printf("[WebRTC] Bad offer: %v", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "bad request"})
		return
	}

	pc, err := webrtc.NewPeerConnection(webrtc.Configuration{
		ICEServers: []webrtc.ICEServer{
			{URLs: []string{"stun:stun.l.google.com:19302"}},
		},
	})
	if err != nil {
		log.Printf("[WebRTC] PeerConnection error: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "internal error"})
		return
	}

	session.PeerConn = pc

	// Video track (VP8)
	videoTrack, err := webrtc.NewTrackLocalStaticSample(
		webrtc.RTPCodecCapability{MimeType: webrtc.MimeTypeVP8},
		"video", "cloud-gaming-stream",
	)
	if err != nil {
		log.Printf("[WebRTC] Video track error: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "internal error"})
		return
	}
	if _, err = pc.AddTrack(videoTrack); err != nil {
		log.Printf("[WebRTC] AddTrack(video) error: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "internal error"})
		return
	}

	// Audio track (Opus)
	audioTrack, err := webrtc.NewTrackLocalStaticSample(
		webrtc.RTPCodecCapability{MimeType: webrtc.MimeTypeOpus},
		"audio", "cloud-gaming-audio",
	)
	if err != nil {
		log.Printf("[WebRTC] Audio track error: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "internal error"})
		return
	}
	if _, err = pc.AddTrack(audioTrack); err != nil {
		log.Printf("[WebRTC] AddTrack(audio) error: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "internal error"})
		return
	}

	pc.OnICEConnectionStateChange(func(state webrtc.ICEConnectionState) {
		log.Printf("[WebRTC] ICE state for %s: %s", userID, state.String())
	})
	pc.OnConnectionStateChange(func(state webrtc.PeerConnectionState) {
		log.Printf("[WebRTC] Peer state for %s: %s", userID, state.String())
	})

	if err = pc.SetRemoteDescription(offer); err != nil {
		log.Printf("[WebRTC] SetRemoteDescription error: %v", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "bad request"})
		return
	}

	answer, err := pc.CreateAnswer(nil)
	if err != nil {
		log.Printf("[WebRTC] CreateAnswer error: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "internal error"})
		return
	}
	if err = pc.SetLocalDescription(answer); err != nil {
		log.Printf("[WebRTC] SetLocalDescription error: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "internal error"})
		return
	}

	// Wait for gathering complete
	gatherComplete := webrtc.GatheringCompletePromise(pc)
	<-gatherComplete

	log.Printf("[WebRTC] Fetching StreamSource for game %d, user %s", gameID, userID)

	streamSrc, err := h.sourceManager.GetSource(gameID)
	if err != nil {
		log.Printf("[WebRTC] Failed to get stream source for game %d: %v", gameID, err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to initialize stream source"})
		return
	}
	session.Source = streamSrc

	if err := streamSrc.StartStreaming(videoTrack, audioTrack); err != nil {
		log.Printf("[WebRTC] Failed to start stream source: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "internal error"})
		return
	}

	c.JSON(http.StatusOK, pc.LocalDescription())
}
