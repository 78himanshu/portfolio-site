import PageHeader from "@/components/page-header";
import ExperienceCard from "@/components/experience-card";
import { profile } from "@/data/profile";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell section-tint scroll-mt-24">
      <div className="container-base">
        <PageHeader
          title="Experience"
          subtitle="Roles focused on scalable data engineering, ML deployment, and analytics reliability."
        />
        <div className="relative space-y-6 before:absolute before:bottom-6 before:left-5 before:top-6 before:hidden before:w-px before:bg-slate-200 lg:before:block dark:before:bg-slate-800">
          {profile.experience.map((role) => (
            <div key={`${role.company}-${role.role}`} className="relative lg:pl-12">
              <span className="absolute left-[15px] top-8 z-10 hidden h-3 w-3 rounded-full border-2 border-cyan-600 bg-slate-50 lg:block dark:border-cyan-400 dark:bg-slate-950" />
              <ExperienceCard {...role} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
