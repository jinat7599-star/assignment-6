import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// Refactored Vite configuration with reordered plugins
const viteConfiguration = defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
});
export default viteConfiguration;