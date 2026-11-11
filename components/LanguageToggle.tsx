"use client";

import { setLanguage, useContent, useLanguage } from "@/lib/useContent";

// Mostra o código do idioma de destino (em português aparece "EN"; em inglês, "PT").
export default function LanguageToggle() {
  const lang = useLanguage();
  const { ui } = useContent();

  return (
    <button
      type="button"
      onClick={() => setLanguage(lang === "pt" ? "en" : "pt")}
      aria-label={ui.switchLanguage.label}
      title={ui.switchLanguage.label}
      className="px-2.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-text-secondary hover:text-text-primary hover:bg-fg/5 transition-colors"
      style={{ fontFamily: "var(--font-geist-mono), monospace" }}
    >
      {ui.switchLanguage.code}
    </button>
  );
}
