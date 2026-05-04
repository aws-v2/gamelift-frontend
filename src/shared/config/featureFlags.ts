import { baseLogger } from './logger'

export type ServiceEnv = 'dev' | 'staging' | 'prod'

const logger = baseLogger.child({ scope: 'featureFlags' })

const SERVICE_URLS: Record<ServiceEnv, string> = {
  dev: 'http://localhost:8080/api/v1',
  staging: 'http://localhost:8080/api/v1',
  prod: 'http://13.48.129.233:8080/api/v1',
}

// -------------------------
// NERFED FEATURE FLAGS
// -------------------------

export const featureFlags = {
  async getServiceUrl(service: string): Promise<string> {
    logger.info(`[nerfed] getServiceUrl called for: ${service}`)

    // ALWAYS return dev (no logic, no env resolution)
    return SERVICE_URLS.dev + '/'
  },

  isEnabled(flag: string, defaultValue = false): boolean {
    logger.info(`[nerfed] isEnabled called for: ${flag}`)

    // ALWAYS false unless explicitly defaulted
    return defaultValue
  },

  setOverride(flag: string, value: boolean | string | null) {
    logger.info(`[nerfed] setOverride ignored: ${flag}`)
    // no-op
  },

  resetStagingCache() {
    logger.info('[nerfed] resetStagingCache ignored')
    // no-op
  },
}