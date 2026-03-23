<template>
  <div class="login-page">
    <div class="login-bg-glow"></div>
    <div class="login-card">
      <div class="login-logo">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="url(#grad)" />
          <path d="M14 28c0-2 1-3 3-3h14c2 0 3 1 3 3v2c0 2-1 3-3 3H17c-2 0-3-1-3-3v-2z" fill="#fff" opacity="0.9"/>
          <circle cx="19" cy="29" r="1.5" fill="#7c3aed"/>
          <circle cx="24" cy="29" r="1.5" fill="#7c3aed"/>
          <circle cx="29" cy="29" r="1.5" fill="#7c3aed"/>
          <path d="M16 22l8-8 8 8" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="48" y2="48">
              <stop stop-color="#7c3aed"/>
              <stop offset="1" stop-color="#2563eb"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 class="login-title">Cloud Gaming</h1>
      <p class="login-subtitle">Sign in to start playing</p>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <input
            id="username-input"
            v-model="username"
            type="text"
            placeholder="Enter your username"
            autocomplete="username"
            required
          />
        </div>
        <button id="login-button" type="submit" :disabled="loading" class="login-btn">
          <span v-if="loading" class="spinner"></span>
          <span v-else>Sign In</span>
        </button>
        <p v-if="error" class="login-error">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../services/api.js'

const router = useRouter()
const username = ref('')
const loading = ref(false)
const error = ref('')

async function handleLogin() {
  if (!username.value.trim()) return
  loading.value = true
  error.value = ''
  try {
    await login(username.value.trim())
    router.push('/home')
  } catch (err) {
    error.value = 'Login failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0f;
  position: relative;
  overflow: hidden;
}

.login-bg-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: pulse-glow 4s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
}

.login-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 48px 40px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;
  z-index: 1;
  animation: card-appear 0.6s ease-out;
}

@keyframes card-appear {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.login-logo {
  margin-bottom: 24px;
}

.login-title {
  font-size: 28px;
  font-weight: 800;
  color: #fff;
  margin: 0 0 8px;
  letter-spacing: -0.5px;
}

.login-subtitle {
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  margin: 0 0 32px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group input {
  width: 100%;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: #fff;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
}

.input-group input:focus {
  border-color: #7c3aed;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
}

.input-group input::placeholder {
  color: rgba(255, 255, 255, 0.25);
}

.login-btn {
  padding: 14px;
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
}

.login-btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.login-btn:active:not(:disabled) {
  transform: translateY(0);
}

.login-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.login-error {
  color: #f87171;
  font-size: 13px;
  margin: 0;
}
</style>
