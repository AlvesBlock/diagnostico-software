import type { ComplexityLevel } from '@/types/result.types';
import type { CurrentScenario, ImpactOption, PainCategory, UrgencyLevel } from '@/types/diagnosis.types';

export const painCategoryLabelMap: Record<PainCategory, string> = {
  financial: 'Financeiro, cobrança e recebimento',
  fiscal: 'Fiscal e emissão',
  crm_sales: 'CRM, clientes e vendas',
  customer_service_whatsapp: 'Atendimento e WhatsApp',
  internal_operations: 'Operação interna',
  process_automation: 'Automação de processos',
  field_team: 'Equipe externa e campo',
  systems_integration: 'Integração entre sistemas',
  other: 'Outro gargalo operacional',
};

export const currentScenarioLabelMap: Record<CurrentScenario, string> = {
  spreadsheet: 'Planilha',
  manual_whatsapp: 'WhatsApp manual',
  legacy_system: 'Sistema antigo',
  disconnected_systems: 'Sistemas desconectados',
  no_system: 'Sem sistema',
  other: 'Outro formato',
};

export const impactLabelMap: Record<ImpactOption, string> = {
  time_loss: 'Perda de tempo',
  manual_error: 'Erro manual',
  lost_sales: 'Perda de vendas',
  rework: 'Retrabalho',
  service_delay: 'Atraso no atendimento',
  collection_difficulty: 'Dificuldade de cobrança',
  lack_of_control: 'Falta de controle',
  other: 'Outro impacto',
};

export const urgencyLabelMap: Record<UrgencyLevel, string> = {
  researching: 'Só pesquisando',
  next_3_months: 'Nos próximos 3 meses',
  asap: 'O quanto antes',
  urgent: 'Urgente',
};

export const complexityLabelMap: Record<ComplexityLevel, string> = {
  simples: 'Simples',
  media: 'Média',
  avancada: 'Avançada',
  complexa: 'Complexa',
};

export function getPainCategoryLabel(value: PainCategory | null): string {
  return value ? painCategoryLabelMap[value] : 'Não definido';
}

export function getComplexityLabel(value: ComplexityLevel | null | undefined): string {
  return value ? complexityLabelMap[value] : 'Em análise';
}
