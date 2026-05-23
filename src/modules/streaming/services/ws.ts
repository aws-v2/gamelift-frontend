let socket = null

// export function connectWebSocket(baseUrl = 'ws://localhost:8080/api/v1/ws') {
//   if (socket) {
//     try { socket.close(1000, 'reconnecting') } catch (_) { }
//     socket = null
//   }

//   console.log("this is the base url: ", baseUrl)

//   const token = localStorage.getItem('token')
//   let url = baseUrl

//   if (token) {
//     const parsed = new URL(baseUrl)
//     parsed.searchParams.set('token', token)
//     url = parsed.toString()
//   }

//   socket = new WebSocket(url)

//   socket.addEventListener('open', () => {
//     console.log('[WS] Connected')
//   })

//   socket.addEventListener('close', (event) => {
//     console.log(`[WS] Disconnected (code: ${event.code}, reason: ${event.reason || 'none'})`)
//   })

//   socket.addEventListener('error', (err) => {
//     console.error('[WS] Error:', err)
//   })

//   socket.addEventListener('message', (event) => {
//     try {
//       const msg = JSON.parse(event.data)

//       switch (msg.type) {
//         case 'game_ready':
//           console.log('[WS] game ready, session:', msg.session_id)
//           // loading.value = false
//           break

//         case 'game_state':
//           // msg.data is the raw JSON from Godot
//           console.log('[GODOT STATE]', msg.data)
//           break

//         case 'game_closed':
//           console.warn('[WS] game closed:', msg.reason)
//           break
//       }
//     } catch (e) { }
//   })
//   return socket
// }


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
