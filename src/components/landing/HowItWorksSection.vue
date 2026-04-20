<script setup lang="ts">
import BaseSection from '@/components/common/BaseSection.vue';

const steps = [
  {
    title: 'Você descreve a dor e o cenário atual',
    description: 'O fluxo captura onde está o gargalo, como o processo funciona hoje e qual é o impacto disso na operação.',
  },
  {
    title: 'O sistema interpreta escopo e urgência',
    description: 'A engine cruza funcionalidades, peso da dor e nível de urgência para gerar uma leitura inicial consistente.',
  },
  {
    title: 'Você recebe um diagnóstico consultivo',
    description: 'A saída mostra faixa de investimento, prazo, complexidade e recomendação de abordagem para começar do jeito certo.',
  },
];
</script>

<template>
  <BaseSection>
    <div id="como-funciona" class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="space-y-3">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-700/80">Como funciona</p>
        <h2 class="text-3xl font-bold leading-tight sm:text-4xl">Uma jornada curta para transformar dor operacional em clareza de decisão.</h2>
        <p class="text-base leading-7 text-black/65">
          Sem reunião longa logo no início, mas com critério suficiente para entender se faz sentido começar por um MVP ou em fases.
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="panel-surface interactive-lift flex items-start gap-4 p-6 sm:p-7"
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
