import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-full border border-slate-200/70 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600",
        "dark:border-slate-800/70 dark:bg-slate-900 dark:text-slate-300",
        className
      )}
    >
      {children}
    </span>
  );
}
