import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTaskStore } from '../tasks'
import { taskService } from '../../services/taskService'

vi.mock('../../services/taskService')

describe('Task Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  const mockTasks = [
    { id: 1, title: 'Tarea 1', description: 'Descripción 1' },
    { id: 2, title: 'Tarea 2', description: 'Descripción 2' }
  ]

  const mockTask = { id: 1, title: 'Nueva Tarea', description: 'Nueva Descripción' }

  describe('fetchTasks', () => {
    it('should fetch tasks and update state', async () => {
      const store = useTaskStore()
      taskService.fetchTasks.mockResolvedValueOnce(mockTasks)

      await store.fetchTasks()

      expect(store.tasks).toEqual(mockTasks)
      expect(store.loading).toBe(false)
      expect(store.error).toBeNull()
    })

    it('should handle error when fetching tasks', async () => {
      const store = useTaskStore()
      const error = new Error('Error de red')
      taskService.fetchTasks.mockRejectedValueOnce(error)

      await store.fetchTasks()

      expect(store.tasks).toEqual([])
      expect(store.loading).toBe(false)
      expect(store.error).toBe(error.message)
    })
  })

  describe('createTask', () => {
    it('should create task and add to state', async () => {
      const store = useTaskStore()
      taskService.createTask.mockResolvedValueOnce(mockTask)

      const result = await store.createTask(mockTask)

      expect(result).toEqual(mockTask)
      expect(store.tasks).toContainEqual(mockTask)
      expect(store.loading).toBe(false)
      expect(store.error).toBeNull()
    })

    it('should handle error when creating task', async () => {
      const store = useTaskStore()
      const error = new Error('Error al crear')
      taskService.createTask.mockRejectedValueOnce(error)

      await expect(store.createTask(mockTask)).rejects.toThrow(error)
      expect(store.tasks).toEqual([])
      expect(store.loading).toBe(false)
      expect(store.error).toBe(error.message)
    })
  })

  describe('updateTask', () => {
    it('should update task in state', async () => {
      const store = useTaskStore()
      store.tasks = [mockTask]
      const updatedTask = { ...mockTask, title: 'Tarea Actualizada' }
      taskService.updateTask.mockResolvedValueOnce(updatedTask)

      const result = await store.updateTask(mockTask.id, updatedTask)

      expect(result).toEqual(updatedTask)
      expect(store.tasks[0]).toEqual(updatedTask)
      expect(store.loading).toBe(false)
      expect(store.error).toBeNull()
    })

    it('should handle error when updating task', async () => {
      const store = useTaskStore()
      store.tasks = [mockTask]
      const error = new Error('Error al actualizar')
      taskService.updateTask.mockRejectedValueOnce(error)

      await expect(store.updateTask(mockTask.id, mockTask)).rejects.toThrow(error)
      expect(store.tasks).toEqual([mockTask])
      expect(store.loading).toBe(false)
      expect(store.error).toBe(error.message)
    })
  })

  describe('deleteTask', () => {
    it('should remove task from state', async () => {
      const store = useTaskStore()
      store.tasks = [mockTask]
      taskService.deleteTask.mockResolvedValueOnce(true)

      await store.deleteTask(mockTask.id)

      expect(store.tasks).not.toContainEqual(mockTask)
      expect(store.loading).toBe(false)
      expect(store.error).toBeNull()
    })

    it('should handle error when deleting task', async () => {
      const store = useTaskStore()
      store.tasks = [mockTask]
      const error = new Error('Error al eliminar')
      taskService.deleteTask.mockRejectedValueOnce(error)

      await expect(store.deleteTask(mockTask.id)).rejects.toThrow(error)
      expect(store.tasks).toEqual([mockTask])
      expect(store.loading).toBe(false)
      expect(store.error).toBe(error.message)
    })
  })

  describe('getters', () => {
    it('should get task by id', () => {
      const store = useTaskStore()
      store.tasks = mockTasks

      const task = store.getTaskById(1)
      expect(task).toEqual(mockTasks[0])
    })

    it('should return undefined for non-existent task id', () => {
      const store = useTaskStore()
      store.tasks = mockTasks

      const task = store.getTaskById(999)
      expect(task).toBeUndefined()
    })
  })
}) 