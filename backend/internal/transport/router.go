package transport

import (
	"backend/internal/interfaces"
	"backend/internal/messaging"
	"backend/internal/transport/handler"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func NewRouter(authSvc interfaces.AuthService, gameSvc interfaces.GameRepository, sessionManager interfaces.SessionManager, sourceManager interfaces.SourceManager, natsClient *messaging.NatsClient) *gin.Engine {
	r := gin.Default()

	// Configure CORS
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization"}
	r.Use(cors.New(config))

	authHandler := handler.NewAuthHandler(authSvc)
	gameHandler := handler.NewGameHandler(gameSvc, natsClient)
	wsHandler := handler.NewWebSocketHandler(sessionManager)
	rtcHandler := handler.NewWebRTCHandler(sessionManager, sourceManager)

	r.POST("/login", authHandler.Login)
	r.GET("/games", gameHandler.ListGames)
	
	// Protected routes
	protected := r.Group("/")
	protected.Use(AuthMiddleware(authSvc))
	{
		protected.POST("/games/register", gameHandler.RegisterGame)
		protected.POST("/games/init-upload", gameHandler.InitUpload)
		protected.GET("/ws", wsHandler.Handle)
		protected.POST("/offer", rtcHandler.HandleOffer)
	}

	return r
}
