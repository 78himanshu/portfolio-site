import Image from "next/image";
import PageHeader from "@/components/page-header";
import Card from "@/components/card";
import { profile } from "@/data/profile";

export default function EducationSection() {
  return (
    <section id="education" className="section-shell section-tint scroll-mt-24">
      <div className="container-base">
        <PageHeader
          title="Education"
          subtitle="Academic foundation focused on computer science, data systems, and applied analytics."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {profile.education.map((item) => (
            <Card key={item.degree} className="h-full transition-transform duration-200 hover:-translate-y-1">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                {"logo" in item && item.logo ? (
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border border-slate-200/70 bg-white p-2 dark:border-slate-800 dark:bg-slate-950/50">
                    <Image src={item.logo} alt={item.school} width={96} height={96} className="max-h-full rounded-md object-contain" />
                  </div>
                ) : null}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.school}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{item.degree}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{item.details}</p>
                  {item.subtext ? <p className="mt-2 text-sm text-muted">{item.subtext}</p> : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
