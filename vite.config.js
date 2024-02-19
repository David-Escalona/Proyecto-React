import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Definimos la carpeta donde buscar cuando se carga la aplicación (donde estará el main.js)
})
