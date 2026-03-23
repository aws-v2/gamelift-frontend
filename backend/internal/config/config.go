package config

import "os"

type Config struct {
	ServerPort string
	JWTSecret  []byte
	NatsURL    string
}

func Load() *Config {
	return &Config{
		ServerPort: getEnv("SERVER_PORT", ":8080"),
		JWTSecret:  []byte(getEnv("JWT_SECRET", "cloud-gaming-secret-key")),
		NatsURL:    getEnv("NATS_URL", "nats://localhost:4222"),
	}
}

func getEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
