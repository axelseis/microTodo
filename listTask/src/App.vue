<script setup>
import { defineAsyncComponent } from 'vue'
import TaskList from './components/TaskList.vue'

const CreateTask = defineAsyncComponent({
  loader: () => import('create-task/CreateTask'),
  loadingComponent: {
    template: '<div>Cargando...</div>'
  },
  errorComponent: {
    template: '<div>Error al cargar el componente</div>'
  },
  delay: 200,
  timeout: 3000
})
</script>

<template>
  <div class="app">
    <header class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">Lista de Tareas</h1>
    </header>
    
    <div class="space-y-8">
      <CreateTask />
      <TaskList />
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 20px;
}
</style> 