import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/modules/auth/pages/Login.vue'
import Register from '@/modules/auth/pages/Register.vue'
import ForgotPassword from '@/modules/auth/pages/ForgotPassword.vue'
import ResetPassword from '@/modules/auth/pages/ResetPassword.vue'
import VerifyEmail from '@/modules/auth/pages/VerifyEmail.vue'

const routes = [
  { path: '/login', name: 'Login', component: Login, meta: { publicOnly: true } },
  { path: '/register', name: 'Register', component: Register, meta: { publicOnly: true } },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword, meta: { publicOnly: true } },
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword, meta: { publicOnly: true } },
  { path: '/verify-email', name: 'VerifyEmail', component: VerifyEmail, meta: { publicOnly: true } },
]

export default routes