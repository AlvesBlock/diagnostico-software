<script setup lang="ts">
import BaseCard from '@/components/common/BaseCard.vue';
import BaseSection from '@/components/common/BaseSection.vue';

const benefits = [
  {
    title: 'Mais clareza comercial',
    description: 'Ajuda a decidir com menos ruído se o projeto pede MVP, fases ou uma implantacao mais robusta.',
  },
  {
    title: 'Mais percepcao de criterio',
    description: 'O usuario sente que a estimativa leva em conta o contexto do negocio, nao apenas uma tabela fixa.',
  },
  {
    title: 'Mais prontidao para conversao',
    description: 'Ao fim da jornada, o lead ja chega com uma expectativa melhor alinhada de investimento e escopo.',
  },
];
</script>

<template>
  <BaseSection>
    <div class="space-y-8">
      <div class="max-w-3xl space-y-3">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-700/80">Por que isso converte melhor</p>
        <h2 class="text-3xl font-bold sm:text-4xl">Nao e uma calculadora de app. E uma primeira conversa consultiva, automatizada.</h2>
        <p class="text-base leading-7 text-black/65">
          O objetivo nao e prometer um numero exato, e sim posicionar a demanda com maturidade suficiente para uma conversa comercial qualificada.
        </p>
      </div>

      <div class="grid gap-4 lg:grid-cols-3">
        <BaseCard v-for="benefit in benefits" :key="benefit.title">
          <div class="space-y-3">
            <p class="text-xl font-bold">{{ benefit.title }}</p>
            <p class="text-sm leading-6 text-black/62">{{ benefit.description }}</p>
          </div>
        </BaseCard>
      </div>
    </div>
  </BaseSection>
</template>
