const API_URL = 'http://localhost:3000'

export const taskService = {
  async fetchTasks() {
    try {
      const response = await fetch(`${API_URL}/tasks`)
      if (!response.ok) {
        throw new Error('Error al obtener las tareas')
      }
      return await response.json()
    } catch (error) {
      console.error('Error en fetchTasks:', error)
      throw error
    }
  },

  async createTask(taskData) {
    try {
      const response = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      })
      if (!response.ok) {
        throw new Error('Error al crear la tarea')
      }
      return await response.json()
    } catch (error) {
      console.error('Error en createTask:', error)
      throw error
    }
  },

  async updateTask(taskId, taskData) {
    try {
      const response = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      })
      if (!response.ok) {
        throw new Error('Error al actualizar la tarea')
      }
      return await response.json()
    } catch (error) {
      console.error('Error en updateTask:', error)
      throw error
    }
  },

  async deleteTask(taskId) {
    try {
      const response = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Error al eliminar la tarea')
      }
      return true
    } catch (error) {
      console.error('Error en deleteTask:', error)
      throw error
    }
  }
} 