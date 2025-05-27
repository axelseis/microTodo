import { defineStore } from 'pinia'
import { editTaskService } from '../services/editTaskService'

export const useEditTaskStore = defineStore('editTask', {
  state: () => ({
    loading: false,
    error: null
  }),

  actions: {
    async updateTask(taskId, taskData) {
      this.loading = true
      this.error = null
      try {
        const updatedTask = await editTaskService.updateTask(taskId, taskData)
        return updatedTask
      } catch (error) {
        this.error = error.message || 'Error al actualizar la tarea'
        throw error
      } finally {
        this.loading = false
      }
    }
  }
}) 