# CreateTask Module

Module for creating new tasks in the application.

## Features

- Form for creating new tasks
- Field validation
- Creation modal
- Integration with host module through events
- Responsive design with Tailwind CSS

## Dependencies

- Vue.js 3
- Pinia
- Tailwind CSS
- Module Federation

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The module will be available at http://localhost:5001

## Build

```bash
npm run build
```

## Module Structure

```
src/
├── components/         # Vue components
│   └── CreateTask.vue  # Main creation component
├── store/             # Pinia stores
│   └── taskStore.js   # Task management store
└── services/          # Services
    └── taskService.js # API communication service
```

## Usage

The module exposes the `CreateTask` component that can be imported by the host module:

```javascript
import CreateTask from 'create-task/CreateTask'
```

The component emits a `task-created` event when a new task is created. 