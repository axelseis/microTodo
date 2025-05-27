# Módulo EditTask

Módulo para editar tareas existentes en la aplicación.

## Características

- Formulario para editar tareas
- Modal de edición
- Validación de campos
- Integración con el módulo host mediante eventos
- Diseño responsivo con Tailwind CSS
- Soporte para fecha de vencimiento y prioridad

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

El módulo estará disponible en http://localhost:5004

## Construcción

```bash
npm run build
```

## Estructura del Módulo

```
src/
├── components/        # Componentes Vue
│   └── EditTask.vue  # Componente principal de edición
├── store/            # Pinia stores
│   └── editTaskStore.js # Store para gestión de edición
└── services/         # Servicios
    └── editTaskService.js # Servicio para comunicación con API
```

## Uso

El módulo expone el componente `EditTask` que puede ser importado por el módulo host:

```javascript
import EditTask from 'editTask/EditTask'
```

El componente requiere las siguientes props:
- `task`: Objeto con los datos de la tarea a editar

El componente emite un evento `task-updated` cuando se actualiza una tarea. 