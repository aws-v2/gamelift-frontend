<template>
  <div class="dashboard-page">
    <header class="top-nav overlay-nav">
      <div class="brand">
        <span class="logo-mark">[S]</span> <span class="logo-text">Serwin Games</span>
      </div>
      <nav class="nav-links">
        <span class="nav-item active">Discover</span>
        <span class="nav-item">Library</span>
        <span class="nav-item">Community</span>
      </nav>
      <div class="nav-actions">
        <span class="profile-name">Player One</span>
        <button id="logout-button" class="logout-btn" @click="handleLogout">
          LOGOUT <span class="arrow">×</span>
        </button>
      </div>
    </header>

    <main class="dashboard-content">
      <div v-if="loading" class="dash-state">
        <div class="loader"></div>
        <p>Syncing your library...</p>
      </div>

      <div v-else-if="error" class="dash-state">
        <p>{{ error }}</p>
        <button class="retry-btn" @click="loadGames">RETRY SYNC</button>
      </div>

      <div v-else-if="games.length === 0" class="dash-state">
        <p>Your library is empty. Discover new worlds.</p>
      </div>

      <template v-else>
        <!-- HERO SECTION -->
        <section class="dash-hero" :style="{ backgroundImage: `url(https://picsum.photos/seed/${heroGame.id}/1920/1080)` }">
          <div class="hero-vignette"></div>
          
          <div class="hero-content">
            <h1 class="hero-title">{{ heroGame.game_name }}</h1>
            
            <div class="hero-meta">
              <span class="meta-tag rating">★ 9.8/10</span>
              <span class="meta-tag popularity">TOP PICK</span>
            </div>
            
            <p class="hero-details">
              Action / Adventure • 2026 • 4K HDR
            </p>
            
            <p class="hero-desc">
              Continue your epic journey. Your last checkpoint was in the Shattered Peaks. The world awaits your return.
            </p>
            
            <div class="hero-actions">
              <button class="btn-primary" @click="viewDetails(heroGame.id)">
                <span class="icon">▶</span> PLAY
              </button>
              <button class="btn-secondary" @click="viewDetails(heroGame.id)">
                <span class="icon">ℹ</span> DETAILS
              </button>
            </div>
          </div>

          <!-- POSTERS CAROUSEL IN THE BOTTOM -->
          <div class="posters-container">
             <div class="posters-carousel">
                <div 
                  v-for="game in remainingGames" 
                  :key="game.id" 
                  class="poster-card"
                  @click="viewDetails(game.id)"
                >
                  <div class="poster-image" :style="{ backgroundImage: `url(https://picsum.photos/seed/${game.id}/600/400)` }"></div>
                  <div class="poster-overlay">
                    <h3 class="poster-title">{{ game.game_name }}</h3>
                  </div>
                </div>
             </div>
          </div>
        </section>
      </template>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
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
    const fetched = await fetchGames()
    games.value = fetched || []
  } catch (err) {
    error.value = 'Failed to sync workloads across nodes.'
  } finally {
    loading.value = false
  }
}

const heroGame = computed(() => games.value[0] || null)
// We still display the hero game in the carousel, or hide it. Let's show all games in the carousel to be more like a library.
const remainingGames = computed(() => games.value)

function viewDetails(id) {
  router.push(`/game-details/${id}`)
}

function handleLogout() {
  localStorage.removeItem('token')
  router.push('/login')
}

onMounted(loadGames)
</script>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  background-color: var(--bg-primary);
  position: relative;
  overflow: hidden; /* Hide body scroll if we make the hero 100vh exactly */
}

/* TOP NAV OVERLAY */
.top-nav.overlay-nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  border-bottom: none;
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-sans);
  font-size: 14px;
}

.brand {
  font-family: var(--font-sans);
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.logo-mark {
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-item {
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}

.nav-item.active {
  color: #fff;
  border-bottom: 2px solid #fff;
  padding-bottom: 4px;
}

.nav-item:hover {
  color: #fff;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.profile-name {
  color: #fff;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}

.logout-btn {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 16px;
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
}

.logout-btn:hover {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

/* STATE MESSAGES */
.dash-state {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--font-mono);
  color: var(--text-muted);
}

/* DASHBOARD CONTENT */
.dashboard-content {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

/* HERO CINEMATIC */
.dash-hero {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-vignette {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 100%), 
              linear-gradient(90deg, rgba(10, 10, 15, 0.9) 0%, rgba(10, 10, 15, 0.3) 50%, rgba(0,0,0,0) 100%),
              linear-gradient(0deg, rgba(10, 10, 15, 1) 0%, rgba(10, 10, 15, 0) 30%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 10;
  padding: 0 60px;
  max-width: 800px;
  margin-top: auto;
  margin-bottom: 300px; /* Leave space for bottom posters */
}

.hero-title {
  font-family: var(--font-serif);
  font-size: 90px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -2px;
  margin-bottom: 24px;
  text-shadow: 0 4px 12px rgba(0,0,0,0.8);
  font-style: italic;
  color: #fff;
  background: -webkit-linear-gradient(#fff, #a0d8f1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 12px;
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 600;
}

.meta-tag.rating {
  color: #eab308;
}

.meta-tag.popularity {
  color: #e5e5e5;
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero-details {
  font-family: var(--font-sans);
  color: rgba(255,255,255,0.7);
  font-size: 15px;
  margin-bottom: 24px;
}

.hero-desc {
  font-family: var(--font-sans);
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 40px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.8);
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.btn-primary {
  background: #3b82f6; /* Blueish to match Avatar vibe initially, or keep orange. Let's make it vivid blue/netflix style */
  background: var(--accent);
  color: #fff;
  border: none;
  padding: 16px 40px;
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s, background 0.2s;
  box-shadow: 0 4px 14px rgba(242, 84, 45, 0.4);
}

.btn-primary:hover {
  background: #d64724;
  transform: scale(1.05);
}

.btn-secondary {
  background: rgba(80, 80, 80, 0.6);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 40px;
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-secondary:hover {
  background: rgba(100, 100, 100, 0.8);
  border-color: #fff;
}

/* POSTERS CAROUSEL OVERLAYING BOTTOM */
.posters-container {
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
  z-index: 20;
  padding-left: 60px;
}

.posters-carousel {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 20px;
  padding-right: 60px;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

/* Hide scrollbar for cleaner UI */
.posters-carousel::-webkit-scrollbar {
  display: none;
}
.posters-carousel {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.poster-card {
  scroll-snap-align: start;
  flex: 0 0 260px;
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
}

.poster-card:hover {
  transform: translateY(-8px) scale(1.05);
  border-color: #fff;
  z-index: 30;
  box-shadow: 0 20px 40px rgba(0,0,0,0.8);
}

.poster-image {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.poster-card:hover .poster-image {
  transform: scale(1.1);
}

.poster-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  opacity: 0.9;
}

.poster-title {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0,0,0,0.8);
}
</style>
