<script setup lang="ts">
import BaseRadioCard from '@/components/common/BaseRadioCard.vue';
import { budgetRangeOptions } from '@/config/diagnosis.config';
import { useDiagnosisStore } from '@/stores/diagnosis.store';

const store = useDiagnosisStore();
</script>

<template>
  <div class="space-y-4">
    <BaseRadioCard
      v-for="option in budgetRangeOptions"
      :key="option.value"
      :active="store.answers.budgetRange === option.value"
      :title="option.label"
      :description="option.description"
      eyebrow="Investimento"
      @select="store.setBudgetRange(option.value)"
    />
  </div>
</template>
