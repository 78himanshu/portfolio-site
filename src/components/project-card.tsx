import Card from "@/components/card";
import Badge from "@/components/badge";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  stack,
  github,
  demo
}: {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
}) {
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
      <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
        <Link className="link-muted" href={github}>
          GitHub
        </Link>
        <Link className="link-muted" href={demo}>
          Live Demo
        </Link>
      </div>
    </Card>
  );
}
