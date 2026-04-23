<template>
  <div class="auth-page">
    <header class="auth-nav">
      <router-link to="/" class="brand">
        <span class="logo-mark">[S]</span> <span class="logo-text">Serwin Games</span>
      </router-link>
      <div class="nav-meta">PROTOCOL: VERIFY // SECURE</div>
    </header>

    <div class="auth-container">
      <div class="auth-card">
        <h1 class="auth-title">Identity <span class="t-orange">verification</span>.</h1>
        <p class="auth-subtitle">Validating terminal handshake...</p>

        <div v-if="loading" class="status-container">
          <span class="spinner large"></span>
          <p>Processing verification token.</p>
        </div>
        
        <div v-else-if="message" class="status-container">
          <p class="success-msg">{{ message }}</p>
          <div class="auth-footer" style="padding-top: 0; border: none;">
            <router-link to="/login" class="submit-btn" style="text-decoration: none;">
              PROCEED TO LOGIN <span class="arrow">↗</span>
            </router-link>
          </div>
        </div>

        <div v-else-if="error" class="status-container">
          <p class="error-msg">{{ error }}</p>
          <div class="auth-footer" style="padding-top: 0; border: none;">
            <router-link to="/register" class="submit-btn" style="text-decoration: none;">
              RETRY REGISTRATION <span class="arrow">↗</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { verifyEmail } from '../services/api.js'

const route = useRoute()
const token = route.query.token || ''

const loading = ref(true)
const error = ref('')
const message = ref('')

onMounted(async () => {
  if (!token) {
    error.value = 'Invalid or missing verification payload.'
    loading.value = false
    return
  }
  
  try {
    await verifyEmail(token)
    message.value = 'Handshake verified. Node authorized.'
  } catch (err) {
    error.value = 'Verification rejected. Token may be expired.'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.auth-nav {
  padding: 24px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}

.brand {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.logo-mark {
  color: var(--accent);
  font-family: var(--font-mono);
}

.logo-text {
  color: var(--text-primary);
}

.nav-meta {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
}

.auth-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.auth-card {
  width: 100%;
  max-width: 440px;
  padding: 48px;
  background: rgba(24, 22, 21, 0.4);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(10px);
}

.auth-title {
  font-family: var(--font-serif);
  font-size: 40px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -1px;
  margin-bottom: 16px;
}

.t-orange {
  color: var(--accent);
  font-style: italic;
}

.auth-subtitle {
  color: var(--text-muted);
  font-size: 15px;
  margin-bottom: 40px;
}

.status-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.spinner.large {
  width: 32px;
  height: 32px;
  border-width: 3px;
  margin: 20px auto;
}

.submit-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  padding: 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.2s;
  margin-top: 16px;
  width: 100%;
  box-sizing: border-box;
}

.submit-btn:hover {
  background: #d64724;
}

.arrow {
  font-size: 16px;
}

.error-msg {
  color: var(--accent);
  font-size: 13px;
  font-family: var(--font-mono);
  margin: 0;
  line-height: 1.5;
}

.success-msg {
  color: #10b981;
  font-size: 13px;
  font-family: var(--font-mono);
  margin: 0;
  line-height: 1.5;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  display: inline-block;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
