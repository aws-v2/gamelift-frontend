<template>
  <div class="home-page">
    <header class="home-header">
      <div class="header-left">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="url(#hgrad)" />
          <path d="M14 28c0-2 1-3 3-3h14c2 0 3 1 3 3v2c0 2-1 3-3 3H17c-2 0-3-1-3-3v-2z" fill="#fff" opacity="0.9"/>
          <circle cx="19" cy="29" r="1.5" fill="#7c3aed"/>
          <circle cx="24" cy="29" r="1.5" fill="#7c3aed"/>
          <circle cx="29" cy="29" r="1.5" fill="#7c3aed"/>
          <path d="M16 22l8-8 8 8" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
            <linearGradient id="hgrad" x1="0" y1="0" x2="48" y2="48">
              <stop stop-color="#7c3aed"/>
              <stop offset="1" stop-color="#2563eb"/>
            </linearGradient>
          </defs>
        </svg>
        <span class="header-brand">Cloud Gaming</span>
      </div>
      <button id="logout-button" class="logout-btn" @click="handleLogout">
        Sign Out
      </button>
    </header>

    <main class="home-content">
      <div class="home-hero">
        <h1>Game Library</h1>
        <p>Choose a game to start playing instantly</p>
      </div>

      <div v-if="loading" class="home-loading">
        <div class="loader"></div>
        <p>Loading games...</p>
      </div>

      <div v-else-if="error" class="home-error">
        <p>{{ error }}</p>
        <button class="retry-btn" @click="loadGames">Retry</button>
      </div>

      <div v-else-if="games.length === 0" class="home-empty">
        <p>No games available at the moment.</p>
      </div>

      <div v-else class="games-grid">
        <div
          v-for="game in games"
          :key="game.id"
          class="game-card"
        >
          <div class="game-card-visual">
            <div class="game-card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
          </div>
          <div class="game-card-info">
            <h3 class="game-name">{{ game.name }}</h3>
            <button
              :id="'play-btn-' + game.id"
              class="play-btn"
              @click="playGame(game.id)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Play
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchGames } from '../services/api.js'

const router = useRouter()
const games = ref([])
const loading = ref(true)
const error = ref('')

async function loadGames() {
  loading.value = true
  error.value = ''
  try {
    games.value = await fetchGames()
  } catch (err) {
    error.value = 'Failed to load games. Please try again.'
  } finally {
    loading.value = false
  }
}

function playGame(id) {
  router.push(`/game/${id}`)
}

function handleLogout() {
  localStorage.removeItem('token')
  router.push('/login')
}

onMounted(loadGames)
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #0a0a0f;
}

.home-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-brand {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.3px;
}

.logout-btn {
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.2s;
}

.logout-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.home-content {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 32px;
}

.home-hero {
  margin-bottom: 40px;
}

.home-hero h1 {
  font-size: 32px;
  font-weight: 800;
  color: #fff;
  margin: 0 0 8px;
  letter-spacing: -0.5px;
}

.home-hero p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 15px;
  margin: 0;
}

.home-loading,
.home-error,
.home-empty {
  text-align: center;
  padding: 80px 0;
  color: rgba(255, 255, 255, 0.4);
}

.loader {
  width: 32px;
  height: 32px;
  border: 3px solid rgba(124, 58, 237, 0.2);
  border-top-color: #7c3aed;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.retry-btn {
  margin-top: 16px;
  padding: 10px 24px;
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: opacity 0.2s;
}

.retry-btn:hover {
  opacity: 0.9;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.game-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  animation: card-in 0.4s ease-out both;
}

.game-card:hover {
  transform: translateY(-4px);
  border-color: rgba(124, 58, 237, 0.3);
  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.1);
}

@keyframes card-in {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.game-card-visual {
  height: 140px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(37, 99, 235, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-card-icon {
  color: rgba(255, 255, 255, 0.15);
}

.game-card-info {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.game-name {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.play-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
  white-space: nowrap;
  flex-shrink: 0;
}

.play-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.play-btn:active {
  transform: translateY(0);
}
</style>
