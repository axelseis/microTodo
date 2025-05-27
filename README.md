# Todo Microfrontend

Una aplicación microfrontend para gestionar tareas, construida con Vue 3, Vite, Pinia y Tailwind CSS.

## Estructura del Proyecto

```
src/
├── assets/          # Archivos estáticos y estilos
├── components/      # Componentes Vue reutilizables
├── composables/     # Composables Vue
├── layouts/         # Layouts
├── modules/         # Módulos microfrontend
│   ├── tasks/      # Módulo de tareas
│   └── shared/     # Módulo compartido
├── router/         # Configuración de Vue Router
├── stores/         # Pinia stores
└── views/          # Vistas principales
```

## Características

- Crear, leer, actualizar y eliminar tareas
- Arquitectura microfrontend
- Gestión de estado con Pinia
- Estilos con Tailwind CSS
- Responsive

## Setup

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Tech Stack

- Vue 3
- Vite
- Pinia
- Vue Router
- Tailwind CSS 