<script setup lang="ts">
import BaseCheckbox from '@/components/common/BaseCheckbox.vue';
import { featureOptions } from '@/config/diagnosis.config';
import type { DiagnosisFeatureSelection, FeatureKey } from '@/types/diagnosis.types';

defineProps<{
  modelValue: DiagnosisFeatureSelection;
}>();

const emit = defineEmits<{
  toggle: [key: FeatureKey];
}>();
</script>

<template>
  <div class="grid gap-3 sm:grid-cols-2">
    <BaseCheckbox
      v-for="feature in featureOptions"
      :key="feature.key"
      :checked="modelValue[feature.key]"
      :label="feature.label"
      @change="emit('toggle', feature.key)"
    />
  </div>
</template>
