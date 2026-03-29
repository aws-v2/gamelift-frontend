import { createRouter, createWebHistory } from 'vue-router'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import Game from './pages/Game.vue'
import RegisterGame from './pages/RegisterGame.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home },
  { path: '/game/:id', name: 'Game', component: Game },
  { path: '/register', name: 'RegisterGame', component: RegisterGame },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name !== 'Login' && !token) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
