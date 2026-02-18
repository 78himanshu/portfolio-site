import Card from "@/components/card";

export default function ImpactCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="space-y-2 border-l-4 border-l-cyan-500">
      <p className="font-display text-lg font-semibold">{title}</p>
      <p className="text-sm text-muted">{description}</p>
    </Card>
  );
}
