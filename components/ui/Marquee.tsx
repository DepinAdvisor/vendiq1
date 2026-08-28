import { cn } from "@/lib/utils";

/**
 * Cinta infinita animada con CSS.
 * El contenido se duplica; la copia es aria-hidden para lectores de pantalla.
 */
export default function Marquee({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        <div className="flex shrink-0 items-center gap-4">{children}</div>
        <div className="flex shrink-0 items-center gap-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
