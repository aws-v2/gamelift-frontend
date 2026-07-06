import apiClient from '@/shared/api/apiClient'

/**
 * Extract API response safely (handles ApiResponse wrapper)
 */
function unwrap(res: any) {
  return res.data?.data ?? res.data
}

/* =========================================================
   AUTH
========================================================= */

export async function login(email: string, password: string) {
  const res = await apiClient.post('/auth/login', {
    email,
    password,
  })

  const data = unwrap(res)
  localStorage.setItem('token', data.token)

  return data
}

export async function register(userData: any) {
  const res = await apiClient.post('/auth/register', userData)

  const data = unwrap(res)

  if (data.token) {
    localStorage.setItem('token', data.token)
  }

  return data
}

export async function forgotPassword(email: string) {
  const res = await apiClient.post('/auth/forgot-password', {
    email,
  })

  return unwrap(res)
}

export async function resetPassword(
  token: string,
  newPassword: string,
  confirmPassword: string
) {
  const res = await apiClient.post('/auth/reset-password', {
    token,
    newPassword,
    confirmPassword,
  })

  return unwrap(res)
}

export async function verifyEmail(token: string) {
  const res = await apiClient.get(
    `/auth/verify-email?token=${encodeURIComponent(token)}`
  )

  return unwrap(res)
}
