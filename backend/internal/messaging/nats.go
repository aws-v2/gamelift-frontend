package messaging

import "log"

// NatsClient is a placeholder for NATS connectivity.
// Replace with real nats.go client when ready.
type NatsClient struct {
	url string
}

func NewNatsClient(url string) *NatsClient {
	return &NatsClient{url: url}
}

func (c *NatsClient) Connect() error {
	log.Printf("[NATS] Connecting to %s (placeholder — not yet implemented)", c.url)
	return nil
}

func (c *NatsClient) Publish(subject string, data []byte) error {
	log.Printf("[NATS] Publish to %s: %d bytes (placeholder)", subject, len(data))
	return nil
}

func (c *NatsClient) Subscribe(subject string, handler func([]byte)) error {
	log.Printf("[NATS] Subscribe to %s (placeholder)", subject)
	return nil
}

func (c *NatsClient) Close() {
	log.Println("[NATS] Connection closed (placeholder)")
}
