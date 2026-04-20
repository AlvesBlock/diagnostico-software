<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  description?: string;
  accent?: 'light' | 'dark';
}>();
</script>

<template>
  <div
    class="rounded-[28px] border p-6 sm:p-7"
    :class="
      accent === 'dark'
        ? 'border-ink bg-ink text-white'
        : 'border-black/8 bg-white text-ink shadow-soft'
    "
  >
    <p
      class="text-xs font-bold uppercase tracking-[0.16em]"
      :class="accent === 'dark' ? 'text-white/55' : 'text-black/40'"
    >
      {{ eyebrow }}
    </p>
    <h3 class="mt-3 text-2xl font-bold">{{ title }}</h3>
    <p v-if="description" class="mt-3 text-sm leading-6" :class="accent === 'dark' ? 'text-white/75' : 'text-black/65'">
      {{ description }}
    </p>
    <div class="mt-5">
      <slot />
    </div>
  </div>
</template>
