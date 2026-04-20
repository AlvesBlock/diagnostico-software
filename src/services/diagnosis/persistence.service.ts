import type { DiagnosisAnswers } from '@/types/diagnosis.types';
import type { LeadForm } from '@/types/lead.types';
import type { DiagnosisResult } from '@/types/result.types';
import type { TrackingMetadataInput } from '@/types/tracking.types';
import { prepareLeadPayload } from '@/services/lead/lead.service';
import { insertLead } from '@/supabase/repositories/leads.repository';
import {
  insertDiagnosisFeatures,
  insertDiagnosisResult,
  insertDiagnosisSession,
  insertTrackingMetadata,
} from '@/supabase/repositories/diagnosis.repository';

export async function persistDiagnosis(payload: {
  lead: LeadForm;
  answers: DiagnosisAnswers;
  result: DiagnosisResult;
  tracking: TrackingMetadataInput;
}): Promise<{ leadId: string; sessionId: string }> {
  const normalizedLead = prepareLeadPayload(payload.lead);
  const leadRecord = await insertLead(normalizedLead);
  const sessionRecord = await insertDiagnosisSession(leadRecord.id, payload.answers);

  await insertDiagnosisFeatures(sessionRecord.id, payload.answers);
  await insertDiagnosisResult(sessionRecord.id, payload.result);
  await insertTrackingMetadata(sessionRecord.id, payload.tracking);

  return {
    leadId: leadRecord.id,
    sessionId: sessionRecord.id,
  };
}
