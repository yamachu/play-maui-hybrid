import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: process.env.TARGET !== 'web' && {
    outDir: '../maui/wwwroot/js',
    lib: {
      entry: 'src/main.tsx',
      fileName: 'index',
      name: 'BlazorReact',
      formats: ['es'],
    },
  },
  // React自体がprocess.env.NODE_ENVを参照しているので、defineで消し去る
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});
