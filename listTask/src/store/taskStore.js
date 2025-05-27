import { defineStore } from 'pinia'
import { getTasks } from '../services/taskService'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchTasks() {
      this.loading = true
      this.error = null
      try {
        const tasks = await getTasks()
        this.tasks = tasks
        return tasks
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    }
  }
}) 