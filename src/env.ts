interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_ENABLE_API_DELAY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export const env = {
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_ENABLE_API_DELAY: import.meta.env.VITE_ENABLE_API_DELAY === 'true',
} as const