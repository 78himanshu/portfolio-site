import Card from "@/components/card";

export default function ExperienceCard({
  company,
  role,
  dates,
  bullets
}: {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
}) {
  return (
    <Card className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {company}
          </p>
          <h3 className="font-display text-xl font-semibold">{role}</h3>
        </div>
        <span className="text-xs font-semibold text-slate-500">{dates}</span>
      </div>
      <ul className="space-y-2 text-sm text-muted">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
