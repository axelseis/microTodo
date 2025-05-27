# API de Tareas

API REST para gestionar tareas, construida con Express.js.

## Características

- CRUD completo de tareas
- Almacenamiento en archivo JSON local
- CORS habilitado
- Manejo de errores
- Soporte para fecha de vencimiento y prioridad

## Endpoints

- `GET /tasks` - Obtener todas las tareas
- `GET /tasks/:id` - Obtener una tarea por ID
- `POST /tasks` - Crear una nueva tarea
- `PUT /tasks/:id` - Actualizar una tarea
- `DELETE /tasks/:id` - Eliminar una tarea

## Estructura de Datos

Las tareas tienen la siguiente estructura:
```json
{
  "id": 1,
  "title": "Título de la tarea",
  "description": "Descripción de la tarea",
  "dueDate": "2024-03-20",
  "priority": "high" // "high", "medium", "low"
}
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El servidor estará disponible en http://localhost:3000

## Producción

```bash
npm start
```

## Dependencias

- Express.js
- CORS
- Node.js File System (fs/promises)

## Estructura del Proyecto

```
server/
├── data/           # Datos persistentes
│   └── tasks.json  # Archivo JSON de tareas
└── index.js        # Punto de entrada de la aplicación
``` 