/**
 * game_three.ts
 * All Three.js setup isolated here — imported by game.vue
 *
 * Exports:
 *   initThree(container)  — call once in onMounted, after the DOM ref is available
 *   tick()                — call once to start the render loop
 *   loadLevel()           — call when game_ready fires
 *   applyState(msg)       — call for every game_state message from Godot
 *   destroyThree()        — call in onBeforeUnmount
 */

import * as THREE from 'three'
import { loadModel } from './loader'

// ─── internal state ──────────────────────────────────────────────────────────
let renderer : THREE.WebGLRenderer | null = null
let scene    : THREE.Scene         | null = null
let camera   : THREE.PerspectiveCamera | null = null
let levelMesh: THREE.Group         | null = null
let rafId    : number              = 0
let running  = false

// node registry — Godot node id → Three.js Object3D
// populated when models are loaded, updated every game_state tick
const nodeMap = new Map<string, THREE.Object3D>()

// ─── public API ──────────────────────────────────────────────────────────────

export function initThree(container: HTMLElement): void {
  // Scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x1a1a2e)

  console.log('[three] container size', container.clientWidth, container.clientHeight)

  // Camera — Godot will override this every tick once streaming starts
  camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  )
  camera.position.set(0, 5, 10)
  camera.lookAt(0, 0, 0)

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type    = THREE.PCFSoftShadowMap
  container.appendChild(renderer.domElement)

  // Lighting — needed for MeshStandardMaterial (what Godot exports use)
  const ambient = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambient)

  const sun = new THREE.DirectionalLight(0xffffff, 1.2)
  sun.position.set(10, 20, 10)
  sun.castShadow = true
  sun.shadow.mapSize.set(2048, 2048)
  scene.add(sun)

  // Resize handler
  const ro = new ResizeObserver(() => {
    if (!renderer || !camera) return
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
  })
  ro.observe(container)

  running = true
  console.log('[three] initialized')
}

export function tick(): void {
  console.log('[three] tick')
  if (!running || !renderer || !scene || !camera) return
  rafId = requestAnimationFrame(tick)
  renderer.render(scene, camera)
}

export async function loadLevel(): Promise<void> {
  if (!scene) return

  // Remove previous level if any
  if (levelMesh) {
    scene.remove(levelMesh)
    levelMesh = null
  }

  const group = await loadModel('/game_static/level.glb')
  levelMesh = group
  scene.add(levelMesh)

  // Register every named node so applyState can find them
  levelMesh.traverse((child) => {
    if (child.name) nodeMap.set(child.name, child)
  })

  console.log('[three] level loaded, nodes registered:', [...nodeMap.keys()])
}

/**
 * Called for every game_state message.
 * msg.nodes is an array of { id, pos?, rot?, fov?, material? }
 *
 * Example message from Godot:
 * {
 *   type: "game_state",
 *   nodes: [
 *     { id: "Camera3D", pos: [x,y,z], rot: [x,y,z,w], fov: 75 },
 *     { id: "Player",   pos: [x,y,z], rot: [x,y,z,w] },
 *   ]
 * }
 */
export function applyState(data: GameStateData): void {
  if (!camera || !scene) return

  for (const node of data.nodes ?? []) {
    // Camera3D drives the Three.js camera directly
    if (node.id === 'Camera3D') {
      if (node.pos) camera.position.set(...node.pos)
      if (node.rot) camera.quaternion.set(...node.rot)
      if (node.fov) {
        camera.fov = node.fov
        camera.updateProjectionMatrix()
      }
      continue
    }

    // All other nodes: look up in the registry and apply transform
    const obj = nodeMap.get(node.id)
    if (!obj) continue

    if (node.pos) obj.position.set(...node.pos)
    if (node.rot) obj.quaternion.set(...node.rot)

    // Material swap (e.g. wall colour change)
    if (node.material?.color && obj instanceof THREE.Mesh) {
      const mat = obj.material as THREE.MeshStandardMaterial
      mat.color.set(node.material.color)
    }
  }
}

export function destroyThree(): void {
  running = false
  cancelAnimationFrame(rafId)
  renderer?.dispose()
  renderer = null
  scene    = null
  camera   = null
  nodeMap.clear()
  console.log('[three] destroyed')
}

// ─── types ───────────────────────────────────────────────────────────────────
interface NodeState {
  id       : string
  pos?     : [number, number, number]
  rot?     : [number, number, number, number]
  fov?     : number
  material?: { color?: string }
}

interface GameStateData {
  nodes?: NodeState[]
}