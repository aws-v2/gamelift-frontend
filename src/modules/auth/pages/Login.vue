<template>
  <div class="auth-page">
    <header class="auth-nav">
      <router-link to="/" class="brand">
        <span class="logo-mark">S</span> <span class="logo-text">GAMELIFT</span>
      </router-link>
      <div class="nav-meta">SECURE ACCESS</div>
    </header>

    <div class="auth-container">
      <div class="auth-card">
        <h1 class="auth-title">SIGN IN</h1>
        <p class="auth-subtitle">ACCESS YOUR PREMIUM GAMING COLLECTION.</p>

        <form @submit.prevent="handleLogin" class="auth-form">
          <div class="form-group">
            <div class="label-row">
              <label>EMAIL</label>
            </div>
            <input id="username-input" v-model="email" type="email" placeholder="Enter your email address" required />
          </div>
          <div class="form-group">
            <div class="label-row">
              <label>PASSWORD</label>
            </div>
            <input id="password-input" v-model="password" type="password" placeholder="Enter your security phrase"
              required />
          </div>

          <button id="login-button" type="submit" :disabled="loading" class="submit-btn">
            <span v-if="loading" class="spinner"></span>
            <span v-else>CONTINUE</span>
          </button>

          <p v-if="error" class="error-msg">{{ error }}</p>
        </form>

        <div class="auth-footer">
          <p>NEW HERE? <router-link to="/register" class="link">CREATE ACCOUNT.</router-link></p>
          <p><router-link to="/forgot-password" class="link" style="margin-left: 0;">FORGOT PASSWORD?</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/modules/auth/store/authStore'

const router = useRouter()
const authStore = useAuthStore()
const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

async function handleLogin() {
  if (!email.value.trim() || !password.value) return
  loading.value = true
  error.value = ''
  try {
    await authStore.login({ email: email.value.trim(), password: password.value })
    router.push('/home')
  } catch (err) {
    error.value = 'Authentication failed. Unauthorized node.'
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
  background-color: var(--bg-primary);
}

.auth-nav {
  padding: 24px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.8);
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
  border-radius: 0 !important;
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

.auth-footer {
  margin-top: 48px;
  text-align: center;
  font-size: 12px;
  color: var(--text-muted);
  border-top: 1px solid var(--border-color);
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
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

