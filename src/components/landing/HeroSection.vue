<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import BaseSection from '@/components/common/BaseSection.vue';
import BaseTag from '@/components/common/BaseTag.vue';
import { landingCopy } from '@/config/copy.config';

const proofItems = [
  'Faixa de investimento em vez de chute genérico',
  'Leitura inicial de prazo, complexidade e abordagem',
  'Diagnostico pensado para operacoes que dependem de planilha, WhatsApp ou sistemas desconectados',
];

const metrics = [
  { label: 'Tempo medio', value: '3 a 5 min' },
  { label: 'Entrega', value: 'Diagnostico consultivo' },
  { label: 'Foco', value: 'Problemas operacionais reais' },
];
</script>

<template>
  <BaseSection>
    <div class="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-7">
        <BaseTag>{{ landingCopy.eyebrow }}</BaseTag>

        <div class="space-y-5">
          <h1 class="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {{ landingCopy.headline }}
          </h1>
          <p class="max-w-2xl text-lg leading-8 text-black/65">
            {{ landingCopy.subheadline }}
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row">
          <RouterLink to="/diagnostico">
            <BaseButton>{{ landingCopy.primaryCta }}</BaseButton>
          </RouterLink>
          <a href="#como-funciona">
            <BaseButton variant="secondary">{{ landingCopy.secondaryCta }}</BaseButton>
          </a>
        </div>

        <div class="grid gap-3 sm:grid-cols-3">
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="rounded-[22px] border border-black/8 bg-white/75 px-4 py-4"
          >
            <p class="text-xs font-bold uppercase tracking-[0.15em] text-black/35">{{ metric.label }}</p>
            <p class="mt-2 text-base font-bold">{{ metric.value }}</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute -left-8 top-10 hidden h-32 w-32 rounded-full bg-brand-200/60 blur-3xl lg:block" />
        <div class="panel-surface relative overflow-hidden p-8 sm:p-9">
          <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-brand-200 via-clay/30 to-transparent" />
          <div class="relative space-y-6">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-700/80">O que voce recebe</p>
              <h2 class="mt-3 text-2xl font-bold leading-tight">Uma leitura inicial para decidir com mais criterio.</h2>
            </div>

            <div class="space-y-3">
              <div
                v-for="item in proofItems"
                :key="item"
                class="flex items-start gap-3 rounded-2xl border border-black/6 bg-sand/80 px-4 py-4"
              >
                <span class="mt-0.5 text-sm font-bold text-brand-600">✓</span>
                <p class="text-sm leading-6 text-black/70">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>
