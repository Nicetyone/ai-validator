<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center p-6">
    <svg class="h-40 w-40 mb-6" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M256 48C141.12 48 48 141.12 48 256s93.12 208 208 208 208-93.12 208-208S370.88 48 256 48zm0 384c-97.2 0-176-78.8-176-176S158.8 80 256 80s176 78.8 176 176-78.8 176-176 176z" fill="#60A5FA"/>
      <path d="M256 144c-44.112 0-80 35.888-80 80h32c0-26.464 21.536-48 48-48s48 21.536 48 48-21.536 48-48 48v32c44.112 0 80-35.888 80-80s-35.888-80-80-80z" fill="#1E40AF"/>
      <circle cx="256" cy="344" r="24" fill="#1E40AF"/>
    </svg>
    <h1 class="text-5xl font-bold mb-4 text-blue-600">404</h1>
    <p class="text-xl mb-6 text-gray-700 dark:text-gray-300">
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
