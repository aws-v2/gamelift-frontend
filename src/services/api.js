const API_BASE = 'http://localhost:8080'
const API_BASE_V1 = 'http://localhost:8080/api/v1'
const S3_BASE = 'http://localhost:8080'

function getAuthHeaders() {
  const token = localStorage.getItem('token')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export async function login(email, password) {
  const res = await fetch(`${API_BASE_V1}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  if (!res.ok) throw new Error('Login failed')
  const json = await res.json()
  // Handles ApiResponse wrapper: json.data contains LoginResponse
  const data = json.data || json
  localStorage.setItem('token', data.token)
  return data
}

export async function register(userData) {
  const res = await fetch(`${API_BASE_V1}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData), // email, password, confirmPassword, firstName, lastName
  })
  if (!res.ok) throw new Error('Registration failed')
  const json = await res.json()
  const data = json.data || json
  if (data.token) {
    localStorage.setItem('token', data.token)
  }
  return data
}

export async function forgotPassword(email) {
  const res = await fetch(`${API_BASE_V1}/auth/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  if (!res.ok) throw new Error('Failed to request password reset')
  const json = await res.json()
  return json.data || json
}

export async function resetPassword(token, newPassword, confirmPassword) {
  const res = await fetch(`${API_BASE_V1}/auth/reset-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token, newPassword, confirmPassword }),
  })
  if (!res.ok) throw new Error('Failed to reset password')
  const json = await res.json()
  return json.data || json
}

export async function verifyEmail(token) {
  const res = await fetch(`${API_BASE_V1}/auth/verify-email?token=${encodeURIComponent(token)}`, {
    method: 'GET'
  })
  if (!res.ok) throw new Error('Email verification failed')
  const json = await res.json()
  return json.data || json
}

export async function fetchGames() {
  const res = await fetch(`${API_BASE_V1}/gamelift/games`, {
    headers: { ...getAuthHeaders() },
  })
  if (!res.ok) throw new Error('Failed to fetch games')
  const json = await res.json()
  return json.data
}

export async function initUpload(gameData) {
  const res = await fetch(`${API_BASE_V1}/gamelift/games/init-upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
    body: JSON.stringify(gameData),
  })
  if (!res.ok) throw new Error('Failed to initiate upload')
  const json = await res.json()
  return json.data
}

export async function uploadToS3(url, file) {
  // If URL is relative (starts with /), prepend S3_BASE
  const finalUrl = url.startsWith('/') ? `${S3_BASE}${url}` : url
  
  const res = await fetch(finalUrl, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': 'application/zip',
      ...getAuthHeaders(),
    },
  })
  if (!res.ok) throw new Error('Failed to upload file to storage')
  return res
}
export async function fetchGameManifest(gameId) {
  const res = await fetch(`${API_BASE_V1}/gamelift/games/${gameId}/manifest`, {
    headers: { ...getAuthHeaders() },
  })
  if (!res.ok) throw new Error('Failed to fetch game manifest')
  const json = await res.json()
  return json.data
}
