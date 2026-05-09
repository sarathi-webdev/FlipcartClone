import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/FlipcartClone/tree/main/Flipcard",
   build: {
    chunkSizeWarningLimit: 1000
  }

})
