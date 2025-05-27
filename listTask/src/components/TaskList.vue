<script setup>
import { onMounted } from 'vue'
import { useTaskStore } from '../store/taskStore'
import { storeToRefs } from 'pinia'
import RemoveTask from 'remove-task/RemoveTask'

const taskStore = useTaskStore()
const { tasks } = storeToRefs(taskStore)

onMounted(async () => {
  // Fetch tasks on component mount
  await taskStore.fetchTasks()

  // Listen for task creation events
  window.addEventListener('task-created', async () => {
    await taskStore.fetchTasks()
  })

  // Listen for task removal events
  window.addEventListener('task-removed', async () => {
    await taskStore.fetchTasks()
  })
})
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-800">Tareas</h2>
    <div v-if="taskStore.loading" class="text-gray-500 text-center py-4">
      Cargando tareas...
    </div>
    <div v-else-if="taskStore.error" class="text-red-500 text-center py-4">
      {{ taskStore.error }}
    </div>
    <div v-else-if="tasks.length === 0" class="text-gray-500 text-center py-4">
      No hay tareas pendientes
    </div>
    <div v-else class="space-y-3">
      <div v-for="task in tasks" :key="task.id" class="bg-white p-4 rounded-lg shadow">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="font-medium text-gray-900">{{ task.title }}</h3>
            <p class="text-gray-600 mt-1">{{ task.description }}</p>
          </div>
          <div class="flex items-center space-x-2">
            <span
              :class="{
                'bg-red-100 text-red-800': task.priority === 'high',
                'bg-yellow-100 text-yellow-800': task.priority === 'medium',
                'bg-green-100 text-green-800': task.priority === 'low'
              }"
              class="px-2 py-1 text-xs font-medium rounded-full"
            >
              {{ task.priority }}
            </span>
            <RemoveTask :task-id="task.id" :task-title="task.title" />
          </div>
        </div>
        <div class="mt-2 text-sm text-gray-500">
          Fecha límite: {{ new Date(task.dueDate).toLocaleDateString() }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style> 