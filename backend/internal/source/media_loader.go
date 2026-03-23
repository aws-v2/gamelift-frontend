package source

import (
	"fmt"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"sync"

	"backend/pkg/ivf"
	"backend/pkg/ogg"
)

// MediaLoader handles one-time loading and conversion of the test media per game.
type MediaLoader struct {
	baseDir   string
	mp4Path   string
	ivfPath   string
	oggPath   string
	
	VideoFile *ivf.File
	AudioFile *ogg.File

	once    sync.Once
	loadErr error
}

func NewMediaLoader(baseDir string) *MediaLoader {
	return &MediaLoader{
		baseDir: baseDir,
		mp4Path: filepath.Join(baseDir, "game.mp4"),
		ivfPath: filepath.Join(baseDir, "game.ivf"),
		oggPath: filepath.Join(baseDir, "game.ogg"),
	}
}

// EnsureMedia converts MP4 to IVF/OGG if necessary and loads the frames into memory.
// It is safe to call concurrently; the actual loading only happens once.
func (m *MediaLoader) EnsureMedia() error {
	m.once.Do(func() {
		if _, err := os.Stat(m.mp4Path); err != nil {
			m.loadErr = fmt.Errorf("source video not found: %s", m.mp4Path)
			return
		}

		// Convert video if needed
		if _, err := os.Stat(m.ivfPath); err != nil {
			log.Printf("[MediaLoader] Converting MP4 → IVF (VP8 video) via ffmpeg in %s…", m.baseDir)
			cmd := exec.Command("ffmpeg",
				"-y", // Overwrite output files
				"-i", m.mp4Path,
				"-c:v", "libvpx",
				"-b:v", "2M",
				"-an",
				"-f", "ivf",
				m.ivfPath,
			)
			cmd.Stderr = os.Stderr // Capture FFmpeg logs in terminal

			if err := cmd.Run(); err != nil {
				m.loadErr = fmt.Errorf("ffmpeg video conversion failed: %w", err)
				return
			}
		}

		// Convert audio if needed
		if _, err := os.Stat(m.oggPath); err != nil {
			log.Printf("[MediaLoader] Converting MP4 → OGG (Opus audio) via ffmpeg in %s…", m.baseDir)
			cmd := exec.Command("ffmpeg",
				"-y", // Overwrite output files
				"-i", m.mp4Path,
				"-vn",
				"-c:a", "libopus",
				"-b:a", "128k",
				"-ar", "48000",
				"-ac", "2",
				m.oggPath,
			)
			cmd.Stderr = os.Stderr // Capture FFmpeg logs in terminal

			if err := cmd.Run(); err != nil {
				log.Printf("[MediaLoader] Audio conversion failed (perhaps no audio track?): %v. Continuing with video only.", err)
				// Do not set m.loadErr here so we can still provide video
			}
		}

		// Load video
		m.VideoFile, m.loadErr = ivf.ReadFile(m.ivfPath)
		if m.loadErr != nil {
			return
		}
		log.Printf("[MediaLoader] Loaded video in %s: %d frames (%dx%d)",
			m.baseDir, len(m.VideoFile.Frames), m.VideoFile.Width, m.VideoFile.Height)

		// Load audio (only if file exists)
		if _, err := os.Stat(m.oggPath); err == nil {
			m.AudioFile, _ = ogg.ReadFile(m.oggPath)
			if m.AudioFile != nil {
				log.Printf("[MediaLoader] Loaded audio in %s: %d packets (%d Hz, %d ch)",
					m.baseDir, len(m.AudioFile.Packets), m.AudioFile.SampleRate, m.AudioFile.Channels)
			}
		} else {
			log.Printf("[MediaLoader] No audio file found for %s, stream will be silent", m.baseDir)
		}
	})
	return m.loadErr
}
