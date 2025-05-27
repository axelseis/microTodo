<script setup>
import { ref } from 'vue'
import { useCreateTaskStore } from '../store/createTaskStore'

const createTaskStore = useCreateTaskStore()
const isOpen = ref(false)
const error = ref(null)
const newTask = ref({
  title: '',
  description: '',
  dueDate: '',
  priority: 'medium'
})

const openModal = () => {
  isOpen.value = true
  error.value = null
}

const closeModal = () => {
  isOpen.value = false
  resetForm()
}

const resetForm = () => {
  newTask.value = {
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium'
  }
  error.value = null
}

const handleSubmit = async () => {
  try {
    error.value = null
    await createTaskStore.createNewTask(newTask.value)
    closeModal()
  } catch (err) {
    error.value = err.message || 'Error al crear la tarea'
    console.error('Error al crear la tarea:', err)
  }
}
</script>

<template>
  <div>
    <!-- Botón para abrir el modal -->
    <button
      @click="openModal"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200"
    >
      Nueva tarea
    </button>

    <!-- Modal -->
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold text-gray-800">Crear Nueva Tarea</h2>
          <button
            @click="closeModal"
            class="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span class="block sm:inline">{{ error }}</span>
          </div>

          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">Título</label>
            <input
              id="title"
              v-model="newTask.title"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="description" class="block text-sm font-medium text-gray-700">Descripción</label>
            <textarea
              id="description"
              v-model="newTask.description"
              rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label for="dueDate" class="block text-sm font-medium text-gray-700">Fecha de vencimiento</label>
            <input
              id="dueDate"
              v-model="newTask.dueDate"
              type="date"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="priority" class="block text-sm font-medium text-gray-700">Prioridad</label>
            <select
              id="priority"
              v-model="newTask.priority"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
          </div>

          <div class="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
            >
              Cancelar
            </button>
            <button
              type="submit"
              :disabled="createTaskStore.loading"
              class="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ createTaskStore.loading ? 'Creando...' : 'Crear Tarea' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style> 