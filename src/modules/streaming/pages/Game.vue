<template>
  <div class="game-page" @mousedown="onMouseDown" @mouseup="onMouseUp">
    <div class="game-topbar">
      <button id="back-button" class="back-btn" @click="goBack">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back
      </button>
      <div class="game-status">
        <span class="status-dot" :class="{ connected: wsConnected }"></span>
        <span class="status-label">{{ wsConnected ? 'Connected' : 'Connecting...' }}</span>
      </div>
    </div>

    <div class="game-viewport">
      <div ref="threeContainer" class="three-container"></div>

      <!-- Overlay -->
      <div v-if="loading" class="game-overlay">
        <div class="overlay-content">
          <div class="overlay-spinner"></div>
          <p>STABILIZING STREAM...</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { connectWebSocket, sendMessage, disconnectWebSocket } from '@/modules/streaming/services/ws'
import { fetchGameManifest } from '@/modules/streaming/services/api'
import apiClient from '@/shared/api/apiClient'
import * as THREE from 'three'
import { baseLogger } from '@/shared/config/logger'
import { getRemoteConfig } from '@/shared/config/remoteConfig'
import {
  initThree,
  loadLevel, tick, applyState, destroyThree
} from '@/modules/streaming/services/game_three'

import { useAuthStore } from '@/modules/auth/store/authStore'
import { featureFlags } from '@/shared/config/featureFlags'
const logger = baseLogger.child({ scope: "game-view" })
const route = useRoute()
const router = useRouter()
const wsConnected = ref(false)
const loading = ref(true)
const manifest = ref(null)
const ws = ref(null)
let renderer, scene, camera
let levelScene = null
const vmIp = ref('')
const entities = reactive(new Map()) // name -> { mesh, targetState, currentState }
const threeContainer = ref<HTMLElement | null>(null)
const threeContainer1 = ref<HTMLElement | null>(null)
const sessionId = ref(null)

// Movement Settings (Legacy for local prediction if needed)
const MOVE_SPEED = 0.15
const keysPressed = {}

console.log('ref function:', ref)
console.log('ref(null):', ref(null))




function onWindowResize() {
  logger.info("Window size event listener triggered")

  if (!camera || !renderer || !threeContainer.value) return
  const width = threeContainer.value.clientWidth
  const height = threeContainer.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

 





// --- Message Dispatcher ---
async function handleServerMessage(event) {
  try {
    const msg = typeof (event.data) === 'string' ? JSON.parse(event.data) : event.data
    vmIp.value = msg.vm_ip || vmIp.value
    switch (msg.type) {

      case 'game_ready':
        console.log('[ws] vm provisioned:: game_ready — loading level then opening game')
        await loadLevel()
        setTimeout(() => {
          loading.value = false
          sendMessage({ type: 'open_game', session_id: sessionId.value, vm_ip: 'localhost', vm_port: 9030 })
          console.log('[ws] open_game sent')
        }, 4000)
        break
      case 'game_running':
        console.log('[ws] game_ready received — sending open_game in 4s', event.data)
        break
      case 'game_state':
        handleGameState(msg.data ?? msg)  // works for both placeholder and Godot
        break
      case 'game_closed':
        console.warn('[ws] game closed:', msg.reason)
        wsConnected.value = false
        break
      case 'error':
        console.error('[ws] agent error:', msg.reason)
        break
      default:
        console.warn('[ws] unknown message type:', msg.type)
    }
  } catch (err) {
    console.warn('[ws] parse error:', err)
  }
}


// --- Game State (Godot position data) ---
function handleGameState(data) {
  console.log('[game_state]', data)

  // ── Apply to Three.js scene ───────────────────────────────────────────────
  applyState(data)

  // ── Also keep entity map in sync if you use it elsewhere ─────────────────
  const nodeName = data.node

  const entity   = entities.get(nodeName)
  if (entity) {
    if (typeof data.x     === 'number') entity.target.x     = data.x
    if (typeof data.y     === 'number') entity.target.y     = data.y
    if (typeof data.z     === 'number') entity.target.z     = data.z
    if (typeof data.yaw   === 'number') entity.target.yaw   = data.yaw
    if (typeof data.pitch === 'number') entity.target.pitch = data.pitch
  }
}




const onKeyDown = (e) => {
  if (loading.value) return
  sendMessage({
    type: 'game_input',
    session_id: sessionId.value,  // your current session id
    data: { type: 'keydown', key: e.key }
  })
}

const onKeyUp = (e) => {
  if (loading.value) return
  sendMessage({
    type: 'game_input',
    session_id: sessionId.value,
    data: { type: 'keyup', key: e.key }
  })
}
function onMouseDown(e: MouseEvent) {
  sendMessage({
    type: 'game_input',
    session_id: sessionId.value,
    data: { type: 'mousedown', button: e.button, target_node: 'Player' },
  })
}

function onMouseUp(e: MouseEvent) {
  sendMessage({
    type: 'game_input',
    session_id: sessionId.value,
    data: { type: 'mouseup', button: e.button, target_node: 'Player' },
  })
}




function goBack() { cleanup(); router.push('/home') }

function cleanup() {
  disconnectWebSocket()
  wsConnected.value = false
  if (renderer) { renderer.dispose(); renderer.forceContextLoss() }
  window.removeEventListener('resize', onWindowResize)
}

onMounted(async () => {

  console.log('--- MOUNT START ---')

  console.log('threeContainer raw:', threeContainer)
  console.log('typeof threeContainer:', typeof threeContainer)

  // Only try .value if it looks like a ref
  if (threeContainer && typeof threeContainer=== 'object') {
    console.log('threeContainer.value:', threeContainer.value)
    console.log('value type:', typeof threeContainer.value)
  } else {
  }

  window.addEventListener('beforeunload', cleanup)
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)

  if (
    threeContainer &&
    typeof threeContainer === 'object' &&
    threeContainer.value
  ) {
    console.log('Calling initThree with:', threeContainer.value)
    initThree(threeContainer.value)
  } else {
    console.error('Cannot call initThree: invalid container')
  }
 await loadLevel()
tick()


try {
  const wsUrl= await initGameSession()

  const socket = connectWebSocket(wsUrl)
  socket.addEventListener('open', () => {
    wsConnected.value = true
    loading.value = false
    sendMessage({
      type: 'join',
      session_id: sessionId.value,
      data: { gameId: route.params.id }
    })
  })

  socket.addEventListener('close', () => {
    wsConnected.value = false
  })

  socket.addEventListener('message', handleServerMessage)

} catch (err) {
  console.error('[game] session init failed', err)
  // surface error to user however you handle it in your UI
}

})

