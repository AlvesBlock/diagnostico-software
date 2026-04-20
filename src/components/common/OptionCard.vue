<script setup lang="ts">
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
  <button
    type="button"
    class="group relative w-full overflow-hidden rounded-[26px] border p-5 text-left transition duration-200"
    :class="
      active
        ? 'border-brand-500 bg-gradient-to-br from-brand-50 to-white shadow-soft'
        : 'border-black/10 bg-white hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft'
    "
    @click="emit('select')"
  >
    <div
      class="absolute inset-x-0 top-0 h-1 transition"
      :class="active ? 'bg-brand-500' : 'bg-transparent group-hover:bg-brand-200'"
    />
    <div class="flex items-start justify-between gap-4">
      <div class="space-y-2">
        <p v-if="eyebrow" class="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700/80">
          {{ eyebrow }}
        </p>
        <p class="text-base font-semibold text-ink">{{ title }}</p>
        <p v-if="description" class="max-w-[32rem] text-sm leading-6 text-black/60">{{ description }}</p>
      </div>

      <span
        class="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition"
        :class="active ? 'border-brand-500 bg-brand-500 text-white' : 'border-black/15 text-transparent'"
      >
        ✓
      </span>
    </div>
  </button>
</template>
