<script setup lang="ts">
import AnimatedBackground from '@/components/common/AnimatedBackground.vue';
</script>

<template>
  <div class="relative min-h-screen overflow-hidden text-ink">
    <AnimatedBackground variant="particles" density="low" />
    <div class="relative z-10 min-h-screen">
      <RouterView />
    </div>
  </div>
</template>
