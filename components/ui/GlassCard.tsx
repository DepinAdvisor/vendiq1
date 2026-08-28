import { cn } from "@/lib/utils";

/** Tarjeta tipo cristal: blanca translúcida con blur y sombra suave. */
export default function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-card border border-white/70 bg-white/70 shadow-soft backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
