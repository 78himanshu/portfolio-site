import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import Card from "@/components/card";
import { profile } from "@/data/profile";

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell scroll-mt-24">
      <div className="container-base">
        <PageHeader title="Contact" subtitle="Open to collaborations, data engineering roles, and ML product work." />
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="transition-transform duration-200 hover:-translate-y-1">
            <Image src="/icons/email-placeholder.png" alt="Email icon" width={44} height={44} className="mb-4 rounded-md object-contain" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Email</p>
            <h3 className="mt-3 break-words font-display text-lg font-semibold">{profile.email}</h3>
            <Link className="link-muted mt-4 inline-flex text-sm font-semibold" href={`mailto:${profile.email}`}>Send email →</Link>
          </Card>
          <Card className="transition-transform duration-200 hover:-translate-y-1">
            <Image src="/icons/linkedin-placeholder.png" alt="LinkedIn icon" width={44} height={44} className="mb-4 rounded-md object-contain" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">LinkedIn</p>
            <h3 className="mt-3 font-display text-lg font-semibold">/Himanshu Paithane</h3>
            <Link className="link-muted mt-4 inline-flex text-sm font-semibold" href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">Visit LinkedIn →</Link>
          </Card>
          <Card className="transition-transform duration-200 hover:-translate-y-1">
            <Image src="/icons/github-placeholder.png" alt="GitHub icon" width={44} height={44} className="mb-4 rounded-md object-contain" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">GitHub</p>
            <h3 className="mt-3 font-display text-lg font-semibold">/78himanshu</h3>
            <Link className="link-muted mt-4 inline-flex text-sm font-semibold" href={profile.socials.github} target="_blank" rel="noopener noreferrer">View GitHub →</Link>
          </Card>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href={`mailto:${profile.email}`} className="button-primary">Email Me</Link>
          <p className="text-sm text-muted">I usually respond within 1-2 days.</p>
        </div>
      </div>
    </section>
  );
}
