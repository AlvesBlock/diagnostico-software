<script setup lang="ts">
import BaseCard from '@/components/common/BaseCard.vue';
import BaseSection from '@/components/common/BaseSection.vue';

const painPoints = [
  {
    title: 'Cobranca travada e falta de previsibilidade',
    description: 'Financeiro operando no improviso, atraso em recebimentos e pouca visibilidade do que entra ou fica pendente.',
  },
  {
    title: 'Atendimento lento e sem padrao',
    description: 'WhatsApp manual, dificuldade para distribuir conversas e pouca rastreabilidade do que foi prometido.',
  },
  {
    title: 'Retrabalho por dados espalhados',
    description: 'Time conciliando planilhas, sistemas antigos e informacoes desconectadas para fazer a operacao rodar.',
  },
  {
    title: 'Equipe crescendo sem processo sustentavel',
    description: 'A operacao depende demais de pessoas especificas e perde produtividade quando o volume aumenta.',
  },
];
</script>

<template>
  <BaseSection>
    <div class="space-y-8">
      <div class="max-w-3xl space-y-3">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-700/80">Para quem faz sentido</p>
        <h2 class="text-3xl font-bold sm:text-4xl">Quando o processo trava, voce comeca a pagar por isso todos os dias.</h2>
        <p class="text-base leading-7 text-black/65">
          O diagnostico foi desenhado para empresas que ja sentem o peso operacional de continuar em planilha, WhatsApp manual, sistemas antigos ou fluxos desconectados.
        </p>
      </div>

      <div class="grid gap-4 lg:grid-cols-2">
        <BaseCard v-for="pain in painPoints" :key="pain.title">
          <div class="space-y-3">
            <p class="text-xl font-bold">{{ pain.title }}</p>
            <p class="text-sm leading-6 text-black/62">{{ pain.description }}</p>
          </div>
        </BaseCard>
      </div>
    </div>
  </BaseSection>
</template>
