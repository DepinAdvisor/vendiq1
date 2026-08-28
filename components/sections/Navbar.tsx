"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PlanetLogo from "@/components/decorative/PlanetLogo";
import { NAV_CTA, NAV_LINKS } from "@/content/nav";
import { BRAND_NAME, SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/60 bg-glass py-3 shadow-soft backdrop-blur-md"
          : "bg-transparent py-5",
      )}
    >
      <Container className="flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5">
          <PlanetLogo size={38} />
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold text-ink">
              {SITE_NAME}
            </span>
            <span className="block text-[10px] font-bold tracking-[0.22em] text-ink-faint uppercase">
              by {BRAND_NAME}
            </span>
          </span>
        </a>

        {/* Enlaces escritorio */}
        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-[15px] font-medium text-ink-soft transition-colors hover:text-violet-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton label={NAV_CTA.label} message={NAV_CTA.message} />
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="grid size-11 place-items-center rounded-full border border-white/80 bg-white/70 text-ink shadow-soft lg:hidden"
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </Container>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Principal móvil"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden lg:hidden"
          >
            <Container className="flex flex-col gap-1 pt-3 pb-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-full px-4 py-3 font-display text-lg font-medium text-ink-soft hover:bg-white/70 hover:text-violet-600"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 px-2">
                <WhatsAppButton label={NAV_CTA.label} message={NAV_CTA.message} size="lg" className="w-full" />
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
