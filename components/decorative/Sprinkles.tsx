import { cn } from "@/lib/utils";

const SPRINKLE_COLORS = [
  "bg-sprinkle-pink",
  "bg-sprinkle-blue",
  "bg-sprinkle-lavender",
  "bg-sprinkle-mint",
  "bg-sprinkle-lemon",
  "bg-sprinkle-orange",
  "bg-sprinkle-grape",
];

/** Posiciones deterministas para que SSR y cliente coincidan. */
const SPRINKLES = Array.from({ length: 14 }, (_, i) => ({
  x: ((i * 41 + 5) % 100) / 100,
  y: ((i * 29 + 13) % 100) / 100,
  rotate: ((i * 47) % 70) - 35,
  color: SPRINKLE_COLORS[i % SPRINKLE_COLORS.length],
  delay: (i * 0.5) % 6,
}));

/** Chispitas de colores esparcidas (decoración tipo feria de dulces). */
export default function Sprinkles({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {SPRINKLES.map((s, i) => (
        <span
          key={i}
          className={cn(
            "absolute h-1.5 w-4 rounded-full opacity-70 animate-float",
            s.color,
          )}
          style={{
            left: `${s.x * 100}%`,
            top: `${s.y * 100}%`,
            transform: `rotate(${s.rotate}deg)`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
