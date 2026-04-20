export type PainCategory =
  | 'financial'
  | 'fiscal'
  | 'crm_sales'
  | 'customer_service_whatsapp'
  | 'internal_operations'
  | 'process_automation'
  | 'field_team'
  | 'systems_integration'
  | 'other';

export type CurrentScenario =
  | 'spreadsheet'
  | 'manual_whatsapp'
  | 'legacy_system'
  | 'disconnected_systems'
  | 'no_system'
  | 'other';

export type ImpactOption =
  | 'time_loss'
  | 'manual_error'
  | 'lost_sales'
  | 'rework'
  | 'service_delay'
  | 'collection_difficulty'
  | 'lack_of_control'
  | 'other';

export type UrgencyLevel = 'researching' | 'next_3_months' | 'asap' | 'urgent';

export type BudgetRange =
  | 'unknown'
  | 'up_to_5k'
  | 'from_5k_to_15k'
  | 'from_15k_to_30k'
  | 'above_30k';

export type FeatureKey =
  | 'login'
  | 'admin_panel'
  | 'reports'
  | 'notifications'
  | 'integrations'
  | 'api'
  | 'mobile_app'
  | 'multi_user'
  | 'subscription'
  | 'executive_dashboard';

export interface DiagnosisFeatureSelection {
  login: boolean;
  admin_panel: boolean;
  reports: boolean;
  notifications: boolean;
  integrations: boolean;
  api: boolean;
  mobile_app: boolean;
  multi_user: boolean;
  subscription: boolean;
  executive_dashboard: boolean;
}

export interface DiagnosisAnswers {
  painCategory: PainCategory | null;
  painCategoryOther: string;
  currentScenario: CurrentScenario | null;
  currentScenarioOther: string;
  impacts: ImpactOption[];
  impactsOther: string;
  features: DiagnosisFeatureSelection;
  urgency: UrgencyLevel | null;
  budgetRange: BudgetRange | null;
}

export interface StepDefinition {
  id: number;
  key:
    | 'painCategory'
    | 'currentScenario'
    | 'impacts'
    | 'features'
    | 'urgency'
    | 'budgetRange'
    | 'lead';
  title: string;
  description: string;
}

export interface OptionItem<T = string> {
  value: T;
  label: string;
  description?: string;
}
