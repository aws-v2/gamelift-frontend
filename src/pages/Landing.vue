<template>
  <div class="landing-page">
    <header class="top-nav">
      <div class="brand">
        <span class="logo-mark">[S]</span> <span class="logo-text">Serwin Games</span>
      </div>
      <nav class="nav-links">
        <span class="nav-item">01 MANIFESTO</span>
        <span class="nav-item">02 CAPABILITIES</span>
        <span class="nav-item">03 PROTOCOLS</span>
      </nav>
      <div class="nav-actions">
        <span class="status-indicator"><span class="dot"></span> NODE - SECURE</span>
        <router-link to="/login" class="login-btn">ENTER SYSTEM</router-link>
      </div>
    </header>

    <main>
      <section class="hero-section">
        <div class="hero-meta">
          <span class="coord">LAT // 01°17'S • 36°49'E</span>
          <br>
          <span class="version">V.2026.04 — STABLE</span>
        </div>
        <div class="hero-content">
          <p class="hero-label"><span class="dot orange"></span> PROTOCOL - ALPHA</p>
          <p class="hero-intro">A CLOUD-NATIVE INFRASTRUCTURE DELIVERING<br>RAW HARDWARE ACCELERATION. ESTABLISHED NAIROBI,<br>OPERATING GLOBALLY.</p>
          <h1 class="hero-title">
            We build<br>
            <span class="t-orange">cloud gaming</span> experiences that refuse<br>
            to be ignored.
          </h1>
          <div class="hero-bottom">
            <p class="hero-desc">
              Serwin Games is a <i>product-grade</i> streaming<br>
              studio shipping bare-metal VMs, AI systems, and<br>
              zero-latency infrastructure for players<br>
              that need it to actually work on Monday morning.
            </p>
            <div class="hero-action-area">
              <div class="stats">
                <span class="stat-num">07</span>
                <span class="stat-label">ACTIVE<br>NODES<br><span class="muted">Q2 • 2026</span></span>
              </div>
              <router-link to="/register" class="cta-button">INITIALIZE <span class="arrow">↗</span></router-link>
            </div>
          </div>
        </div>
      </section>

      <div class="ticker-banner">
        <div class="ticker-content">
          <span><span class="orange-text">♦</span> 01 RAW PERFORMANCE</span>
          <span><span class="orange-text">♦</span> 02 ZERO LATENCY</span>
          <span><span class="orange-text">♦</span> 03 BARE METAL</span>
          <span><span class="orange-text">♦</span> 04 NO COMPROMISES</span>
        </div>
      </div>

      <section class="manifesto-section">
        <h2 class="section-title"><span class="section-num">§ 01 — MANIFESTO</span> A manifesto, because <i>every player should have one</i>, and most don't.</h2>
        <div class="tenets-grid">
          <div class="tenet">
            <span class="tenet-num">TENET 01</span>
            <h3>We build <span class="t-orange">systems</span>, not promises.</h3>
            <p>A sleek UI is not a product. We spend 10% of our time on flashy designs, 90% on infrastructure. Frames live in production, not in mockups.</p>
          </div>
          <div class="tenet">
            <span class="tenet-num">TENET 02</span>
            <h3>Latency is <span class="t-orange">non-negotiable</span>.</h3>
            <p>Ping behaves differently in New York than in Nairobi. Latency is a human experience. We design for the network, the hardware, and the actual player.</p>
          </div>
          <div class="tenet">
            <span class="tenet-num">TENET 03</span>
            <h3>Hardware is <span class="t-orange">universal</span>.</h3>
            <p>You don't need a massive rig to play AAA titles. We provide the computing power heavily optimized through our datacenters, letting you play on any screen.</p>
          </div>
          <div class="tenet">
            <span class="tenet-num">TENET 04</span>
            <h3>No <span class="t-orange">walled gardens</span>.</h3>
            <p>Bring your own libraries, or tap into ours. Open protocols, transparent provisioning, and dedicated compute power designed with the community in mind.</p>
          </div>
        </div>
      </section>

      <section class="hardware-section">
        <div class="hardware-container">
          <div class="hardware-text">
            <p class="hero-label"><span class="dot orange"></span> RIG // SPECIFICATIONS</p>
            <h2 class="hardware-title">Bare metal, <span class="t-orange">unleashed</span>.</h2>
            <p class="hardware-desc">Every session runs on isolated, high-tier GPU instances optimized for maximum throughput. We bypass virtualization layers where it counts to deliver frames exactly when you need them.</p>
          </div>
          <div class="hardware-specs">
            <div class="spec-item">
              <h4>GPU ARCHITECTURE</h4>
              <p>RTX 4080 Equivalent / 16GB VRAM</p>
            </div>
            <div class="spec-item">
              <h4>COMPUTE THREADS</h4>
              <p>16-Core Zen 4 Threadrippers</p>
            </div>
            <div class="spec-item">
              <h4>MEMORY</h4>
              <p>32GB DDR5-6000</p>
            </div>
            <div class="spec-item">
              <h4>STORAGE</h4>
              <p>NVMe PCIe Gen4 x4</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand">
            <span class="logo-mark">[S]</span> <span class="logo-text">Serwin Games</span>
          </div>
          <p>An engineering practice. We build cloud gaming infrastructure that works on day one and is still working on day one thousand.</p>
        </div>
        <div class="footer-links">
          <h4>STUDIO</h4>
          <a href="#">Manifesto</a>
          <a href="#">Capabilities</a>
          <a href="#">Work</a>
          <a href="#">About</a>
        </div>
        <div class="footer-links">
          <h4>CONTACT</h4>
          <a href="#">Email</a>
          <a href="#">Book a Call</a>
          <a href="#">Careers</a>
        </div>
        <div class="footer-extra">
          <p>© 2026 SERWIN GAMES — REGISTERED NBO, KE</p>
          <p class="t-orange">BUILT WITH INTENT - NOT TEMPLATES</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
}

