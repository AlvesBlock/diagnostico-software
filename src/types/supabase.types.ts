export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          name: string;
          email: string;
          whatsapp: string;
          company: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          whatsapp: string;
          company?: string | null;
          created_at?: string;
        };
      };
      diagnosis_sessions: {
        Row: {
          id: string;
          lead_id: string;
          pain_category: string;
          pain_category_other: string | null;
          current_scenario: string;
          current_scenario_other: string | null;
          impacts: string[];
          impacts_other: string | null;
          urgency: string;
          budget_range: string;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          lead_id: string;
          pain_category: string;
          pain_category_other?: string | null;
          current_scenario: string;
          current_scenario_other?: string | null;
          impacts: string[];
          impacts_other?: string | null;
          urgency: string;
          budget_range: string;
          status?: string;
          created_at?: string;
        };
      };
      diagnosis_features: {
        Row: {
          id: string;
          diagnosis_session_id: string;
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
        };
        Insert: {
          id?: string;
          diagnosis_session_id: string;
          login?: boolean;
          admin_panel?: boolean;
          reports?: boolean;
          notifications?: boolean;
          integrations?: boolean;
          api?: boolean;
          mobile_app?: boolean;
          multi_user?: boolean;
          subscription?: boolean;
          executive_dashboard?: boolean;
        };
      };
      diagnosis_results: {
        Row: {
          id: string;
          diagnosis_session_id: string;
          base_score: number;
          category_weight: number;
          urgency_multiplier: number;
          final_score: number;
          complexity_level: string;
          estimated_hours_min: number;
          estimated_hours_max: number;
          estimated_price_min: number;
          estimated_price_max: number;
          estimated_time_min_days: number;
          estimated_time_max_days: number;
          summary_text: string;
          recommended_approach: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          diagnosis_session_id: string;
          base_score: number;
          category_weight: number;
          urgency_multiplier: number;
          final_score: number;
          complexity_level: string;
          estimated_hours_min: number;
          estimated_hours_max: number;
          estimated_price_min: number;
          estimated_price_max: number;
          estimated_time_min_days: number;
          estimated_time_max_days: number;
          summary_text: string;
          recommended_approach: string;
          created_at?: string;
        };
      };
      tracking_metadata: {
        Row: {
          id: string;
          diagnosis_session_id: string;
          utm_source: string | null;
          utm_medium: string | null;
          utm_campaign: string | null;
          utm_term: string | null;
          utm_content: string | null;
          referrer: string | null;
          landing_page: string | null;
          user_agent: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          diagnosis_session_id: string;
          utm_source?: string | null;
          utm_medium?: string | null;
          utm_campaign?: string | null;
          utm_term?: string | null;
          utm_content?: string | null;
          referrer?: string | null;
          landing_page?: string | null;
          user_agent?: string | null;
          created_at?: string;
        };
      };
    };
  };
}
