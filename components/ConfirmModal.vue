<template>
  <Teleport to="body">
    <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-80 shadow-lg text-gray-900 dark:text-gray-100">
        <h3 class="text-lg font-semibold mb-4">{{ title }}</h3>
        <p class="mb-6">{{ message }}</p>

        <div class="flex justify-end space-x-3">
          <button class="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700" @click="$emit('cancel')">
            Cancel
          </button>

          <button class="px-4 py-2 rounded-md bg-red-600 text-white" @click="$emit('confirm')">
            Confirm
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  show: boolean
  title: string
  message: string
}

defineProps<Props>()
defineEmits(['confirm', 'cancel'])
</script>