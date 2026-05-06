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

      <!-- Overlay (forced off after 2s for debug) -->
      <div v-if="loading" class="game-overlay">
        <div class="overlay-content">
          <div class="overlay-spinner"></div>
          <p>WebSocket Debug Mode Active</p>
          <p style="font-size: 12px; color: #a78bfa; margin-top: 10px;">[NOTICE] 3D Asset Loading Disabled</p>
          <p style="font-size: 10px; color: #666; margin-top: 5px;">Check console for real-time server data</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { connectWebSocket, sendMessage, disconnectWebSocket } from '@/modules/streaming/services/ws'
import { fetchGameManifest } from '@/modules/streaming/services/api'
import apiClient from '@/shared/api/apiClient'
import * as THREE from 'three'
import { baseLogger } from '@/shared/config/logger'
const logger = baseLogger.child({scope:"game-view"})
const route = useRoute()
const router = useRouter()
const threeContainer = ref(null)
const wsConnected = ref(false)
const loading = ref(true)
const manifest = ref(null)

let renderer, scene, camera
let levelScene = null

// Synced Entities Map
const entities = reactive(new Map()) // name -> { mesh, targetState, currentState }

// Movement Settings (Legacy for local prediction if needed)
const MOVE_SPEED = 0.15
const keysPressed = {}

// --- Three.js Setup ---
function initThree() {
  logger.info("Initiliazing three.js")
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x050510)

  const width = threeContainer.value.clientWidth || 800
  const height = threeContainer.value.clientHeight || 600
  const aspect = width / height

  camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  threeContainer.value.appendChild(renderer.domElement)
  logger.info("Setting up lightingfor three.js three.js")

  // LIGHTING
  scene.add(new THREE.AmbientLight(0xffffff, 0.8))
  const sun = new THREE.DirectionalLight(0xffffff, 1.2)
  sun.position.set(10, 20, 10)
  scene.add(sun)

  window.addEventListener('resize', onWindowResize)
}

function onWindowResize() {
  logger.info("Window size event listener triggered")

  if (!camera || !renderer || !threeContainer.value) return
  const width = threeContainer.value.clientWidth
  const height = threeContainer.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

// --- Pointer Lock & Input ---
function setupPointerLock(playerMesh) {
  logger.info("Setting up the pointer lock!")


  const container = threeContainer.value
  container.addEventListener('click', () => container.requestPointerLock())

  document.addEventListener('mousemove', (e) => {
    if (document.pointerLockElement === container && playerMesh) {
      // Rotation logic remains local for smoothness
      playerMesh.rotation.y -= e.movementX * 0.002
      camera.rotation.x -= e.movementY * 0.002
      camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x))
    }
  })
}

// --- Asset Loading & Manifest Logic ---
async function loadGame() {
  try {
    console.log('[Game] Fetching manifest for game:', route.params.id)
    manifest.value = await fetchGameManifest(route.params.id)

    console.log('[Game] Asset loading bypassed for debug mode.')
    loading.value = false
  } catch (err) {
    console.error('[Game] Error loading gear:', err)
  }
}

function setupEntity(name, mesh) {
  entities.set(name, {
    mesh,
    target: { x: mesh.position.x, y: mesh.position.y, z: mesh.position.z, yaw: mesh.rotation.y, pitch: 0 },
    current: { x: mesh.position.x, y: mesh.position.y, z: mesh.position.z }
  })
}

// --- Game Loop ---
function tick() {
  requestAnimationFrame(tick)

  entities.forEach((entity, name) => {
    const { mesh, target } = entity
    // Interpolation
    mesh.position.x += (target.x - mesh.position.x) * 0.2
    mesh.position.y += (target.y - mesh.position.y) * 0.2
    mesh.position.z += (target.z - mesh.position.z) * 0.2

    // Only sync yaw for body unless it's a special type
    mesh.rotation.y += (target.yaw - mesh.rotation.y) * 0.2

    // If it's the player, sync camera pitch
    if (name === manifest.value?.player_node) {
      camera.rotation.x += (target.pitch - camera.rotation.x) * 0.2
    }
  })

  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }
}

// --- WebSocket Handling ---
function handleServerMessage(event) {
  try {
    console.log('[WS][Data Received]', event.data)
    const data = JSON.parse(event.data)

    // We expect updates like: { "node": "PlayerCharacter", "x": 10, ... }
    // Or a list of updates? For now assume single node update
    const nodeName = data.node || manifest.value?.player_node
    const entity = entities.get(nodeName)

    if (entity) {
      if (typeof data.x === 'number') entity.target.x = data.x
      if (typeof data.y === 'number') entity.target.y = data.y
      if (typeof data.z === 'number') entity.target.z = data.z
      if (typeof data.yaw === 'number') entity.target.yaw = data.yaw
      if (typeof data.pitch === 'number') entity.target.pitch = data.pitch
    }
  } catch (err) {
    console.warn('[Game] Error parsing server message:', err)
  }
}


const sessionId = ref(null)

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

function goBack() { cleanup(); router.push('/home') }

function cleanup() {
  disconnectWebSocket()
  wsConnected.value = false
  if (renderer) { renderer.dispose(); renderer.forceContextLoss() }
  window.removeEventListener('resize', onWindowResize)
}

onMounted(async () => {
  window.addEventListener('beforeunload', cleanup)
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)

  initThree()
  tick()

  try {
  console.log('initGameSession res101')

    const wsUrl = await initGameSession()
  console.log('initGameSession res11', wsUrl)

    await loadGame()

    const socket = connectWebSocket(wsUrl)
    socket.addEventListener('open', () => {
      wsConnected.value = true
      sendMessage({ type: 'join', session_id: sessionId.value,  data: { gameId: route.params.id }})
    })
    socket.addEventListener('close', () => { wsConnected.value = false })
    socket.addEventListener('message', handleServerMessage)

  } catch (err) {
    console.error('[game] session init failed', err)
    // surface error to user however you handle it in your UI
  }
})

async function initGameSession() {
  const gameId = route.params.id

  // 1. Provision VM
  const res = await apiClient.post(`/gamelift/games/${gameId}/session`,{
	"game_id":gameId,
	"game_image":"string"
  })


  const agentWsUrl = res.data.AgentWSURL
  const agentToken = res.data.Token
  const status = res.data.Status
  sessionId.value = res.data.ID
  const userId = res.data.UserID


 
  // Axios only throws on non-2xx, so no need for res.ok
  const { AgentWSURL, Token } = res.data

  // 2. If already ready
  if (AgentWSURL) {
    return buildWsUrl(AgentWSURL, Token)
  }

  // 3. Otherwise poll
  return await pollUntilReady(gameId, agentToken)
}




async function pollUntilReady(
  gameId,
  token,
  intervalMs = 1500,
  timeoutMs = 60_000
) {
  const deadline = Date.now() + timeoutMs

  while (Date.now() < deadline) {
    await sleep(intervalMs)

    const res = await fetch(`/api/v1/gamelift/games/${gameId}/session/status`)
    if (!res.ok) continue

    const { status, ws_url, token: updatedToken } = await res.json()

    if (status === 'ready' && ws_url) {
      return buildWsUrl(ws_url, updatedToken ?? token)
    }
  }

  throw new Error(`timed out waiting for game VM to be ready`)
}

function buildWsUrl(wsUrl, token) {
  console.log('initGameSession res11', wsUrl)

  const url = new URL(wsUrl)
  url.searchParams.set('token', token)
  return url.toString()
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
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
