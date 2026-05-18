import UserProfile from '@/modules/profile/pages/UserProfile.vue'

const routes = [
  { path: '/user-profile', name: 'UserProfile', component: UserProfile, meta: { requiresAuth: true } },
]

export default routes 