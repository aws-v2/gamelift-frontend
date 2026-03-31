const API_BASE = 'http://localhost:8080'
const API_BASE_V1 = 'http://localhost:8080/api/v1'
const S3_BASE = 'http://localhost:8080'

function getAuthHeaders() {
  const token = localStorage.getItem('token')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export async function login(username) {
  const hardcodedToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOiJiMmMzZDRlNS0yMjIyLTRhNWYtOWM4Mi0xZDRlNmI4ZjNhMjIiLCJzdWIiOiJ0ZXN0LXVzZXIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3NzQ5MjMwOTYsImV4cCI6MTc3NTAwOTQ5Nn0.MVjtkhqm-CMEszh6RjXEpfj9PVpPsLCVk2AtR0Me84Pjr35cTihMlPs7CtB1A-JYIbTeOVteYn_Wkod5o7_coA'
  const res = await fetch(`${API_BASE_V1}/gamelift/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${hardcodedToken}`
    },
    body: JSON.stringify({ username }),
  })
  if (!res.ok) throw new Error('Login failed')
  localStorage.setItem('token', hardcodedToken)
  return { token: hardcodedToken }
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
