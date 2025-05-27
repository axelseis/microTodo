# ListTask Module

Host module that displays the task list and orchestrates other application modules.

## Features

- Displays task list with details
- Integrates creation, editing, and deletion modules
- Responsive design with Tailwind CSS
- State management with Pinia
- Automatic updates when creating, editing, or deleting tasks

## Dependencies

- Vue.js 3
- Pinia
- Tailwind CSS
- Module Federation

## Remote Modules

- createTask: http://localhost:5001
- editTask: http://localhost:5004
- removeTask: http://localhost:5003

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The module will be available at http://localhost:5002

## Build

```bash
npm run build
```

## Module Structure

```
src/
├── components/      # Vue components
│   └── TaskList.vue # Main list component
├── store/          # Pinia stores
│   └── taskStore.js # Task management store
└── App.vue         # Root component
``` 