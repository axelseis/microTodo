# RemoveTask Module

Module for deleting tasks from the application.

## Features

- Confirmation modal for task deletion
- Integration with host module through events
- Responsive design with Tailwind CSS
- Error handling
- Loading states

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

The module will be available at http://localhost:5003

## Build

```bash
npm run build
```

## Module Structure

```
src/
├── components/          # Vue components
│   └── RemoveTask.vue  # Main delete component
├── store/              # Pinia stores
│   └── removeTaskStore.js # Delete management store
└── services/           # Services
    └── removeTaskService.js # API communication service
```

## Usage

The module exposes the `RemoveTask` component that can be imported by the host module:

```javascript
import RemoveTask from 'removeTask/RemoveTask'
```

The component requires the following props:
- `task`: Object containing the task data to delete

The component emits a `task-deleted` event when a task is successfully deleted. 