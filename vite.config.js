// filepath: vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/P2-0/', // Remplacez "P2-0" par le nom exact de votre dépôt GitHub
});