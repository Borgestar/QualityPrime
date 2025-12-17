import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // ADICIONE ISSO AQUI:
  // Troque 'nome-do-repositorio' pelo nome exato que você criou no GitHub
  base: "https://github.com/Borgestar/QualityPrime"
})