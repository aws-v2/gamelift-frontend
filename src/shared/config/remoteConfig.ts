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

const STAGING_DEFAULTS: RemoteConfig = {
  VITE_API_BASE_URL:              "http://100.71.223.121:8080/api/v1",
  VITE_APP_PROFILE:               "staging",
  VITE_SHOW_GAMING_COMING_SOON:   "true",
  VITE_STAGING_TAILSCALE_IP:      "100.71.223.121",
  VITE_STAGING_LOCAL_IP:          "192.168.x.x",
  VITE_FF_SERVICE_S3:             "staging",
  VITE_FF_SERVICE_RDS:            "staging",
  VITE_FF_SERVICE_NETWORK:        "staging",
  VITE_FF_SERVICE_METRICS:        "staging",
  VITE_FF_SERVICE_LAMBDA:         "staging",
  VITE_FF_SERVICE_GAMELIFT:       "staging",
  VITE_FF_SERVICE_FARGATE:        "staging",
  VITE_FF_SERVICE_EC2:            "staging",
  VITE_FF_SERVICE_IDENTITY:       "staging",
  VITE_FF_SERVICE_CONFIG:         "staging",
  VITE_FF_SERVICE_BILLING:        "staging",
  VITE_FF_SERVICE_AUTH:           "staging",
  VITE_FF_SERVICE_LLM:            "staging",
  VITE_FF_SERVICE_GATEWAY:        "staging",
}

const ENV_DEFAULTS: RemoteConfig = {
  VITE_APP_PROFILE:             import.meta.env.VITE_APP_PROFILE             ?? 'dev',
  VITE_API_BASE_URL:            import.meta.env.VITE_API_BASE_URL            ?? '',
  VITE_STAGING_TAILSCALE_IP:    import.meta.env.VITE_STAGING_TAILSCALE_IP    ?? '',
  VITE_STAGING_LOCAL_IP:        import.meta.env.VITE_STAGING_LOCAL_IP        ?? '',
  VITE_SHOW_GAMING_COMING_SOON: import.meta.env.VITE_SHOW_GAMING_COMING_SOON ?? 'false',
  VITE_FF_SERVICE_METRICS:      import.meta.env.VITE_FF_SERVICE_METRICS      ?? 'dev',
  VITE_FF_SERVICE_GAMELIFT:     import.meta.env.VITE_FF_SERVICE_GAMELIFT     ?? 'dev',
  VITE_FF_SERVICE_BILLING:      import.meta.env.VITE_FF_SERVICE_BILLING      ?? 'dev',
  VITE_FF_SERVICE_AUTH:         import.meta.env.VITE_FF_SERVICE_AUTH         ?? 'dev',
}

function resolveFallback(): RemoteConfig {
  const profile = import.meta.env.VITE_APP_PROFILE ?? 'dev'
  if (profile === 'staging') {
    console.log('[config] APP_PROFILE=staging — using staging defaults')
    return STAGING_DEFAULTS
  }
  return ENV_DEFAULTS
}

export async function loadRemoteConfig(): Promise<RemoteConfig> {
  const CONFIG_FILE = '/config.json'

  try {
    const res = await fetch(CONFIG_FILE)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    cachedConfig = await res.json()
    console.log('[config] Loaded from config.json')
  } catch {
    console.log(`[config] config.json unavailable — falling back`)
    cachedConfig = resolveFallback()
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