<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import BaseSection from '@/components/common/BaseSection.vue';
</script>

<template>
  <BaseSection>
    <div class="panel-surface mx-auto max-w-2xl space-y-4 p-8 text-center">
      <h1 class="text-3xl font-bold">Página não encontrada</h1>
      <p class="text-black/65">A rota que você tentou acessar não existe nesta fase do projeto.</p>
      <RouterLink to="/">
        <BaseButton>Voltar ao início</BaseButton>
      </RouterLink>
    </div>
  </BaseSection>
</template>
