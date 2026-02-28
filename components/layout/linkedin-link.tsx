const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;

export function LinkedInLink({ subtle = false }: { subtle?: boolean }) {
  if (!linkedinUrl) {
    return null;
  }

  return (
    <a
      href={linkedinUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-line transition duration-300 hover:border-brand hover:bg-white ${
        subtle ? "bg-white/60" : "bg-white"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-brand"
        aria-hidden="true"
      >
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0ZM20 13.04c0-3.31-1.76-4.85-4.12-4.85-1.9 0-2.75 1.04-3.22 1.78V8.5H9.28c.04.97 0 11.5 0 11.5h3.38v-6.43c0-.34.03-.68.13-.92.27-.68.87-1.39 1.88-1.39 1.33 0 1.87 1.01 1.87 2.49V20H20v-6.96Z" />
      </svg>
    </a>
  );
}
