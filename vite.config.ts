import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }) => ({
  base: '/mylovebliss-visual-serenity/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '404.html',
          dest: '', // copies to dist/
        },
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
