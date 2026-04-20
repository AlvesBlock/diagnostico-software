<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>

<template>
  <div class="grid gap-3">
    <div
      v-for="item in items"
      :key="item"
      class="rounded-[22px] border border-black/8 bg-sand/65 px-4 py-4 text-sm leading-6 text-black/72"
    >
      {{ item }}
    </div>
  </div>
</template>
