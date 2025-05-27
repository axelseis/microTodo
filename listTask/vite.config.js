import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'list-task',
      remotes: {
        'create-task': 'http://localhost:5001/assets/remoteEntry.js',
        'remove-task': 'http://localhost:5003/assets/remoteEntry.js'
      },
      shared: ['vue', 'pinia']
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        minifyInternalExports: false,
        format: 'esm'
      }
    }
  },
  server: {
    port: 5002,
    strictPort: true,
    cors: true
  }
}) 