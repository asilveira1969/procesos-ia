export function RichText({ html }: { html: string }) {
  return (
    <div
      className="prose-content text-base leading-8"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
