import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio_melissa/",
  resolve: {
    alias: {
      // Polyfill voor Node.js crypto module
      crypto: 'crypto-browserify',  // Voeg de crypto polyfill toe
    },
  },
  build: {
    // Eventuele extra instellingen voor de build
  },

  css: {
    preprocessorOptions: {
      scss: {
        // Eventuele SCSS instellingen
      },
    },
  },

  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),  // Alleen de benodigde omgevingsvariabelen doorgeven
    'global': 'globalThis',  // Zorg ervoor dat het globale object gedefinieerd is
  },
})
