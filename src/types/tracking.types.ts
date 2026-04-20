export interface TrackingMetadataInput {
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  referrer?: string | null;
  landing_page?: string | null;
  user_agent?: string | null;
}

export interface TrackingEventPayload {
  name: string;
  step?: string;
  meta?: Record<string, unknown>;
}
