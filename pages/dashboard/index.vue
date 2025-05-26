<template>
  <div class="text-center py-12">
    <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
    <p class="text-gray-600">Redirecting to validation page...</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  // Redirect to the new validate page
  setTimeout(() => {
    router.push('/validate');
  }, 1000);
});
</script> 