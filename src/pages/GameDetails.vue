<template>
  <div class="details-page">
    <header class="top-nav overlay-nav">
      <div class="brand">
        <span class="logo-mark">[S]</span> <span class="logo-text">Serwin Games</span>
      </div>
      <nav class="nav-links">
        <router-link to="/home" class="nav-item">Library</router-link>
        <span class="nav-item active">Game Details</span>
      </nav>
      <div class="nav-actions">
        <router-link to="/home" class="nav-item">← BACK TO LIBRARY</router-link>
      </div>
    </header>

    <main class="details-content">
      <div v-if="loading" class="dash-state">
        <div class="loader"></div>
        <p>Loading game profile...</p>
      </div>
      
      <div v-else-if="error" class="dash-state">
        <p>{{ error }}</p>
        <router-link to="/home" class="retry-btn" style="text-decoration: none;">RETURN TO LIBRARY</router-link>
      </div>

      <template v-else-if="game">
        <section class="details-hero" :style="{ backgroundImage: `url(https://picsum.photos/seed/${game.id}/1920/1080)` }">
          <div class="hero-vignette"></div>
          
          <div class="details-container">
            <div class="poster-sidebar">
              <div class="poster" :style="{ backgroundImage: `url(https://picsum.photos/seed/${game.id}/600/900)` }"></div>
            </div>
            
            <div class="hero-content">
              <h1 class="hero-title">{{ game.game_name }}</h1>
              
              <div class="hero-meta">
                <span class="meta-tag match">98% COMPATIBILITY</span>
                <span class="meta-tag year">2026</span>
                <span class="meta-tag rating">RESTRICTED</span>
                <span class="meta-tag resolution">4K HDR</span>
              </div>
              
              <p class="hero-desc">
                Dive into a vast open world filled with mysteries. Build your character, forge alliances, and shape the destiny of the realm. Your journey awaits.
              </p>
              
              <div class="hero-actions">
                <button class="btn-primary" @click="playGame">
                  <span class="icon">▶</span> PLAY
                </button>
                <button class="btn-secondary">
                  ADD TO WISHLIST <span class="arrow">+</span>
                </button>
              </div>
              
              <div class="tech-specs">
                <div class="spec-col">
                  <h4>TIME PLAYED</h4>
                  <p>45 HOURS</p>
                </div>
                <div class="spec-col">
                  <h4>ACHIEVEMENTS</h4>
                  <p>12 / 50 UNLOCKED</p>
                </div>
                <div class="spec-col">
                  <h4>LAST SAVED</h4>
                  <p class="t-green">The Shattered Peaks</p>
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
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchGames } from '../services/api.js'

const route = useRoute()
const router = useRouter()
const gameId = route.params.id

const game = ref(null)
const loading = ref(true)
const error = ref('')

async function loadGameDetails() {
  loading.value = true
  error.value = ''
  try {
    // Instead of single fetch which might not exist, fetch all and filter
    const games = await fetchGames()
    const found = games.find(g => g.id === Number(gameId) || g.id === gameId)
    if (found) {
      game.value = found
    } else {
      error.value = 'Workload not found or access restricted.'
    }
  } catch (err) {
    error.value = 'Failed to fetch game metadata.'
  } finally {
    loading.value = false
  }
}

function playGame() {
  router.push(`/game/${gameId}`)
}

onMounted(loadGameDetails)
</script>

<style scoped>
.details-page {
  min-height: 100vh;
  background-color: var(--bg-primary);
  position: relative;
}

/* TOP NAV OVERLAY */
.top-nav.overlay-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: linear-gradient(to bottom, rgba(17, 17, 16, 0.9) 0%, rgba(17, 17, 16, 0) 100%);
  border-bottom: none;
  padding: 24px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.brand {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.logo-mark {
  color: var(--accent);
  font-family: var(--font-mono);
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
  text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}

.nav-item:hover, .nav-item.active {
  color: #fff;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 24px;
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

.loader {
  width: 32px;
  height: 32px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  margin-bottom: 24px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.retry-btn {
  margin-top: 16px;
  padding: 8px 16px;
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
  font-size: 11px;
  font-weight: 600;
  font-family: var(--font-mono);
  cursor: pointer;
  transition: background 0.2s;
  display: inline-block;
}

.retry-btn:hover {
  background: rgba(242, 84, 45, 0.1);
}

/* HERO CINEMATIC */
.details-hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

.hero-vignette {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at 70% 30%, rgba(17,17,16,0.2) 0%, rgba(17,17,16,0.9) 70%), 
              linear-gradient(0deg, var(--bg-primary) 0%, rgba(17,17,16,0) 50%);
  pointer-events: none;
}

.details-container {
  display: flex;
  gap: 60px;
  z-index: 10;
  padding: 0 48px;
  margin-top: 80px;
  width: 100%;
  max-width: 1400px;
}

.poster-sidebar {
  flex-shrink: 0;
  width: 300px;
}

.poster {
  width: 100%;
  aspect-ratio: 2 / 3;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.8);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: 64px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -1px;
  margin-bottom: 24px;
  text-shadow: 0 4px 12px rgba(0,0,0,0.8);
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  font-family: var(--font-mono);
  font-size: 11px;
}

.meta-tag {
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
}

.meta-tag.match {
  color: #10b981;
  font-weight: 700;
}

.meta-tag.resolution {
  border: 1px solid rgba(255,255,255,0.4);
  padding: 2px 6px;
  border-radius: 2px;
}

.hero-desc {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 40px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.8);
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 60px;
}

.btn-primary {
  background: #fff;
  color: #000;
  border: none;
  padding: 16px 32px;
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: transform 0.2s, background 0.2s;
  border-radius: 2px;
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: scale(1.05);
}

.btn-secondary {
  background: rgba(40, 40, 40, 0.7);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 32px;
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s;
  backdrop-filter: blur(5px);
  border-radius: 2px;
}

.btn-secondary:hover {
  background: rgba(60, 60, 60, 0.9);
  border-color: #fff;
}

/* TECH SPECS */
.tech-specs {
  display: flex;
  gap: 48px;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 32px;
}

.spec-col h4 {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-muted);
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.spec-col p {
  font-family: var(--font-sans);
  font-size: 14px;
  color: #fff;
}

.t-green {
  color: #10b981;
}
</style>
