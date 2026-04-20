<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import BaseSection from '@/components/common/BaseSection.vue';
</script>

<template>
  <BaseSection>
    <div class="panel-surface overflow-hidden bg-ink p-8 text-white sm:p-10">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div class="max-w-2xl space-y-3">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Pronto para entender o tamanho do gargalo</p>
          <h2 class="text-3xl font-bold leading-tight">Antes de pedir proposta, descubra a melhor forma de atacar o problema.</h2>
          <p class="text-sm leading-7 text-white/75">
            Em poucos minutos, voce sai com uma leitura inicial de investimento, prazo e abordagem para comecar com mais clareza.
          </p>
        </div>
        <RouterLink to="/diagnostico">
          <BaseButton variant="secondary">Iniciar diagnostico</BaseButton>
        </RouterLink>
      </div>
    </div>
  </BaseSection>
</template>
