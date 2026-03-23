package source

import (
	"log"
	"time"

	"backend/internal/domain"

	"github.com/pion/webrtc/v3"
	"github.com/pion/webrtc/v3/pkg/media"
)

// MP4Source implements StreamSource by reading from in-memory IVF and OGG frames.
type MP4Source struct {
	mediaLoader *MediaLoader

	stopChan chan struct{}
}

func NewMP4Source(loader *MediaLoader) *MP4Source {
	return &MP4Source{
		mediaLoader: loader,
		stopChan:    make(chan struct{}),
	}
}

func (s *MP4Source) StartStreaming(videoTrack, audioTrack *webrtc.TrackLocalStaticSample) error {
	if err := s.mediaLoader.EnsureMedia(); err != nil {
		return err
	}

	go s.streamVideo(videoTrack)
	if s.mediaLoader.AudioFile != nil {
		go s.streamAudio(audioTrack)
	} else {
		log.Println("[MP4Source] No audio data available; skipping audio stream")
	}

	return nil
}

func (s *MP4Source) HandleInput(event domain.InputEvent) {
	// MP4 stream does not react to input, so this is a no-op
}

func (s *MP4Source) Stop() {
	close(s.stopChan)
}

func (s *MP4Source) streamVideo(track *webrtc.TrackLocalStaticSample) {
	frameDuration := s.mediaLoader.VideoFile.FrameDuration()
	log.Printf("[MP4Source] Video stream started. Frame duration: %v", frameDuration)

	for {
		for i, frame := range s.mediaLoader.VideoFile.Frames {
			select {
			case <-s.stopChan:
				log.Println("[MP4Source] Video stream stopped")
				return
			default:
			}

			dur := frameDuration
			if i+1 < len(s.mediaLoader.VideoFile.Frames) {
				tsDiff := s.mediaLoader.VideoFile.Frames[i+1].Timestamp - frame.Timestamp
				dur = s.mediaLoader.VideoFile.TimestampDuration(tsDiff)
			}

			if err := track.WriteSample(media.Sample{
				Data:     frame.Data,
				Duration: dur,
			}); err != nil {
				log.Printf("[MP4Source] Video WriteSample error: %v", err)
				return // Peer connection is likely closed
			}

			time.Sleep(dur)
		}
		log.Println("[MP4Source] Video loop restarting")
	}
}

func (s *MP4Source) streamAudio(track *webrtc.TrackLocalStaticSample) {
	frameDuration := s.mediaLoader.AudioFile.FrameDuration()
	log.Printf("[MP4Source] Audio stream started. Frame duration: %v", frameDuration)

	for {
		for _, pkt := range s.mediaLoader.AudioFile.Packets {
			select {
			case <-s.stopChan:
				log.Println("[MP4Source] Audio stream stopped")
				return
			default:
			}

			if err := track.WriteSample(media.Sample{
				Data:     pkt.Data,
				Duration: frameDuration,
			}); err != nil {
				log.Printf("[MP4Source] Audio WriteSample error: %v", err)
				return // Peer connection is likely closed
			}

			time.Sleep(frameDuration)
		}
		log.Println("[MP4Source] Audio loop restarting")
	}
}
