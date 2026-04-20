<script setup lang="ts">
import BaseTag from '@/components/common/BaseTag.vue';
import type { DiagnosisResult } from '@/types/result.types';
import { getComplexityLabel, getPainCategoryLabel } from '@/utils/diagnosisLabels';

defineProps<{
  result: DiagnosisResult;
}>();
</script>

<template>
  <div class="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
    <div class="space-y-4">
      <BaseTag>Diagnostico liberado</BaseTag>
      <div class="space-y-3">
        <h1 class="max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">
          Seu cenario pede uma abordagem {{ getComplexityLabel(result.complexityLevel).toLowerCase() }} para {{ getPainCategoryLabel(result.painCategory).toLowerCase() }}.
        </h1>
        <p class="max-w-3xl text-base leading-7 text-black/65">{{ result.summaryText }}</p>
      </div>
    </div>

    <div class="rounded-[30px] border border-black/8 bg-ink p-7 text-white shadow-soft">
      <p class="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Leitura executiva</p>
      <div class="mt-4 space-y-4">
        <div>
          <p class="text-sm text-white/55">Categoria identificada</p>
          <p class="mt-1 text-lg font-bold">{{ getPainCategoryLabel(result.painCategory) }}</p>
        </div>
        <div>
          <p class="text-sm text-white/55">Complexidade estimada</p>
          <p class="mt-1 text-lg font-bold">{{ getComplexityLabel(result.complexityLevel) }}</p>
        </div>
        <div>
          <p class="text-sm text-white/55">Abordagem sugerida</p>
          <p class="mt-1 text-lg font-bold">{{ result.recommendedApproach }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
