<script setup lang="ts">
defineProps<{
  value: number;
  currentStep?: number;
  totalSteps?: number;
}>();
</script>

<template>
  <div class="space-y-3">
    <div v-if="currentStep && totalSteps" class="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-black/40">
      <span>Progresso do diagnostico</span>
      <span>{{ currentStep }}/{{ totalSteps }}</span>
    </div>
    <div class="h-3 w-full rounded-full bg-black/8 p-0.5">
      <div
        class="h-2 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent transition-all duration-300"
        :style="{ width: `${value}%` }"
      />
    </div>
  </div>
</template>
