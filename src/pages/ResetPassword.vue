<template>
  <div class="auth-page">
    <header class="auth-nav">
      <router-link to="/" class="brand">
        <span class="logo-mark">[S]</span> <span class="logo-text">Serwin Games</span>
      </router-link>
      <div class="nav-meta">PROTOCOL: RESET_PASSWORD // SECURE</div>
    </header>

    <div class="auth-container">
      <div class="auth-card">
        <h1 class="auth-title">System <span class="t-orange">reset</span>.</h1>
        <p class="auth-subtitle">Initialize your new secure credentials.</p>

        <form @submit.prevent="handleReset" class="auth-form">
          <div class="form-group">
            <div class="label-row">
              <label>NEW PASSWORD</label>
            </div>
            <input
              v-model="newPassword"
              type="password"
              placeholder="Enter new secure password"
              required
            />
          </div>
          <div class="form-group">
            <div class="label-row">
              <label>CONFIRM PASSWORD</label>
            </div>
            <input
              v-model="confirmPassword"
              type="password"
              placeholder="Verify new password"
              required
            />
          </div>

          <button type="submit" :disabled="loading" class="submit-btn">
            <span v-if="loading" class="spinner"></span>
            <span v-else>CONFIRM RESET <span class="arrow">↗</span></span>
          </button>
          
          <p v-if="message" class="success-msg">{{ message }}</p>
          <p v-if="error" class="error-msg">{{ error }}</p>
        </form>

        <div class="auth-footer" v-if="message">
          <p>Reset complete. <router-link to="/login" class="link">Authenticate here.</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { resetPassword } from '../services/api.js'

const route = useRoute()
const router = useRouter()
const token = route.query.token || ''

const newPassword = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const error = ref('')
const message = ref('')

async function handleReset() {
  if (newPassword.value !== confirmPassword.value) {
    error.value = 'Passwords do not match.'
    return
  }
  if (!token) {
    error.value = 'Invalid or missing reset token.'
    return
  }
  loading.value = true
  error.value = ''
  message.value = ''
  try {
    await resetPassword(token, newPassword.value, confirmPassword.value)
    message.value = 'Credentials updated. You may now authenticate.'
    newPassword.value = ''
    confirmPassword.value = ''
  } catch (err) {
    error.value = 'Reset command rejected.'
  } finally {
    loading.value = false
  }
}
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

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.label-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.form-group label {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-muted);
  letter-spacing: 1px;
}

.form-group input {
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 15px;
  transition: border-color 0.2s;
  outline: none;
}

.form-group input:focus {
  border-color: var(--accent);
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
}

.submit-btn:hover:not(:disabled) {
  background: #d64724;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.arrow {
  font-size: 16px;
}

.error-msg {
  color: var(--accent);
  font-size: 13px;
  font-family: var(--font-mono);
  margin: 0;
  text-align: center;
}

.success-msg {
  color: #10b981;
  font-size: 13px;
  font-family: var(--font-mono);
  margin: 0;
  text-align: center;
}

.auth-footer {
  margin-top: 32px;
  text-align: left;
  font-size: 14px;
  color: var(--text-muted);
  border-top: 1px solid var(--border-color);
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link {
  color: var(--text-primary);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 11px;
  margin-left: 8px;
  transition: color 0.2s;
}

.link:hover {
  color: var(--accent);
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
