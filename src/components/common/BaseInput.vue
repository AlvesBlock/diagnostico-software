<script setup lang="ts">
defineProps<{
  modelValue: string;
  label: string;
  placeholder?: string;
  type?: string;
  hint?: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>

<template>
  <label class="block space-y-2">
    <span class="text-sm font-semibold text-ink">{{ label }}</span>
    <input
      :value="modelValue"
      :type="type ?? 'text'"
      :placeholder="placeholder"
      class="w-full rounded-2xl border-black/10 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-500 focus:ring-brand-500"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <span v-if="hint" class="block text-xs leading-5 text-black/50">{{ hint }}</span>
  </label>
</template>
