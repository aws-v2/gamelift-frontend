<template>
  <div class="auth-page">
    <header class="auth-nav">
      <router-link to="/" class="brand">
        <span class="logo-mark">S</span> <span class="logo-text">GAMELIFT</span>
      </router-link>
      <div class="nav-meta">RECOVERY MODE</div>
    </header>

    <div class="auth-container">
      <div class="auth-card">
        <h1 class="auth-title">HELP</h1>
        <p class="auth-subtitle">PROVIDE YOUR EMAIL TO RECOVER ACCESS.</p>

        <form @submit.prevent="handleRecover" class="auth-form">
          <div class="form-group">
            <div class="label-row">
              <label>EMAIL</label>
            </div>
            <input v-model="email" type="email" placeholder="Enter your email" required />
          </div>

          <button type="submit" :disabled="loading" class="submit-btn">
            <span v-if="loading" class="spinner"></span>
            <span v-else>SEND RESET LINK</span>
          </button>

          <p v-if="message" class="success-msg">{{ message }}</p>
          <p v-if="error" class="error-msg">{{ error }}</p>
        </form>

        <div class="auth-footer">
          <p>REMEMBERED? <router-link to="/login" class="link">SIGN IN.</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { forgotPassword } from '@/modules/auth/services/api'

const email = ref('')
const loading = ref(false)
const error = ref('')
const message = ref('')

async function handleRecover() {
  if (!email.value.trim()) return
  loading.value = true
  error.value = ''
  message.value = ''
  try {
    await forgotPassword(email.value.trim())
    message.value = 'Recovery instructions dispatched to secure channel.'
  } catch (err) {
    error.value = 'Dispatch failed.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.auth-nav {
  padding: 24px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(20px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text-primary);
}

.logo-mark {
  background: var(--text-primary);
  color: #fff;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 20px;
}

.logo-text {
  font-weight: 800;
  font-size: 20px;
  letter-spacing: -1px;
}

.nav-meta {
  font-size: 11px;
  font-weight: 800;
  color: var(--text-muted);
  letter-spacing: 1px;
}

.auth-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
}

.auth-card {
  width: 100%;
  max-width: 480px;
  padding: 60px;
  background: #fff;
  border: 1px solid var(--border-color);
}

.auth-title {
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -2px;
  margin-bottom: 8px;
}

.auth-subtitle {
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 48px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.label-row label {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: var(--text-primary);
}

.form-group input {
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s;
  outline: none;
}

.form-group input:focus {
  border-color: var(--text-primary);
  background: #fff;
}

.submit-btn {
  background: var(--text-primary);
  color: #fff;
  border: none;
  padding: 18px;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  transition: all 0.2s;
  margin-top: 12px;
}

.submit-btn:hover:not(:disabled) {
  background: var(--accent);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.error-msg {
  color: #EF4444;
  font-size: 12px;
  font-weight: 800;
  text-align: center;
  margin-top: 16px;
}

.success-msg {
  color: #10b981;
  font-size: 12px;
  font-weight: 800;
  text-align: center;
  margin-top: 16px;
}

.auth-footer {
  margin-top: 48px;
  text-align: center;
  font-size: 12px;
  color: var(--text-muted);
  border-top: 1px solid var(--border-color);
  padding-top: 32px;
}

.link {
  color: var(--text-primary);
  font-weight: 800;
  text-decoration: none;
  transition: color 0.2s;
}

.link:hover {
  color: var(--accent);
}

.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top-color: #fff;
  border-radius: 50% !important;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

</style>
