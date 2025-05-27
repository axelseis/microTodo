# Módulo ListTask

Módulo host que muestra la lista de tareas y orquesta los demás módulos de la aplicación.

## Características

- Muestra la lista de tareas con sus detalles
- Integra los módulos de creación, edición y eliminación de tareas
- Diseño responsivo con Tailwind CSS
- Gestión de estado con Pinia
- Actualización automática al crear, editar o eliminar tareas

## Dependencias

- Vue.js 3
- Pinia
- Tailwind CSS
- Module Federation

## Módulos Remotos

- createTask: http://localhost:5001
- editTask: http://localhost:5004
- removeTask: http://localhost:5003

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El módulo estará disponible en http://localhost:5002

## Construcción

```bash
npm run build
```

## Estructura del Módulo

```
src/
├── components/      # Componentes Vue
│   └── TaskList.vue # Componente principal de lista
├── store/          # Pinia stores
│   └── taskStore.js # Store para gestión de tareas
└── App.vue         # Componente raíz
``` 