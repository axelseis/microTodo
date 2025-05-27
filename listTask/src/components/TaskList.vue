<script setup>
import { ref, onMounted } from 'vue'
import { useTaskStore } from '../store/taskStore'
import { storeToRefs } from 'pinia'
import CreateTask from 'create-task/CreateTask'
import RemoveTask from 'remove-task/RemoveTask'
import EditTask from 'editTask/EditTask'

const taskStore = useTaskStore()
const { tasks } = storeToRefs(taskStore)

onMounted(async () => {
  // Fetch tasks on component mount
  await taskStore.fetchTasks()

  // Listen for task creation events
  window.addEventListener('task-created', () => {
    taskStore.fetchTasks()
  })

  // Listen for task removal events
  window.addEventListener('task-removed', () => {
    taskStore.fetchTasks()
  })

  // Listen for task update events
  window.addEventListener('task-updated', () => {
    taskStore.fetchTasks()
  })
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="taskStore.loading" class="text-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      <p class="mt-4 text-gray-600">Cargando tareas...</p>
    </div>

    <div v-else-if="taskStore.error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <span class="block sm:inline">{{ taskStore.error }}</span>
    </div>

    <div v-else-if="tasks.length === 0" class="text-center py-8">
      <p class="text-gray-600">No hay tareas disponibles</p>
    </div>

    <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="task in tasks" :key="task.id" class="bg-white rounded-lg shadow-md p-6">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-xl font-semibold text-gray-900">{{ task.title }}</h3>
          <div class="flex space-x-2">
            <EditTask :task="task" />
            <RemoveTask :task-id="task.id" :task-title="task.title" />
          </div>
        </div>
        <p class="text-gray-600 mb-4">{{ task.description }}</p>
        <div class="flex justify-between items-center text-sm text-gray-500">
          <span>Vence: {{ new Date(task.dueDate).toLocaleDateString() }}</span>
          <span class="px-2 py-1 rounded-full" :class="{
            'bg-red-100 text-red-800': task.priority === 'high',
            'bg-yellow-100 text-yellow-800': task.priority === 'medium',
            'bg-green-100 text-green-800': task.priority === 'low'
          }">
            {{ task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Media' : 'Baja' }}
          </span>
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