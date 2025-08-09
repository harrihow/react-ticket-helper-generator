import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-ticket-helper-generator/',
  plugins: [react()],
});
