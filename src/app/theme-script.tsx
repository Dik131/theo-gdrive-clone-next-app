"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeScript() {
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    // This will run after hydration and apply the correct theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (resolvedTheme) {
      setTheme(resolvedTheme);
    }
  }, [setTheme, resolvedTheme]);

  return null;
}