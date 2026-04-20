<script setup lang="ts">
import BaseCard from '@/components/common/BaseCard.vue';
import BaseSection from '@/components/common/BaseSection.vue';

const benefits = [
  {
    title: 'Mais clareza comercial',
    description: 'Ajuda a decidir com menos ruído se o projeto pede um MVP, fases ou uma implantação mais robusta.',
  },
  {
    title: 'Mais percepção de critério',
    description: 'O usuário sente que a estimativa leva em conta o contexto do negócio, e não apenas uma tabela fixa.',
  },
  {
    title: 'Mais prontidão para conversão',
    description: 'Ao fim da jornada, o lead já chega com uma expectativa melhor alinhada de investimento e escopo.',
  },
];
</script>

<template>
  <BaseSection>
    <div class="space-y-8">
      <div class="max-w-3xl space-y-3">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-700/80">Por que isso converte melhor</p>
        <h2 class="text-3xl font-bold leading-tight sm:text-4xl">Não é uma calculadora de app. É uma primeira conversa consultiva, automatizada.</h2>
        <p class="text-base leading-7 text-black/65">
          O objetivo não é prometer um número exato, e sim posicionar a demanda com maturidade suficiente para uma conversa comercial qualificada.
        </p>
      </div>

      <div class="grid gap-4 lg:grid-cols-3">
        <BaseCard v-for="benefit in benefits" :key="benefit.title" class="interactive-lift">
          <div class="space-y-3">
            <p class="text-xl font-bold">{{ benefit.title }}</p>
            <p class="text-sm leading-6 text-black/62">{{ benefit.description }}</p>
          </div>
        </BaseCard>
      </div>
    </div>
  </BaseSection>
</template>
