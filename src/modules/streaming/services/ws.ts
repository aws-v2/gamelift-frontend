let socket = null



export function connectWebSocket(baseUrl = 'ws://localhost:8080/api/v1/ws') {
  if (socket) {
    try { socket.close(1000, 'reconnecting') } catch (_) { }
    socket = null
  }

  const token = localStorage.getItem('token')
  const parsed = new URL(baseUrl)
  if (token) parsed.searchParams.set('token', token)

  socket = new WebSocket(parsed.toString())

  socket.addEventListener('open', () => console.log('[WS] Connected'))
  socket.addEventListener('close', (e) => console.log(`[WS] Disconnected (${e.code})`))
  socket.addEventListener('error', (e) => console.error('[WS] Error:', e))

  // ← no message handler here

  return socket
}

export function sendMessage(data) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    console.log('[EGRESS] >> Sending:', data)
    socket.send(JSON.stringify(data))
  }
}

export function disconnectWebSocket() {
  if (socket) {
    // Send a proper close frame with code 1000 (normal closure)
    try {
      socket.close(1000, 'user left')
    } catch (_) { }
    socket = null
  }
}
