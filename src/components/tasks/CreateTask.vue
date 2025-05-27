<template>
  <div>
    <button
      @click="openModal"
      class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    >
      Nueva Tarea
    </button>

    <Modal
      :is-open="showModal"
      title="Nueva Tarea"
      @close="closeModal"
    >
      <div class="p-4">
        <h2 class="text-2xl font-bold mb-4">Crear Nueva Tarea</h2>
        <TaskForm
          ref="taskForm"
          :submit-text="{ default: 'Crear Tarea', loading: 'Creando...' }"
          @submit="handleSubmit"
          @cancel="closeModal"
        />
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../../stores/tasks'
import Modal from '../Modal.vue'
import TaskForm from '../TaskForm.vue'

const emit = defineEmits(['close', 'created'])
const taskStore = useTaskStore()
const showModal = ref(false)
const taskForm = ref(null)

const handleSubmit = async (formData) => {
  try {
    await taskStore.createTask(formData)
    emit('created')
    closeModal()
  } catch (error) {
    console.error('Error al crear la tarea:', error)
  }
}

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  taskForm.value?.resetForm()
}

defineExpose({
  openModal
})
</script> 