"use client";

import { useSyncExternalStore } from "react";
import { content, type Lang, type SiteContent } from "@/lib/data";

const STORAGE_KEY = "lang";
const listeners = new Set<() => void>();

// O idioma vive no atributo data-lang do <html> (definido antes da primeira pintura por um script em app/layout.tsx).
// Ausente = português (padrão).
function getSnapshot(): Lang {
  return document.documentElement.dataset.lang === "en" ? "en" : "pt";
}

function getServerSnapshot(): Lang {
  return "pt";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

export function setLanguage(lang: Lang) {
  const root = document.documentElement;
  root.dataset.lang = lang;
  root.lang = lang === "en" ? "en" : "pt-BR";
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Navegação privada ou armazenamento bloqueado: o idioma vale só nesta visita.
  }
  listeners.forEach((listener) => listener());
}

export function useLanguage(): Lang {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Todo o conteúdo do site no idioma atual
export function useContent(): SiteContent {
  return content[useLanguage()];
}
