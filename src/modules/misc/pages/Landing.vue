<template>
  <div class="portal-landing">
    <!-- TOP NAV -->
    <header class="main-nav">
      <div class="brand">
        <span class="logo-mark">S</span>
        <span class="logo-text">GAMELIFT</span>
      </div>
      <div class="nav-actions">
        <router-link to="/login" class="nav-link">SIGN IN</router-link>
        <router-link to="/register" class="portal-btn primary small">GET STARTED</router-link>
      </div>
    </header>

    <main class="page-content">
      <!-- HERO SECTION -->
      <section class="immersive-hero">
        <div class="hero-poster" :style="{ backgroundImage: `url(https://picsum.photos/seed/landing/1920/1080)` }">
          <div class="hero-overlay"></div>
        </div>

        <div class="hero-details">
          <div class="hero-tag">PREMIUM CLOUD STREAMING</div>
          <h1 class="hero-title">NEXT-GEN<br>GAMING ON<br>ANY SCREEN.</h1>
          <p class="hero-copy">
            Deploy AAA titles instantly. Zero latency. Raw performance. 
            Experience gaming without the hardware limitations.
          </p>
          <div class="hero-actions">
            <router-link to="/register" class="portal-btn primary large">START PLAYING NOW</router-link>
            <router-link to="/login" class="portal-btn secondary large">BROWSE CATALOG</router-link>
          </div>
        </div>

        <div class="hero-footer-stats">
          <div class="stat-item">
            <span class="stat-val">4K</span>
            <span class="stat-lbl">RESOLUTION</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-val">120+</span>
            <span class="stat-lbl">FPS TARGET</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-val">0.5ms</span>
            <span class="stat-lbl">LATENCY</span>
          </div>
        </div>
      </section>

      <!-- VALUE SECTION -->
      <section class="value-pillars">
        <div class="pillar">
          <span class="pillar-num">01</span>
          <h3>BARE METAL POWER</h3>
          <p>Direct access to high-tier GPU hardware. No virtualization layers slowing you down.</p>
        </div>
        <div class="pillar">
          <span class="pillar-num">02</span>
          <h3>GLOBAL EDGE NODES</h3>
          <p>Strategically placed datacenters to ensure the lowest ping regardless of your location.</p>
        </div>
        <div class="pillar">
          <span class="pillar-num">03</span>
          <h3>UNIVERSAL ACCESS</h3>
          <p>Your library is available on mobile, tablet, or browser. High-end gaming is now mobile.</p>
        </div>
      </section>
    </main>

    <footer class="portal-footer">
      <div class="footer-bottom">
        <div class="brand">
          <span class="logo-mark">S</span>
          <span class="logo-text">GAMELIFT</span>
        </div>
        <p class="footer-meta">© 2026 GAMELIFT PORTAL // PRECISION ENGINEERED</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.portal-landing {
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
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

.nav-actions {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  font-size: 13px;
  font-weight: 800;
  color: var(--text-primary);
  text-decoration: none;
}

/* HERO SECTION */
.immersive-hero {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
}

.hero-poster {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0) 100%);
}

.hero-details {
  position: relative;
  z-index: 10;
  max-width: 800px;
}

.hero-tag {
  font-size: 12px;
  font-weight: 900;
  color: var(--accent);
  letter-spacing: 2px;
  margin-bottom: 24px;
}

.hero-title {
  font-size: 110px;
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -6px;
  margin-bottom: 40px;
}

.hero-copy {
  font-size: 20px;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 500px;
  margin-bottom: 60px;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.portal-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  text-decoration: none;
  transition: all 0.2s;
}

.portal-btn.primary {
  background: var(--text-primary);
  color: #fff;
}

.portal-btn.primary:hover {
  background: var(--accent);
}

.portal-btn.secondary {
  border: 2px solid var(--text-primary);
  color: var(--text-primary);
}

.portal-btn.large {
  padding: 24px 48px;
  font-size: 16px;
  letter-spacing: 1px;
}

.portal-btn.small {
  padding: 12px 24px;
  font-size: 12px;
}

.hero-footer-stats {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(20px);
  padding: 40px 100px;
  display: flex;
  align-items: center;
  gap: 60px;
  border-top: 1px solid var(--border-color);
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-val {
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -1px;
}

.stat-lbl {
  font-size: 10px;
  font-weight: 800;
  color: var(--text-muted);
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border-color);
}

/* VALUE PILLARS */
.value-pillars {
  padding: 120px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
}

.pillar-num {
  font-size: 14px;
  font-weight: 900;
  color: var(--accent);
  display: block;
  margin-bottom: 24px;
}

.pillar h3 {
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 16px;
}

.pillar p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-muted);
}

/* FOOTER */
.portal-footer {
  padding: 60px 100px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-meta {
  font-size: 10px;
  font-weight: 800;
  color: var(--text-muted);
  letter-spacing: 1px;
}
</style>


