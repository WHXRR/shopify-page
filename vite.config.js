import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'src/styles'),
      images: path.resolve(__dirname, 'src/assets/images'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
