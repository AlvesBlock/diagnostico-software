import type { TrackingMetadataInput } from '@/types/tracking.types';

export function useUtmParams(): TrackingMetadataInput {
  if (typeof window === 'undefined') {
    return {};
  }

  const url = new URL(window.location.href);

  return {
    utm_source: url.searchParams.get('utm_source'),
    utm_medium: url.searchParams.get('utm_medium'),
    utm_campaign: url.searchParams.get('utm_campaign'),
    utm_term: url.searchParams.get('utm_term'),
    utm_content: url.searchParams.get('utm_content'),
    referrer: document.referrer || null,
    landing_page: window.location.pathname,
    user_agent: navigator.userAgent,
  };
}
