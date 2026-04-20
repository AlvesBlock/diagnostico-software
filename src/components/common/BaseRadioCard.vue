<script setup lang="ts">
import OptionCard from './OptionCard.vue';

defineProps<{
  active: boolean;
  title: string;
  description?: string;
  eyebrow?: string;
}>();

const emit = defineEmits<{
  select: [];
}>();
</script>

<template>
  <OptionCard :active="active" :title="title" :description="description" :eyebrow="eyebrow" @select="emit('select')" />
</template>
