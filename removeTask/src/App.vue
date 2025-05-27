<script setup>
import RemoveTask from './components/RemoveTask.vue'
</script>

<template>
  <div class="app">
    <RemoveTask task-id="1" task-title="Tarea de ejemplo" />
  </div>
</template>

<style>
.app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 20px;
}
</style> 