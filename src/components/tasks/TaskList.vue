<script setup>
import { useTaskStore } from '../../stores/tasks'
import { storeToRefs } from 'pinia'
import EditTask from './EditTask.vue'
import DeleteTask from './DeleteTask.vue'

const taskStore = useTaskStore()
const { tasks, loading, error } = storeToRefs(taskStore)
</script>

<template>
  <div class="space-y-4">
    <div v-if="loading" class="text-center py-4">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
    </div>

    <div v-else-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
      {{ error }}
    </div>

    <div v-else-if="tasks.length === 0" class="text-center py-8 text-gray-500">
      No hay tareas disponibles
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="task in tasks"
        :key="task.id"
        class="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
      >
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-lg font-medium text-gray-900">{{ task.title }}</h3>
            <p class="mt-1 text-gray-600">{{ task.description }}</p>
          </div>
          <div class="flex space-x-2">
            <EditTask :task-id="task.id" />
            <DeleteTask :task-id="task.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 