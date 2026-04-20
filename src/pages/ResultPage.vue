<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseSection from '@/components/common/BaseSection.vue';
import ResultActions from '@/components/result/ResultActions.vue';
import ResultBreakdown from '@/components/result/ResultBreakdown.vue';
import ResultHero from '@/components/result/ResultHero.vue';
import ResultHighlights from '@/components/result/ResultHighlights.vue';
import { useTracking } from '@/composables/useTracking';
import { useWhatsappLink } from '@/composables/useWhatsappLink';
import { useDiagnosisStore } from '@/stores/diagnosis.store';

const router = useRouter();
const store = useDiagnosisStore();
const { trackWhatsappClick } = useTracking();

const result = computed(() => store.result);

if (!result.value) {
  router.replace('/diagnostico');
}

const whatsappUrl = computed(() =>
  useWhatsappLink(
    `Ola! Conclui meu diagnostico e quero conversar sobre a recomendacao para um projeto ${result.value?.complexityLevel ?? ''}.`,
  ),
);

const nextSteps = [
  'Priorizar o modulo mais ligado ao gargalo principal para reduzir tempo ate a primeira entrega.',
  'Validar dependencias externas e integracoes antes de expandir escopo.',
  'Definir uma primeira fase com entregas mensuraveis para comprovar ganho operacional.',
];
</script>

<template>
  <BaseSection v-if="result">
    <div class="space-y-8">
      <ResultHero :result="result" />
      <ResultBreakdown :result="result" />

      <div class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <BaseCard>
          <div class="space-y-4">
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-700/80">Recomendacao consultiva</p>
            <h2 class="text-2xl font-bold">{{ result.recommendedApproach }}</h2>
            <p class="text-sm leading-7 text-black/65">
              Essa recomendacao considera escopo declarado, urgencia e risco de implementacao para evitar que o projeto comece maior do que precisa.
            </p>
            <ResultHighlights :items="result.topHighlights" />
          </div>
        </BaseCard>

        <BaseCard>
          <div class="space-y-4">
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-700/80">Proximos passos</p>
            <h2 class="text-2xl font-bold">Como transformar essa leitura em plano de execucao</h2>
            <ResultHighlights :items="nextSteps" />
          </div>
        </BaseCard>
      </div>

      <div class="rounded-[30px] border border-black/8 bg-white p-6 shadow-soft sm:p-8">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-2xl space-y-3">
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-700/80">Acao recomendada</p>
            <h2 class="text-2xl font-bold sm:text-3xl">Se fizer sentido, o proximo passo e validar prioridades e formato do MVP.</h2>
            <p class="text-sm leading-7 text-black/65">
              A conversa comercial ja pode partir desta base para discutir recorte inicial, fases e viabilidade real de implantacao.
            </p>
          </div>
          <ResultActions :whatsapp-url="whatsappUrl" @click-whatsapp="trackWhatsappClick" />
        </div>
      </div>

      <div>
        <RouterLink to="/">
          <BaseButton variant="ghost">Voltar para a landing</BaseButton>
        </RouterLink>
      </div>
    </div>
  </BaseSection>
</template>
