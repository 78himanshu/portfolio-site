"use client"

import { useEffect, useRef, useState } from "react"
import PageHeader from "@/components/page-header"
import ProjectCard from "@/components/project-card"
import Badge from "@/components/badge"
import type { Project } from "@/data/profile"
import { profile } from "@/data/profile"
import Link from "next/link"

export default function ProjectsClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedProject])

  useEffect(() => {
    if (selectedProject) closeButtonRef.current?.focus()
  }, [selectedProject])

  return (
    <section className="section-padding">
      <div className="container-base">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <PageHeader
            title="Projects"
            subtitle="Builds I have shipped across data engineering, ML, and full-stack—click a project to see details, stack, and code."
          />
          <Link
            className="link-muted text-sm font-semibold"
            href="https://github.com/<YOUR_GITHUB_USERNAME>"
            target="_blank"
            rel="noopener noreferrer"
          >
            More projects on GitHub
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {profile.projects.map((project) => (
            <button
              key={project.title}
              type="button"
              className="text-left transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950"
              onClick={() => setSelectedProject(project)}
            >
              <ProjectCard {...project} />
            </button>
          ))}
        </div>
      </div>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-6 py-10 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            className="card-surface max-h-[85vh] w-full max-w-3xl overflow-y-auto p-6 sm:p-8"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} details`}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Project
                </p>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  {selectedProject.title}
                </h2>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                className="rounded-full border border-slate-200/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800/70 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>

            <p className="mt-4 text-sm text-muted sm:text-base">
              {selectedProject.description}
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Highlights
                </p>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                  {(selectedProject.highlights ?? []).map((highlight, idx) => (
                    <li key={`${selectedProject.title}-h-${idx}`}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Stack
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {(selectedProject.stack ?? []).map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>

              {selectedProject.github ? (
                <div>
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800/70 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white"
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}