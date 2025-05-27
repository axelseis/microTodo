# Módulo CreateTask

Módulo para crear nuevas tareas en la aplicación.

## Características

- Formulario para crear nuevas tareas
- Validación de campos
- Modal de creación
- Integración con el módulo host mediante eventos
- Diseño responsivo con Tailwind CSS

## Dependencias

- Vue.js 3
- Pinia
- Tailwind CSS
- Module Federation

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El módulo estará disponible en http://localhost:5001

## Construcción

```bash
npm run build
```

## Estructura del Módulo

```
src/
├── components/         # Componentes Vue
│   └── CreateTask.vue  # Componente principal de creación
├── store/             # Pinia stores
│   └── taskStore.js   # Store para gestión de tareas
└── services/          # Servicios
    └── taskService.js # Servicio para comunicación con API
```

## Uso

El módulo expone el componente `CreateTask` que puede ser importado por el módulo host:

```javascript
import CreateTask from 'create-task/CreateTask'
```

El componente emite un evento `task-created` cuando se crea una nueva tarea. 