import Landing from '@/modules/misc/pages/Landing.vue'
import Home from '@/modules/misc/pages/Home.vue'

const routes = [
  { path: '/', name: 'Landing', component: Landing, meta: { publicOnly: true } },
  { path: '/home', name: 'dashboard', component: Home, meta: { requiresAuth: true } },
]

export default routes
