import type { DiagnosisAnswers } from '@/types/diagnosis.types';
import type { ComplexityLevel } from '@/types/result.types';

export function recommendApproach(answers: DiagnosisAnswers, complexity: ComplexityLevel): string {
  if (complexity === 'complexa' && answers.urgency === 'urgent') {
    return 'discovery rápido com execução faseada';
  }

  if (complexity === 'complexa' || complexity === 'avancada') {
    return 'implantação por fases';
  }

  if (answers.features.mobile_app || answers.features.integrations) {
    return 'MVP + fase 2 planejada';
  }

  return 'MVP enxuto';
}
