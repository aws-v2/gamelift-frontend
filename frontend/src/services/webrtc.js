import { sendOffer } from './api.js'

let peerConnection = null
let remoteStream = null

export async function startWebRTC(videoElement) {
  if (!videoElement) {
    throw new Error('[WebRTC] videoElement is required')
  }

  // Clean up any existing connection before starting a new one
  stopWebRTC()

  const config = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  }

  peerConnection = new RTCPeerConnection(config)
  remoteStream = new MediaStream()

  // Attach stream immediately
  videoElement.srcObject = remoteStream

  // Handle incoming tracks (single clean handler)
  peerConnection.addEventListener('track', (event) => {
    const track = event.track
    console.log('[WebRTC] Track received:', track.kind)

    // Add track safely (avoid duplicates)
    if (!remoteStream.getTracks().includes(track)) {
      remoteStream.addTrack(track)
    }

    // Debug info
    if (track.kind === 'video') {
      console.log('[WebRTC] VIDEO TRACK ACTIVE')
    } else if (track.kind === 'audio') {
      console.log('[WebRTC] AUDIO TRACK ACTIVE')
    }

    // Ensure playback starts
    videoElement.play().catch((e) => {
      console.warn('[WebRTC] Autoplay issue:', e)
    })
  })

  // ICE state debugging + auto-cleanup on failure
  peerConnection.addEventListener('iceconnectionstatechange', () => {
    const state = peerConnection?.iceConnectionState
    console.log('[WebRTC] ICE state:', state)

    if (state === 'failed' || state === 'closed') {
      console.warn('[WebRTC] Connection lost, cleaning up')
      stopWebRTC()
    }
  })

  // Request media from server
  peerConnection.addTransceiver('video', { direction: 'recvonly' })
  peerConnection.addTransceiver('audio', { direction: 'recvonly' })

  // Create offer
  const offer = await peerConnection.createOffer()
  await peerConnection.setLocalDescription(offer)

  // Wait for ICE gathering
  await waitForIceGatheringComplete(peerConnection)

  try {
    const answer = await sendOffer(peerConnection.localDescription)
    await peerConnection.setRemoteDescription(new RTCSessionDescription(answer))
    console.log('[WebRTC] Connection established')
  } catch (err) {
    console.error('[WebRTC] Failed to negotiate:', err)
    stopWebRTC()
    throw err
  }

  return peerConnection
}

// Helper (cleaner than inline Promise)
function waitForIceGatheringComplete(pc) {
  return new Promise((resolve) => {
    if (pc.iceGatheringState === 'complete') {
      resolve()
    } else {
      const checkState = () => {
        if (pc.iceGatheringState === 'complete') {
          pc.removeEventListener('icegatheringstatechange', checkState)
          resolve()
        }
      }
      pc.addEventListener('icegatheringstatechange', checkState)
    }
  })
}

export function stopWebRTC() {
  if (peerConnection) {
    // Remove all event listeners to prevent callbacks after close
    peerConnection.ontrack = null
    peerConnection.oniceconnectionstatechange = null
    peerConnection.onicecandidate = null
    try {
      peerConnection.close()
    } catch (_) {}
    peerConnection = null
  }

  if (remoteStream) {
    remoteStream.getTracks().forEach((track) => track.stop())
    remoteStream = null
  }
}