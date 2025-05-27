# MicroTodo - Modular Task Application

MicroTodo is a task management application built with a microfrontend architecture, using Vue.js and Module Federation.

## Project Structure

The project is divided into the following modules:

- **listTask** (Host): Main module that displays the task list and orchestrates other modules
- **createTask**: Module for creating new tasks
- **editTask**: Module for editing existing tasks
- **removeTask**: Module for deleting tasks
- **server**: REST API for task management

## Features

- Microfrontend architecture with Module Federation
- Complete task management (CRUD)
- Modern and responsive UI with Tailwind CSS
- Global state management with Pinia
- REST API with Express.js
- Persistent JSON storage

## Requirements

- Node.js 16+
- npm 7+

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd microtodo
```

2. Install dependencies for each module:
```bash
# Install server dependencies
cd server
npm install

# Install module dependencies
cd ../listTask
npm install
cd ../createTask
npm install
cd ../editTask
npm install
cd ../removeTask
npm install
```

## Execution

1. Start the server:
```bash
cd server
npm run dev
```

2. In separate terminals, build and run each module:
```bash
# Host module (listTask)
cd listTask
npm run build
npm run preview

# Creation module
cd createTask
npm run build
npm run preview

# Edit module
cd editTask
npm run build
npm run preview

# Remove module
cd removeTask
npm run build
npm run preview
```

Modules will be available at:
- listTask: http://localhost:5002
- createTask: http://localhost:5001
- editTask: http://localhost:5004
- removeTask: http://localhost:5003
- server: http://localhost:3000

## Data Structure

Tasks have the following structure:
```json
{
  "id": 1,
  "title": "Task title",
  "description": "Task description",
  "dueDate": "2024-03-20",
  "priority": "high" // "high", "medium", "low"
}
```

## Technologies Used

- Vue.js 3
- Vite
- Module Federation
- Pinia
- Tailwind CSS
- Express.js
- CORS

## License

MIT 