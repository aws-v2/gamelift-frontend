<template>
  <div class="portal-page">
    <!-- NAVIGATION -->
    <header class="main-nav">
      <div class="nav-left">
        <div class="brand" @click="router.push('/home')">
          <span class="logo-mark">S</span>
          <span class="logo-text">GAMELIFT</span>
        </div>
        <nav class="nav-links">
          <span class="nav-link active">DISCOVER</span>
          <router-link to="/library" class="nav-link">LIBRARY</router-link>
        </nav>
      </div>

      <div class="nav-right">
        <div class="search-trigger">
          <span class="icon">Q</span>
          SEARCH
        </div>
        <div class="user-control" @click="router.push('/user-profile')">
          <span class="username">{{ authStore.user?.username || 'PLAYER ONE' }}</span>
          <div class="avatar">
            <img v-if="authStore.user?.avatar" :src="authStore.user.avatar" />
            <span v-else>P</span>
          </div>
        </div>
        <button class="logout-link" @click="handleLogout">LOGOUT</button>
      </div>
    </header>

    <!-- HERO BANNER (Immersive Netflix-style) -->
    <main class="portal-content">
      <div v-if="loading" class="portal-state">
        <div class="portal-loader"></div>
        <p>SYNCHRONIZING REPOSITORIES...</p>
      </div>

      <div v-else-if="error" class="portal-state error">
        <p>{{ error }}</p>
        <button class="portal-btn secondary" @click="loadGames">RELOAD</button>
      </div>

      <template v-else-if="heroGame">
        <section class="hero-banner" @click="viewDetails(heroGame.id)">
          <div class="hero-bg" :style="{ backgroundImage: `url(https://picsum.photos/seed/${heroGame.id}/1920/1080)` }">
            <div class="hero-overlay"></div>
          </div>
          
          <div class="hero-details">
            <div class="hero-type">FEATURED SELECTION</div>
            <h1 class="hero-title">{{ heroGame.game_name }}</h1>
            <p class="hero-synopsis">
              Enter the next generation of cloud gaming. High-fidelity visuals meet zero-latency performance. 
              Your session is ready for immediate deployment.
            </p>
            <div class="hero-actions">
              <button class="portal-btn primary" @click.stop="viewDetails(heroGame.id)">PLAY NOW</button>
              <button class="portal-btn secondary" @click.stop="viewDetails(heroGame.id)">VIEW SPECS</button>
            </div>
          </div>
        </section>

        <!-- MEDIA ROWS -->
        <div class="portal-rows">
          <section class="media-row">
            <div class="row-header">
              <h2 class="row-title">TRENDING NOW</h2>
              <router-link to="/library" class="row-link">BROWSE ALL ›</router-link>
            </div>
            <div class="row-grid">
              <div v-for="game in remainingGames.slice(0, 4)" :key="game.id" class="media-card" @click="viewDetails(game.id)">
                <div class="card-poster" :style="{ backgroundImage: `url(https://picsum.photos/seed/${game.id}/600/900)` }">
                  <div class="card-hover-overlay">
                    <span class="play-icon">▶</span>
                  </div>
                </div>
                <div class="card-info">
                  <h3>{{ game.game_name }}</h3>
                  <p>NEW ARRIVAL • 4K HDR</p>
                </div>
              </div>
            </div>
          </section>

          <section class="media-row">
            <div class="row-header">
              <h2 class="row-title">RECENTLY ADDED</h2>
            </div>
            <div class="row-grid horizontal">
              <div v-for="game in remainingGames.slice(4)" :key="game.id" class="media-card horiz" @click="viewDetails(game.id)">
                <div class="card-poster" :style="{ backgroundImage: `url(https://picsum.photos/seed/${game.id}/1200/600)` }">
                  <div class="card-hover-overlay">
                    <span class="play-icon">▶</span>
                  </div>
                </div>
                <div class="card-info">
                  <h3>{{ game.game_name }}</h3>
                </div>
              </div>
            </div>
          </section>
        </div>
      </template>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/modules/auth/store/authStore'
