import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "kasia-theme";

function getPreferredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "dark";
    const current = document.documentElement.getAttribute("data-theme");
    return current === "light" || current === "dark" ? current : "dark";
  });

  useEffect(() => {
    const preferred = getPreferredTheme();
    setTheme(preferred);
    document.documentElement.setAttribute("data-theme", preferred);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
