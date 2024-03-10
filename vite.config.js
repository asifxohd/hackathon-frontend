import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api/users/':{
        target:'https://hackathon-backend-hm3i.onrender.com',
        changeOrigin:true,
        // rewrite: (path) => path.replace(/^\/api/, ''), 
      }
    }
  }
})
