<script setup lang="ts">
import BaseInput from '@/components/common/BaseInput.vue';
import BaseRadioCard from '@/components/common/BaseRadioCard.vue';
import { painCategoryOptions } from '@/config/diagnosis.config';
import { useDiagnosisStore } from '@/stores/diagnosis.store';

const store = useDiagnosisStore();
</script>

<template>
  <div class="space-y-4">
    <BaseRadioCard
      v-for="option in painCategoryOptions"
      :key="option.value"
      :active="store.answers.painCategory === option.value"
      :title="option.label"
      :description="option.description"
      eyebrow="Dor principal"
      @select="store.setPainCategory(option.value)"
    />

    <BaseInput
      v-if="store.answers.painCategory === 'other'"
      v-model="store.answers.painCategoryOther"
      label="Descreva brevemente"
      placeholder="Ex.: controle de ordens de serviço"
    />
  </div>
</template>
