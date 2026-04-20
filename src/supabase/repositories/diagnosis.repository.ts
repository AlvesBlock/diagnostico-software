import { supabase } from '@/supabase/client';
import type { DiagnosisAnswers } from '@/types/diagnosis.types';
import type { DiagnosisResult } from '@/types/result.types';
import type { TrackingMetadataInput } from '@/types/tracking.types';

export async function insertDiagnosisSession(leadId: string, answers: DiagnosisAnswers): Promise<{ id: string }> {
  const { data, error } = await supabase
    .from('diagnosis_sessions')
    .insert({
      lead_id: leadId,
      pain_category: answers.painCategory,
      pain_category_other: answers.painCategoryOther || null,
      current_scenario: answers.currentScenario,
      current_scenario_other: answers.currentScenarioOther || null,
      impacts: answers.impacts,
      impacts_other: answers.impactsOther || null,
      urgency: answers.urgency,
      budget_range: answers.budgetRange,
      status: 'completed',
    })
    .select('id')
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function insertDiagnosisFeatures(sessionId: string, answers: DiagnosisAnswers): Promise<void> {
  const { error } = await supabase.from('diagnosis_features').insert({
    diagnosis_session_id: sessionId,
    ...answers.features,
  });

  if (error) {
    throw error;
  }
}

export async function insertDiagnosisResult(sessionId: string, result: DiagnosisResult): Promise<void> {
  const { error } = await supabase.from('diagnosis_results').insert({
    diagnosis_session_id: sessionId,
    base_score: result.baseScore,
    category_weight: result.categoryWeight,
    urgency_multiplier: result.urgencyMultiplier,
    final_score: result.finalScore,
    complexity_level: result.complexityLevel,
    estimated_hours_min: result.estimatedHoursMin,
    estimated_hours_max: result.estimatedHoursMax,
    estimated_price_min: result.estimatedPriceMin,
    estimated_price_max: result.estimatedPriceMax,
    estimated_time_min_days: result.estimatedTimeMinDays,
    estimated_time_max_days: result.estimatedTimeMaxDays,
    summary_text: result.summaryText,
    recommended_approach: result.recommendedApproach,
  });

  if (error) {
    throw error;
  }
}

export async function insertTrackingMetadata(
  sessionId: string,
  metadata: TrackingMetadataInput,
): Promise<void> {
  const { error } = await supabase.from('tracking_metadata').insert({
    diagnosis_session_id: sessionId,
    ...metadata,
  });

  if (error) {
    throw error;
  }
}
