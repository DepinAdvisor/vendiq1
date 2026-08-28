"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost";
type Size = "md" | "lg";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-500 to-violet-500 text-white shadow-glow-pink hover:from-brand-600 hover:to-violet-600",
  secondary:
    "border border-white/80 bg-white/70 text-ink shadow-soft backdrop-blur-sm hover:bg-white",
  whatsapp: "bg-whatsapp text-whatsapp-ink shadow-soft hover:brightness-105",
  ghost: "text-violet-600 hover:bg-violet-500/10",
};

const SIZE_CLASSES: Record<Size, string> = {
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  target?: string;
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

/** Botón o enlace tipo píldora con micro-interacción de movimiento. */
export default function Button({
  href,
  onClick,
  target,
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-display font-semibold transition-colors",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  );

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
