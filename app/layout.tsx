import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import { BRAND_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} · ${SITE_NAME} — Renta garantizada con la máquina de algodón de azúcar`,
    template: `%s · ${BRAND_NAME}`,
  },
  description:
    'Genera renta mensual sin esfuerzo: instalamos gratis la máquina expendedora de algodón de azúcar más avanzada (pantalla 32", pago sin contacto, IoT) en tu restaurante, parque, aeropuerto, plaza o cine.',
  keywords: [
    "máquina de algodón de azúcar",
    "vending algodón de azúcar",
    "renta para locales",
    "ingreso pasivo",
    "máquina expendedora México",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} · La atracción más dulce para tu local`,
    description:
      "Instalamos sin costo la máquina de algodón de azúcar más avanzada. Tú solo recibes tu renta mensual.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — máquina de algodón de azúcar ${BRAND_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} · La atracción más dulce para tu local`,
    description:
      "Instalamos sin costo la máquina de algodón de azúcar más avanzada. Tú solo recibes tu renta mensual.",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3effc",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${fredoka.variable} ${nunito.variable}`}
    >
      <body className="bg-cosmos font-body text-ink-soft">
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </MotionProvider>
      </body>
    </html>
  );
}
