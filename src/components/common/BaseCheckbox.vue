<script setup lang="ts">
defineProps<{
  checked: boolean;
  label: string;
}>();

const emit = defineEmits<{
  change: [];
}>();
</script>

<template>
  <button
    type="button"
    class="flex w-full items-center justify-between rounded-[22px] border px-4 py-4 text-left transition duration-200 ease-out"
    :class="checked ? 'scale-[1.01] border-brand-500 bg-gradient-to-r from-brand-50 to-white shadow-soft' : 'border-black/10 bg-white/92 hover:scale-[1.01] hover:border-brand-300 hover:shadow-soft'"
    @click="emit('change')"
  >
    <span class="pr-4 text-sm font-semibold leading-6">{{ label }}</span>
    <span
      class="flex h-6 w-6 items-center justify-center rounded-lg border text-xs font-bold"
      :class="checked ? 'border-brand-500 bg-brand-500 text-white' : 'border-black/20'"
    >
      {{ checked ? '✓' : '' }}
    </span>
  </button>
</template>
