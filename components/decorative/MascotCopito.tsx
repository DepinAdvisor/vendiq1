import { useId } from "react";

/** Ocho copos alrededor del cuerpo del planeta (bordes esponjosos). */
const PUFFS = Array.from({ length: 8 }, (_, i) => {
  const angle = (i * Math.PI) / 4;
  return {
    x: 100 + Math.cos(angle) * 46,
    y: 100 + Math.sin(angle) * 46,
  };
});

/**
 * Copito: la mascota de Planeta Algodón.
 * Un planeta esponjoso de algodón de azúcar con carita feliz y anillo orbital.
 */
export default function MascotCopito({
  size = 140,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const id = useId();
  const gradientId = `copito-grad-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient id={gradientId} cx="38%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFC4DE" />
          <stop offset="55%" stopColor="#F48FB8" />
          <stop offset="100%" stopColor="#B49CFF" />
        </radialGradient>
      </defs>

      {/* anillo orbital */}
      <ellipse
        cx="100"
        cy="100"
        rx="88"
        ry="30"
        transform="rotate(-16 100 100)"
        fill="none"
        stroke="#B49CFF"
        strokeWidth="5"
        opacity="0.55"
      />

      {/* cuerpo esponjoso */}
      <g fill={`url(#${gradientId})`}>
        {PUFFS.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="24" />
        ))}
        <circle cx="100" cy="100" r="56" />
      </g>

      {/* remolinos de algodón */}
      <path
        d="M66 84c10 7 16-3 28 2M110 130c8-6 16 2 24-3"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* ojos */}
      <circle cx="82" cy="92" r="7.5" fill="#3A2A63" />
      <circle cx="118" cy="92" r="7.5" fill="#3A2A63" />
      <circle cx="84.5" cy="89.5" r="2.6" fill="#fff" />
      <circle cx="120.5" cy="89.5" r="2.6" fill="#fff" />

      {/* sonrojo */}
      <ellipse cx="68" cy="108" rx="9" ry="5.5" fill="#FF8FB3" opacity="0.85" />
      <ellipse cx="132" cy="108" rx="9" ry="5.5" fill="#FF8FB3" opacity="0.85" />

      {/* sonrisa */}
      <path
        d="M91 110c6 7 12 7 18 0"
        stroke="#3A2A63"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* estrellitas */}
      <path
        d="M30 32l3.2 7.3 7.3 3.2-7.3 3.2-3.2 7.3-3.2-7.3-7.3-3.2 7.3-3.2 3.2-7.3z"
        fill="#FFD96B"
      />
      <path
        d="M172 46l2.6 6 6 2.6-6 2.6-2.6 6-2.6-6-6-2.6 6-2.6 2.6-6z"
        fill="#FF8FB3"
      />
      <circle cx="164" cy="150" r="3.5" fill="#7FB8FF" />
      <circle cx="38" cy="158" r="3" fill="#7FE0C8" />
    </svg>
  );
}
