"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { waLink } from "@/lib/utils";

/** Botón flotante de WhatsApp: aparece después de hacer un poco de scroll. */
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 24,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed right-5 bottom-5 z-50"
    >
      <span className="relative grid place-items-center">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-whatsapp/50 animate-pulse-ring"
        />
        <span className="relative grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-ink shadow-lift transition-transform hover:scale-105">
          <WhatsappLogo size={28} weight="fill" />
        </span>
      </span>
    </motion.a>
  );
}
