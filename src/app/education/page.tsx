import PageHeader from "@/components/page-header";
import Card from "@/components/card";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Education"
};

export default function EducationPage() {
  return (
    <section className="section-padding">
      <div className="container-base">
        <PageHeader
          title="Education"
          subtitle="Academic foundation focused on computer science, data systems, and applied analytics."
        />
        <div className="space-y-6">
          {profile.education.map((item) => (
            <Card key={item.degree}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {item.school}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {item.degree}
              </h3>
              <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                {item.details}
              </p>
              {item.subtext ? (
                <p className="mt-2 text-sm text-muted">{item.subtext}</p>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
