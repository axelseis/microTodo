<script setup>
import { onMounted } from 'vue'
import { useTaskStore } from '../stores/tasks'
import CreateTask from '../components/tasks/CreateTask.vue'
import TaskList from '../components/tasks/TaskList.vue'

const taskStore = useTaskStore()

onMounted(async () => {
  await taskStore.fetchTasks()
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">Gestor de Tareas</h1>
      <CreateTask />
    </div>
    
    <div>
      <TaskList />
    </div>
  </div>
</template>

<style scoped>
main {
  padding: 2rem;
}

h1 {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 2rem;
}
</style> 