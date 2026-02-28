export const SUPPORTED_LOCALES = ["es", "en", "pt"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export type ContentCollection = "insights" | "cases";

export interface ContentFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  coverImage?: string;
  draft?: boolean;
}

export interface ContentListItem extends ContentFrontmatter {
  slug: string;
  locale: Locale;
  collection: ContentCollection;
}

export interface ContentEntry extends ContentListItem {
  contentHtml: string;
}

export interface TemplateItem {
  id: string;
  title: string;
  description: string;
  locale: Locale | "all";
  filePath: string;
  ctaLabel: string;
}

export type TrackingEventName =
  | "newsletter_subscribe"
  | "template_download"
  | "contact_submit";

export interface TrackingPayload {
  locale: Locale;
  source?: string;
  templateId?: string;
}

export interface ApiResponse {
  ok: boolean;
  message: string;
  downloadUrl?: string;
}
