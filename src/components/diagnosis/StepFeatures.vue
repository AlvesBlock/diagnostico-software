<script setup lang="ts">
import FeatureToggleGrid from './FeatureToggleGrid.vue';
import { useDiagnosisStore } from '@/stores/diagnosis.store';

const store = useDiagnosisStore();
</script>

<template>
  <div class="space-y-4">
    <p class="text-sm leading-6 text-black/58">
      Pense no que precisa existir para a primeira versao gerar valor de negocio. O restante pode virar evolucao futura.
    </p>
    <FeatureToggleGrid :model-value="store.answers.features" @toggle="store.toggleFeature" />
  </div>
</template>
