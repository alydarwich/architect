import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          // Keep the heavy animation libs in their own long-cache chunk so the
          // React/runtime vendor code can be parsed in parallel.
          if (/[\\/]node_modules[\\/](gsap|split-type|lenis)[\\/]/.test(id)) return 'gsap';
          if (/[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id))
            return 'react';
        },
      },
    },
  },
})
