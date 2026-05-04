import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { loadRemoteConfig, getRemoteConfig } from '@/shared/config/remoteConfig'
import { baseLogger } from '@/shared/config/logger'
import App from './App.vue'
import router from './router'

async function init() {
  // Load configuration from config.json (prod/staging) or .env (dev)
  await loadRemoteConfig()
  baseLogger.info('Application initialized', { env: getRemoteConfig().VITE_APP_PROFILE });

  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.mount('#app')
}

init()
