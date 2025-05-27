const API_URL = 'http://localhost:3000'

export const updateTask = async (taskId, taskData) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData)
    })
    
    if (!response.ok) {
      throw new Error('Error al actualizar la tarea')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error en el servicio:', error)
    throw error
  }
} 