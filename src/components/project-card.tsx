import Card from "@/components/card";
import Badge from "@/components/badge";
import type { Project } from "@/data/profile";

type ProjectCardProps = Pick<Project, "title" | "description" | "stack">;

export default function ProjectCard({
  title,
  description,
  stack
}: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between gap-6">
      <div className="space-y-3">
        <h3 className="font-display text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
