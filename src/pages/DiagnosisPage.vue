<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseProgressBar from '@/components/common/BaseProgressBar.vue';
import DiagnosisLayout from '@/components/diagnosis/DiagnosisLayout.vue';
import StepBudget from '@/components/diagnosis/StepBudget.vue';
import StepCurrentScenario from '@/components/diagnosis/StepCurrentScenario.vue';
import StepFeatures from '@/components/diagnosis/StepFeatures.vue';
import StepHeader from '@/components/diagnosis/StepHeader.vue';
import StepImpacts from '@/components/diagnosis/StepImpacts.vue';
import StepLeadCapture from '@/components/diagnosis/StepLeadCapture.vue';
import StepNavigation from '@/components/diagnosis/StepNavigation.vue';
import StepPainCategory from '@/components/diagnosis/StepPainCategory.vue';
import StepUrgency from '@/components/diagnosis/StepUrgency.vue';
import { useDiagnosisFlow } from '@/composables/useDiagnosisFlow';
import { useTracking } from '@/composables/useTracking';
import { useDiagnosisStore } from '@/stores/diagnosis.store';

const router = useRouter();
const store = useDiagnosisStore();
const { steps, currentStep, currentStepIndex, progressPercent, goBack, goNext } = useDiagnosisFlow();
const { trackDiagnosisStarted, trackDiagnosisCompleted, trackStepAdvance } = useTracking();

onMounted(() => {
  trackDiagnosisStarted();
});

const stepComponent = computed(() => {
  switch (currentStep.value.key) {
    case 'painCategory':
      return StepPainCategory;
    case 'currentScenario':
      return StepCurrentScenario;
    case 'impacts':
      return StepImpacts;
    case 'features':
      return StepFeatures;
    case 'urgency':
      return StepUrgency;
    case 'budgetRange':
      return StepBudget;
    case 'lead':
      return StepLeadCapture;
    default:
      return StepPainCategory;
  }
});

function handleNext() {
  trackStepAdvance(currentStep.value.key);
  goNext();
}

async function handleSubmit() {
  try {
    store.calculate();
    await store.submitDiagnosis();
    trackDiagnosisCompleted();
    await router.push('/resultado');
  } catch {
    // The store already exposes a user-facing error message for the UI.
  }
}
</script>

<template>
  <DiagnosisLayout>
    <div class="space-y-6">
      <RouterLink to="/" class="inline-flex text-sm font-semibold text-black/60 hover:text-black">
        Voltar para a pagina inicial
      </RouterLink>

      <BaseCard class="space-y-8 bg-white/95">
        <BaseProgressBar
          :value="progressPercent"
          :current-step="currentStepIndex + 1"
          :total-steps="steps.length"
        />
        <StepHeader
          :step="currentStepIndex + 1"
          :total="steps.length"
          :title="currentStep.title"
          :description="currentStep.description"
        />

        <div class="rounded-[28px] bg-sand/70 p-4 sm:p-5">
          <component :is="stepComponent" />
        </div>

        <p v-if="store.errorMessage" class="text-sm font-medium text-red-600">
          {{ store.errorMessage }}
        </p>

        <StepNavigation
          :can-go-next="store.canGoNext"
          :is-first-step="currentStepIndex === 0"
          :is-last-step="currentStepIndex === steps.length - 1"
          :submitting="store.submitting"
          @back="goBack"
          @next="handleNext"
          @submit="handleSubmit"
        />
      </BaseCard>
    </div>
  </DiagnosisLayout>
</template>
