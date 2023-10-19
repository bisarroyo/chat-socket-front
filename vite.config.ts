import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // Define tus alias como pares clave-valor dentro de un objeto
      '@components': path.join(__dirname, './src/components'),
      '@pages': path.join(__dirname, './src/pages')
    }
  },
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]___[hash:base64:5]'
    }
  }
})
