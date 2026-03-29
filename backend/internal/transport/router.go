package transport

import (
	"backend/internal/interfaces"
	"backend/internal/messaging"
	"backend/internal/transport/handler"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func NewRouter(authSvc interfaces.AuthService, gameSvc interfaces.GameRepository, hub *handler.Hub, natsClient *messaging.NatsClient, provisioningSvc interfaces.ProvisioningService) *gin.Engine {
	r := gin.Default()

	// Configure CORS
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization"}
	r.Use(cors.New(config))

	authHandler := handler.NewAuthHandler(authSvc)
	gameHandler := handler.NewGameHandler(gameSvc, natsClient, provisioningSvc)
	wsHandler := handler.NewWebSocketHandler(hub)

	r.POST("/login", authHandler.Login)
	r.GET("/games", gameHandler.ListGames)
	r.GET("/games/:id/manifest", gameHandler.GetManifest)
	
	// Protected routes
	protected := r.Group("/")
	protected.Use(AuthMiddleware(authSvc))
	{
		protected.POST("/games/init-upload", gameHandler.InitUpload)
		protected.POST("/games/play", gameHandler.PlayGame)
	}

	// Public WebSocket for state-streaming
	r.GET("/ws", wsHandler.Handle)

	// Serve game assets statically
	r.Static("/game_static", "./uploads/games")

	return r
}
