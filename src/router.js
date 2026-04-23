import { createRouter, createWebHistory } from 'vue-router'
import Landing from './pages/Landing.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import ForgotPassword from './pages/ForgotPassword.vue'
import ResetPassword from './pages/ResetPassword.vue'
import VerifyEmail from './pages/VerifyEmail.vue'
import Home from './pages/Home.vue'
import GameDetails from './pages/GameDetails.vue'
import Game from './pages/Game.vue'
import RegisterGame from './pages/RegisterGame.vue'

const routes = [
  { path: '/', name: 'Landing', component: Landing },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword },
  { path: '/verify-email', name: 'VerifyEmail', component: VerifyEmail },
  { path: '/home', name: 'Home', component: Home },
  { path: '/game-details/:id', name: 'GameDetails', component: GameDetails },
  { path: '/game/:id', name: 'Game', component: Game },
  { path: '/upload-game', name: 'RegisterGame', component: RegisterGame },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const publicPages = ['Landing', 'Login', 'Register', 'ForgotPassword', 'ResetPassword', 'VerifyEmail']
  
  if (!publicPages.includes(to.name) && !token) {
    next({ name: 'Login' })
  } else if (to.name === 'Landing' && token) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
