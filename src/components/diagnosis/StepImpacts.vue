<script setup lang="ts">
import BaseCheckbox from '@/components/common/BaseCheckbox.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import { impactOptions } from '@/config/diagnosis.config';
import { useDiagnosisStore } from '@/stores/diagnosis.store';

const store = useDiagnosisStore();
</script>

<template>
  <div class="space-y-4">
    <p class="text-sm leading-6 text-black/58">
      Selecione os impactos mais visíveis. Isso ajuda a deixar o diagnóstico mais aderente ao peso real do problema.
    </p>

    <BaseCheckbox
      v-for="option in impactOptions"
      :key="option.value"
      :checked="store.answers.impacts.includes(option.value)"
      :label="option.label"
      @change="store.toggleImpact(option.value)"
    />

    <BaseInput
      v-if="store.answers.impacts.includes('other')"
      v-model="store.answers.impactsOther"
      label="Descreva outro impacto"
      placeholder="Ex.: dificuldade para acompanhar a produtividade"
    />
  </div>
</template>
