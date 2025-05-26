<template>
  <div class="text-center py-12">
    <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
    <p class="text-gray-600">Redirecting to report...</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

onMounted(() => {
  // Redirect to the new report page with the same id
  setTimeout(() => {
    router.push(`/report/${route.params.id}`);
  }, 1000);
});
</script> 