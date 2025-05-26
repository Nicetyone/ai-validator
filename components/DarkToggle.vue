<script setup lang="ts">
const isDark = useState('dark', () => false)
watchEffect(() => document.documentElement.classList.toggle('dark', isDark.value))
</script>

<button @click="isDark = !isDark" aria-label="Toggle dark mode" class="p-2 rounded-full">
  <Icon name="ph:sun-bold" v-if="isDark" /><Icon name="ph:moon-bold" v-else />
</button>
