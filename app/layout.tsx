import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-stelio-ked.vercel.app"),
  title: `${personalInfo.name} — ${personalInfo.subtitle}`,
  description: personalInfo.shareDescription,
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
    title: `${personalInfo.name} — ${personalInfo.subtitle}`,
    description: personalInfo.shareDescription,
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Aplica tema e idioma salvos antes da primeira pintura (evita piscar). Padrão: escuro e português. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var d=document.documentElement;if(localStorage.getItem('theme')==='light')d.dataset.theme='light';if(localStorage.getItem('lang')==='en'){d.dataset.lang='en';d.lang='en'}}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
