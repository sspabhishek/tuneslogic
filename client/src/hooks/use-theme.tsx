import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

export function useTheme(defaultTheme: Theme = "system", storageKey: string = "theme") {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  return {
    theme,
    setTheme: (newTheme: Theme) => setTheme(newTheme),
    isDark: theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches),
    isLight: theme === "light" || (theme === "system" && !window.matchMedia("(prefers-color-scheme: dark)").matches),
    isSystem: theme === "system",
  };
}
