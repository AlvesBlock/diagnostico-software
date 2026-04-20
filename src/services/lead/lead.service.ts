import type { LeadForm } from '@/types/lead.types';
import { normalizeLeadForm } from '@/utils/normalizers';

export function prepareLeadPayload(lead: LeadForm): LeadForm {
  return normalizeLeadForm(lead);
}
