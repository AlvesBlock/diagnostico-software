import type { DiagnosisAnswers } from '@/types/diagnosis.types';
import type { DiagnosisResult } from '@/types/result.types';
import type { SummaryProvider } from '@/services/ai/summary-provider.interface';
import { templateSummaryProvider } from '@/services/ai/template-summary.provider';

export function generateDiagnosisSummary(
  answers: DiagnosisAnswers,
  result: DiagnosisResult,
  provider: SummaryProvider = templateSummaryProvider,
): string {
  return provider.generateSummary({ answers, result });
}
