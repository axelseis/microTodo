<template>
  <div v-if="message" class="absolute text-red-500 text-sm mt-1 bg-red-50 px-2 py-1 rounded shadow-sm border border-red-200">
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: ''
  }
})
</script> 