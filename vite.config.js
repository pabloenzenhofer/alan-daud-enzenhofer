import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    modules: false
  },
  server: {
    port: 5173,
    host: true
  }
}) 