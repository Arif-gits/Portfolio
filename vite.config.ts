import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// If deploying to GitHub Pages at https://<user>.github.io/<repo>/,
// set VITE_BASE_PATH="/<repo>/" as an env var before building (see README).
// Vercel/Netlify/custom domains should leave this unset (defaults to "/").
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