import { fetchGames } from '@/modules/misc/services/api'

const router = useRouter()
const authStore = useAuthStore()
const games = ref([])
const loading = ref(true)
const error = ref('')

async function loadGames() {
  loading.value = true
  error.value = ''
  try {
    const fetched = await fetchGames()
    games.value = fetched || []
  } catch (err) {
    error.value = 'CONNECTION ERROR: UNABLE TO SYNC COLLECTION.'
  } finally {
    loading.value = false
  }
}

const heroGame = computed(() => games.value[0] || null)
const remainingGames = computed(() => games.value.slice(1))

function viewDetails(id) {
  router.push(`/game-details/${id}`)
}

function handleLogout() {
  authStore.logout()
  router.push('/login')
}

onMounted(loadGames)
</script>

<style scoped>
.portal-page {
  min-height: 100vh;
  background-color: var(--bg-primary);
  display: flex;
  flex-direction: column;
}

/* NAVIGATION */
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
  cursor: pointer;
  transition: color 0.2s;
  letter-spacing: 0.5px;
}

.nav-link:hover, .nav-link.active {
  color: var(--text-primary);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 40px;
}

.search-trigger {
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.search-trigger .icon { font-weight: 900; }

.user-control {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}

.username {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
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
  font-size: 14px;
}

.logout-link {
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
}

.logout-link:hover { color: #EF4444; }

/* HERO BANNER */
.portal-content {
  flex: 1;
}

.hero-banner {
  position: relative;
  height: 85vh;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-banner:hover .hero-bg {
  transform: scale(1.05);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, var(--bg-primary) 0%, rgba(255,255,255,0) 40%),
              linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 50%);
}

.hero-details {
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
  max-width: 800px;
}

.hero-type {
  font-size: 12px;
  font-weight: 900;
  color: var(--accent);
  letter-spacing: 2px;
  margin-bottom: 24px;
}

.hero-title {
  font-size: 100px;
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -5px;
  margin-bottom: 32px;
  text-transform: uppercase;
}

.hero-synopsis {
  font-size: 18px;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 48px;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 16px;
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

.portal-btn.primary:hover {
  background: var(--accent);
}

.portal-btn.secondary {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
}

.portal-btn.secondary:hover {
  border-color: var(--text-primary);
}

/* MEDIA ROWS */
.portal-rows {
  margin-top: -120px;
  position: relative;
  z-index: 20;
  padding: 0 60px 100px;
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.media-row {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.row-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.row-title {
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 1px;
}

.row-link {
  font-size: 11px;
  font-weight: 800;
  color: var(--text-muted);
}

.row-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.row-grid.horizontal {
  grid-template-columns: repeat(3, 1fr);
}

.media-card {
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.media-card:hover {
  transform: translateY(-8px);
}

.card-poster {
  aspect-ratio: 2 / 3;
  background-size: cover;
  background-position: center;
  border: 1px solid var(--border-color);
  position: relative;
}

.horiz .card-poster {
  aspect-ratio: 16 / 9;
}

.card-hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(249, 115, 22, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
}

.media-card:hover .card-hover-overlay {
  opacity: 1;
}

.play-icon {
  width: 60px;
  height: 60px;
  background: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 10px 10px 0 var(--accent);
}

.card-info {
  margin-top: 16px;
}

.card-info h3 {
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
}

.card-info p {
  font-size: 10px;
  font-weight: 700;
  color: var(--text-muted);
  margin-top: 4px;
}

/* PORTAL STATES */
.portal-state {
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  font-weight: 800;
  font-size: 12px;
  color: var(--text-muted);
}

.portal-loader {
  width: 40px;
  height: 40px;
  border: 4px solid var(--bg-secondary);
  border-top-color: var(--accent);
  animation: spin 1s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }
</style>


