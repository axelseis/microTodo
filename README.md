# MicroTodo - Aplicación de Tareas Modular

MicroTodo es una aplicación de gestión de tareas construida con una arquitectura de microfrontends, utilizando Vue.js y Module Federation.

## Estructura del Proyecto

El proyecto está dividido en los siguientes módulos:

- **listTask** (Host): Módulo principal que muestra la lista de tareas y orquesta los demás módulos
- **createTask**: Módulo para crear nuevas tareas
- **editTask**: Módulo para editar tareas existentes
- **removeTask**: Módulo para eliminar tareas
- **server**: API REST para gestionar las tareas

## Características

- Arquitectura de microfrontends con Module Federation
- Gestión completa de tareas (CRUD)
- Interfaz de usuario moderna y responsiva con Tailwind CSS
- Estado global con Pinia
- API REST con Express.js
- Almacenamiento persistente en JSON

## Requisitos

- Node.js 16+
- npm 7+

## Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd microtodo
```

2. Instalar dependencias de cada módulo:
```bash
# Instalar dependencias del servidor
cd server
npm install

# Instalar dependencias de los módulos
cd ../listTask
npm install
cd ../createTask
npm install
cd ../editTask
npm install
cd ../removeTask
npm install
```

## Ejecución

### Desarrollo

1. Iniciar el servidor:
```bash
cd server
npm run dev
```

2. En terminales separadas, construir y ejecutar cada módulo:
```bash
# Módulo host (listTask)
cd listTask
npm run build
npm run preview

# Módulo de creación
cd createTask
npm run build
npm run preview

# Módulo de edición
cd editTask
npm run build
npm run preview

# Módulo de eliminación
cd removeTask
npm run build
npm run preview
```

Los módulos estarán disponibles en:
- listTask: http://localhost:5002
- createTask: http://localhost:5001
- editTask: http://localhost:5004
- removeTask: http://localhost:5003
- server: http://localhost:3000

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

## Tecnologías Utilizadas

- Vue.js 3
- Vite
- Module Federation
- Pinia
- Tailwind CSS
- Express.js
- CORS

## Licencia

MIT 