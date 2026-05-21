<template>
  <div class="portal-page">
    <!-- NAVIGATION (Matches Home.vue) -->
    <header class="main-nav">
      <div class="nav-left">
        <div class="brand" @click="router.push('/home')">
          <span class="logo-mark">S</span>
          <span class="logo-text">GAMELIFT</span>
        </div>
        <nav class="nav-links">
          <router-link to="/home" class="nav-link">DISCOVER</router-link>
          <router-link to="/library" class="nav-link">LIBRARY</router-link>
        </nav>
      </div>

      <div class="nav-right">
        <div class="user-control active">
          <span class="username">{{ authStore.user?.username || 'PLAYER ONE' }}</span>
          <div class="avatar">P</div>
        </div>
        <button class="logout-link" @click="handleLogout">LOGOUT</button>
      </div>
    </header>

    <main class="profile-content">
      <div class="profile-layout">
        <aside class="profile-sidebar">
          <h2 class="sidebar-title">SETTINGS</h2>
          <nav class="sidebar-nav">
            <button 
              class="sidebar-item" 
              :class="{ active: activeTab === 'account' }"
              @click="activeTab = 'account'"
            >
              ACCOUNT DETAILS
            </button>
            <button 
              class="sidebar-item" 
              :class="{ active: activeTab === 'billing' }"
              @click="activeTab = 'billing'"
            >
              BILLING & PAYMENTS
            </button>
          </nav>
        </aside>

        <section class="profile-main">
          <!-- ACCOUNT DETAILS -->
          <div v-if="activeTab === 'account'" class="portal-section">
            <h1 class="section-title">ACCOUNT DETAILS</h1>
            <p class="section-subtitle">MANAGE YOUR PROFILE AND SECURITY SETTINGS</p>
            
            <div class="form-grid">
              <div class="form-group">
                <label>USERNAME</label>
                <input type="text" v-model="userForm.username" placeholder="ENTER USERNAME" />
              </div>
              <div class="form-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" v-model="userForm.email" placeholder="ENTER EMAIL" />
              </div>
              <div class="form-group">
                <label>NEW PASSWORD</label>
                <input type="password" v-model="userForm.password" placeholder="••••••••" />
                <p class="help-text">LEAVE BLANK TO RETAIN CURRENT PASSWORD.</p>
              </div>
            </div>
            
            <div class="form-actions">
              <button class="portal-btn primary" @click="saveAccount">SAVE CHANGES</button>
            </div>
          </div>

          <!-- BILLING & PAYMENTS -->
          <div v-if="activeTab === 'billing'" class="portal-section">
            <h1 class="section-title">BILLING & PAYMENTS</h1>
            <p class="section-subtitle">MANAGE YOUR SUBSCRIPTION AND PAYMENT METHODS</p>

            <div class="billing-container">
              <div class="method-selector">
                <button 
                  class="method-btn" 
                  :class="{ active: paymentMethod === 'card' }"
                  @click="paymentMethod = 'card'"
                >
                  CREDIT CARD
                </button>
                <button 
                  class="method-btn" 
                  :class="{ active: paymentMethod === 'mpesa' }"
                  @click="paymentMethod = 'mpesa'"
                >
                  M-PESA
                </button>
              </div>

              <!-- CARD FORM -->
              <div v-if="paymentMethod === 'card'" class="payment-fields">
                <div class="form-group">
                  <label>CARDHOLDER NAME</label>
                  <input type="text" placeholder="JOHN DOE" />
                </div>
                <div class="form-group">
                  <label>CARD NUMBER</label>
                  <input type="text" placeholder="0000 0000 0000 0000" />
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label>EXPIRY DATE</label>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div class="form-group">
                    <label>CVV</label>
                    <input type="password" placeholder="•••" />
                  </div>
                </div>
              </div>

              <!-- MPESA FORM -->
              <div v-if="paymentMethod === 'mpesa'" class="payment-fields">
                <div class="form-group">
                  <label>M-PESA PHONE NUMBER</label>
                  <div class="input-with-prefix">
                    <span class="prefix">+254</span>
                    <input type="text" placeholder="712 345 678" />
                  </div>
                  <p class="help-text">YOU WILL RECEIVE AN STK PUSH TO AUTHORIZE TRANSACTIONS.</p>
                </div>
              </div>
            </div>

            <div class="form-actions">
              <button class="portal-btn primary" @click="saveBilling">UPDATE BILLING</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/modules/auth/store/authStore'

const router = useRouter()
const authStore = useAuthStore()

const activeTab = ref('account')
const paymentMethod = ref('card')

const userForm = reactive({
  username: authStore.user?.username || '',
  email: authStore.user?.email || '',
  password: ''
})

function handleLogout() {
  authStore.logout()
  router.push('/login')
}

function saveAccount() {
  console.log('Saving account:', userForm)
}

function saveBilling() {
  console.log('Saving billing for:', paymentMethod.value)
}
</script>

<style scoped>
.portal-page {
  min-height: 100vh;
  background-color: var(--bg-primary);
}

/* NAVIGATION (Sync with Home.vue) */
.main-nav {
  height: 80px;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 60px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
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

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-muted);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 40px;
}

.user-control {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}

.user-control.active .username {
  color: var(--accent);
}

.username {
  font-size: 12px;
  font-weight: 800;
}

.avatar {
  width: 36px;
  height: 36px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
}

.logout-link {
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
}

/* PROFILE CONTENT */
.profile-content {
  padding: 80px 100px;
  max-width: 1400px;
  margin: 0 auto;
}

.profile-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 100px;
}

.sidebar-title {
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 2px;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sidebar-item {
  text-align: left;
  padding: 16px 20px;
  font-size: 12px;
  font-weight: 800;
  color: var(--text-primary);
  border: 1px solid transparent;
  transition: all 0.2s;
}

.sidebar-item:hover {
  background: var(--bg-secondary);
}

.sidebar-item.active {
  background: var(--text-primary);
  color: #fff;
}

/* MAIN SECTION */
.section-title {
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -2px;
  margin-bottom: 8px;
}

.section-subtitle {
  font-size: 11px;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: 1px;
  margin-bottom: 60px;
}

.form-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 500px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-group label {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.form-group input {
  padding: 16px;
  border: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 600;
  background: var(--bg-secondary);
}

.form-group input:focus {
  border-color: var(--text-primary);
  background: #fff;
}

.help-text {
  font-size: 10px;
  font-weight: 700;
  color: var(--text-muted);
}

.form-actions {
  margin-top: 60px;
}

.portal-btn {
  padding: 18px 40px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1px;
}

.portal-btn.primary {
  background: var(--text-primary);
  color: #fff;
}

/* BILLING */
.billing-container {
  max-width: 500px;
}

.method-selector {
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
}

.method-btn {
  flex: 1;
  padding: 14px;
  font-size: 12px;
  font-weight: 800;
  border: 1px solid var(--border-color);
  color: var(--text-muted);
}

.method-btn.active {
  border-color: var(--text-primary);
  background: var(--bg-secondary);
  color: var(--text-primary);
}

.payment-fields {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.input-with-prefix {
  display: flex;
  border: 1px solid var(--border-color);
}

.prefix {
  padding: 16px;
  background: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 800;
}

.input-with-prefix input {
  border: none;
  flex: 1;
}
</style>