import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'create-task',
      filename: 'remoteEntry.js',
      exposes: {
        './CreateTask': './src/components/CreateTask.vue',
        './createTaskStore': './src/store/createTaskStore.js'
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
      output: {
        minifyInternalExports: false,
        format: 'esm'
      }
    }
  },
  server: {
    cors: true
  }
}) 