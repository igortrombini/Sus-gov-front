import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  esbuild: {
    loader: 'jsx',
    include: [
      // Add this for the dependencies you want to compile with `esbuild`.
      'src/**/*.jsx',
    ],
    exclude: [],
  },
});
