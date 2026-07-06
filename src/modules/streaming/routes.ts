import GameDetails from '@/modules/streaming/pages/GameDetails.vue'
import Game from '@/modules/streaming/pages/Game.vue'

const routes = [
  { path: '/game-details/:id', name: 'GameDetails', component: GameDetails, meta: { requiresAuth: true } },
  { path: '/game/:id', name: 'Game', component: Game, meta: { requiresAuth: true } },
]



export default routes
