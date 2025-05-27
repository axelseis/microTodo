import express from 'express'
import cors from 'cors'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3000

// Middleware
app.use(cors())
app.use(express.json())

// Rutas para las tareas
const dataPath = path.join(__dirname, 'data', 'tasks.json')

// Función auxiliar para leer/escribir el archivo JSON
const readData = async () => {
  const data = await fs.readFile(dataPath, 'utf8')
  return JSON.parse(data)
}

const writeData = async (data) => {
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2))
}

// GET /tasks - Obtener todas las tareas
app.get('/tasks', async (req, res) => {
  try {
    const data = await readData()
    res.json(data.tasks)
  } catch (error) {
    res.status(500).json({ error: 'Error al leer las tareas' })
  }
})

// GET /tasks/:id - Obtener una tarea por ID
app.get('/tasks/:id', async (req, res) => {
  try {
    const data = await readData()
    const task = data.tasks.find(t => t.id === parseInt(req.params.id))
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' })
    }
    res.json(task)
  } catch (error) {
    res.status(500).json({ error: 'Error al leer la tarea' })
  }
})

// POST /tasks - Crear una nueva tarea
app.post('/tasks', async (req, res) => {
  try {
    const data = await readData()
    const newTask = {
      id: Math.max(0, ...data.tasks.map(t => t.id)) + 1,
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate || null,
      priority: req.body.priority || 'medium'
    }
    data.tasks.push(newTask)
    await writeData(data)
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la tarea' })
  }
})

// PUT /tasks/:id - Actualizar una tarea
app.put('/tasks/:id', async (req, res) => {
  try {
    const data = await readData()
    const taskIndex = data.tasks.findIndex(t => t.id === parseInt(req.params.id))
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Tarea no encontrada' })
    }

    const updatedTask = {
      ...data.tasks[taskIndex],
      title: req.body.title || data.tasks[taskIndex].title,
      description: req.body.description || data.tasks[taskIndex].description,
      dueDate: req.body.dueDate || data.tasks[taskIndex].dueDate,
      priority: req.body.priority || data.tasks[taskIndex].priority
    }

    data.tasks[taskIndex] = updatedTask
    await writeData(data)
    res.json(updatedTask)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la tarea' })
  }
})

// DELETE /tasks/:id - Eliminar una tarea
app.delete('/tasks/:id', async (req, res) => {
  try {
    const data = await readData()
    const taskIndex = data.tasks.findIndex(t => t.id === parseInt(req.params.id))
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Tarea no encontrada' })
    }

    data.tasks.splice(taskIndex, 1)
    await writeData(data)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' })
  }
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
}) 