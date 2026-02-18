import Image from "next/image";
import Link from "next/link";
import ImpactCard from "@/components/impact-card";
import ProjectCard from "@/components/project-card";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Home"
};

export default function HomePage() {
  const featuredProjects = profile.projects.slice(0, 3);

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
            <p className="text-lg text-muted">{profile.summary}</p>
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
              <a
                href="/api/resume"
                download="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200/70 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800/70 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
              >
                Download Resume
              </a>
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
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
