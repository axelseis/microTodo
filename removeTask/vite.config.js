import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remove-task',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoveTask': './src/components/RemoveTask.vue',
        './removeTaskStore': './src/store/removeTaskStore.js'
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