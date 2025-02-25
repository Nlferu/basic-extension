import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, 'index.html'),
        content: path.resolve(__dirname, 'src/content.tsx'),
      },
      output: {
        // format: 'iife',
        // dir: 'dist',
        entryFileNames: '[name].js',
      },
    },
  },
})
