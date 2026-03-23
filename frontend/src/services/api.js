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

export async function sendOffer(offer) {
  const res = await fetch(`${API_BASE}/offer`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
    body: JSON.stringify(offer),
  })
  if (!res.ok) throw new Error('Failed to send offer')
  return res.json()
}
