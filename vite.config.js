import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8001,
    proxy: {
      '/login': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/games': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/offer': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.js'],
    include: [
      'src/**/*.unit.test.js',
      'src/**/*.api.test.js',
      'src/**/*.e2e.test.js',
    ],
  }
})
