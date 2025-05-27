<template>
  <div>
    <button
      @click="openModal"
      class="p-2 text-blue-600 hover:text-blue-800"
      title="Editar tarea"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
      </svg>
    </button>

    <Modal
      :is-open="showModal"
      title="Editar Tarea"
      @close="closeModal"
    >
      <div class="p-4">
        <h2 class="text-2xl font-bold mb-4">Actualizar Tarea</h2>
        <TaskForm
          ref="taskForm"
          :initial-data="taskData"
          :submit-text="{ default: 'Actualizar Tarea', loading: 'Actualizando...' }"
          @submit="handleSubmit"
          @cancel="closeModal"
        />
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTaskStore } from '../../stores/tasks'
import Modal from '../Modal.vue'
import TaskForm from '../TaskForm.vue'

const props = defineProps({
  taskId: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['updated'])
const taskStore = useTaskStore()
const showModal = ref(false)
const taskForm = ref(null)

const taskData = computed(() => {
  const task = taskStore.getTaskById(props.taskId)
  return {
    title: task?.title || '',
    description: task?.description || ''
  }
})

const handleSubmit = async (formData) => {
  try {
    await taskStore.updateTask(props.taskId, formData)
    emit('updated')
    closeModal()
  } catch (error) {
    console.error('Error al actualizar la tarea:', error)
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