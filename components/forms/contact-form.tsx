"use client";

import { useState } from "react";
import type { ApiResponse, Locale } from "@/types";
import { track } from "@/lib/tracking";
import { Button } from "@/components/ui/button";

export function ContactForm({
  locale,
  labels,
}: {
  locale: Locale;
  labels: {
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      const payload = (await response.json()) as ApiResponse;

      if (!response.ok || !payload.ok) {
        setFeedback(payload.message || labels.error);
      } else {
        track("contact_submit", { locale, source: "contact" });
        setFeedback(payload.message || labels.success);
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      setFeedback(labels.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-4 rounded-[2rem] p-8">
      <input
        required
        maxLength={120}
        autoComplete="name"
        value={form.name}
        onChange={(event) => setForm({ ...form, name: event.target.value })}
        placeholder={labels.name}
        className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
      />
      <input
        required
        type="email"
        autoComplete="email"
        value={form.email}
        onChange={(event) => setForm({ ...form, email: event.target.value })}
        placeholder={labels.email}
        className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
      />
      <textarea
        required
        minLength={10}
        maxLength={3000}
        value={form.message}
        onChange={(event) => setForm({ ...form, message: event.target.value })}
        placeholder={labels.message}
        rows={6}
        className="w-full rounded-3xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
      />
      <Button type="submit">{loading ? labels.sending : labels.submit}</Button>
      {feedback ? <p className="text-sm text-muted">{feedback}</p> : null}
    </form>
  );
}
