import { complexityBands } from '@/config/complexity.config';
import { featureOptions, painCategoryWeights, urgencyMultipliers } from '@/config/diagnosis.config';
import { pricingConfig } from '@/config/pricing.config';
import type { DiagnosisAnswers, FeatureKey } from '@/types/diagnosis.types';
import type { ComplexityLevel, DiagnosisResult } from '@/types/result.types';
import { interpolateInRange } from '@/utils/ranges';
import { generateDiagnosisSummary } from './summary.service';
import { recommendApproach } from './recommendation.service';

function calculateBaseScore(features: DiagnosisAnswers['features']): number {
  return featureOptions.reduce((total, feature) => {
    return total + (features[feature.key as FeatureKey] ? feature.score : 0);
  }, 0);
}

function getComplexityBand(score: number) {
  return complexityBands.find((band) => score >= band.minScore && score <= band.maxScore) ?? complexityBands[0];
}

function buildHighlights(answers: DiagnosisAnswers, complexityLevel: ComplexityLevel): string[] {
  const highlights: string[] = [];

  if (answers.features.integrations) {
    highlights.push('Integracoes externas elevam o cuidado com mapeamento e dependencias de terceiros.');
  }

  if (answers.features.mobile_app) {
    highlights.push('App mobile aumenta escopo de experiencia, testes e distribuicao.');
  }

  if (answers.impacts.includes('lost_sales')) {
    highlights.push('Ha um impacto direto potencial em receita, o que aumenta prioridade estrategica.');
  }

  if (complexityLevel === 'complexa' || complexityLevel === 'avancada') {
    highlights.push('O escopo sugere evolucao em fases para reduzir risco e acelerar entregas de valor.');
  }

  if (highlights.length === 0) {
    highlights.push('O cenario indica boa oportunidade para comecar com um MVP enxuto e validar ganhos rapidamente.');
  }

  return highlights;
}

export function calculateDiagnosisResult(answers: DiagnosisAnswers): DiagnosisResult {
  if (!answers.painCategory || !answers.urgency) {
    throw new Error('Pain category and urgency are required to calculate the diagnosis.');
  }

  const baseScore = calculateBaseScore(answers.features);
  const categoryWeight = painCategoryWeights[answers.painCategory];
  const urgencyMultiplier = urgencyMultipliers[answers.urgency];
  const finalScore = Number((baseScore * categoryWeight * urgencyMultiplier).toFixed(2));
  const band = getComplexityBand(finalScore);
  const estimatedHoursMax = interpolateInRange(finalScore, band.minScore, band.maxScore, band.hoursMin, band.hoursMax);
  const estimatedHoursMin = Math.max(band.hoursMin, Math.round(estimatedHoursMax * 0.72));
  const estimatedTimeMaxDays = interpolateInRange(finalScore, band.minScore, band.maxScore, band.timeMinDays, band.timeMaxDays);
  const estimatedTimeMinDays = Math.max(band.timeMinDays, Math.round(estimatedTimeMaxDays * 0.7));
  const recommendedApproach = recommendApproach(answers, band.level);

  const baseResult: DiagnosisResult = {
    painCategory: answers.painCategory,
    baseScore,
    categoryWeight,
    urgencyMultiplier,
    finalScore,
    complexityLevel: band.level,
    estimatedHoursMin,
    estimatedHoursMax,
    estimatedPriceMin: estimatedHoursMin * pricingConfig.hourlyRate,
    estimatedPriceMax: estimatedHoursMax * pricingConfig.hourlyRate,
    estimatedTimeMinDays,
    estimatedTimeMaxDays,
    recommendedApproach,
    summaryText: '',
    topHighlights: buildHighlights(answers, band.level),
  };

  return {
    ...baseResult,
    summaryText: generateDiagnosisSummary(answers, baseResult),
  };
}
