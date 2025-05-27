# API de Tareas

API REST para gestionar tareas, construida con Express.js.

## Características

- CRUD completo de tareas
- Almacenamiento en archivo JSON local
- CORS habilitado
- Manejo de errores

## Endpoints

- `GET /tasks` - Obtener todas las tareas
- `GET /tasks/:id` - Obtener una tarea por ID
- `POST /tasks` - Crear una nueva tarea
- `PUT /tasks/:id` - Actualizar una tarea
- `DELETE /tasks/:id` - Eliminar una tarea

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor en modo desarrollo
npm run dev

# Iniciar servidor en modo producción
npm start
```

## Estructura de Datos

Las tareas se almacenan en `data/tasks.json` con la siguiente estructura:

```json
{
  "tasks": [
    {
      "id": 1,
      "title": "Título de la tarea",
      "description": "Descripción de la tarea"
    }
  ]
}
``` 