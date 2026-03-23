package domain

type GameStatus string

const (
	GameStatusPending GameStatus = "pending"
	GameStatusActive  GameStatus = "active"
)

type Game struct {
	ID             int        `json:"id" gorm:"primaryKey"`
	Name           string     `json:"game_name" gorm:"not null"`
	FolderLocation string     `json:"game_folder_location"`
	VMID           string     `json:"vm_id"`
	ARN            string     `json:"arn" gorm:"uniqueIndex"`
	Status         GameStatus `json:"status"`
	StorageARN     string     `json:"storage_arn,omitempty"`
}
