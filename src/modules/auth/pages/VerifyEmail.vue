<template>
  <div class="auth-page">
    <header class="auth-nav">
      <router-link to="/" class="brand">
        <span class="logo-mark">S</span> <span class="logo-text">GAMELIFT</span>
      </router-link>
      <div class="nav-meta">IDENTITY VERIFICATION</div>
    </header>

    <div class="auth-container">
      <div class="auth-card">
        <h1 class="auth-title">VERIFY</h1>
        <p class="auth-subtitle">VALIDATING YOUR TERMINAL HANDSHAKE...</p>

        <div v-if="loading" class="status-container">
          <span class="spinner large"></span>
          <p class="status-msg">PROCESSING VERIFICATION TOKEN...</p>
        </div>

        <div v-else-if="message" class="status-container">
          <p class="success-msg">{{ message }}</p>
          <div class="auth-footer" style="padding-top: 0; border: none;">
            <router-link to="/login" class="submit-btn" style="text-decoration: none;">
              PROCEED TO SIGN IN
            </router-link>
          </div>
        </div>

        <div v-else-if="error" class="status-container">
          <p class="error-msg">{{ error }}</p>
          <div class="auth-footer" style="padding-top: 0; border: none;">
            <router-link to="/register" class="submit-btn" style="text-decoration: none;">
              RETRY REGISTRATION
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
import { verifyEmail } from '@/modules/auth/services/api'

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

.status-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.status-msg {
  font-size: 12px;
  font-weight: 800;
  color: var(--text-muted);
  text-align: center;
}

.spinner.large {
  width: 40px;
  height: 40px;
  border-width: 4px;
  margin: 20px auto;
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
  width: 100%;
  box-sizing: border-box;
}

.submit-btn:hover {
  background: var(--accent);
}

.error-msg {
  color: #EF4444;
  font-size: 12px;
  font-weight: 800;
  text-align: center;
  line-height: 1.5;
}

.success-msg {
  color: #10b981;
  font-size: 12px;
  font-weight: 800;
  text-align: center;
  line-height: 1.5;
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
