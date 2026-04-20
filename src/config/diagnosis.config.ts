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
    title: 'Qual gargalo você quer resolver primeiro?',
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
    description: 'Selecione os efeitos que mais aparecem na operação para calibrar o peso do diagnóstico.',
  },
  {
    id: 4,
    key: 'features',
    title: 'O que a primeira versão precisa entregar?',
    description: 'Marque apenas o que faz sentido para colocar o projeto em movimento com clareza.',
  },
  {
    id: 5,
    key: 'urgency',
    title: 'Qual é o nível de urgência para resolver isso?',
    description: 'A urgência ajuda a definir se o melhor caminho é um MVP enxuto ou uma execução mais acelerada.',
  },
  {
    id: 6,
    key: 'budgetRange',
    title: 'Já existe uma faixa de investimento em mente?',
    description: 'Esse sinal ajuda a recomendar um formato de projeto aderente ao momento da operação.',
  },
  {
    id: 7,
    key: 'lead',
    title: 'Seu diagnóstico está pronto',
    description: 'Falta só um passo para liberar sua análise completa.',
  },
];

export const painCategoryOptions: OptionItem<PainCategory>[] = [
  {
    value: 'financial',
    label: 'Financeiro / cobrança / recebimento',
    description: 'Ganhe previsibilidade em cobrança, conciliação e fluxo financeiro.',
  },
  {
    value: 'fiscal',
    label: 'Fiscal / emissão de nota',
    description: 'Reduza gargalos em emissão, validação e rotinas fiscais.',
  },
  {
    value: 'crm_sales',
    label: 'CRM / clientes / vendas',
    description: 'Organize pipeline, histórico comercial e acompanhamento de oportunidades.',
  },
  {
    value: 'customer_service_whatsapp',
    label: 'Atendimento / WhatsApp',
    description: 'Estruture filas, respostas e acompanhamento do atendimento.',
  },
  {
    value: 'internal_operations',
    label: 'Operação interna',
    description: 'Ganhe controle em tarefas, execução e acompanhamento interno.',
  },
  {
    value: 'process_automation',
    label: 'Automação de processos',
    description: 'Substitua rotinas manuais e dependências operacionais repetitivas.',
  },
  {
    value: 'field_team',
    label: 'Equipe externa / app de campo',
    description: 'Leve a operação para o campo com coleta, checklist e acompanhamento.',
  },
  {
    value: 'systems_integration',
    label: 'Integração entre sistemas',
    description: 'Conecte ferramentas isoladas para reduzir retrabalho e falta de visibilidade.',
  },
  {
    value: 'other',
    label: 'Outro',
    description: 'Existe um gargalo relevante fora das categorias acima.',
  },
];

export const currentScenarioOptions: OptionItem<CurrentScenario>[] = [
  { value: 'spreadsheet', label: 'Planilha', description: 'A operação depende de controles manuais e dispersos.' },
  { value: 'manual_whatsapp', label: 'WhatsApp manual', description: 'Conversas e tarefas ficam sem padrão ou histórico confiável.' },
  { value: 'legacy_system', label: 'Sistema antigo', description: 'A ferramenta atual limita o crescimento ou não acompanha a operação.' },
  { value: 'disconnected_systems', label: 'Vários sistemas desconectados', description: 'Os dados não conversam e o time perde tempo conciliando informações.' },
  { value: 'no_system', label: 'Não tenho sistema', description: 'O processo ainda roda sem base estruturada de software.' },
  { value: 'other', label: 'Outro', description: 'Existe um formato atual diferente dos cenários acima.' },
];

export const impactOptions: OptionItem<ImpactOption>[] = [
  { value: 'time_loss', label: 'Perda de tempo' },
  { value: 'manual_error', label: 'Erro manual' },
  { value: 'lost_sales', label: 'Perda de vendas' },
  { value: 'rework', label: 'Retrabalho' },
  { value: 'service_delay', label: 'Atraso no atendimento' },
  { value: 'collection_difficulty', label: 'Dificuldade de cobrança' },
  { value: 'lack_of_control', label: 'Falta de controle' },
  { value: 'other', label: 'Outro' },
];

export const urgencyOptions: OptionItem<UrgencyLevel>[] = [
  { value: 'researching', label: 'Só estou pesquisando', description: 'Quero entender a viabilidade antes de avançar.' },
  { value: 'next_3_months', label: 'Nos próximos 3 meses', description: 'Existe uma janela real para iniciar o projeto.' },
  { value: 'asap', label: 'O quanto antes', description: 'O problema já pede uma resposta prática no curto prazo.' },
  { value: 'urgent', label: 'É urgente', description: 'O impacto atual pede prioridade imediata.' },
];

export const budgetRangeOptions: OptionItem<BudgetRange>[] = [
  { value: 'unknown', label: 'Ainda não sei', description: 'Quero primeiro entender o tamanho do esforço.' },
  { value: 'up_to_5k', label: 'Até R$ 5 mil', description: 'Procuro uma primeira etapa bem enxuta.' },
  { value: 'from_5k_to_15k', label: 'De R$ 5 mil a R$ 15 mil', description: 'Existe espaço para um MVP com escopo bem priorizado.' },
  { value: 'from_15k_to_30k', label: 'De R$ 15 mil a R$ 30 mil', description: 'Já considero um projeto com mais estrutura inicial.' },
  { value: 'above_30k', label: 'Acima de R$ 30 mil', description: 'Busco uma solução com maior profundidade e escala.' },
];

export const featureOptions: Array<{ key: FeatureKey; label: string; score: number }> = [
  { key: 'login', label: 'Login', score: 2 },
  { key: 'admin_panel', label: 'Painel administrativo', score: 5 },
  { key: 'reports', label: 'Relatórios', score: 3 },
  { key: 'notifications', label: 'Notificações', score: 2 },
  { key: 'integrations', label: 'Integrações externas', score: 5 },
  { key: 'api', label: 'API', score: 4 },
  { key: 'mobile_app', label: 'App mobile', score: 10 },
  { key: 'multi_user', label: 'Multiusuário / perfis', score: 3 },
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
