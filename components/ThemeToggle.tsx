"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useContent } from "@/lib/useContent";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

// O tema vive no atributo data-theme do <html> (definido antes da primeira pintura por um script em layout.tsx).
function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

// No servidor e na primeira renderização o padrão é o tema escuro.
function getServerSnapshot(): Theme {
  return "dark";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Navegação privada ou armazenamento bloqueado: o tema vale só nesta visita.
  }
  listeners.forEach((listener) => listener());
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { ui } = useContent();
  const next: Theme = theme === "dark" ? "light" : "dark";
  const label = next === "light" ? ui.themeToLight : ui.themeToDark;

  return (
    <button
      type="button"
      onClick={() => applyTheme(next)}
      aria-label={label}
      title={label}
      className="p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-fg/5 transition-colors"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
