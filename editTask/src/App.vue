<script setup>
import EditTask from './components/EditTask.vue'
import { ref } from 'vue'

const task = ref({
  id: 1,
  title: 'Tarea de ejemplo',
  description: 'Esta es una tarea de ejemplo para probar la edición',
  dueDate: '2024-03-20',
  priority: 'medium'
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <h1 class="text-2xl font-bold text-gray-900 mb-8">Editar Tarea</h1>
              <EditTask :task="task" />
            </div>
          </div>
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