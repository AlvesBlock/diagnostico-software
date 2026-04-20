<script setup lang="ts">
defineProps<{
  title: string;
  value: string;
  detail?: string;
}>();
</script>

<template>
  <div class="rounded-[24px] border border-black/8 bg-white/90 p-5 shadow-sm">
    <p class="text-xs font-bold uppercase tracking-[0.16em] text-black/40">{{ title }}</p>
    <p class="mt-3 text-lg font-bold text-ink">{{ value }}</p>
    <p v-if="detail" class="mt-2 text-sm leading-6 text-black/60">{{ detail }}</p>
  </div>
</template>
