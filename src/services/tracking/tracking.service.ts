import type { TrackingEventPayload } from '@/types/tracking.types';

export function trackEvent(payload: TrackingEventPayload): void {
  if (import.meta.env.DEV) {
    console.info('[tracking]', payload);
  }
}
