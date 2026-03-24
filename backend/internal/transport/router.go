package transport

import (
	"backend/internal/interfaces"
	"backend/internal/messaging"
	"backend/internal/transport/handler"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func NewRouter(authSvc interfaces.AuthService, gameSvc interfaces.GameRepository, hub *handler.Hub, natsClient *messaging.NatsClient) *gin.Engine {
	r := gin.Default()

	// Configure CORS
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization"}
	r.Use(cors.New(config))

	authHandler := handler.NewAuthHandler(authSvc)
	gameHandler := handler.NewGameHandler(gameSvc, natsClient)
	wsHandler := handler.NewWebSocketHandler(hub)

	r.POST("/login", authHandler.Login)
	r.GET("/games", gameHandler.ListGames)
	
	// Protected routes
	protected := r.Group("/")
	protected.Use(AuthMiddleware(authSvc))
	{
		protected.POST("/games/register", gameHandler.RegisterGame)
		protected.POST("/games/init-upload", gameHandler.InitUpload)
	}

	// Public WebSocket for state-streaming
	r.GET("/ws", wsHandler.Handle)

	return r
}
