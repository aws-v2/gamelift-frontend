package handler

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/exec"
	"sync"
	"time"

	"backend/pkg/ivf"
	"backend/pkg/ogg"

	"github.com/pion/webrtc/v3"
	"github.com/pion/webrtc/v3/pkg/media"
)

const (
	mp4Path  = "media/test.mp4"
	ivfPath  = "media/test.ivf"
	oggPath  = "media/test.ogg"
)

type WebRTCHandler struct {
	videoFile *ivf.File
	audioFile *ogg.File
	once      sync.Once
	loadErr   error
}

func NewWebRTCHandler() *WebRTCHandler {
	return &WebRTCHandler{}
}

// ensureMedia converts the MP4 to IVF (VP8 video) + OGG (Opus audio) via ffmpeg on first use.
func (h *WebRTCHandler) ensureMedia() error {
	h.once.Do(func() {
		if _, err := os.Stat(mp4Path); err != nil {
			h.loadErr = fmt.Errorf("source video not found: %s", mp4Path)
			return
		}

		// Convert video if needed
		if _, err := os.Stat(ivfPath); err != nil {
			log.Println("[WebRTC] Converting MP4 → IVF (VP8 video) via ffmpeg…")
			cmd := exec.Command("ffmpeg",
				"-i", mp4Path,
				"-c:v", "libvpx",
				"-b:v", "2M",
				"-an",
				"-f", "ivf",
				ivfPath,
			)

			if err := cmd.Run(); err != nil {
				h.loadErr = fmt.Errorf("ffmpeg video conversion failed: %w", err)
				return
			}
		}

		// Convert audio if needed
		if _, err := os.Stat(oggPath); err != nil {
			log.Println("[WebRTC] Converting MP4 → OGG (Opus audio) via ffmpeg…")
			cmd := exec.Command("ffmpeg",
				"-i", mp4Path,
				"-vn",
				"-c:a", "libopus",
				"-b:a", "128k",
				"-ar", "48000",
				"-ac", "2",
				oggPath,
			)

			if err := cmd.Run(); err != nil {
				h.loadErr = fmt.Errorf("ffmpeg audio conversion failed: %w", err)
				return
			}
		}

		// Load video
		h.videoFile, h.loadErr = ivf.ReadFile(ivfPath)
		if h.loadErr != nil {
			return
		}
		log.Printf("[WebRTC] Loaded video: %d frames (%dx%d)", len(h.videoFile.Frames), h.videoFile.Width, h.videoFile.Height)

		// Load audio
		h.audioFile, h.loadErr = ogg.ReadFile(oggPath)
		if h.loadErr != nil {
			return
		}
		log.Printf("[WebRTC] Loaded audio: %d packets (%d Hz, %d ch)", len(h.audioFile.Packets), h.audioFile.SampleRate, h.audioFile.Channels)
	})
	return h.loadErr
}

