import { computed } from 'vue';
import { diagnosisSteps } from '@/config/diagnosis.config';
import { useDiagnosisStore } from '@/stores/diagnosis.store';

export function useDiagnosisFlow() {
  const store = useDiagnosisStore();

  const currentStep = computed(() => diagnosisSteps[store.currentStepIndex]);
  const progressPercent = computed(() => ((store.currentStepIndex + 1) / diagnosisSteps.length) * 100);

  return {
    steps: diagnosisSteps,
    currentStep,
    progressPercent,
    currentStepIndex: computed(() => store.currentStepIndex),
    goNext: store.nextStep,
    goBack: store.previousStep,
  };
}