async function initGameSession() {
  const gameId = route.params.id

  // Fetch game manifest
  try {
    manifest.value = await fetchGameManifest(gameId.toString())
    console.log('[Game] manifest loaded:', manifest.value)
  } catch (err) {
    console.warn('[Game] failed to fetch manifest:', err)
  }

  const BACKEND_URL = await featureFlags.getServiceUrl('gamelift')

  // 1. Provision VM
    const res = await apiClient.post(`/gamelift/games/${gameId}/session`, {
  // const res = await apiClient.post(`/gamelift/games/session?game_id=${gameId}`, {
    game_id: gameId,
    game_image: "string"
  })

  const { AgentWSURL, Token, ID,  } = res.data
  sessionId.value = ID

  if (AgentWSURL) {
    return buildWsUrl(AgentWSURL, Token, vmIp.value)
  }

  const debug = false

  // ── DEBUG SHORTCUT ──────────────────────────────────────────
  if (debug) {
    console.warn('[initGameSession] debug mode — skipping SSE, using local agent')
    vmIp.value = 'localhost'
    return buildWsUrl('ws://localhost:9030', Token, vmIp.value)

  }
  // ────────────────────────────────────────────────────────────

  console.log(`[initGameSession] pending — opening SSE for instanceId=${ID}`)

  const authStore = useAuthStore()
  const token = authStore.token

  // 3. Pending — wait for backend to push agent_url via SSE
  return new Promise((resolve, reject) => {
    const sse = new EventSource(
      `${BACKEND_URL}gamelift/fleet/instances/${ID}/events?token=${token}`
    )
    let resolved = false
    const cleanup = () => {
      clearTimeout(timeout)
      sse.close()
    }
    const timeout = setTimeout(() => {
      console.warn(`[SSE] timed out after 5min for instanceId=${ID}`)
      cleanup()
      reject(new Error('Provisioning timed out'))
    }, 5 * 60 * 1000)



    sse.onopen = () => { }



    
    sse.onmessage = (event) => {
      let data
      try {
        data = JSON.parse(event.data)
      } catch (err) {
        console.error(`[SSE] invalid JSON payload`, err)
        cleanup()
        reject(new Error('Invalid SSE payload'))
        return
      }

      // ERROR EVENT
      if (data.error) {
        console.error(`[SSE] provisioning failed:`, data.error)
        cleanup()
        reject(new Error(data.error))
        return
      }
      // SUCCESS EVENT
      if (data.agent_url) {
        console.log(`[SSE] agent_url received: ${data.agent_url}`)
        resolved = true
        cleanup()
        resolve(buildWsUrl(data.agent_url, Token, data.vm_ip, ID))
        return
      }
      // UNKNOWN EVENT
      console.warn(`[SSE] unknown event payload`, data)
    }
    sse.onerror = (err) => {
      if (resolved) {
        console.log(`[SSE] connection closed after successful resolution`)
        return
      }
      console.error(`[SSE] connection error for instanceId=${ID}:`, err)

      cleanup()

      reject(new Error('SSE connection lost'))
    }
  })


}

function buildWsUrl(wsUrl, token, vmIp,sessionID) {
  const url = new URL(`${wsUrl}/game`)
  if (token) url.searchParams.set('token', token)
  if (vmIp) url.searchParams.set('vm_ip', vmIp)
  if (sessionID) url.searchParams.set('session', sessionID)
  return url.toString()
  // → ws://localhost:9030/game?token=...&vm_ip=10.0.1.12
}



onBeforeUnmount(() => {
  cleanup()
  window.removeEventListener('beforeunload', cleanup)
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('keyup', onKeyUp)
})
</script>

<style scoped>
.game-page {
  height: 100vh;
  background: #000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: none;
}

.game-topbar {
  padding: 12px 20px;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
}

.back-btn {
  background: #333;
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
}

.game-viewport {
  flex: 1;
  position: relative;
}

.three-container {
  width: 100%;
  height: 100%;
  background: #000;
}

.game-status {
  color: #fff;
  font-size: 12px;
}

.game-overlay {
  position: absolute;
  inset: 0;
  background: #000;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.overlay-content {
  text-align: center;
}

.overlay-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #7c3aed;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 10px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
