<template>
  <label class="relative block">
    <span class="sr-only">{{ label }}</span>
    <select
      :aria-label="label"
      :value="modelValue"
      @input="updateValue"
      class="appearance-none w-full pl-3 pr-8 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 focus:border-blue-500 focus:ring-blue-500"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z" clip-rule="evenodd" />
      </svg>
    </span>
  </label>
</template>

<script setup lang="ts">
interface Option {
  value: string
  label: string
}
const props = defineProps<{
  modelValue: string
  options: Option[]
  label: string
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLSelectElement).value)
}
</script>