import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/modules/auth/pages/Login.vue'
import Register from '@/modules/auth/pages/Register.vue'
import ForgotPassword from '@/modules/auth/pages/ForgotPassword.vue'
import ResetPassword from '@/modules/auth/pages/ResetPassword.vue'
import VerifyEmail from '@/modules/auth/pages/VerifyEmail.vue'

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword },
  { path: '/verify-email', name: 'VerifyEmail', component: VerifyEmail },
]

export default routes