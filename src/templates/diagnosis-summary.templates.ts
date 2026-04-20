export const painCategoryLabels = {
  financial: 'financeiro, cobrança e recebimento',
  fiscal: 'rotinas fiscais e emissão',
  crm_sales: 'gestão comercial e relacionamento com clientes',
  customer_service_whatsapp: 'atendimento e operação via WhatsApp',
  internal_operations: 'operação interna',
  process_automation: 'automação de processos',
  field_team: 'equipe externa e operação em campo',
  systems_integration: 'integração entre sistemas',
  other: 'operações críticas do negócio',
} as const;

export const scenarioLabels = {
  spreadsheet: 'planilhas',
  manual_whatsapp: 'WhatsApp manual',
  legacy_system: 'um sistema antigo',
  disconnected_systems: 'vários sistemas desconectados',
  no_system: 'processos sem sistema estruturado',
  other: 'um fluxo não padronizado',
} as const;

export const impactLabels = {
  time_loss: 'perda de tempo',
  manual_error: 'erro manual',
  lost_sales: 'perda de vendas',
  rework: 'retrabalho',
  service_delay: 'atraso no atendimento',
  collection_difficulty: 'dificuldade de cobrança',
  lack_of_control: 'falta de controle',
  other: 'gargalos operacionais adicionais',
} as const;
