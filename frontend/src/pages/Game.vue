<template>
  <div class="game-page" @mousemove="onMouseMove" @mousedown="onMouseDown" @mouseup="onMouseUp">
    <div class="game-topbar">
      <button id="back-button" class="back-btn" @click="goBack">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"/>
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
      
      <!-- Fallback / Loading Overlay -->
      <div v-if="loading" class="game-overlay">
        <div class="overlay-content">
          <div class="overlay-spinner"></div>
          <p>Loading Three.js Assets...</p>
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
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const route = useRoute()
const router = useRouter()
const threeContainer = ref(null)
const wsConnected = ref(false)
const loading = ref(true)

let socket = null
let renderer, scene, camera, mixer
let playerModel = null
let animationActions = {}
let currentAction = null

// Server State Interpolation
const targetState = {
  x: 0,
  y: 0,
  flip: false,
  anim: 'idling'
}

const currentState = {
  x: 0,
  y: 0,
}

const SCALE_FACTOR = 0.01 // Map Godot pixels to Three.js units

// --- Three.js Setup ---
function initThree() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x0a0a0f)
  
  const width = threeContainer.value.clientWidth
  const height = threeContainer.value.clientHeight
  
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.set(0, 0, 10)
  
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  threeContainer.value.appendChild(renderer.domElement)
  
  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
  scene.add(ambientLight)
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
  directionalLight.position.set(5, 10, 7)
  scene.add(directionalLight)

  window.addEventListener('resize', onWindowResize)
}

function onWindowResize() {
  if (!camera || !renderer || !threeContainer.value) return
  const width = threeContainer.value.clientWidth
  const height = threeContainer.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

// --- Asset Loading ---
async function loadAssets() {
  const loader = new GLTFLoader()
  
  try {
    // Load Level/Environment
    const levelGltf = await loader.loadAsync('/game_static/level_1.gltf')
    scene.add(levelGltf.scene)
    
    // Load Player
    const playerGltf = await loader.loadAsync('/game_static/player.gltf')
    playerModel = playerGltf.scene
    scene.add(playerModel)
    
    // Setup Animations
    mixer = new THREE.AnimationMixer(playerModel)
    playerGltf.animations.forEach((clip) => {
      animationActions[clip.name] = mixer.clipAction(clip)
    })
    
    // Start default animation
    if (animationActions['idling']) {
      currentAction = animationActions['idling']
      currentAction.play()
    }
    
    loading.value = false
  } catch (err) {
    console.error('Failed to load assets:', err)
  }
}

// --- Game Loop ---
const clock = new THREE.Clock()

function tick() {
  requestAnimationFrame(tick)
  
  const delta = clock.getDelta()
  if (mixer) mixer.update(delta)
  
  if (playerModel) {
    // Smooth Interpolation (Lerp)
    currentState.x += (targetState.x - currentState.x) * 0.15
    currentState.y += (targetState.y - currentState.y) * 0.15
    
    // Update model position (Map Godot Y to Three.js -Y if it's 2D screen coordinates)
    playerModel.position.x = currentState.x * SCALE_FACTOR
    playerModel.position.y = -currentState.y * SCALE_FACTOR // Negative to flip Y if Godot is screen-space
    
    // Update Rotation based on Flip
    const targetRot = targetState.flip ? Math.PI : 0
    playerModel.rotation.y += (targetRot - playerModel.rotation.y) * 0.2
    
    // Update Animations
    if (targetState.anim && animationActions[targetState.anim] && currentAction !== animationActions[targetState.anim]) {
      const nextAction = animationActions[targetState.anim]
      if (currentAction) currentAction.fadeOut(0.2)
      nextAction.reset().fadeIn(0.2).play()
      currentAction = nextAction
    }
    
    // Follow Camera
    camera.position.x += (playerModel.position.x - camera.position.x) * 0.05
    camera.position.y += (playerModel.position.y - camera.position.y) * 0.05
  }
  
  renderer.render(scene, camera)
}

// --- WebSocket Handling ---
function handleServerMessage(event) {
  try {
    const data = JSON.parse(event.data)
    
    // Update target state for the next frame
    if (typeof data.x === 'number') targetState.x = data.x
    if (typeof data.y === 'number') targetState.y = data.y
    if (typeof data.flip === 'boolean') targetState.flip = data.flip
    if (typeof data.anim === 'string') targetState.anim = data.anim
    
  } catch (err) {
    // Possibly binary data or malformed JSON
  }
}

// --- Input Overrides ---
function onKeyDown(e) {
  e.preventDefault()
  sendMessage({ type: 'keydown', key: e.key })
}

function onKeyUp(e) {
  e.preventDefault()
  sendMessage({ type: 'keyup', key: e.key })
}

function onMouseMove(e) {
  sendMessage({
    type: 'mousemove',
    x: e.clientX,
    y: e.clientY,
  })
}

function onMouseDown(e) {
  sendMessage({
    type: 'mousedown',
    button: e.button,
  })
}

function onMouseUp(e) {
  sendMessage({
    type: 'mouseup',
    button: e.button,
  })
}

function goBack() {
  cleanup()
  router.push('/home')
}

function cleanup() {
  disconnectWebSocket()
  wsConnected.value = false
  if (renderer) {
    renderer.dispose()
    renderer.forceContextLoss()
  }
  window.removeEventListener('resize', onWindowResize)
}

onMounted(async () => {
  window.addEventListener('beforeunload', cleanup)
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)

  // Initialize Three.js
  initThree()
  await loadAssets()
  tick()

  // WebSocket
  socket = connectWebSocket()
  socket.addEventListener('open', () => {
    wsConnected.value = true
    sendMessage({ type: 'join', gameId: route.params.id })
  })
  socket.addEventListener('close', () => {
    wsConnected.value = false
  })
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
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: none; /* Hide cursor for better game feel */
}

.game-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: rgba(10, 10, 15, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  z-index: 10;
  flex-shrink: 0;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.game-status {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f87171;
  transition: background 0.3s;
}

.status-dot.connected {
  background: #34d399;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.5);
}

.game-viewport {
  flex: 1;
  position: relative;
  min-height: 0;
  overflow: hidden;
}

.three-container {
  width: 100%;
  height: 100%;
  outline: none;
}

.game-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0f;
  z-index: 20;
}

.overlay-content {
  text-align: center;
  color: #fff;
}

.overlay-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(124, 58, 237, 0.1);
  border-top-color: #7c3aed;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
