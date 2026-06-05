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
    <Card className="group flex h-full flex-col justify-between gap-5 border-slate-200/80 transition-all duration-300 group-hover:border-cyan-400/70 group-hover:bg-gradient-to-br group-hover:from-cyan-50 group-hover:to-white group-hover:shadow-[0_20px_60px_-25px_rgba(14,165,233,0.65)] dark:group-hover:from-cyan-950/20 dark:group-hover:to-slate-900 dark:group-hover:border-cyan-400/50">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold transition-colors duration-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
            {title}
          </h3>

          <span className="rounded-full border border-slate-200/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 opacity-0 transition duration-300 group-hover:opacity-100 dark:border-slate-800/70 dark:text-slate-400">
            View
          </span>
        </div>

        {image ? (
          <div className="relative h-44 w-full overflow-hidden rounded-xl border border-slate-200/70 bg-slate-950/95 transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-lg dark:border-slate-800/70">
            <Image
              src={image}
              alt={`${title} project preview`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-2 transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ) : null}

        <p className="text-sm text-muted transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-300">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>

        <p className="pt-1 text-xs font-semibold text-cyan-700 opacity-0 transition duration-300 group-hover:opacity-100 dark:text-cyan-300">
          Click to view project highlights →
        </p>
      </div>
    </Card>
  );
}