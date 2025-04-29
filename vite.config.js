import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio_melissa/",
  resolve: {
    alias: {
      // Polyfill for Node.js crypto module
      crypto: 'crypto-browserify',
    },
  },
  build: {
    // Additional build settings if necessary
  },

  css: {
    preprocessorOptions: {
      scss: {

      },
    },
  },
})
