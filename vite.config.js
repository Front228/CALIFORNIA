import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(( { mode } ) => {  

  const isProd = mode === 'production'

  return {
    base: isProd ? '/california/' : '/',  
    plugins: [react()],
    
    resolve: {  // ← Исправлено: было repolve
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    
    // 🔹 Опционально: чтобы сборка работала стабильнее
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  }
})