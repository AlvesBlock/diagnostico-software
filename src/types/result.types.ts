import type { PainCategory } from './diagnosis.types';

export type ComplexityLevel = 'simples' | 'media' | 'avancada' | 'complexa';

export interface ScoreBreakdown {
  baseScore: number;
  categoryWeight: number;
  urgencyMultiplier: number;
  finalScore: number;
}

export interface DiagnosisResult extends ScoreBreakdown {
  painCategory: PainCategory;
  complexityLevel: ComplexityLevel;
  estimatedHoursMin: number;
  estimatedHoursMax: number;
  estimatedPriceMin: number;
  estimatedPriceMax: number;
  estimatedTimeMinDays: number;
  estimatedTimeMaxDays: number;
  recommendedApproach: string;
  summaryText: string;
  topHighlights: string[];
}
