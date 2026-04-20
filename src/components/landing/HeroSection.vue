<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import BaseSection from '@/components/common/BaseSection.vue';
import BaseTag from '@/components/common/BaseTag.vue';
import { landingCopy } from '@/config/copy.config';

const proofItems = [
  'Faixa de investimento em vez de um chute genérico.',
  'Leitura inicial de prazo, complexidade e abordagem.',
  'Diagnóstico pensado para operações que dependem de planilhas, WhatsApp ou sistemas desconectados.',
];

const metrics = [
  { label: 'Tempo médio', value: '3 a 5 min' },
  { label: 'Entrega', value: 'Diagnóstico consultivo' },
  { label: 'Foco', value: 'Problemas operacionais reais' },
];
</script>

<template>
  <BaseSection>
    <div class="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
      <div class="space-y-8">
        <BaseTag>{{ landingCopy.eyebrow }}</BaseTag>

        <div class="space-y-6">
          <h1 class="max-w-4xl text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-[4.1rem]">
            {{ landingCopy.headline }}
          </h1>
          <p class="max-w-2xl text-lg leading-8 text-black/62 sm:text-[1.15rem]">
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
            class="interactive-lift rounded-[22px] border border-white/60 bg-white/65 px-4 py-4 backdrop-blur-md"
          >
            <p class="text-xs font-bold uppercase tracking-[0.15em] text-black/35">{{ metric.label }}</p>
            <p class="mt-2 text-base font-bold">{{ metric.value }}</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute -left-10 top-8 hidden h-36 w-36 rounded-full bg-brand-200/50 blur-3xl lg:block" />
        <div class="absolute -right-6 bottom-2 hidden h-28 w-28 rounded-full bg-[#eadfc8]/55 blur-3xl lg:block" />

        <div class="panel-surface interactive-lift relative overflow-hidden border-white/55 bg-white/72 p-8 backdrop-blur-md sm:p-9">
          <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-brand-200/80 via-clay/25 to-transparent" />
          <div class="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-300/30 to-transparent" />

          <div class="relative space-y-7">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-700/80">O que você recebe</p>
              <h2 class="mt-3 text-2xl font-bold leading-tight">Uma leitura inicial para decidir com mais critério.</h2>
            </div>

            <div class="space-y-3">
              <div
                v-for="item in proofItems"
                :key="item"
                class="interactive-lift flex items-start gap-3 rounded-2xl border border-black/6 bg-white/70 px-4 py-4 backdrop-blur-sm"
              >
                <span class="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                  +
                </span>
                <p class="text-sm leading-6 text-black/70">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>
