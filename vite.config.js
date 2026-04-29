import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(( { mode } ) => {  // ← Правильный синтаксис: деструктуризация

  const isProd = mode === 'production'

  return {
    base: isProd ? '/CALIFORNIA/' : '/',  // ✅ Правильно для GitHub Pages
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