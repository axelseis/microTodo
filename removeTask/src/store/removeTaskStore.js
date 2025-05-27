import { defineStore } from 'pinia'
import { removeTask as removeTaskService } from '../services/taskService'

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
        await removeTaskService(taskId)
        
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