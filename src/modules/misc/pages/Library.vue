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
          <span class="nav-link active">LIBRARY</span>
        </nav>
      </div>

      <div class="nav-right">
        <div class="user-control" @click="router.push('/user-profile')">
          <span class="username">{{ authStore.user?.username || 'PLAYER ONE' }}</span>
          <div class="avatar">P</div>
        </div>
        <button class="logout-link" @click="handleLogout">LOGOUT</button>
      </div>
    </header>

    <main class="library-content">
      <div class="library-header">
        <div class="header-main">
          <h1 class="library-title">MY COLLECTION</h1>
          <p class="library-subtitle">{{ filteredGames.length }} TITLES READY FOR DEPLOYMENT</p>
        </div>
        <div class="library-search">
          <span class="search-icon">Q</span>
          <input type="text" v-model="searchQuery" placeholder="SEARCH COLLECTION..." />
        </div>
      </div>

      <div v-if="loading" class="portal-state">
        <div class="portal-loader"></div>
        <p>INITIALIZING COLLECTION...</p>
      </div>

      <div v-else-if="filteredGames.length === 0" class="portal-state empty">
        <p>Your library is currently empty.</p>
        <router-link to="/home" class="portal-btn primary">BROWSE DISCOVER</router-link>
      </div>

      <div v-else class="library-grid">
        <div v-for="game in filteredGames" :key="game.id" class="media-card" @click="playGame(game.id)">
          <div class="card-poster" :style="{ backgroundImage: `url(https://picsum.photos/seed/${game.id}/600/900)` }">
            <div class="status-tag">READY</div>
            <div class="card-hover-overlay">
              <span class="play-icon">▶</span>
            </div>
          </div>
          <div class="card-info">
            <h3>{{ game.game_name }}</h3>
            <p>LAST PLAYED: RECENTLY</p>
          </div>
        </div>
      </div>
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
const searchQuery = ref('')

async function loadGames() {
  loading.value = true
  try {
    const fetched = await fetchGames()
    games.value = fetched || []
  } catch (err) {
    console.error('Failed to load library:', err)
  } finally {
    loading.value = false
  }
}

const filteredGames = computed(() => {
  if (!searchQuery.value) return games.value
  return games.value.filter(g => 
    g.game_name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

function playGame(id) {
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

.nav-link:hover, .nav-link.active {
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

/* LIBRARY CONTENT */
.library-content {
  padding: 60px 100px;
  max-width: 1400px;
  margin: 0 auto;
}

.library-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;
}

.library-title {
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -2px;
}

.library-subtitle {
  font-size: 11px;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: 1px;
  margin-top: 8px;
}

.library-search {
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 2px solid var(--text-primary);
  padding: 8px 0;
  width: 300px;
}

.search-icon {
  font-weight: 900;
}

.library-search input {
  background: transparent;
  border: none;
  width: 100%;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.library-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 48px 32px;
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

.status-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #10B981;
  color: #fff;
  font-size: 9px;
  font-weight: 900;
  padding: 4px 8px;
  letter-spacing: 0.5px;
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
  width: 50px;
  height: 50px;
  background: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 8px 8px 0 var(--accent);
}

.card-info {
  margin-top: 16px;
}

.card-info h3 {
  font-size: 15px;
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
  height: 400px;
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

.portal-btn {
  padding: 14px 28px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
}

.portal-btn.primary {
  background: var(--text-primary);
  color: #fff;
}

@keyframes spin { to { transform: rotate(360deg); } }
</style>

