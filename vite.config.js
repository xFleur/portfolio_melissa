import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio_melissa/", // Ensure the base path for deployment is correct
  resolve: {
    alias: {
      // Polyfill for Node.js crypto module
      crypto: 'crypto-browserify',  // Add the crypto polyfill
    },
  },
  build: {
    // Additional build settings (e.g., chunking, minification, etc.)
    rollupOptions: {
      // Optional: Exclude polyfills from being bundled with your app
      external: ['crypto-browserify'],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // SCSS settings, if any needed
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),  // Only pass required environment variables
    'global': 'globalThis',  // Ensures global object is defined
  },
})
