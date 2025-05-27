import { defineStore } from 'pinia'

const API_URL = 'http://localhost:3000'

export const useRemoveTaskStore = defineStore('removeTask', {
  state: () => ({
    loading: false,
    error: null
  }),

  actions: {
    async removeTask(taskId) {
      this.loading = true
      this.error = null
      try {
        const response = await fetch(`${API_URL}/tasks/${taskId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        
        if (!response.ok) {
          throw new Error('Error al eliminar la tarea')
        }
        
        // Disparar evento personalizado para notificar a otros módulos
        window.dispatchEvent(new CustomEvent('task-removed', {
          detail: { taskId }
        }))
        
        return true
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    }
  }
}) 