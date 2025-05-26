<template>
  <span
    class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
    :class="statusClass"
  >
    {{ status }}
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
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  } else {
    // Result type
    if (props.status.includes('Clean')) {
      return 'bg-green-100 text-green-800';
    } else if (props.status.includes('AI-Supported')) {
      return 'bg-yellow-100 text-yellow-800';
    } else if (props.status.includes('AI-Generated')) {
      return 'bg-red-100 text-red-800';
    } else {
      return 'bg-gray-100 text-gray-800';
    }
  }
});
</script> 