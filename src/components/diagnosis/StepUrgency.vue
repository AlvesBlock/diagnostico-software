<script setup lang="ts">
import BaseRadioCard from '@/components/common/BaseRadioCard.vue';
import { urgencyOptions } from '@/config/diagnosis.config';
import { useDiagnosisStore } from '@/stores/diagnosis.store';

const store = useDiagnosisStore();
</script>

<template>
  <div class="space-y-4">
    <BaseRadioCard
      v-for="option in urgencyOptions"
      :key="option.value"
      :active="store.answers.urgency === option.value"
      :title="option.label"
      :description="option.description"
      eyebrow="Urgencia"
      @select="store.setUrgency(option.value)"
    />
  </div>
</template>
