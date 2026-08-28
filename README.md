# Planeta Algodón · by VENDIQ 🍭

Landing page B2B para **VENDIQ** — la línea de máquinas expendedoras de algodón de azúcar **Planeta Algodón**. Pitch dirigido a dueños de espacios en México (restaurantes con área de juegos, parques de diversiones, aeropuertos, plazas, cines, supermercados): VENDIQ instala la máquina **sin costo** y paga una **renta mensual** por el espacio.

- **Idioma:** español de México (es-MX)
- **Contacto:** solo WhatsApp — +52 222 362 6029 (Puebla)
- **Live:** https://planeta-algodon.vercel.app

## Stack

| Pieza | Elección |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript, Turbopack) |
| Estilos | Tailwind CSS v4 (tokens en `app/globals.css`) |
| Animaciones | `motion` (framer-motion), respeta `prefers-reduced-motion` |
| Iconos | Phosphor Icons (`@phosphor-icons/react`, weight `duotone`) |
| Fuentes | Fredoka (display) + Nunito (cuerpo) vía `next/font/google` |
| Despliegue | Vercel (integración Git, cero configuración) |

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npx tsc --noEmit # typecheck
```

## Arquitectura

- **`content/*.ts`** — TODO el copy en es-MX vive aquí (cero strings en componentes). Cambiar un texto = editar un archivo.
- **`components/ui/`** — kit base (Button, SectionHeading, GlassCard, Marquee, Container).
- **`components/decorative/`** — StarField, Clouds, Sprinkles, Blob, CottonCandyShape y la mascota **Copito**.
- **`components/sections/`** — las 14 secciones, todas `"use client"` (motion + phosphor).
- **`lib/site.ts`** — constantes de marca, URL y WhatsApp (un solo lugar para actualizar el número).
- **`content/video.ts`** — configuración del video con 3 modos: `file`, `youtube` o `none`. Cambiar el video = un edit, cero cambios en componentes.

## Assets y fuentes

| Asset | Origen | Estado |
|---|---|---|
| `public/images/machine/*` | Fotos del proveedor (widermatrix.com) | Placeholder — reemplazar con fotos del piloto |
| `public/video/maquina-algodon.mp4` | Video de referencia (cottonsugar.es) | Usado por decisión del cliente — reemplazar con video propio del piloto |
| `app/icon.svg` | SVG propio (mascota Copito) | Definitivo |
| `public/images/og-image.png` | Generado con `scripts/generate-og-image.ps1` | Regenerar si cambia el branding |
| `assets/` | Material de investigación crudo | Fuera de git |

## TODO antes del lanzamiento real

- [ ] **Video propio**: grabar la máquina en el sitio piloto (celular ≥1080p sirve), reemplazar `public/video/maquina-algodon.mp4` y su poster.
- [ ] **Fotos propias**: reemplazar las fotos del proveedor en `public/images/machine/`.
- [ ] **Testimonios reales**: reemplazar los 3 placeholders en `content/testimonials.ts` con voces del piloto.
- [ ] **Legal**: texto real de Aviso de privacidad y Términos (hoy apuntan a `#` en `content/footer.ts`).
- [ ] **Modelo de renta**: confirmar monto/periodicidad de la renta y ajustar `content/roi.ts` y FAQ si cambia.
- [ ] **Dominio propio** (opcional): Vercel → Settings → Domains.
- [ ] Verificar nombres de las 5 fotos (nombradas por deducción; las fotos no pudieron inspeccionarse visualmente al momento del build).

## Despliegue

1. Push a `main` (repositorio `DepinAdvisor/vendiq1`).
2. Vercel: Add New Project → Import `DepinAdvisor/vendiq1` → autodetecta Next.js → Deploy.
3. El proyecto se llama `planeta-algodon` → URL `planeta-algodon.vercel.app`.
4. Sin variables de entorno (WhatsApp es una constante pública).

## Notas de diseño

Tema "cosmos pastel + feria de dulces": base rosa/azul/lavanda con nubes y chispitas, más estrellas, galaxias y la mascota Copito (planeta esponjoso de algodón con anillo orbital). Tokens completos en `app/globals.css` (`@theme` de Tailwind v4).
