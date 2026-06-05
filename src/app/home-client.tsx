"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ImpactCard from "@/components/impact-card";
import ProjectCard from "@/components/project-card";
import Badge from "@/components/badge";
import type { Project } from "@/data/profile";
import { profile } from "@/data/profile";

export default function HomeClient() {
  const featuredProjects = profile.projects.slice(0, 3);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject) {
      closeButtonRef.current?.focus();
    }
  }, [selectedProject]);

  return (
    <div>
      <section className="section-padding">
        <div className="container-base grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Portfolio
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {profile.name}
              <span className="block text-slate-500 dark:text-slate-400">
                {profile.title}
              </span>
            </h1>
            <div className="max-w-2xl space-y-4">
              <p className="text-lg leading-8 text-muted">
                {profile.summary}
              </p>
              <p className="whitespace-pre-line text-sm leading-7 text-muted sm:text-base">
                {profile.aboutLong}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                View Projects
              </Link>
              <Link
                href={`mailto:${profile.email}`}
                className="rounded-full border border-slate-200/70 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800/70 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600"
              >
                Email Me
              </Link>
              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className="rounded-full border border-slate-200/70 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800/70 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
              >
                View Resume
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 top-8 hidden h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl lg:block dark:bg-cyan-500/20" />
            <div className="card-surface p-6">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={520}
                height={520}
                className="aspect-square rounded-2xl object-cover"
              />
              <div className="mt-6 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Location
                </p>
                <p className="text-sm font-semibold">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">

        <div className="container-base space-y-10">

          <div>

            <h2 className="font-display text-2xl font-semibold">

              Skills & Focus Areas

            </h2>

            <p className="text-muted">

              Tools and technologies I use across data engineering, machine learning, and AI systems.

            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {Object.entries(profile.skills).map(([category, skills]) => (

              <div key={category} className="card-surface p-6">

                <h3 className="font-display text-lg font-semibold">

                  {category}

                </h3>

                <div className="mt-4 flex flex-wrap gap-2">

                  {skills.map((skill) => (

                    <Badge key={skill}>{skill}</Badge>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="section-padding">
        <div className="container-base space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold">Impact Highlights</h2>
            <p className="text-muted">
              A snapshot of measurable outcomes from recent data and ML work.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {profile.highlights.map((highlight) => (
              <ImpactCard
                key={highlight.title}
                title={highlight.title}
                description={highlight.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-base space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold">Featured Projects</h2>
              <p className="text-muted">Placeholder work samples to be customized.</p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              View all projects →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <button
                key={project.title}
                type="button"
                className="group w-full cursor-pointer text-left transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950"
                onClick={() => setSelectedProject(project)}
              >
                <ProjectCard {...project} />
              </button>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}