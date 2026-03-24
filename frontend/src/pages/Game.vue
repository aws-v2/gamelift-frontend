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
      <div class="game-overlay">
        <div class="overlay-content">
          <p>State Synchronization Active</p>
          <p class="sub-text">Check console for Godot state data</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { connectWebSocket, sendMessage, disconnectWebSocket } from '../services/ws.js'

const route = useRoute()
const router = useRouter()
const wsConnected = ref(false)

let socket = null

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

// Centralized cleanup — called on unmount, page unload, and navigation
function cleanup() {
  disconnectWebSocket()
  wsConnected.value = false
}

// Handle browser tab close / page refresh 
function onBeforeUnload() {
  cleanup()
}

onMounted(async () => {
  // Register beforeunload to gracefully close connections on refresh/tab close
  window.addEventListener('beforeunload', onBeforeUnload)

  // WebSocket
  socket = connectWebSocket()
  socket.addEventListener('open', () => {
    wsConnected.value = true
    sendMessage({ type: 'join', gameId: route.params.id })
  })
  socket.addEventListener('close', () => {
    wsConnected.value = false
  })

  // Keyboard events
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', onBeforeUnload)
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
  cursor: crosshair;
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
  font-family: 'Inter', sans-serif;
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

.status-label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}

.game-viewport {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  overflow: hidden;
}

.game-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}

.overlay-content {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  font-weight: 500;
}

.sub-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 8px;
  font-weight: 400;
}
</style>
