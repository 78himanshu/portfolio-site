export default function PageHeader({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        Portfolio
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>
    </div>
  );
}
