import { cn } from "@/lib/utils";

export default function Card({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("card-surface p-6", className)}>{children}</div>;
}
