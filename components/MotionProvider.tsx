"use client";

import { MotionConfig } from "motion/react";

/**
 * Respeta la preferencia de "movimiento reducido" del usuario
 * en todas las animaciones de la librería motion.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