func (h *WebRTCHandler) HandleOffer(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	if err := h.ensureMedia(); err != nil {
		log.Printf("[WebRTC] Media load error: %v", err)
		http.Error(w, "media source unavailable", http.StatusInternalServerError)
		return
	}

	var offer webrtc.SessionDescription
	if err := json.NewDecoder(r.Body).Decode(&offer); err != nil {
		log.Printf("[WebRTC] Bad offer: %v", err)
		http.Error(w, "bad request", http.StatusBadRequest)
		return
	}

	pc, err := webrtc.NewPeerConnection(webrtc.Configuration{
		ICEServers: []webrtc.ICEServer{
			{URLs: []string{"stun:stun.l.google.com:19302"}},
		},
	})
	if err != nil {
		log.Printf("[WebRTC] PeerConnection error: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	// Video track (VP8)
	videoTrack, err := webrtc.NewTrackLocalStaticSample(
		webrtc.RTPCodecCapability{MimeType: webrtc.MimeTypeVP8},
		"video", "cloud-gaming-stream",
	)
	if err != nil {
		log.Printf("[WebRTC] Video track error: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	if _, err = pc.AddTrack(videoTrack); err != nil {
		log.Printf("[WebRTC] AddTrack(video) error: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	// Audio track (Opus)
	audioTrack, err := webrtc.NewTrackLocalStaticSample(
		webrtc.RTPCodecCapability{MimeType: webrtc.MimeTypeOpus},
		"audio", "cloud-gaming-audio",
	)
	if err != nil {
		log.Printf("[WebRTC] Audio track error: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	if _, err = pc.AddTrack(audioTrack); err != nil {
		log.Printf("[WebRTC] AddTrack(audio) error: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	pc.OnICEConnectionStateChange(func(state webrtc.ICEConnectionState) {
		log.Printf("[WebRTC] ICE state: %s", state.String())
	})
	pc.OnConnectionStateChange(func(state webrtc.PeerConnectionState) {
		log.Printf("[WebRTC] Peer state: %s", state.String())
	})

	if err = pc.SetRemoteDescription(offer); err != nil {
		log.Printf("[WebRTC] SetRemoteDescription error: %v", err)
		http.Error(w, "bad request", http.StatusBadRequest)
		return
	}

	answer, err := pc.CreateAnswer(nil)
	if err != nil {
		log.Printf("[WebRTC] CreateAnswer error: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	if err = pc.SetLocalDescription(answer); err != nil {
		log.Printf("[WebRTC] SetLocalDescription error: %v", err)
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	gatherComplete := webrtc.GatheringCompletePromise(pc)
	<-gatherComplete

	log.Printf("[WebRTC] Streaming %s (%d video frames, %d audio packets, looping)",
		mp4Path, len(h.videoFile.Frames), len(h.audioFile.Packets))

	// Stream video and audio in parallel
	go h.streamVideo(pc, videoTrack)
	go h.streamAudio(pc, audioTrack)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(pc.LocalDescription())
}

// isConnectionAlive checks if the peer connection is still usable.
// We only stop on Closed or Failed — Disconnected is transient and may recover.
func isConnectionAlive(pc *webrtc.PeerConnection) bool {
	state := pc.ConnectionState()
	return state != webrtc.PeerConnectionStateClosed &&
		state != webrtc.PeerConnectionStateFailed
}

func (h *WebRTCHandler) streamVideo(pc *webrtc.PeerConnection, track *webrtc.TrackLocalStaticSample) {
	frameDuration := h.videoFile.FrameDuration()
	log.Printf("[WebRTC] Video frame duration: %v", frameDuration)

	for {
		for i, frame := range h.videoFile.Frames {
			if !isConnectionAlive(pc) {
				log.Println("[WebRTC] Video stream stopped (connection closed)")
				return
			}

			dur := frameDuration
			if i+1 < len(h.videoFile.Frames) {
				tsDiff := h.videoFile.Frames[i+1].Timestamp - frame.Timestamp
				dur = h.videoFile.TimestampDuration(tsDiff)
			}

			if err := track.WriteSample(media.Sample{
				Data:     frame.Data,
				Duration: dur,
			}); err != nil {
				log.Printf("[WebRTC] Video WriteSample error: %v", err)
				return
			}

			time.Sleep(dur)
		}
		log.Println("[WebRTC] Video loop restarting")
	}
}

func (h *WebRTCHandler) streamAudio(pc *webrtc.PeerConnection, track *webrtc.TrackLocalStaticSample) {
	frameDuration := h.audioFile.FrameDuration() // 20ms per Opus frame
	log.Printf("[WebRTC] Audio frame duration: %v (%d packets)", frameDuration, len(h.audioFile.Packets))

	for {
		for _, pkt := range h.audioFile.Packets {
			if !isConnectionAlive(pc) {
				log.Println("[WebRTC] Audio stream stopped (connection closed)")
				return
			}

			if err := track.WriteSample(media.Sample{
				Data:     pkt.Data,
				Duration: frameDuration,
			}); err != nil {
				log.Printf("[WebRTC] Audio WriteSample error: %v", err)
				return
			}

			time.Sleep(frameDuration)
		}
		log.Println("[WebRTC] Audio loop restarting")
	}
}
