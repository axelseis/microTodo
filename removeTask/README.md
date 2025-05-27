# Módulo RemoveTask

Módulo para eliminar tareas existentes en la aplicación.

## Características

- Botón de eliminación con confirmación
- Modal de confirmación
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

El módulo estará disponible en http://localhost:5003

## Construcción

```bash
npm run build
```

## Estructura del Módulo

```
src/
├── components/         # Componentes Vue
│   └── RemoveTask.vue  # Componente principal de eliminación
├── store/             # Pinia stores
│   └── removeTaskStore.js # Store para gestión de eliminación
└── services/          # Servicios
    └── removeTaskService.js # Servicio para comunicación con API
```

## Uso

El módulo expone el componente `RemoveTask` que puede ser importado por el módulo host:

```javascript
import RemoveTask from 'remove-task/RemoveTask'
```

El componente requiere las siguientes props:
- `task-id`: ID de la tarea a eliminar
- `task-title`: Título de la tarea a eliminar

El componente emite un evento `task-removed` cuando se elimina una tarea. 