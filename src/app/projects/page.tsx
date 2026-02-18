import PageHeader from "@/components/page-header";
import ProjectCard from "@/components/project-card";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <section className="section-padding">
      <div className="container-base">
        <PageHeader
          title="Projects"
          subtitle="A curated set of placeholder projects that highlight data science and engineering themes."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {profile.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
