<script setup lang="ts">
import { useDark } from '~/composables/useDark'

const { isDark } = useDark()

function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <button
    type="button"
    aria-label="Toggle dark mode"
    class="relative p-2 h-10 w-10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 overflow-hidden"
    :class="[
      isDark 
        ? 'bg-gray-800 hover:bg-gray-700 text-yellow-300' 
        : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
    ]"
    @click="toggleDark"
  >
    <div class="absolute inset-0 overflow-hidden">
      <span 
        class="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
        :class="{ 'opacity-0': !isDark, 'opacity-100': isDark }"
      >
        <Icon name="ph:moon-stars-fill" class="h-5 w-5" />
      </span>
      <span 
        class="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
        :class="{ 'opacity-0': isDark, 'opacity-100': !isDark }"
      >
        <Icon name="ph:sun-fill" class="h-5 w-5" />
      </span>
    </div>
  </button>
</template>
