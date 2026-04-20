<script setup lang="ts">
import { computed } from 'vue';
import SummaryCard from '@/components/common/SummaryCard.vue';
import { calculateDiagnosisResult } from '@/services/diagnosis/calculation.service';
import { useDiagnosisStore } from '@/stores/diagnosis.store';
import { formatCurrency } from '@/utils/currency';
import { getComplexityLabel, getPainCategoryLabel } from '@/utils/diagnosisLabels';

const store = useDiagnosisStore();

const previewResult = computed(() => {
  if (!store.answers.painCategory || !store.answers.urgency) {
    return null;
  }

  return calculateDiagnosisResult(store.answers);
});

const previewPrice = computed(() => {
  if (!previewResult.value) {
    return 'Faixa liberada no próximo passo';
  }

  return `${formatCurrency(previewResult.value.estimatedPriceMin)} - ${formatCurrency(previewResult.value.estimatedPriceMax)}`;
});

const previewComplexity = computed(() => getComplexityLabel(previewResult.value?.complexityLevel));

const benefitItems = computed(() => {
  if (!previewResult.value) {
    return [
      'Faixa completa de investimento',
      'Prazo estimado de execução',
      'Recomendação de abordagem',
      'Próximos passos sugeridos',
    ];
  }

  return [
    `Faixa completa de investimento: ${previewPrice.value}`,
    `Prazo estimado: ${previewResult.value.estimatedTimeMinDays} a ${previewResult.value.estimatedTimeMaxDays} dias`,
    `Recomendação: ${previewResult.value.recommendedApproach}`,
    'Próximos passos para tirar o projeto do papel sem excesso inicial',
  ];
});
</script>

<template>
  <div class="space-y-8">
    <div class="grid gap-4 md:grid-cols-3">
      <SummaryCard
        title="Categoria principal"
        :value="getPainCategoryLabel(store.answers.painCategory)"
        detail="A leitura parte da dor que hoje mais impacta a operação."
      />
      <SummaryCard
        title="Complexidade prevista"
        :value="previewComplexity"
        detail="Uma primeira leitura técnica do porte da solução."
      />
      <SummaryCard
        title="Faixa inicial"
        :value="previewPrice"
        detail="O valor final exibido abaixo considera escopo, urgência e nível de esforço."
      />
    </div>

    <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="rounded-[30px] border border-black/8 bg-ink p-7 text-white shadow-soft">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Seu diagnóstico está pronto</p>
        <h2 class="mt-4 text-3xl font-bold leading-tight">Falta só um passo para liberar sua análise completa</h2>
        <p class="mt-4 text-sm leading-7 text-white/75">
          Preencha seus dados para ver a faixa completa, o prazo sugerido, a recomendação de abordagem e os próximos passos para começar com clareza.
        </p>

        <div class="mt-6 space-y-3">
          <div
            v-for="item in benefitItems"
            :key="item"
            class="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <span class="mt-0.5 text-sm font-bold text-brand-300">+</span>
            <span class="text-sm leading-6 text-white/82">{{ item }}</span>
          </div>
        </div>
      </div>

      <div class="rounded-[30px] border border-black/8 bg-white p-6 shadow-soft sm:p-7">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-700/80">Liberar resultado</p>
        <h3 class="mt-3 text-2xl font-bold">Preencha para ver seu diagnóstico completo</h3>
        <p class="mt-3 text-sm leading-6 text-black/60">
          Seus dados também permitem continuar a conversa caso faça sentido avançar com um MVP ou uma implantação por fases.
        </p>
        <div class="mt-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
