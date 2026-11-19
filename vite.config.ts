import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
const isPreview = process.env.BASE44_PREVIEW_MODE === '1'
const previewHost = process.env.BASE44_SANDBOX_HOST_DOMAIN

export default defineConfig({
  plugins: [react()],
  server: isPreview
    ? {
        // The sandbox filesystem is bind-mounted; polling keeps HMR reliable.
        watch: { usePolling: true, interval: 400 },
        allowedHosts: previewHost ? [`.${previewHost}`] : undefined,
      }
    : undefined,
})
