import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages: https://spinly-ish.github.io/testsite/
  // base должен совпадать с именем репозитория
  base: '/testsite/',
})
