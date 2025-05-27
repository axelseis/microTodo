<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header class="py-4 border-b border-gray-200 mb-8">
    <nav class="container mx-auto flex justify-center">
      <RouterLink to="/" class="text-blue-600 hover:underline text-lg font-semibold">Home</RouterLink>
    </nav>
  </header>
  <main class="container mx-auto px-4">
    <RouterView />
  </main>
</template> 