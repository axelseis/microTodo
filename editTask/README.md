# EditTask Module

Module for editing existing tasks in the application.

## Features

- Form for editing tasks
- Edit modal
- Field validation
- Integration with host module through events
- Responsive design with Tailwind CSS
- Support for due date and priority

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

The module will be available at http://localhost:5004

## Build

```bash
npm run build
```

## Module Structure

```
src/
├── components/        # Vue components
│   └── EditTask.vue  # Main edit component
├── store/            # Pinia stores
│   └── editTaskStore.js # Edit management store
└── services/         # Services
    └── editTaskService.js # API communication service
```

## Usage

The module exposes the `EditTask` component that can be imported by the host module:

```javascript
import EditTask from 'editTask/EditTask'
```

The component requires the following props:
- `task`: Object containing the task data to edit

The component emits a `task-updated` event when a task is updated. 