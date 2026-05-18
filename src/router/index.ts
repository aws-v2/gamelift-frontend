import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/modules/auth/store/authStore'
import streamingRoutes from '@/modules/streaming/routes'
import profileRoutes from '@/modules/profile/routes'
import miscRoutes from '@/modules/misc/routes'
import authRoutes from '@/modules/auth/routes'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRoutes,
    ...streamingRoutes,
    ...profileRoutes,
    ...miscRoutes
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  // Wait for auth to initialize if it hasn't yet
  if (authStore.isAuthenticated === null) {
    await authStore.initAuth()
  }

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const isPublicOnly = to.matched.some((record) => record.meta.publicOnly)

  if (requiresAuth && !authStore.isAuthenticated) {
    // Protected route + Not logged in -> Login
    next({ name: 'login' })
  } else if (isPublicOnly && authStore.isAuthenticated) {
    // Public route (Login/Register) + Logged in -> Dashboard
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

export default router
