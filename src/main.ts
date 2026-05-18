import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { loadRemoteConfig } from './shared/config/remoteConfig'
import App from './App.vue'
import router from './router'

async function init() {
 loadRemoteConfig()
  
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.mount('#app')
}

init()
