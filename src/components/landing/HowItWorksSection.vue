<script setup lang="ts">
import BaseSection from '@/components/common/BaseSection.vue';

const steps = [
  {
    title: 'Voce descreve a dor e o cenario atual',
    description: 'O fluxo captura onde esta o gargalo, como o processo funciona hoje e o impacto disso na operacao.',
  },
  {
    title: 'O sistema interpreta escopo e urgencia',
    description: 'A engine cruza funcionalidades, peso da dor e nivel de urgencia para gerar uma leitura inicial consistente.',
  },
  {
    title: 'Voce recebe um diagnostico consultivo',
    description: 'A saida mostra faixa de investimento, prazo, complexidade e recomendacao de abordagem para iniciar do jeito certo.',
  },
];
</script>

<template>
  <BaseSection>
    <div id="como-funciona" class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="space-y-3">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-700/80">Como funciona</p>
        <h2 class="text-3xl font-bold sm:text-4xl">Uma jornada curta para transformar dor operacional em clareza de decisao.</h2>
        <p class="text-base leading-7 text-black/65">
          Sem reunião longa logo no inicio, mas com criterio suficiente para entender se faz sentido comecar por MVP ou em fases.
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="panel-surface flex items-start gap-4 p-6 sm:p-7"
        >
          <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-sm font-bold text-white">
            {{ index + 1 }}
          </span>
          <div class="space-y-2">
            <p class="text-lg font-bold">{{ step.title }}</p>
            <p class="text-sm leading-6 text-black/65">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>
