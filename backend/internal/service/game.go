package service

import (
	"fmt"

	"backend/internal/domain"
)

type GameServiceImpl struct {
	games []domain.Game
}

func NewGameService() *GameServiceImpl {
	return &GameServiceImpl{
		games: []domain.Game{
			{ID: 1, Name: "Demo Game"},
			{ID: 2, Name: "Shooter X"},
		},
	}
}

func (s *GameServiceImpl) ListGames() ([]domain.Game, error) {
	return s.games, nil
}

func (s *GameServiceImpl) GetGame(id int) (*domain.Game, error) {
	for _, g := range s.games {
		if g.ID == id {
			return &g, nil
		}
	}
	return nil, fmt.Errorf("game %d not found", id)
}
