import PageHeader from "@/components/page-header";
import ExperienceCard from "@/components/experience-card";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Experience"
};

export default function ExperiencePage() {
  return (
    <section className="section-padding">
      <div className="container-base">
        <PageHeader
          title="Experience"
          subtitle="Roles focused on scalable data engineering, ML deployment, and analytics reliability."
        />
        <div className="space-y-6">
          {profile.experience.map((role) => (
            <ExperienceCard key={`${role.company}-${role.role}`} {...role} />
          ))}
        </div>
      </div>
    </section>
  );
}
