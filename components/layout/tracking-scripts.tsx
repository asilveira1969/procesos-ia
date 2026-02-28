"use client";

import Script from "next/script";

export function TrackingScripts() {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const linkedinInsightId = process.env.NEXT_PUBLIC_LINKEDIN_INSIGHT_ID;

  return (
    <>
      {ga4Id ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', '${ga4Id}');`}
          </Script>
        </>
      ) : null}
      {gtmId ? (
        <Script id="gtm-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'gtm.js', 'gtm.start': Date.now() });`}
        </Script>
      ) : null}
      {metaPixelId ? (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`window.fbq = window.fbq || function(){(window.fbq.q = window.fbq.q || []).push(arguments)}; window.fbq('init', '${metaPixelId}'); window.fbq('track', 'PageView');`}
        </Script>
      ) : null}
      {linkedinInsightId ? (
        <Script id="linkedin-init" strategy="afterInteractive">
          {`window.lintrk = window.lintrk || function(a,b){window.lintrk.q = window.lintrk.q || []; window.lintrk.q.push([a,b]);}; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push('${linkedinInsightId}');`}
        </Script>
      ) : null}
    </>
  );
}
