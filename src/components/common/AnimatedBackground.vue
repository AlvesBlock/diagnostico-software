<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    variant?: 'gradient' | 'particles';
    density?: 'low' | 'medium';
  }>(),
  {
    variant: 'particles',
    density: 'low',
  },
);

const particleCount = computed(() => (props.density === 'medium' ? 12 : 8));

const particles = computed(() =>
  Array.from({ length: particleCount.value }, (_, index) => {
    const left = 8 + ((index * 11) % 78);
    const top = 10 + ((index * 17) % 74);
    const size = index % 3 === 0 ? 5 : 3;
    const duration = 22 + (index % 5) * 4;
    const delay = index * 1.6;

    return {
      id: `particle-${index}`,
      left: `${left}%`,
      top: `${top}%`,
      size: `${size}px`,
      duration: `${duration}s`,
      delay: `${delay}s`,
    };
  }),
);

const connectors = computed(() => [
  { id: 'line-1', left: '12%', top: '26%', width: '22%', rotate: '-10deg', duration: '34s' },
  { id: 'line-2', left: '58%', top: '20%', width: '18%', rotate: '16deg', duration: '38s' },
  { id: 'line-3', left: '34%', top: '58%', width: '24%', rotate: '8deg', duration: '30s' },
  { id: 'line-4', left: '62%', top: '66%', width: '16%', rotate: '-18deg', duration: '36s' },
]);
</script>

<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,246,239,0.95),_rgba(234,241,229,0.88)_32%,_rgba(246,241,232,0.95)_66%,_rgba(250,248,244,0.98)_100%)]" />

    <div
      class="absolute inset-0 opacity-70"
      :class="variant === 'gradient' ? 'animated-mesh' : ''"
    >
      <div class="absolute left-[-10%] top-[-4%] h-[28rem] w-[28rem] rounded-full bg-brand-100/55 blur-3xl" />
      <div class="absolute right-[-12%] top-[12%] h-[24rem] w-[24rem] rounded-full bg-[#e9e2d1]/55 blur-3xl" />
      <div class="absolute bottom-[-12%] left-[24%] h-[26rem] w-[26rem] rounded-full bg-brand-200/40 blur-3xl" />
    </div>

    <template v-if="variant === 'particles'">
      <div
        v-for="line in connectors"
        :key="line.id"
        class="absolute h-px rounded-full bg-brand-900/8 particle-float"
        :style="{
          left: line.left,
          top: line.top,
          width: line.width,
          transform: `rotate(${line.rotate})`,
          animationDuration: line.duration,
        }"
      />

      <span
        v-for="particle in particles"
        :key="particle.id"
        class="absolute rounded-full bg-brand-900/10 particle-float"
        :style="{
          left: particle.left,
          top: particle.top,
          width: particle.size,
          height: particle.size,
          animationDuration: particle.duration,
          animationDelay: particle.delay,
        }"
      />
    </template>

    <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/35 to-transparent" />
  </div>
</template>
