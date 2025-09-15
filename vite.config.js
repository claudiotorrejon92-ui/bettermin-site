import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Allow the base path to be configured via the BASE_URL environment variable
  base: process.env.BASE_URL || '/',
  plugins: [react()],
});
