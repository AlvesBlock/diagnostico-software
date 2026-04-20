import { computed } from 'vue';
import { useDiagnosisStore } from '@/stores/diagnosis.store';
import { isValidLeadForm } from '@/utils/validators';

export function useLeadForm() {
  const store = useDiagnosisStore();

  const isValid = computed(() => isValidLeadForm(store.lead));

  return {
    lead: store.lead,
    isValid,
  };
}
