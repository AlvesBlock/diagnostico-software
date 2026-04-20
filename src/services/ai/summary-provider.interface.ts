import type { DiagnosisAnswers } from '@/types/diagnosis.types';
import type { DiagnosisResult } from '@/types/result.types';

export interface SummaryProvider {
  generateSummary(input: { answers: DiagnosisAnswers; result: DiagnosisResult }): string;
}
