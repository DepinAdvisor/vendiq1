"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { waLink } from "@/lib/utils";
import Button from "./Button";

type WhatsAppButtonProps = {
  label: string;
  /** Mensaje precargado opcional; usa el mensaje por defecto si se omite. */
  message?: string;
  size?: "md" | "lg";
  className?: string;
};

/** CTA de WhatsApp con icono y mensaje precargado. */
export default function WhatsAppButton({
  label,
  message,
  size = "md",
  className,
}: WhatsAppButtonProps) {
  return (
    <Button
      href={waLink(message)}
      target="_blank"
      variant="whatsapp"
      size={size}
      icon={<WhatsappLogo size={size === "lg" ? 26 : 22} weight="fill" />}
      className={className}
    >
      {label}
    </Button>
  );
}
