import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PlanetLogo from "@/components/decorative/PlanetLogo";
import { NAV_LINKS } from "@/content/nav";
import { footer } from "@/content/footer";
import { WHATSAPP_DISPLAY } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2.5">
              <PlanetLogo size={40} />
              <span className="font-display text-xl font-semibold text-white">
                Planeta Algodón
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {footer.description}
            </p>
          </div>

          {/* Enlaces */}
          <nav aria-label="Pie de página">
            <h3 className="font-display text-sm font-semibold tracking-widest text-sprinkle-lavender uppercase">
              {footer.linksTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-widest text-sprinkle-lavender uppercase">
              {footer.contactTitle}
            </h3>
            <p className="mt-4 text-sm">{WHATSAPP_DISPLAY}</p>
            <div className="mt-3">
              <WhatsAppButton label={footer.whatsappCta} />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center text-xs sm:flex-row sm:justify-between sm:text-left">
          <p>{footer.legal}</p>
          <div className="flex items-center gap-4">
            {footer.legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <p className="flex items-center gap-1.5">
            <span aria-hidden="true">🍭</span> {footer.madeWith}
          </p>
        </div>
      </Container>
    </footer>
  );
}
