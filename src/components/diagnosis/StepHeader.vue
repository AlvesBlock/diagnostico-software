<script setup lang="ts">
defineProps<{
  step: number;
  total: number;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="space-y-4">
    <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-700/80">
      Etapa {{ step }} de {{ total }}
    </p>
    <h1 class="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">{{ title }}</h1>
    <p class="max-w-2xl text-base leading-7 text-black/62">{{ description }}</p>
  </div>
</template>
