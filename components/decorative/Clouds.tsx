import { cn } from "@/lib/utils";

/** Nube esponjosa de algodón (SVG de círculos superpuestos). */
export function Cloud({
  className,
  opacity = 0.85,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 140 80"
      fill="none"
      aria-hidden="true"
      className={cn("w-32 sm:w-40", className)}
      style={{ opacity }}
    >
      <g fill="#fff">
        <circle cx="42" cy="46" r="26" />
        <circle cx="70" cy="32" r="30" />
        <circle cx="100" cy="48" r="24" />
        <rect x="24" y="46" width="92" height="24" rx="12" />
      </g>
    </svg>
  );
}

/** Grupo de nubes decorativas (héroe y secciones). */
export default function Clouds({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none", className)}>
      <Cloud className="absolute -top-4 left-[-3rem] animate-float" opacity={0.6} />
      <Cloud className="absolute top-24 right-[-4rem] w-40 animate-float-slow sm:w-56" opacity={0.7} />
      <Cloud className="absolute bottom-10 left-[8%] w-24 animate-float-slow sm:w-32" opacity={0.5} />
    </div>
  );
}
