import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "@/lib/utils/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

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
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
