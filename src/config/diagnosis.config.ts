import type {
  BudgetRange,
  CurrentScenario,
  FeatureKey,
  ImpactOption,
  OptionItem,
  PainCategory,
  StepDefinition,
  UrgencyLevel,
} from '@/types/diagnosis.types';

export const diagnosisSteps: StepDefinition[] = [
  {
    id: 1,
    key: 'painCategory',
    title: 'Qual gargalo voce quer resolver primeiro?',
    description: 'Escolha a dor principal que hoje mais trava receita, controle ou produtividade.',
  },
  {
    id: 2,
    key: 'currentScenario',
    title: 'Como esse processo funciona hoje?',
    description: 'Quanto mais manual ou fragmentado o fluxo atual, maior tende a ser o impacto operacional.',
  },
  {
    id: 3,
    key: 'impacts',
    title: 'O que esse problema causa no dia a dia?',
    description: 'Selecione os efeitos que mais aparecem na operacao para calibrar o peso do diagnostico.',
  },
  {
    id: 4,
    key: 'features',
    title: 'O que a primeira versao precisa entregar?',
    description: 'Marque apenas o que faz sentido para colocar o projeto em movimento com clareza.',
  },
  {
    id: 5,
    key: 'urgency',
    title: 'Qual o nivel de urgencia para resolver isso?',
    description: 'A urgencia ajuda a definir se o melhor caminho e um MVP enxuto ou uma execucao mais acelerada.',
  },
  {
    id: 6,
    key: 'budgetRange',
    title: 'Ja existe uma faixa de investimento em mente?',
    description: 'Esse sinal ajuda a recomendar um formato de projeto aderente ao momento da operacao.',
  },
  {
    id: 7,
    key: 'lead',
    title: 'Seu diagnostico esta pronto',
    description: 'Falta so um passo para liberar sua analise completa.',
  },
];

export const painCategoryOptions: OptionItem<PainCategory>[] = [
  {
    value: 'financial',
    label: 'Financeiro / cobranca / recebimento',
    description: 'Ganhe previsibilidade em cobranca, conciliacao e fluxo financeiro.',
  },
  {
    value: 'fiscal',
    label: 'Fiscal / emissao de nota',
    description: 'Reduza gargalos em emissao, validacao e rotinas fiscais.',
  },
  {
    value: 'crm_sales',
    label: 'CRM / clientes / vendas',
    description: 'Organize pipeline, historico comercial e acompanhamento de oportunidades.',
  },
  {
    value: 'customer_service_whatsapp',
    label: 'Atendimento / WhatsApp',
    description: 'Estruture filas, respostas e acompanhamento do atendimento.',
  },
  {
    value: 'internal_operations',
    label: 'Operacao interna',
    description: 'Ganhe controle em tarefas, execucao e acompanhamento interno.',
  },
  {
    value: 'process_automation',
    label: 'Automacao de processos',
    description: 'Substitua rotinas manuais e dependencias operacionais repetitivas.',
  },
  {
    value: 'field_team',
    label: 'Equipe externa / app de campo',
    description: 'Leve a operacao para o campo com coleta, checklist e acompanhamento.',
  },
  {
    value: 'systems_integration',
    label: 'Integracao entre sistemas',
    description: 'Conecte ferramentas isoladas para reduzir retrabalho e falta de visibilidade.',
  },
  {
    value: 'other',
    label: 'Outro',
    description: 'Existe um gargalo relevante fora das categorias acima.',
  },
];

export const currentScenarioOptions: OptionItem<CurrentScenario>[] = [
  { value: 'spreadsheet', label: 'Planilha', description: 'A operacao depende de controles manuais e dispersos.' },
  { value: 'manual_whatsapp', label: 'WhatsApp manual', description: 'Conversas e tarefas ficam sem padrao ou historico confiavel.' },
  { value: 'legacy_system', label: 'Sistema antigo', description: 'A ferramenta atual limita o crescimento ou nao acompanha a operacao.' },
  { value: 'disconnected_systems', label: 'Varios sistemas desconectados', description: 'Os dados nao conversam e o time perde tempo conciliando informacoes.' },
  { value: 'no_system', label: 'Nao tenho sistema', description: 'O processo ainda roda sem base estruturada de software.' },
  { value: 'other', label: 'Outro', description: 'Existe um formato atual diferente dos cenarios acima.' },
];

export const impactOptions: OptionItem<ImpactOption>[] = [
  { value: 'time_loss', label: 'Perda de tempo' },
  { value: 'manual_error', label: 'Erro manual' },
  { value: 'lost_sales', label: 'Perda de vendas' },
  { value: 'rework', label: 'Retrabalho' },
  { value: 'service_delay', label: 'Atraso no atendimento' },
  { value: 'collection_difficulty', label: 'Dificuldade de cobranca' },
  { value: 'lack_of_control', label: 'Falta de controle' },
  { value: 'other', label: 'Outro' },
];

export const urgencyOptions: OptionItem<UrgencyLevel>[] = [
  { value: 'researching', label: 'So estou pesquisando', description: 'Quero entender viabilidade antes de avancar.' },
  { value: 'next_3_months', label: 'Nos proximos 3 meses', description: 'Existe uma janela real para iniciar o projeto.' },
  { value: 'asap', label: 'O quanto antes', description: 'O problema ja pede uma resposta pratica no curto prazo.' },
  { value: 'urgent', label: 'E urgente', description: 'O impacto atual pede prioridade imediata.' },
];

export const budgetRangeOptions: OptionItem<BudgetRange>[] = [
  { value: 'unknown', label: 'Ainda nao sei', description: 'Quero primeiro entender o tamanho do esforco.' },
  { value: 'up_to_5k', label: 'Ate R$ 5 mil', description: 'Procuro uma primeira etapa bem enxuta.' },
  { value: 'from_5k_to_15k', label: 'De R$ 5 mil a R$ 15 mil', description: 'Existe espaco para um MVP com escopo bem priorizado.' },
  { value: 'from_15k_to_30k', label: 'De R$ 15 mil a R$ 30 mil', description: 'Ja considero um projeto com mais estrutura inicial.' },
  { value: 'above_30k', label: 'Acima de R$ 30 mil', description: 'Busco uma solucao com maior profundidade e escala.' },
];

export const featureOptions: Array<{ key: FeatureKey; label: string; score: number }> = [
  { key: 'login', label: 'Login', score: 2 },
  { key: 'admin_panel', label: 'Painel administrativo', score: 5 },
  { key: 'reports', label: 'Relatorios', score: 3 },
  { key: 'notifications', label: 'Notificacoes', score: 2 },
  { key: 'integrations', label: 'Integracoes externas', score: 5 },
  { key: 'api', label: 'API', score: 4 },
  { key: 'mobile_app', label: 'App mobile', score: 10 },
  { key: 'multi_user', label: 'Multiusuario / perfis', score: 3 },
  { key: 'subscription', label: 'Assinatura / plano', score: 6 },
  { key: 'executive_dashboard', label: 'Dashboard executivo', score: 4 },
];

export const painCategoryWeights: Record<PainCategory, number> = {
  financial: 1.2,
  fiscal: 1.15,
  crm_sales: 1.1,
  customer_service_whatsapp: 1.1,
  internal_operations: 1.0,
  process_automation: 1.3,
  field_team: 1.2,
  systems_integration: 1.35,
  other: 1.0,
};

export const urgencyMultipliers: Record<UrgencyLevel, number> = {
  researching: 1.0,
  next_3_months: 1.1,
  asap: 1.2,
  urgent: 1.4,
};
