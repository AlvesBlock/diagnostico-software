import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { calculateDiagnosisResult } from '@/services/diagnosis/calculation.service';
import { persistDiagnosis } from '@/services/diagnosis/persistence.service';
import type {
  BudgetRange,
  CurrentScenario,
  FeatureKey,
  ImpactOption,
  PainCategory,
  UrgencyLevel,
} from '@/types/diagnosis.types';
import type { DiagnosisResult } from '@/types/result.types';
import { createEmptyAnswers, createEmptyLeadForm } from '@/utils/normalizers';
import { isStepValid } from '@/utils/validators';
import { useUtmParams } from '@/composables/useUtmParams';

export const useDiagnosisStore = defineStore('diagnosis', () => {
  const answers = ref(createEmptyAnswers());
  const lead = ref(createEmptyLeadForm());
  const currentStepIndex = ref(0);
  const result = ref<DiagnosisResult | null>(null);
  const submitting = ref(false);
  const errorMessage = ref('');

  const canGoNext = computed(() => isStepValid(currentStepIndex.value, answers.value, lead.value));

  function setPainCategory(value: PainCategory) {
    answers.value.painCategory = value;
  }

  function setCurrentScenario(value: CurrentScenario) {
    answers.value.currentScenario = value;
  }

  function toggleImpact(value: ImpactOption) {
    const impacts = answers.value.impacts;
    answers.value.impacts = impacts.includes(value)
      ? impacts.filter((impact) => impact !== value)
      : [...impacts, value];
  }

  function toggleFeature(key: FeatureKey) {
    answers.value.features[key] = !answers.value.features[key];
  }

  function setUrgency(value: UrgencyLevel) {
    answers.value.urgency = value;
  }

  function setBudgetRange(value: BudgetRange) {
    answers.value.budgetRange = value;
  }

  function nextStep() {
    if (currentStepIndex.value < 6 && canGoNext.value) {
      currentStepIndex.value += 1;
    }
  }

  function previousStep() {
    if (currentStepIndex.value > 0) {
      currentStepIndex.value -= 1;
    }
  }

  function calculate() {
    result.value = calculateDiagnosisResult(answers.value);
    return result.value;
  }

  async function submitDiagnosis() {
    if (!result.value) {
      calculate();
    }

    if (!result.value) {
      throw new Error('Unable to calculate diagnosis result.');
    }

    submitting.value = true;
    errorMessage.value = '';

    try {
      const tracking = useUtmParams();
      await persistDiagnosis({
        lead: lead.value,
        answers: answers.value,
        result: result.value,
        tracking,
      });
    } catch (error) {
      errorMessage.value = error instanceof Error ? error.message : 'Erro ao salvar diagnóstico.';
      throw error;
    } finally {
      submitting.value = false;
    }
  }

  function reset() {
    answers.value = createEmptyAnswers();
    lead.value = createEmptyLeadForm();
    currentStepIndex.value = 0;
    result.value = null;
    errorMessage.value = '';
  }

  return {
    answers,
    lead,
    currentStepIndex,
    result,
    submitting,
    errorMessage,
    canGoNext,
    setPainCategory,
    setCurrentScenario,
    toggleImpact,
    toggleFeature,
    setUrgency,
    setBudgetRange,
    nextStep,
    previousStep,
    calculate,
    submitDiagnosis,
    reset,
  };
});
