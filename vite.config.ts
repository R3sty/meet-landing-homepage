import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/meet-landing/homepage/',
  plugins: [
    react(),
  ]
});
