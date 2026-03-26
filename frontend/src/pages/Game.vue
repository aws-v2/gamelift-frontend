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
          <p>Connecting & Loading Assets...</p>
          <p style="font-size: 10px; color: #666; margin-top: 10px;">[DEBUG] Loading timeout active</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { connectWebSocket, sendMessage, disconnectWebSocket } from '../services/ws.js'
import * as THREE from 'three'
import { assetLoader } from '../services/three/loader.js'

const route = useRoute()
const router = useRouter()
const threeContainer = ref(null)
const wsConnected = ref(false)
const loading = ref(true)

let renderer, scene, camera
let levelScene = null
let playerMesh = null

// Movement Settings
const MOVE_SPEED = 0.15
const keysPressed = {}

// Coordinates and State
const targetState = { x: 0, y: 0, z: 0, yaw: 0, pitch: 0 }
const currentState = { x: 0, y: 0, z: 0 }

// --- Three.js Setup (Super Debug View) ---
function initThree() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x050510)

  const width = threeContainer.value.clientWidth || 800
  const height = threeContainer.value.clientHeight || 600
  const aspect = width / height

  // FPS Camera
  camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000)
  // We will parent this to the player mesh once loaded

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  threeContainer.value.appendChild(renderer.domElement)

  // LIGHTING
  const ambient = new THREE.AmbientLight(0xffffff, 0.8)
  scene.add(ambient)

  const sun = new THREE.DirectionalLight(0xffffff, 1.2)
  sun.position.set(10, 20, 10)
  scene.add(sun)

  // CENTER MARKER (Bright Red Square at 0,0,0) - Helpful for orientation
  const centerGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5)
  const centerMat = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  const centerMarker = new THREE.Mesh(centerGeo, centerMat)
  scene.add(centerMarker)

  // GRID for ground plane (XZ)
  const grid = new THREE.GridHelper(100, 20, 0x444444, 0x222222)
  grid.position.y = -5.1 // Just below the platforms
  scene.add(grid)

  window.addEventListener('resize', onWindowResize)
}

function onWindowResize() {
  if (!camera || !renderer || !threeContainer.value) return
  const width = threeContainer.value.clientWidth
  const height = threeContainer.value.clientHeight
  const aspect = width / height
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
  if (camera) {
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }
}

// --- FPS Controls ---
function setupPointerLock() {
  const container = threeContainer.value
  container.addEventListener('click', () => {
    container.requestPointerLock()
  })

  document.addEventListener('mousemove', (e) => {
    if (document.pointerLockElement === container && playerMesh) {
      // Rotate player (yaw)
      playerMesh.rotation.y -= e.movementX * 0.002
      // Rotate camera (pitch) - limited to avoid backflips
      camera.rotation.x -= e.movementY * 0.002
      camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x))
    }
  })
}

// --- Asset Loading ---
async function loadAssets() {
  console.log('[DEBUG] Loading 3D level model...')

  try {
    const modelPath = '/game_static/temporary_level.gltf'
    levelScene = await assetLoader.loadModel(modelPath)
    assetLoader.applyFallbacks(levelScene)

    // FIND THE PLAYER in the nested scene
    playerMesh = levelScene.getObjectByName('CharacterBody3D')

    if (playerMesh) {
      console.log('[DEBUG] Found player character:', playerMesh.name)
      
      // SYNC INITIAL STATE with GLTF Spawn Point
      targetState.x = playerMesh.position.x
      targetState.y = playerMesh.position.y
      targetState.z = playerMesh.position.z
      targetState.yaw = playerMesh.rotation.y
      targetState.pitch = 0
      
      // ATTACH CAMERA to player's face
      camera.position.set(0, 0.8, 0) 
      playerMesh.add(camera)
      
      // Ensure rotation order is correct for FPS
      playerMesh.rotation.order = 'YXZ'
      camera.rotation.order = 'YXZ'
    } else {
      console.warn('[DEBUG] CharacterBody3D not found in level!')
    }

    scene.add(levelScene)
    console.log('[DEBUG] Level model added to scene.')

    setupPointerLock()

  } catch (err) {
    console.error('[DEBUG] Asset Loader error:', err)
  }
}

// --- Game Loop ---
function tick() {
  requestAnimationFrame(tick)

  if (playerMesh) {
    // STATE INTERPOLATION (Real-time Sync)
    playerMesh.position.x += (targetState.x - playerMesh.position.x) * 0.2
    playerMesh.position.y += (targetState.y - playerMesh.position.y) * 0.2
    playerMesh.position.z += (targetState.z - playerMesh.position.z) * 0.2

    // Rotation Sync (Yaw for Body, Pitch for Head)
    playerMesh.rotation.y += (targetState.yaw - playerMesh.rotation.y) * 0.2
    camera.rotation.x += (targetState.pitch - camera.rotation.x) * 0.2
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }
}

// --- WebSocket Handling ---
function handleServerMessage(event) {
  try {
    const data = JSON.parse(event.data)

    // Sync all 3D coordinates
    if (typeof data.x === 'number') targetState.x = data.x
    if (typeof data.y === 'number') targetState.y = data.y
    if (typeof data.z === 'number') targetState.z = data.z

    // Sync rotations
    if (typeof data.yaw === 'number') targetState.yaw = data.yaw
    if (typeof data.pitch === 'number') targetState.pitch = data.pitch

    if (typeof data.anim === 'string') targetState.anim = data.anim
  } catch (err) {
    console.warn('[DEBUG] Error parsing server message:', err)
  }
}

// --- Input Handling ---
const onKeyDown = (e) => {
  const key = e.key.toLowerCase()
  if (!keysPressed[key]) {
    console.debug(`[DEBUG] Key Down: ${key}`)
    keysPressed[key] = true
  }
  sendMessage({ type: 'keydown', key: e.key })
}
const onKeyUp = (e) => {
  const key = e.key.toLowerCase()
  console.debug(`[DEBUG] Key Up: ${key}`)
  keysPressed[key] = false
  sendMessage({ type: 'keyup', key: e.key })
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

  // FORCE OVERLAY OFF after 2 seconds
  setTimeout(() => {
    if (loading.value) { console.warn('[DEBUG] Forcing loading overlay OFF'); loading.value = false }
  }, 2000)

  await loadAssets()
  tick()

  const socket = connectWebSocket()
  socket.addEventListener('open', () => {
    wsConnected.value = true
    sendMessage({ type: 'join', gameId: route.params.id })
  })
  socket.addEventListener('close', () => { wsConnected.value = false })
  socket.addEventListener('message', handleServerMessage)
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', cleanup)
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('keyup', onKeyUp)
  cleanup()
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
