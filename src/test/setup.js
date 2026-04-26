import { vi } from 'vitest'

// mock localStorage
vi.stubGlobal('localStorage', {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
})

// basic fetch mock (can override in tests)
vi.stubGlobal('fetch', vi.fn())