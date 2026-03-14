"use client";

import { useState } from "react";
import type { ApiResponse, Locale, TemplateItem } from "@/types";
import { track } from "@/lib/tracking";
import { Button } from "@/components/ui/button";

export function TemplateDownloadForm({
  locale,
  template,
  labels,
}: {
  locale: Locale;
  template: TemplateItem;
  labels: {
    email: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
}) {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setFeedback("");
    setDownloadUrl("");

    try {
      const response = await fetch("/api/templates/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          locale,
          templateId: template.id,
        }),
      });
      const payload = (await response.json()) as ApiResponse;

      if (!response.ok || !payload.ok) {
        setFeedback(payload.message || labels.error);
      } else {
        track("template_download", {
          locale,
          source: "template",
          templateId: template.id,
        });
        setFeedback(payload.message || labels.success);
        setDownloadUrl(payload.downloadUrl || "");
        setEmail("");
      }
    } catch {
      setFeedback(labels.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-3">
      <input
        required
        type="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={labels.email}
        className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
      />
      <Button type="submit" className="w-full justify-center">
        {loading ? labels.sending : template.ctaLabel || labels.submit}
      </Button>
      {feedback ? <p className="text-sm text-muted">{feedback}</p> : null}
      {downloadUrl ? (
        <a
          href={downloadUrl}
          className="inline-flex text-sm font-semibold text-accent underline"
        >
          {labels.success}
        </a>
      ) : null}
    </form>
  );
}
