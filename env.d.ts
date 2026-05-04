/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_APP_PROFILE: string
  readonly VITE_FF_SERVICE_METRICS: string
  readonly VITE_FF_SERVICE_GAMELIFT: string
  readonly VITE_FF_SERVICE_BILLING: string
  readonly VITE_FF_SERVICE_AUTH: string
  readonly VITE_STAGING_TAILSCALE_IP: string
  readonly VITE_STAGING_LOCAL_IP: string
  readonly VITE_SHOW_GAMING_COMING_SOON: string
  
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
