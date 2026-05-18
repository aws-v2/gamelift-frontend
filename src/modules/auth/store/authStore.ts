import {defineStore} from 'pinia'
import {ref,computed} from "vue"
import apiClient from '@/shared/api/apiClient'
import { baseLogger } from '@/shared/config/logger';
const authLogger = baseLogger.child({ scope: 'auth' });

export interface LoginResponse {
  token: string
  email: string
  message: string
}



export const useAuthStore = defineStore('auth', () => {
  // State
  const token = ref<string | null>(localStorage.getItem('token'))
  const email = ref<string | null>(localStorage.getItem('auth_email'))
  const registrationComplete = ref(false)
  const isAuthenticated = ref<boolean | null>(null)
  const user = ref<any>(null)
  const loading = ref(false)
  const emailVerified = computed(() => user.value?.emailVerified || false)


    // Actions
  async function initAuth() {
    // authLogger.info('Initializing authentication state...')
    const savedToken = localStorage.getItem('token')

    if (savedToken ) {
      token.value = savedToken
      registrationComplete.value = localStorage.getItem(`auth_reg_complete_`) === 'true'
      isAuthenticated.value = true
    } else {
      isAuthenticated.value = false
      authLogger.info('No session found.')
    }
  }

  function logout() {
    token.value = null
    email.value = null
    user.value = null 
    registrationComplete.value = false
    isAuthenticated.value = false
    localStorage.removeItem('token')
    localStorage.removeItem('auth_email')
  }
  async function verifyPayment(payload: any) {
    try {
      const response = await apiClient.post('auth/payment/verify', payload)
      authLogger.info('Payment verified:', response.data)
      return response.data
    } catch (error) {
      authLogger.error('Payment verification failed:', error)
      throw error
    }
  }

  async function verifyEmail(token: string) {
    try {
      loading.value = true
      const response = await apiClient.get('auth/verify-email', { params: { token } })
      if (user.value) {
        user.value.emailVerified = true
      }
      authLogger.info('Email verified:', response.data)
      return response.data
    } catch (error) {
      authLogger.error('Email verification failed:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

    async function register(payload: any) {

    const response = await apiClient.post<any>('/auth/register', payload)
    const inner = response.data.data  // ✅
    setSession({ ...inner, email: inner.email || payload.email })
    authLogger.info('User registered:', inner)
    return inner
  }




  function setSession(data: any) {
    console.log('Setting session with data:', data)
    token.value = data.token || data.accessToken || data.auth_token || data.jwt || data.id_token
    email.value = data.email


    // If backend provides this, use it, otherwise check local storage as fallback
    if (data.registrationComplete !== undefined) {
      registrationComplete.value = data.registrationComplete
    } else if (email.value) {
      registrationComplete.value = localStorage.getItem(`auth_reg_complete_${email.value}`) === 'true'
    }

    localStorage.setItem('token', token.value || '')
    localStorage.setItem('auth_email', email.value || '') 

    if (email.value && registrationComplete.value) {
      localStorage.setItem(`auth_reg_complete_${email.value}`, 'true')
    }
    authLogger.info('Session set:', data)
    isAuthenticated.value = !!token.value
  }


  function loginWithGoogle() {
    authLogger.info('Redirecting to Google OAuth...')
    // window.location.href = `${apiClient.defaults.baseURL}/oauth2/authorization/google`
  }
  async function login(payload: any) {
    try {
      authLogger.info('Attempting login for:', payload.email)
      const response = await apiClient.post<any>('/auth/login', payload)


      const inner = response.data.data  // ✅ unwrap the envelope

      setSession({
        ...inner,
        email: inner.email || payload.email,
      })
      return inner
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  async function forgotPassword(payload: { email: string }) {
    try {
      const response = await apiClient.post<{ message: string; email: string }>(
        'auth/forgot-password',
        payload,
      )
      authLogger.info('Forgot password request sent:', response.data)
      return response.data
    } catch (error) {
      authLogger.error('Forgot password request failed:', error)
      throw error
    }
  }

  return {
    token,
    email,
    user, 
    registrationComplete,
    isAuthenticated,
    loading,
    emailVerified,
    initAuth,
    login,
    forgotPassword,
    register,
    verifyPayment,
    verifyEmail,
    loginWithGoogle,
    logout,
  }

})