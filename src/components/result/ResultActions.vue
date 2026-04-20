<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';

defineProps<{
  whatsappUrl: string;
}>();

const emit = defineEmits<{
  clickWhatsapp: [];
}>();
</script>

<template>
  <div class="flex flex-col gap-3 sm:flex-row">
    <a :href="whatsappUrl" target="_blank" rel="noreferrer" @click="emit('clickWhatsapp')">
      <BaseButton>Continuar no WhatsApp</BaseButton>
    </a>
    <RouterLink to="/diagnostico">
      <BaseButton variant="secondary">Refazer diagnostico</BaseButton>
    </RouterLink>
  </div>
</template>
