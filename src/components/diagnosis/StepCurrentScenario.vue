<script setup lang="ts">
import BaseInput from '@/components/common/BaseInput.vue';
import BaseRadioCard from '@/components/common/BaseRadioCard.vue';
import { currentScenarioOptions } from '@/config/diagnosis.config';
import { useDiagnosisStore } from '@/stores/diagnosis.store';

const store = useDiagnosisStore();
</script>

<template>
  <div class="space-y-4">
    <BaseRadioCard
      v-for="option in currentScenarioOptions"
      :key="option.value"
      :active="store.answers.currentScenario === option.value"
      :title="option.label"
      :description="option.description"
      eyebrow="Cenario atual"
      @select="store.setCurrentScenario(option.value)"
    />

    <BaseInput
      v-if="store.answers.currentScenario === 'other'"
      v-model="store.answers.currentScenarioOther"
      label="Descreva o cenário atual"
      placeholder="Ex.: cada setor usa uma ferramenta diferente"
    />
  </div>
</template>
