import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-stelio-keds-projects.vercel.app"),
  title: "Stelio Ked — Analytics & Applied AI Leader",
  description:
    "Portfólio de Stelio Ked — Coordenador de Analytics com +10 anos de experiência transformando dados em decisões estratégicas. BI, automação, IA aplicada e liderança de times de dados.",
  keywords: [
    "Stelio Ked",
    "Data Analytics",
    "Business Intelligence",
    "IA Aplicada",
    "LLM",
    "Agentes de IA",
    "RAG",
    "Power BI",
    "Tableau",
    "Coordenador de Analytics",
    "Liderança de Dados",
  ],
  authors: [{ name: "Stelio Ked" }],
  openGraph: {
    title: "Stelio Ked — Analytics & Applied AI Leader",
    description:
      "+10 anos transformando dados em decisões estratégicas, agora com IA aplicada.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
