"use client";

import { useState } from "react";
import type { ApiResponse, Locale } from "@/types";
import { track } from "@/lib/tracking";
import { Button } from "@/components/ui/button";

export function NewsletterForm({
  locale,
  labels,
}: {
  locale: Locale;
  labels: {
    name: string;
    email: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, locale }),
      });

      const payload = (await response.json()) as ApiResponse;

      if (!response.ok || !payload.ok) {
        setMessage(payload.message || labels.error);
      } else {
        track("newsletter_subscribe", { locale, source: "newsletter" });
        setMessage(payload.message || labels.success);
        setName("");
        setEmail("");
      }
    } catch {
      setMessage(labels.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder={labels.name}
        className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
      />
      <input
        required
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={labels.email}
        className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
      />
      <Button type="submit" className="w-full justify-center">
        {loading ? labels.sending : labels.submit}
      </Button>
      {message ? <p className="text-sm text-muted">{message}</p> : null}
    </form>
  );
}
