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
    class="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-brand-300/70 focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50"
    :class="{
      'bg-ink text-white shadow-[0_16px_30px_rgba(23,32,27,0.16)] hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_22px_40px_rgba(23,32,27,0.2)]': variant === 'primary' || !variant,
      'bg-white/90 text-ink ring-1 ring-black/10 backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white hover:shadow-soft': variant === 'secondary',
      'text-ink hover:bg-black/5': variant === 'ghost',
    }"
  >
    <slot />
  </button>
</template>
