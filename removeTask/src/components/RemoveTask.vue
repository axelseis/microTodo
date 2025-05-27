<script setup>
import { ref } from 'vue'
import { useRemoveTaskStore } from '../store/removeTaskStore'

const props = defineProps({
  taskId: {
    type: [String, Number],
    required: true
  },
  taskTitle: {
    type: String,
    required: true
  }
})

const removeTaskStore = useRemoveTaskStore()
const isOpen = ref(false)
const error = ref(null)

const openModal = () => {
  isOpen.value = true
  error.value = null
}

const closeModal = () => {
  isOpen.value = false
  error.value = null
}

const handleRemove = async () => {
  try {
    error.value = null
    await removeTaskStore.removeTask(props.taskId)
    closeModal()
  } catch (err) {
    error.value = err.message || 'Error al eliminar la tarea'
    console.error('Error al eliminar la tarea:', err)
  }
}
</script>

<template>
  <div>
    <!-- Botón para abrir el modal -->
    <button
      @click="openModal"
      class="text-red-500 hover:text-red-700 transition-colors duration-200"
      title="Eliminar tarea"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>

    <!-- Modal de confirmación -->
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold text-gray-800">Confirmar eliminación</h2>
          <button
            @click="closeModal"
            class="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="space-y-4">
          <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span class="block sm:inline">{{ error }}</span>
          </div>

          <p class="text-gray-600">
            ¿Estás seguro de que deseas eliminar la tarea "<span class="font-medium">{{ taskTitle }}</span>"?
            Esta acción no se puede deshacer.
          </p>

          <div class="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
            >
              Cancelar
            </button>
            <button
              type="button"
              @click="handleRemove"
              :disabled="removeTaskStore.loading"
              class="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ removeTaskStore.loading ? 'Eliminando...' : 'Eliminar' }}
            </button>
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