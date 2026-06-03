import Image from "next/image";
import Card from "@/components/card";
import Badge from "@/components/badge";
import type { Project } from "@/data/profile";

type ProjectCardProps = Pick<Project, "title" | "description" | "stack" | "image">;

export default function ProjectCard({
  title,
  description,
  stack,
  image
}: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between gap-5">
      <div className="space-y-4">
        <h3 className="font-display text-xl font-semibold">{title}</h3>

        {image ? (
          <div className="relative h-44 w-full overflow-hidden rounded-xl border border-slate-200/70 bg-slate-950/95 dark:border-slate-800/70">
            <Image
              src={image}
              alt={`${title} project preview`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-2"
            />
          </div>
        ) : null}

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