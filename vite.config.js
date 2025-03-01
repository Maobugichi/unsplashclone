import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import tailwindcss from '@tailwindcss/vite'
dotenv.config();


// https://vite.dev/config/
export default defineConfig({
  base:"/unsplashclone/",
  plugins: [  tailwindcss(),react()],
})
