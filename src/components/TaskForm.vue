<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="title" class="block text-sm font-medium text-gray-700">Título</label>
      <div class="relative">
        <input
          id="title"
          v-model="form.title"
          type="text"
          class="mt-1 block w-full border-b outline-none focus:border-blue-500"
          :class="{ 'border-red-500': errors.title }"
        />
        <ValidationMessage :message="errors.title" />
      </div>
    </div>
    <div>
      <label for="description" class="block text-sm font-medium text-gray-700">Descripción</label>
      <textarea
        id="description"
        v-model="form.description"
        rows="3"
        class="mt-1 block w-full border outline-none focus:border-blue-500"
      ></textarea>
    </div>
    <div class="flex justify-end space-x-2">
      <button
        type="button"
        @click="$emit('cancel')"
        class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
      >
        Cancelar
      </button>
      <button
        type="submit"
        class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? submitText.loading : submitText.default }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import ValidationMessage from './ValidationMessage.vue'

const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({
      title: '',
      description: ''
    })
  },
  submitText: {
    type: Object,
    default: () => ({
      default: 'Guardar',
      loading: 'Guardando...'
    })
  }
})

const emit = defineEmits(['submit', 'cancel'])

const form = reactive({
  title: props.initialData.title,
  description: props.initialData.description
})

const errors = reactive({
  title: ''
})

const isSubmitting = ref(false)

watch(() => form.title, () => {
  if (errors.title) {
    errors.title = ''
  }
})

const validateForm = () => {
  let isValid = true
  errors.title = ''

  if (!form.title.trim()) {
    errors.title = 'El título es requerido'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  try {
    await emit('submit', {
      title: form.title.trim(),
      description: form.description.trim()
    })
  } catch (error) {
    console.error('Error en el formulario:', error)
  } finally {
    isSubmitting.value = false
  }
}

// Exponer métodos para control externo
defineExpose({
  resetForm: () => {
    form.title = ''
    form.description = ''
    errors.title = ''
  }
})
</script> 