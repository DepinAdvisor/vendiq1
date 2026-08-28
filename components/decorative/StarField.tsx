import { cn } from "@/lib/utils";

const STAR_COLORS = ["#FFD96B", "#FF8FB3", "#7FB8FF", "#FFFFFF"];

/** Posiciones deterministas (sin Math.random) para que SSR y cliente coincidan. */
const STARS = Array.from({ length: 26 }, (_, i) => ({
  x: ((i * 37 + 11) % 100) / 100,
  y: ((i * 53 + 7) % 100) / 100,
  size: 7 + ((i * 13) % 10),
  color: STAR_COLORS[i % STAR_COLORS.length],
  delay: (i * 0.4) % 3.2,
}));

function Sparkle({
  size,
  color,
}: {
  size: number;
  color: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6L12 0z"
        fill={color}
      />
    </svg>
  );
}

/** Campo de estrellas con parpadeo, posicionado de forma absoluta. */
export default function StarField({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {STARS.map((star, i) => (
        <span
          key={i}
          className="absolute animate-twinkle"
          style={{
            left: `${star.x * 100}%`,
            top: `${star.y * 100}%`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <Sparkle size={star.size} color={star.color} />
        </span>
      ))}
    </div>
  );
}
