import { cn } from "@/lib/utils";

/**
 * Mancha orgánica de color con bordes irregulares (blob),
 * ideal como fondo decorativo detrás de las secciones.
 */
export default function Blob({
  className,
  gradient = "from-sprinkle-pink/40 via-sprinkle-lavender/30 to-sprinkle-blue/40",
  spinSlow = false,
}: {
  className?: string;
  gradient?: string;
  spinSlow?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -z-10 bg-gradient-to-br blur-3xl",
        gradient,
        spinSlow && "animate-spin-slow",
        className,
      )}
      style={{
        borderRadius: "42% 58% 63% 37% / 45% 39% 61% 55%",
      }}
    />
  );
}
