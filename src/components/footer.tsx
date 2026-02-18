import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-10 text-sm dark:border-slate-800/70">
      <div className="container-base flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-base font-semibold">{profile.name}</p>
          <p className="text-muted">{profile.title}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link className="link-muted" href={`mailto:${profile.email}`}>
            {profile.email}
          </Link>
          <Link className="link-muted" href={profile.socials.linkedin}>
            LinkedIn
          </Link>
          <Link className="link-muted" href={profile.socials.github}>
            GitHub
          </Link>
        </div>
        <p className="text-muted">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
