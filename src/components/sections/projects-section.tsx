"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import ProjectCard from "@/components/project-card";
import Badge from "@/components/badge";
import type { Project } from "@/data/profile";
import { profile } from "@/data/profile";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="section-shell scroll-mt-24">
      <div className="container-base">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <PageHeader
            title="Projects"
            subtitle="Builds I have shipped across data engineering, ML, and full-stack—click a project to see details, stack, and code."
          />
          <Link className="link-muted text-sm font-semibold" href="https://github.com/78himanshu" target="_blank" rel="noopener noreferrer">
            More projects on GitHub
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {profile.projects.map((project) => (
            <button
              key={project.title}
              type="button"
              className="group cursor-pointer text-left transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950"
              onClick={() => setSelectedProject(project)}
            >
              <ProjectCard {...project} />
            </button>
          ))}
        </div>
      </div>

      {selectedProject ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 py-8 backdrop-blur-sm" onClick={() => setSelectedProject(null)} role="presentation">
          <div className="card-surface max-h-[88vh] w-full max-w-3xl overflow-y-auto p-6 sm:p-8" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={`${selectedProject.title} details`}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Project</p>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">{selectedProject.title}</h2>
              </div>
              <button ref={closeButtonRef} type="button" className="button-secondary px-4 py-2 text-xs uppercase tracking-[0.2em]" onClick={() => setSelectedProject(null)}>Close</button>
            </div>
            {selectedProject.image ? (
              <div className="relative mt-6 h-[260px] w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-950/95 sm:h-[420px] dark:border-slate-800/70">
                <Image src={selectedProject.image} alt={`${selectedProject.title} preview`} fill sizes="(max-width: 768px) 100vw, 768px" className="object-contain p-3" />
              </div>
            ) : null}
            <p className="mt-4 text-sm text-muted sm:text-base">{selectedProject.description}</p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Highlights</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                  {(selectedProject.highlights ?? []).map((highlight, idx) => <li key={`${selectedProject.title}-h-${idx}`}>{highlight}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">{(selectedProject.stack ?? []).map((item) => <Badge key={item}>{item}</Badge>)}</div>
              </div>
              {selectedProject.github ? (
                <a className="button-primary inline-flex items-center gap-2" href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/github-placeholder.png" alt="" width={18} height={18} className="object-contain" />
                  View on GitHub
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
