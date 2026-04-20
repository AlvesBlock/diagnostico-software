<script setup lang="ts">
import ResultCard from '@/components/common/ResultCard.vue';
import { formatCurrency } from '@/utils/currency';
import type { DiagnosisResult } from '@/types/result.types';

defineProps<{
  result: DiagnosisResult;
}>();
</script>

<template>
  <div class="grid gap-4 lg:grid-cols-3">
    <ResultCard
      eyebrow="Investimento"
      :title="`${formatCurrency(result.estimatedPriceMin)} - ${formatCurrency(result.estimatedPriceMax)}`"
      description="Faixa inicial estimada para atacar o problema com o escopo informado até aqui."
      accent="dark"
    />
    <ResultCard
      eyebrow="Prazo estimado"
      :title="`${result.estimatedTimeMinDays} a ${result.estimatedTimeMaxDays} dias`"
      description="Janela sugerida para descoberta, execução e ajustes da primeira entrega."
    />
    <ResultCard
      eyebrow="Esforço estimado"
      :title="`${result.estimatedHoursMin}h - ${result.estimatedHoursMax}h`"
      description="Faixa de dedicação para construção, validação e estrutura inicial da solução."
    />
  </div>
</template>
