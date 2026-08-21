"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import { navLinks, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.href.slice(1))).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.1, 0.25] }
    );
    sections.forEach((section) => observer.observe(section));
    const handleScroll = () => setHasScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", handleScroll); };
  }, []);

  useEffect(() => {
    if (!isResumeOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setIsResumeOpen(false); };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isResumeOpen]);

  const navLinkClass = (href: string, mobile = false) => cn(
    "relative rounded-full font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60",
    mobile ? "px-4 py-2.5 text-sm" : "px-2 py-1 text-sm",
    activeSection === href.slice(1) ? "bg-slate-100 text-slate-950 dark:bg-slate-800 dark:text-white" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
  );

  return (
    <>
      <header className={cn("sticky top-0 z-40 border-b bg-white/85 backdrop-blur-xl transition-shadow duration-200 dark:bg-slate-950/85", hasScrolled ? "border-slate-200/80 shadow-sm dark:border-slate-800/80" : "border-transparent")}>
        <div className="container-base flex min-h-[68px] items-center justify-between gap-4 py-3">
          <Link href="#home" className="shrink-0 font-display text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>{profile.name}</Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => <Link key={link.href} href={link.href} className={navLinkClass(link.href)} aria-current={activeSection === link.href.slice(1) ? "location" : undefined}>{link.label}</Link>)}
          </nav>
          <div className="hidden items-center gap-2 sm:flex">
            <ThemeToggle />
            <button type="button" onClick={() => setIsResumeOpen(true)} className="button-primary px-4 py-2 text-xs">View Resume</button>
            <Link href={`mailto:${profile.email}`} className="button-primary px-4 py-2 text-xs">Email Me</Link>
          </div>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 sm:hidden dark:border-slate-800 dark:text-slate-200" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen((open) => !open)}>
            <span aria-hidden="true" className="text-xl leading-none">{isMenuOpen ? "×" : "☰"}</span>
          </button>
        </div>
        {isMenuOpen ? (
          <div id="mobile-navigation" className="border-t border-slate-200/70 px-6 py-4 sm:hidden dark:border-slate-800/70">
            <nav className="container-base grid gap-1 px-0" aria-label="Mobile navigation">
              {navLinks.map((link) => <Link key={link.href} href={link.href} className={navLinkClass(link.href, true)} onClick={() => setIsMenuOpen(false)} aria-current={activeSection === link.href.slice(1) ? "location" : undefined}>{link.label}</Link>)}
              <div className="mt-3 flex flex-wrap gap-2 border-t border-slate-200/70 pt-4 dark:border-slate-800/70">
                <ThemeToggle />
                <button type="button" onClick={() => { setIsResumeOpen(true); setIsMenuOpen(false); }} className="button-primary px-4 py-2 text-xs">View Resume</button>
                <Link href={`mailto:${profile.email}`} className="button-primary px-4 py-2 text-xs">Email Me</Link>
              </div>
            </nav>
          </div>
        ) : null}
      </header>
      {isResumeOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4 py-8 backdrop-blur-sm" onClick={() => setIsResumeOpen(false)} role="presentation">
          <div className="card-surface flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label="Resume preview">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/70 px-5 py-4 dark:border-slate-800/70">
              <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Resume</p><h2 className="font-display text-xl font-semibold">{profile.name}</h2></div>
              <div className="flex flex-wrap gap-2">
                <a href="/api/resume" className="button-primary px-5 py-2">Download Resume</a>
                <button type="button" onClick={() => setIsResumeOpen(false)} className="button-secondary px-5 py-2">Close</button>
              </div>
            </div>
            <div className="h-[75vh] bg-slate-100 dark:bg-slate-950"><iframe src={profile.resumeUrl} title={`${profile.name} resume`} className="h-full w-full" /></div>
          </div>
        </div>
      ) : null}
    </>
  );
}
