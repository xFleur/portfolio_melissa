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
      crypto: 'crypto-browserify',  // Add the crypto polyfill
    },
  },
  build: {
    // Additional build settings if necessary
  },

  css: {
    preprocessorOptions: {
      scss: {
        // Any SCSS settings you might need
      },
    },
  },

  define: {
    'global': {},  // Global object to ensure compatibility
    'process.env': process.env,  // Polyfill for process.env if needed
  },
})
