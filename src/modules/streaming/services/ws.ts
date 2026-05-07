let socket = null

export function connectWebSocket(baseUrl = 'ws://localhost:8080/api/v1/ws') {
  // Clean up any existing connection first
  if (socket) {
    try { socket.close(1000, 'reconnecting') } catch (_) { }
    socket = null
  }
  console.log("this is the base url: ", baseUrl)
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
    try {
      const msg = JSON.parse(event.data)

      switch (msg.type) {
        case 'game_ready':
          console.log('[WS] game ready, session:', msg.session_id)
          // set loading.value = false here
          break

        case 'game_state':
          // msg.data is the raw JSON from Godot
          console.log('[GODOT STATE]', msg.data)
          break

        case 'game_closed':
          console.warn('[WS] game closed:', msg.reason)
          break
      }
    } catch (e) { }
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
    } catch (_) { }
    socket = null
  }
}
