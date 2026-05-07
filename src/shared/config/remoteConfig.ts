// import { baseLogger } from './logger'
// const logger = baseLogger.child({ scope: 'remote-config' })

export type RemoteConfig = {
  VITE_APP_PROFILE: string
  VITE_API_BASE_URL?: string
  VITE_SHOW_GAMING_COMING_SOON?: string
  VITE_STAGING_TAILSCALE_IP: string
  VITE_STAGING_LOCAL_IP: string
  [key: string]: string | undefined
}

let cachedConfig: RemoteConfig | null = null
let pollingInterval: ReturnType<typeof setInterval> | null = null

export async function loadRemoteConfig(): Promise<RemoteConfig> {
  const CONFIG_FILE = '/config.json'

  try {
        cachedConfig = {
      VITE_APP_PROFILE:            import.meta.env.VITE_APP_PROFILE            ?? 'dev',
      VITE_API_BASE_URL:           import.meta.env.VITE_API_BASE_URL           ?? '',
      VITE_STAGING_TAILSCALE_IP:   import.meta.env.VITE_STAGING_TAILSCALE_IP   ?? '',
      VITE_STAGING_LOCAL_IP:       import.meta.env.VITE_STAGING_LOCAL_IP       ?? '',
      VITE_SHOW_GAMING_COMING_SOON:import.meta.env.VITE_SHOW_GAMING_COMING_SOON ?? 'false',
      VITE_FF_SERVICE_METRICS:     import.meta.env.VITE_FF_SERVICE_METRICS     ?? 'dev',
      VITE_FF_SERVICE_GAMELIFT:    import.meta.env.VITE_FF_SERVICE_GAMELIFT    ?? 'dev',
      VITE_FF_SERVICE_BILLING:     import.meta.env.VITE_FF_SERVICE_BILLING     ?? 'dev',
      VITE_FF_SERVICE_AUTH:        import.meta.env.VITE_FF_SERVICE_AUTH        ?? 'dev',
    }
  } catch {
    console.log(`[config] Remote config unavailable at ${CONFIG_FILE}, falling back to import.meta.env`)
    cachedConfig = {
      VITE_APP_PROFILE:            import.meta.env.VITE_APP_PROFILE            ?? 'dev',
      VITE_API_BASE_URL:           import.meta.env.VITE_API_BASE_URL           ?? '',
      VITE_STAGING_TAILSCALE_IP:   import.meta.env.VITE_STAGING_TAILSCALE_IP   ?? '',
      VITE_STAGING_LOCAL_IP:       import.meta.env.VITE_STAGING_LOCAL_IP       ?? '',
      VITE_SHOW_GAMING_COMING_SOON:import.meta.env.VITE_SHOW_GAMING_COMING_SOON ?? 'false',
      VITE_FF_SERVICE_METRICS:     import.meta.env.VITE_FF_SERVICE_METRICS     ?? 'dev',
      VITE_FF_SERVICE_GAMELIFT:    import.meta.env.VITE_FF_SERVICE_GAMELIFT    ?? 'dev',
      VITE_FF_SERVICE_BILLING:     import.meta.env.VITE_FF_SERVICE_BILLING     ?? 'dev',
      VITE_FF_SERVICE_AUTH:        import.meta.env.VITE_FF_SERVICE_AUTH        ?? 'dev',
    }
  }
  return cachedConfig!
}

export function getRemoteConfig(): RemoteConfig {
  if (!cachedConfig) {
    loadRemoteConfig()
    console.log('Remote config not loaded yet. Call loadRemoteConfig(1) first.')
  }
  return cachedConfig
}

/**
 * Polls config.json every intervalMs and calls onChange if values changed.
 * Useful for picking up hot swaps without a page reload.
 */
export function watchRemoteConfig(
  onChange: (config: RemoteConfig) => void,
  intervalMs = 30_000
) {
  if (pollingInterval) clearInterval(pollingInterval)

  pollingInterval = setInterval(async () => {
    const previous = JSON.stringify(cachedConfig)
    const next = await loadRemoteConfig()
    if (JSON.stringify(next) !== previous) {
      console.log('[config] Config changed, notifying...')
      onChange(next)
    }
  }, intervalMs)
}

export function stopWatchingRemoteConfig() {
  if (pollingInterval) {
    clearInterval(pollingInterval)
    pollingInterval = null
  }
}