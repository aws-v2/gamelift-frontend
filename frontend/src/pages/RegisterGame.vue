<template>
  <div class="register-page">
    <header class="home-header">
      <div class="header-left">
        <router-link to="/home" class="back-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </router-link>
        <span class="header-brand">Register Game</span>
      </div>
    </header>

    <main class="register-content">
      <div class="form-container">
        <h1>Upload New Game</h1>
        <p>Register a new game or media bundle.</p>

        <form @submit.prevent="handleSubmit" class="register-form" v-if="!successData">
          <div class="form-group">
            <label for="game_name">Game Name</label>
            <input id="game_name" v-model="form.game_name" type="text" required placeholder="e.g. Cyberpunk 2077" />
          </div>

          <div class="form-group">
            <label for="vm_id">VM Identifier</label>
            <input id="vm_id" v-model="form.vm_id" type="text" required placeholder="e.g. vm-xlarge-gpu" />
          </div>

          <div class="form-group">
            <label for="file">Media Payload (.mp4, .exe, .zip)</label>
            <input id="file" type="file" @change="handleFileChange" required />
          </div>

          <div v-if="error" class="error-toast">
            {{ error }}
          </div>

          <button type="submit" class="submit-btn" :disabled="loading">
            <span v-if="loading">{{ uploadStatus }}</span>
            <span v-else>Register Game</span>
          </button>
        </form>

        <div v-else class="success-container">
          <div class="success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2>Game Registered Successfully!</h2>
          
          <div class="success-details">
            <div class="detail-row">
              <span class="detail-label">Game Name</span>
              <span class="detail-value">{{ successData.game_name || form.game_name }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">VM ID</span>
              <span class="detail-value">{{ successData.vm_id || form.vm_id }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Game ID</span>
              <span class="detail-value">{{ successData.game_id || successData.temporary_game_id }}</span>
            </div>
            <div v-if="successData.arn" class="detail-row highlight-row">
              <span class="detail-label">ARN</span>
              <span class="detail-value arn-value">{{ successData.arn }}</span>
            </div>
          </div>

          <button class="submit-btn new-upload-btn" @click="resetForm">Register Another</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { initUpload, uploadToS3 } from '../services/api.js'

const form = ref({
  game_name: '',
  vm_id: ''
})
const selectedFile = ref(null)

const loading = ref(false)
const uploadStatus = ref('')
const error = ref('')
const successData = ref(null)

function handleFileChange(event) {
  if (event.target.files.length > 0) {
    selectedFile.value = event.target.files[0]
  }
}

async function handleSubmit() {
  if (!form.value.game_name || !form.value.vm_id || !selectedFile.value) {
    error.value = 'Please fill out all fields and select a file.'
    return
  }

  loading.value = true
  error.value = ''
  
  try {
    // Step 1: Initializing Upload (Get Presigned URL)
    uploadStatus.value = 'Initializing upload...'
    const initData = await initUpload({
      game_name: form.value.game_name,
      vm_id: form.value.vm_id
    })

    const { upload_url, url, game_id, temporary_game_id } = initData
    const finalUrl = upload_url || url
    const finalGameId = game_id || temporary_game_id

    if (!finalUrl) {
      throw new Error('Failed to get upload URL from server')
    }

    // Step 2: Upload Binary directly to S3
    uploadStatus.value = 'Uploading file to storage...'
    await uploadToS3(finalUrl, selectedFile.value)

    // Success!
    successData.value = initData
    uploadStatus.value = ''
  } catch (err) {
    error.value = err.message || 'An error occurred during upload. Please try again.'
  } finally {
    loading.value = false
  }
}

function resetForm() {
  successData.value = null
  form.value.game_name = ''
  form.value.vm_id = ''
  selectedFile.value = null
  
  const fileInput = document.getElementById('file')
  if (fileInput) {
    fileInput.value = ''
  }
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: #0a0a0f;
  color: #fff;
  font-family: 'Inter', sans-serif;
}

.home-header {
  display: flex;
  align-items: center;
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
  gap: 16px;
}

.back-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.back-link:hover {
  color: #fff;
}

.header-brand {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.3px;
  padding-left: 16px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.register-content {
  max-width: 600px;
  margin: 0 auto;
  padding: 60px 32px;
}

.form-container {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
}

.form-container h1 {
  font-size: 28px;
  font-weight: 800;
  margin: 0 0 8px;
  background: linear-gradient(135deg, #fff, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.form-container p {
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 32px;
  font-size: 15px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
}

.form-group input[type="text"] {
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 14px 16px;
  color: #fff;
  font-size: 15px;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
}

.form-group input[type="text"]:focus {
  outline: none;
  border-color: #7c3aed;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
}

.form-group input[type="file"] {
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: 1px dashed rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 20px 16px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
  box-sizing: border-box;
}

.form-group input[type="file"]:hover {
  background: rgba(124, 58, 237, 0.05);
  border-color: rgba(124, 58, 237, 0.4);
}

.submit-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.error-toast {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #f87171;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 14px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
}

.success-container {
  text-align: center;
  animation: fade-in 0.5s ease-out;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.success-icon {
  width: 64px;
  height: 64px;
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 24px;
}

.success-icon svg {
  width: 32px;
  height: 32px;
}

.success-container h2 {
  font-size: 24px;
  margin: 0 0 24px;
  color: #fff;
}

.success-details {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  text-align: left;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-label {
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  font-weight: 500;
}

.detail-value {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  word-break: break-all;
  max-width: 60%;
  text-align: right;
}

.highlight-row {
  background: rgba(124, 58, 237, 0.1);
  margin: 8px -12px -12px;
  padding: 16px 12px;
  border-radius: 8px;
  border-bottom: none;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

.highlight-row .detail-label {
  color: #a78bfa;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.arn-value {
  font-size: 16px;
  color: #fff;
  max-width: 100%;
  text-align: center;
  font-family: monospace;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid rgba(124, 58, 237, 0.2);
  user-select: all;
}

.new-upload-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.new-upload-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
