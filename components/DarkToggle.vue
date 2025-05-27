<script setup lang="ts">
import { useDark } from '~/composables/useDark'

const { isDark } = useDark()

function toggleDark () {
  isDark.value = !isDark.value
}
</script>

<template>
  <button
    type="button"
    aria-label="Toggle dark mode"
    class="p-2 rounded-full focus:outline-none"
    @click="toggleDark"
  >
    <Icon :name="isDark ? 'ph:moon-bold' : 'ph:sun-bold'" />
  </button>
</template>
