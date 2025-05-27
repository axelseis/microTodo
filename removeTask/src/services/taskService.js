const API_URL = 'http://localhost:3000'

export const removeTask = async (taskId) => {
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
    
    return true
  } catch (error) {
    console.error('Error en el servicio:', error)
    throw error
  }
} 