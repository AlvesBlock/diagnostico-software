<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';

defineProps<{
  canGoNext: boolean;
  isFirstStep: boolean;
  isLastStep: boolean;
  submitting?: boolean;
}>();

const emit = defineEmits<{
  back: [];
  next: [];
  submit: [];
}>();
</script>

<template>
  <div class="flex items-center justify-between gap-4">
    <BaseButton variant="ghost" :disabled="isFirstStep" @click="emit('back')">Voltar</BaseButton>
    <BaseButton
      v-if="!isLastStep"
      :disabled="!canGoNext"
      @click="emit('next')"
    >
      Avançar
    </BaseButton>
    <BaseButton
      v-else
      :disabled="!canGoNext || submitting"
      @click="emit('submit')"
    >
      {{ submitting ? 'Liberando...' : 'Ver meu diagnóstico completo' }}
    </BaseButton>
  </div>
</template>
