import { useId } from "react";

export type CandyShape = "cloud" | "heart" | "flower" | "star";

/** Algodón de azúcar sobre palito, en cuatro formas esponjosas. */
export default function CottonCandyShape({
  shape,
  color,
  size = 84,
  className,
}: {
  shape: CandyShape;
  color: string;
  size?: number;
  className?: string;
}) {
  const id = useId();
  const gradientId = `candy-grad-${id}`;

  const fluff = () => {
    switch (shape) {
      case "cloud":
        return (
          <g fill={`url(#${gradientId})`}>
            <circle cx="32" cy="52" r="17" />
            <circle cx="52" cy="40" r="22" />
            <circle cx="70" cy="52" r="17" />
          </g>
        );
      case "heart":
        return (
          <g>
            <path
              d="M50 70C30 52 18 38 27 28c7-8 17-4 23 5 6-9 16-13 23-5 9 10-3 24-23 42z"
              fill={`url(#${gradientId})`}
            />
            <circle cx="50" cy="30" r="10" fill={`url(#${gradientId})`} />
          </g>
        );
      case "flower":
        return (
          <g>
            {Array.from({ length: 5 }, (_, i) => {
              const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
              return (
                <circle
                  key={i}
                  cx={50 + Math.cos(angle) * 17}
                  cy={44 + Math.sin(angle) * 17}
                  r="12"
                  fill={`url(#${gradientId})`}
                />
              );
            })}
            <circle cx="50" cy="44" r="13" fill="#FFD96B" opacity="0.9" />
          </g>
        );
      case "star":
        return (
          <g>
            <path
              d="M50 18l7.6 15.4L74 41l-12.2 11.8L64.7 69 50 61.3 35.3 69l2.9-16.2L26 41l16.4-7.6L50 18z"
              fill={`url(#${gradientId})`}
            />
            <circle cx="50" cy="44" r="9" fill={`url(#${gradientId})`} />
          </g>
        );
    }
  };

  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 100 140"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient id={gradientId} cx="38%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="55%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.85" />
        </radialGradient>
      </defs>

      {/* palito */}
      <rect x="46" y="80" width="8" height="50" rx="4" fill="#F3E4D2" />
      <rect x="43" y="80" width="14" height="9" rx="4.5" fill="#E7D2B9" />

      {fluff()}
    </svg>
  );
}
