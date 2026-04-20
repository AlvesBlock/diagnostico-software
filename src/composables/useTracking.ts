import { trackingEvents } from '@/config/tracking.config';
import { trackEvent } from '@/services/tracking/tracking.service';

export function useTracking() {
  return {
    trackDiagnosisStarted() {
      trackEvent({ name: trackingEvents.diagnosisStarted });
    },
    trackStepAdvance(step: string) {
      trackEvent({ name: trackingEvents.diagnosisStepAdvanced, step });
    },
    trackDiagnosisCompleted() {
      trackEvent({ name: trackingEvents.diagnosisCompleted });
    },
    trackWhatsappClick() {
      trackEvent({ name: trackingEvents.whatsappClicked });
    },
  };
}
