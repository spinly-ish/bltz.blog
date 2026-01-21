import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Custom domain (bltz.blog) — используем корневой путь
  base: '/',
})
