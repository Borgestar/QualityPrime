import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // ERRADO (O que você deve ter feito):
  // base: 'https://github.com/Borgestar/QualityPrime', 
  
  // CERTO (O que deve estar):
  base: "/QualityPrime/", 
})
