import CreateTask from './src/components/CreateTask.vue'

// Exportar como módulo
export { CreateTask }
export default CreateTask

// Solo montar la aplicación si estamos en modo desarrollo y no estamos siendo importados como módulo
if (import.meta.env.DEV && !window.__FEDERATION__) {
  import('./src/main.js')
} 