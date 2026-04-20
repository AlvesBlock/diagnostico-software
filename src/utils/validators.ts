import type { DiagnosisAnswers } from '@/types/diagnosis.types';
import type { LeadForm } from '@/types/lead.types';

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidLeadForm(form: LeadForm): boolean {
  return (
    form.name.trim().length >= 3 &&
    isValidEmail(form.email) &&
    form.whatsapp.replace(/\D/g, '').length >= 10
  );
}

export function isStepValid(stepIndex: number, answers: DiagnosisAnswers, lead: LeadForm): boolean {
  switch (stepIndex) {
    case 0:
      return Boolean(answers.painCategory);
    case 1:
      return Boolean(answers.currentScenario);
    case 2:
      return answers.impacts.length > 0;
    case 3:
      return Object.values(answers.features).some(Boolean);
    case 4:
      return Boolean(answers.urgency);
    case 5:
      return Boolean(answers.budgetRange);
    case 6:
      return isValidLeadForm(lead);
    default:
      return false;
  }
}
