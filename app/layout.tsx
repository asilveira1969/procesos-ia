import type { Metadata } from "next";
import "./globals.css";
import { getSiteUrl } from "@/lib/utils/site";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Silveira Consultora | Procesos + IA",
    template: "%s | Silveira Consultora",
  },
  description:
    "Consultora institucional orientada a procesos, claridad operativa y adopcion responsable de IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
