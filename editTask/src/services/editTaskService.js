const API_URL = 'http://localhost:3000'

export const editTaskService = {
  async updateTask(taskId, taskData) {
    try {
      const response = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Error al actualizar la tarea')
      }

      const updatedTask = await response.json()
      
      // Disparar evento personalizado para notificar a otros módulos
      window.dispatchEvent(new CustomEvent('task-updated', {
        detail: updatedTask
      }))

      return updatedTask
    } catch (error) {
      console.error('Error en editTaskService.updateTask:', error)
      throw error
    }
  }
} 