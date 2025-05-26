<script setup lang="ts">
const isDark = useState('dark', () => false)

onMounted(() => {
  if (process.client) {
    const stored = localStorage.getItem('dark')
    if (stored)
      isDark.value = stored === 'true'
  }
})

watchEffect(() => {
  if (process.client) {
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('dark', String(isDark.value))
  }
})
</script>

<template>
  <button
    @click="isDark.value = !isDark.value"
    aria-label="Toggle dark mode"
    class="p-2 rounded-full"
  >
    <Icon name="ph:sun-bold" v-if="isDark.value" />
    <Icon name="ph:moon-bold" v-else />
  </button>
</template>
