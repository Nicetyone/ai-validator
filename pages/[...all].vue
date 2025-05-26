<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center p-6">
    <h1 class="text-5xl font-bold mb-4 text-blue-600">404</h1>
    <p class="text-xl mb-6 text-gray-700">
      Oops – we couldn’t find that page.
    </p>
    <NuxtLink
      to="/"
      class="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
    >
      Back to Home
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  title: '404 – Page not found'
})
</script>
