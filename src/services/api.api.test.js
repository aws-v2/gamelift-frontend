import { describe, it, expect, vi, beforeEach } from 'vitest'
import { login } from './api'

describe('login API', () => {

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('calls correct endpoint with correct payload', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ token: 'abc' }),
    })

    await login('test@test.com', '123456')

    // grab actual call
    const [url, options] = fetch.mock.calls[0]

    expect(url).toContain('/api/v1/auth/login')
    expect(options.method).toBe('POST')

    // verify body
    const body = JSON.parse(options.body)
    expect(body).toEqual({
      email: 'test@test.com',
      password: '123456',
    })

    // verify headers
    expect(options.headers['Content-Type']).toBe('application/json')
  })

  it('stores token in localStorage', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ token: 'abc' }),
    })

    await login('test@test.com', '123456')

    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'abc')
  })

  it('throws on non-2xx response', async () => {
    fetch.mockResolvedValue({
      ok: false,
    })

    await expect(login('a', 'b')).rejects.toThrow()
  })
})