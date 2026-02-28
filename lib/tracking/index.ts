"use client";

import type { TrackingEventName, TrackingPayload } from "@/types";

type WindowWithTracking = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  lintrk?: (...args: unknown[]) => void;
};

export function track(eventName: TrackingEventName, payload: TrackingPayload) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const trackingWindow = window as WindowWithTracking;

    if (
      process.env.NEXT_PUBLIC_GA4_ID &&
      typeof trackingWindow.gtag === "function"
    ) {
      trackingWindow.gtag("event", eventName, payload);
    }

    if (
      process.env.NEXT_PUBLIC_GTM_ID &&
      Array.isArray(trackingWindow.dataLayer)
    ) {
      trackingWindow.dataLayer.push({
        event: eventName,
        ...payload,
      });
    }

    if (
      process.env.NEXT_PUBLIC_META_PIXEL_ID &&
      typeof trackingWindow.fbq === "function"
    ) {
      trackingWindow.fbq("trackCustom", eventName, payload);
    }

    if (
      process.env.NEXT_PUBLIC_LINKEDIN_INSIGHT_ID &&
      typeof trackingWindow.lintrk === "function"
    ) {
      trackingWindow.lintrk("track", {
        conversion_id: eventName,
        ...payload,
      });
    }
  } catch {
    return;
  }
}