/* TOP NAV */
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 1px solid var(--border-color);
}

.brand {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
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
  color: var(--text-muted);
  transition: color 0.2s;
  cursor: pointer;
}

.nav-item:hover {
  color: var(--text-primary);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
}

.dot {
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.dot.orange {
  background: var(--accent);
}

@keyframes pulse {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}

.login-btn {
  border: 1px solid var(--border-color);
  padding: 8px 16px;
  transition: all 0.2s;
}

.login-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* HERO SECTION */
.hero-section {
  padding: 100px 48px;
  position: relative;
}

.hero-meta {
  position: absolute;
  top: 40px;
  right: 48px;
  text-align: right;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  line-height: 1.8;
}

.hero-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  letter-spacing: 1px;
}

.hero-intro {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 32px;
  letter-spacing: 1px;
  line-height: 1.6;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: 100px;
  font-weight: 500;
  line-height: 0.95;
  letter-spacing: -2px;
  margin-bottom: 80px;
}

.t-orange {
  color: var(--accent);
  font-style: italic;
}

.hero-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.hero-desc {
  font-size: 17px;
  color: var(--text-primary);
}

.hero-desc i {
  font-family: var(--font-serif);
  color: var(--accent);
}

.hero-action-area {
  display: flex;
  align-items: center;
  gap: 40px;
}

.stats {
  text-align: right;
  display: flex;
  align-items: center;
  gap: 16px;
}

.stat-num {
  font-family: var(--font-serif);
  font-size: 40px;
}

.stat-label {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-muted);
  line-height: 1.4;
  text-align: left;
}

.cta-button {
  background: var(--accent);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 1px;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: transform 0.2s, background 0.2s;
  text-decoration: none;
}

.cta-button:hover {
  transform: translateY(-2px);
  background: #d64724;
}

.arrow {
  font-size: 16px;
}

/* TICKER */
.ticker-banner {
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  padding: 20px 0;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 24px;
  overflow: hidden;
  white-space: nowrap;
}

.ticker-content {
  display: inline-flex;
  gap: 60px;
  animation: scroll 20s linear infinite;
}

.orange-text {
  color: var(--accent);
  font-style: normal;
  font-size: 16px;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* MANIFESTO */
.manifesto-section {
  padding: 100px 48px;
}

.section-title {
  font-family: var(--font-serif);
  font-size: 64px;
  font-weight: 500;
  max-width: 800px;
  line-height: 1.1;
  letter-spacing: -1px;
  margin-bottom: 80px;
  position: relative;
}

.section-num {
  position: absolute;
  top: 12px;
  left: -120px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 1px;
}

.tenets-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border-top: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
}

.tenet {
  padding: 48px;
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  position: relative;
}

.tenet-num {
  position: absolute;
  top: 24px;
  left: 24px;
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-muted);
}

.tenet h3 {
  font-family: var(--font-serif);
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 24px;
  margin-top: 24px;
}

.tenet p {
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.8;
  max-width: 400px;
}

/* HARDWARE SECTION */
.hardware-section {
  padding: 100px 48px;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.hardware-container {
  display: flex;
  gap: 80px;
}

.hardware-text {
  flex: 1;
}

.hardware-title {
  font-family: var(--font-serif);
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 24px;
}

.hardware-desc {
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.8;
  max-width: 500px;
}

.hardware-specs {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.spec-item {
  border-top: 1px solid var(--accent);
  padding-top: 16px;
}

.spec-item h4 {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.spec-item p {
  font-family: var(--font-serif);
  font-size: 18px;
  color: var(--text-primary);
}

/* FOOTER */
.site-footer {
  padding: 64px 48px;
  background: var(--bg-primary);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 48px;
}

.footer-brand p {
  color: var(--text-muted);
  font-size: 13px;
  margin-top: 16px;
  line-height: 1.6;
  max-width: 300px;
}

.footer-links h4 {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 24px;
  letter-spacing: 1px;
}

.footer-links a {
  display: block;
  color: var(--text-primary);
  font-size: 14px;
  margin-bottom: 12px;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--accent);
}

.footer-extra {
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
}

.footer-extra p {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-muted);
  letter-spacing: 1px;
}

.footer-extra .t-orange {
  color: var(--accent);
}
</style>
