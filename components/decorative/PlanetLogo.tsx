import { useId } from "react";

/**
 * Logo del planeta de algodón: círculo pastel con anillo orbital y estrellas.
 * Versión simplificada (sin carita) de la mascota Copito.
 */
export default function PlanetLogo({
  size = 36,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const id = useId();
  const gradientId = `planet-grad-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient id={gradientId} cx="35%" cy="30%" r="85%">
          <stop offset="0%" stopColor="#FFB7D5" />
          <stop offset="55%" stopColor="#F48FB8" />
          <stop offset="100%" stopColor="#C58FFF" />
        </radialGradient>
      </defs>
      {/* anillo orbital */}
      <ellipse
        cx="24"
        cy="24"
        rx="21"
        ry="7.5"
        transform="rotate(-18 24 24)"
        fill="none"
        stroke="#B49CFF"
        strokeWidth="2.5"
        opacity="0.7"
      />
      {/* cuerpo del planeta */}
      <circle cx="24" cy="24" r="13" fill={`url(#${gradientId})`} />
      {/* remolino de algodón */}
      <path
        d="M16 21c4 3 8-1 14 2"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.65"
      />
      {/* estrellas */}
      <path
        d="M38 7l1.3 3 3 1.3-3 1.3-1.3 3-1.3-3-3-1.3 3-1.3 1.3-3z"
        fill="#FFD96B"
      />
      <circle cx="9" cy="9" r="1.6" fill="#7FB8FF" />
      <circle cx="41" cy="38" r="1.4" fill="#FF8FB3" />
    </svg>
  );
}
