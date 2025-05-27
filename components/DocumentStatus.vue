<template>
  <span
    class="px-2 py-1 inline-flex items-center space-x-1 text-xs leading-5 font-semibold rounded-full"
    :class="statusClass"
    :title="status"
  >
    <Icon :name="iconName" class="w-4 h-4" />
    <span>{{ status }}</span>
  </span>
</template>

<script setup lang="ts">
interface Props {
  status: string;
  type?: 'status' | 'result';
}

const props = withDefaults(defineProps<Props>(), {
  type: 'status'
});

const statusClass = computed(() => {
  if (props.type === 'status') {
    switch (props.status) {
      case 'Complete':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Processing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Failed':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  } else {
    // Result type
    if (props.status.includes('Clean')) {
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    } else if (props.status.includes('AI-Supported')) {
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    } else if (props.status.includes('AI-Generated')) {
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    } else {
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  }
});

const iconName = computed(() => {
  if (props.type === 'status') {
    switch (props.status) {
      case 'Complete':
        return 'ph:check-circle-bold'
      case 'Processing':
        return 'ph:clock-bold'
      case 'Failed':
        return 'ph:x-circle-bold'
      default:
        return 'ph:file-bold'
    }
  } else {
    if (props.status.includes('Clean')) {
      return 'ph:check-circle-bold'
    } else if (props.status.includes('AI-Supported')) {
      return 'ph:warning-circle-bold'
    } else if (props.status.includes('AI-Generated')) {
      return 'ph:x-circle-bold'
    } else {
      return 'ph:file-bold'
    }
  }
})
</script> 