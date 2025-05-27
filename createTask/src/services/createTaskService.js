// Simulación de una API
const API_URL = 'http://localhost:3000'

export const createTaskService = async (taskData) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData)
    })
    
    if (!response.ok) {
      throw new Error('Error al crear la tarea')
    }
    
    const newTask = await response.json()
    
    // Disparar evento personalizado para notificar a otros módulos
    window.dispatchEvent(new CustomEvent('task-created', {
      detail: newTask
    }))
    
    return newTask
  } catch (error) {
    console.error('Error en el servicio:', error)
    throw error
  }
} 