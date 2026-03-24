let socket = null

export function connectWebSocket(baseUrl = 'ws://localhost:8080/ws') {
  // Clean up any existing connection first
  if (socket) {
    try { socket.close(1000, 'reconnecting') } catch (_) {}
    socket = null
  }

  const token = localStorage.getItem('token')
  const url = token ? `${baseUrl}?token=${token}` : baseUrl
  socket = new WebSocket(url)

  socket.addEventListener('open', () => {
    console.log('[WS] Connected')
  })

  socket.addEventListener('close', (event) => {
    console.log(`[WS] Disconnected (code: ${event.code}, reason: ${event.reason || 'none'})`)
  })

  socket.addEventListener('error', (err) => {
    console.error('[WS] Error:', err)
  })

  socket.addEventListener('message', (event) => {
    console.log('[GODOT STATE RECEIVED]', event.data)
  })

  return socket
}

export function sendMessage(data) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(data))
  }
}

export function disconnectWebSocket() {
  if (socket) {
    // Send a proper close frame with code 1000 (normal closure)
    try {
      socket.close(1000, 'user left')
    } catch (_) {}
    socket = null
  }
}
