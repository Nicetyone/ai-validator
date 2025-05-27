<template>
  <div class="fixed bottom-4 right-4 space-y-2 z-50">
    <div
      v-for="t in toasts"
      :key="t.id"
      :class="[
        'px-4 py-2 rounded shadow text-white',
        t.type === 'success' ? 'bg-green-600' : 'bg-red-600'
      ]"
    >
      {{ t.message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '~/composables/useToast'
const { toasts } = useToast()
</script>