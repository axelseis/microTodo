import { describe, it, expect, vi, beforeEach } from 'vitest'
import { taskService } from '../taskService'

describe('taskService', () => {
  const mockTasks = [
    { id: 1, title: 'Tarea 1', description: 'Descripción 1' },
    { id: 2, title: 'Tarea 2', description: 'Descripción 2' }
  ]

  const mockTask = { id: 1, title: 'Nueva Tarea', description: 'Nueva Descripción' }

  beforeEach(() => {
    vi.clearAllMocks()
    global.fetch = vi.fn()
  })

  describe('fetchTasks', () => {
    it('should fetch tasks successfully', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockTasks)
      })

      const result = await taskService.fetchTasks()
      expect(result).toEqual(mockTasks)
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/tasks')
    })

    it('should throw error when fetch fails', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false
      })

      await expect(taskService.fetchTasks()).rejects.toThrow('Error al obtener las tareas')
    })
  })

  describe('createTask', () => {
    it('should create task successfully', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockTask)
      })

      const result = await taskService.createTask(mockTask)
      expect(result).toEqual(mockTask)
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mockTask),
      })
    })

    it('should throw error when creation fails', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false
      })

      await expect(taskService.createTask(mockTask)).rejects.toThrow('Error al crear la tarea')
    })
  })

  describe('updateTask', () => {
    it('should update task successfully', async () => {
      const updatedTask = { ...mockTask, title: 'Tarea Actualizada' }
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(updatedTask)
      })

      const result = await taskService.updateTask(mockTask.id, updatedTask)
      expect(result).toEqual(updatedTask)
      expect(global.fetch).toHaveBeenCalledWith(`http://localhost:3000/tasks/${mockTask.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      })
    })

    it('should throw error when update fails', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false
      })

      await expect(taskService.updateTask(mockTask.id, mockTask)).rejects.toThrow('Error al actualizar la tarea')
    })
  })

  describe('deleteTask', () => {
    it('should delete task successfully', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true
      })

      const result = await taskService.deleteTask(mockTask.id)
      expect(result).toBe(true)
      expect(global.fetch).toHaveBeenCalledWith(`http://localhost:3000/tasks/${mockTask.id}`, {
        method: 'DELETE',
      })
    })

    it('should throw error when deletion fails', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false
      })

      await expect(taskService.deleteTask(mockTask.id)).rejects.toThrow('Error al eliminar la tarea')
    })
  })
}) 