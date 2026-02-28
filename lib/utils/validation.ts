import { z } from "zod";
import { SUPPORTED_LOCALES } from "@/types";

export const localeSchema = z.enum(SUPPORTED_LOCALES);

export const newsletterSchema = z.object({
  email: z.string().email(),
  name: z.string().trim().max(120).optional().or(z.literal("")),
  locale: localeSchema,
});

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().email(),
  message: z.string().trim().min(10).max(3000),
  locale: localeSchema,
});

export const templateDownloadSchema = z.object({
  email: z.string().email(),
  templateId: z.string().trim().min(1),
  locale: localeSchema,
});
