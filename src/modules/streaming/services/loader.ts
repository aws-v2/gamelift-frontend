import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'

const loader = new GLTFLoader()
const cache  = new Map<string, THREE.Group>()

const fallbackMaterial = new THREE.MeshStandardMaterial({
  color:     0x888888,
  roughness: 0.7,
  metalness: 0.2,
})

function applyFallbacks(root: THREE.Object3D): void {
  root.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return
    const mat = child.material as THREE.MeshStandardMaterial
    if (!mat || (mat.map && !mat.map.image)) {
      console.warn(`[loader] fallback material → ${child.name}`)
      child.material = fallbackMaterial
    }
  })
}

export async function loadModel(url: string): Promise<THREE.Group> {
  if (cache.has(url)) {
    return cache.get(url)!.clone()
  }

  return new Promise<THREE.Group>((resolve, reject) => {
    console.log(`[loader] loading ${url}`)

    loader.load(
      url,
      (gltf: GLTF) => {
        applyFallbacks(gltf.scene)
        cache.set(url, gltf.scene)
        console.log(`[loader] ready ${url}`)
        resolve(gltf.scene.clone())
      },
      (xhr) => {
        if (xhr.total) {
          console.debug(`[loader] ${url} ${Math.round((xhr.loaded / xhr.total) * 100)}%`)
        }
      },
      (err) => {
        console.error(`[loader] failed ${url}`, err)
        reject(err)
      }
    )
  })
}