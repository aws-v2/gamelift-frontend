const API_BASE = 'http://localhost:8080'

function getAuthHeaders() {
  const token = localStorage.getItem('token')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export async function login(username) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username }),
  })
  if (!res.ok) throw new Error('Login failed')
  const data = await res.json()
  localStorage.setItem('token', data.token)
  return data
}

export async function fetchGames() {
  const res = await fetch(`${API_BASE}/games`, {
    headers: { ...getAuthHeaders() },
  })
  if (!res.ok) throw new Error('Failed to fetch games')
  return res.json()
}

const S3_BASE = 'http://localhost:8083'

export async function initUpload(gameData) {
  const res = await fetch(`${API_BASE}/games/init-upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
    body: JSON.stringify(gameData),
  })
  if (!res.ok) throw new Error('Failed to initiate upload')
  return res.json()
}

export async function uploadToS3(url, file) {
  // If URL is relative (starts with /), prepend S3_BASE
  const finalUrl = url.startsWith('/') ? `${S3_BASE}${url}` : url
  
  const res = await fetch(finalUrl, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type || 'application/octet-stream',
    },
  })
  if (!res.ok) throw new Error('Failed to upload file to storage')
  return res
}
