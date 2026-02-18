"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className={cn(
          "rounded-full border border-slate-200/70 px-3 py-1 text-xs font-semibold text-slate-500",
          className
        )}
        aria-label="Toggle theme"
      >
        Theme
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "rounded-full border border-slate-200/70 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900",
        "dark:border-slate-800/70 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white",
        className
      )}
      aria-label="Toggle theme"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
