import PageHeader from "@/components/page-header";
import Card from "@/components/card";
import Badge from "@/components/badge";
import { profile } from "@/data/profile";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container-base">
        <PageHeader
          title="About"
          subtitle="A deeper look at my focus areas, strengths, and the tools I use to build reliable data products."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <h2 className="font-display text-xl font-semibold">About me</h2>
            <p className="mt-4 whitespace-pre-line text-sm text-muted">
              {profile.aboutLong}
            </p>
          </Card>
          <div className="space-y-6">
            {Object.entries(profile.skills).map(([category, skills]) => (
              <Card key={category}>
                <h3 className="font-display text-lg font-semibold">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
