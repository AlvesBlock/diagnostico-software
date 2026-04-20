import type { DiagnosisAnswers, DiagnosisFeatureSelection } from '@/types/diagnosis.types';
import type { LeadForm } from '@/types/lead.types';
import { normalizePhone } from './masks';

export function createEmptyFeatureSelection(): DiagnosisFeatureSelection {
  return {
    login: false,
    admin_panel: false,
    reports: false,
    notifications: false,
    integrations: false,
    api: false,
    mobile_app: false,
    multi_user: false,
    subscription: false,
    executive_dashboard: false,
  };
}

export function createEmptyAnswers(): DiagnosisAnswers {
  return {
    painCategory: null,
    painCategoryOther: '',
    currentScenario: null,
    currentScenarioOther: '',
    impacts: [],
    impactsOther: '',
    features: createEmptyFeatureSelection(),
    urgency: null,
    budgetRange: null,
  };
}

export function createEmptyLeadForm(): LeadForm {
  return {
    name: '',
    email: '',
    whatsapp: '',
    company: '',
  };
}

export function normalizeLeadForm(lead: LeadForm): LeadForm {
  return {
    ...lead,
    name: lead.name.trim(),
    email: lead.email.trim().toLowerCase(),
    whatsapp: normalizePhone(lead.whatsapp),
    company: lead.company.trim(),
  };
}
