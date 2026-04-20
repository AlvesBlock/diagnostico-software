<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}>();
</script>

<template>
  <button
    :type="type ?? 'button'"
    :disabled="disabled"
    class="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50"
    :class="{
      'bg-ink text-white hover:bg-black': variant === 'primary' || !variant,
      'bg-white text-ink ring-1 ring-black/10 hover:bg-black/5': variant === 'secondary',
      'text-ink hover:bg-black/5': variant === 'ghost',
    }"
  >
    <slot />
  </button>
</template>
