// Simulación de una API
const API_URL = 'http://localhost:3000'

export const getTasks = async () => {
  try {
    const response = await fetch(`${API_URL}/tasks`)
    if (!response.ok) {
      throw new Error('Error al obtener las tareas')
    }
    return await response.json()
  } catch (error) {
    console.error('Error en el servicio:', error)
    throw error
  }
}
