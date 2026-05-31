"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme-toggle";
import { navLinks, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
        <div className="container-base flex items-center justify-between py-4">
          <Link href="/" className="font-display text-lg font-semibold">
            {profile.name}
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-colors",
                    active
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden sm:inline-flex" />

            <button
              type="button"
              onClick={() => setIsResumeOpen(true)}
              className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              View Resume
            </button>

            <Link
              href={`mailto:${profile.email}`}
              className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Email Me
            </Link>
          </div>
        </div>

        <div className="container-base pb-3 md:hidden">
          <nav className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-3 py-1 transition",
                    active
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {isResumeOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4 py-8 backdrop-blur-sm"
          onClick={() => setIsResumeOpen(false)}
          role="presentation"
        >
          <div
            className="card-surface flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/70 px-5 py-4 dark:border-slate-800/70">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Resume
                </p>
                <h2 className="font-display text-xl font-semibold">
                  {profile.name}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href="/api/resume"
                  className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Download Resume
                </a>

                <button
                  type="button"
                  onClick={() => setIsResumeOpen(false)}
                  className="rounded-full border border-slate-200/70 px-5 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800/70 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="h-[75vh] bg-slate-100 dark:bg-slate-950">
              <iframe
                src={profile.resumeUrl}
                title={`${profile.name} resume`}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}