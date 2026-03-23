package service

import (
	"fmt"
	"sync"

	"backend/internal/domain"
	"backend/internal/interfaces"
	"backend/internal/source"
)

type SourceManagerImpl struct {
	gameRepo interfaces.GameRepository
	loaders  map[int]*source.MediaLoader
	mu       sync.RWMutex
}

func NewSourceManager(gameRepo interfaces.GameRepository) *SourceManagerImpl {
	return &SourceManagerImpl{
		gameRepo: gameRepo,
		loaders:  make(map[int]*source.MediaLoader),
	}
}

func (m *SourceManagerImpl) GetSource(gameID int) (domain.StreamSource, error) {
	m.mu.Lock()
	loader, ok := m.loaders[gameID]
	if !ok {
		// Get game metadata to find folder location
		game, err := m.gameRepo.GetGame(gameID)
		if err != nil {
			m.mu.Unlock()
			return nil, fmt.Errorf("failed to get game %d: %w", gameID, err)
		}

		if game.FolderLocation == "" {
			m.mu.Unlock()
			return nil, fmt.Errorf("game %d has no folder location", gameID)
		}

		loader = source.NewMediaLoader(game.FolderLocation)
		m.loaders[gameID] = loader
	}
	m.mu.Unlock()

	// Ensure media is loaded/converted
	if err := loader.EnsureMedia(); err != nil {
		return nil, fmt.Errorf("failed to ensure media for game %d: %w", gameID, err)
	}

	return source.NewMP4Source(loader), nil
}
