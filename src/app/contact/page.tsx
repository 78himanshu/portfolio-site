import Link from "next/link";
import PageHeader from "@/components/page-header";
import Card from "@/components/card";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-base">
        <PageHeader
          title="Contact"
          subtitle="Open to collaborations, data engineering roles, and ML product work."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Email
            </p>
            <h3 className="mt-3 font-display text-lg font-semibold">
              {profile.email}
            </h3>
            <Link
              className="mt-4 inline-flex text-sm font-semibold text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              href={`mailto:${profile.email}`}
            >
              Send email →
            </Link>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              LinkedIn
            </p>
            <h3 className="mt-3 font-display text-lg font-semibold">/Himanshu Paithane</h3>
            <Link
              className="mt-4 inline-flex text-sm font-semibold text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              href={profile.socials.linkedin}
            >
              Visit LinkedIn →
            </Link>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              GitHub
            </p>
            <h3 className="mt-3 font-display text-lg font-semibold">/78himanshu</h3>
            <Link
              className="mt-4 inline-flex text-sm font-semibold text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              href={profile.socials.github}
            >
              View GitHub →
            </Link>
          </Card>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href={`mailto:${profile.email}`}
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Email Me
          </Link>
          <p className="text-sm text-muted">
            I usually respond within 1-2 days.
          </p>
        </div>
      </div>
    </section>
  );
}
