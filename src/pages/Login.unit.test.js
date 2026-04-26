import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import Login from './Login.vue'

// mock router
const pushMock = vi.fn()
vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}))

// mock API
vi.mock('../services/api', () => ({
  login: vi.fn(),
}))

describe('Login.vue', () => {

  beforeEach(() => {
    vi.clearAllMocks()
  })

  const mountComponent = () =>
    mount(Login, {
      global: {
        stubs: ['router-link'], // 🔥 fixes warning
      },
    })

  it('renders login form', () => {
    const wrapper = mountComponent()

    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
  })

  it('does not submit if empty', async () => {
    const wrapper = mountComponent()

    await wrapper.find('form').trigger('submit')

    expect(pushMock).not.toHaveBeenCalled()
  })

  it('redirects on success', async () => {
    const { login } = await import('../services/api')
    login.mockResolvedValue({ token: '123' })

    const wrapper = mountComponent()

    await wrapper.find('input[type="email"]').setValue('test@test.com')
    await wrapper.find('input[type="password"]').setValue('123456')

    await wrapper.find('form').trigger('submit')
    await nextTick()

    expect(pushMock).toHaveBeenCalledWith('/home')
  })

  it('shows error on failure', async () => {
    const { login } = await import('../services/api')
    login.mockRejectedValue(new Error('fail'))

    const wrapper = mountComponent()

    await wrapper.find('input[type="email"]').setValue('test@test.com')
    await wrapper.find('input[type="password"]').setValue('123456')

    await wrapper.find('form').trigger('submit')
    await nextTick()

    // ✅ match actual UI text
    expect(wrapper.text()).toContain('Authentication failed')
  })
})