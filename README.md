# MMGroup — Korporativni IT Studio

Kompletan multi-page statički web sajt izgrađen sa Astro + Tailwind CSS.

## Struktura projekta

```
├── public/
│   ├── logo.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Card.astro
│   │   ├── CTA.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── Navbar.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── demo/
│       │   ├── autoservis.astro
│       │   └── transport.astro
│       ├── about.astro
│       ├── contact.astro
│       ├── index.astro
│       ├── pricing.astro
│       ├── privacy.astro
│       ├── services.astro
│       ├── terms.astro
│       └── work.astro
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## Stranice

1. **Home** (`/`) — Hero, usluge, proces, radovi, paketi, FAQ
2. **Usluge** (`/services`) — Landing stranice, business sajtovi, web aplikacije, hosting
3. **Radovi** (`/work`) — Case studije (AIFleetControl) i demo projekti
4. **O nama** (`/about`) — Priča o MMGroup, vrijednosti, zašto nas biraju
5. **Paketi** (`/pricing`) — START (199€), PRO (399€), CUSTOM
6. **Kontakt** (`/contact`) — Forma, WhatsApp/Viber/Email, FAQ
7. **Legal** — Privacy Policy, Terms of Service
8. **Demo stranice**:
   - `/demo/autoservis` — Landing za auto servis
   - `/demo/transport` — Business sajt za transport firmu

## Tehnologije

- **Astro 4.15** — Statički site generator
- **Tailwind CSS 3.4** — Utility-first CSS framework
- **TypeScript** — Type safety

## Instalacija i pokretanje

**✅ Dependencies su već instalirani!**

### Development server
```bash
# Windows — dvostruki klik na:
start-dev.bat

# Ili terminalu:
npm run dev
```
Server: http://localhost:4321

### Production build
```bash
# Windows — dvostruki klik na:
build.bat

# Ili u terminalu:
npm run build
```
Build output: `dist/` folder

### Production preview
```bash
# Windows — dvostruki klik na:
preview.bat

# Ili u terminalu:
npm run build && npm run preview
```
Server: http://localhost:4321

**Napomena:** Ako npm komande ne rade, koristi `.bat` fajlove koji pozivaju node direktno.

## Dizajn

- **Boje**: Indigo (#4F46E5) i Emerald (#10B981) kao akcenti
- **Tipografija**: System font stack (sans-serif)
- **Layout**: Max width 7xl (1280px), responsive grid
- **Komponente**: Rounded-2xl, border, shadow-sm, hover effects
- **Mobile-first**: Sve stranice optimizovane za mobilne uređaje

## SEO

- Unique title i meta description za svaku stranicu
- Open Graph tags
- Sitemap.xml i robots.txt
- Semantički HTML
- Fast page load (statički build)

## Kontakt

- Email: info@mmgroup.ba
- Web: https://mmgroup.ba

---

© 2026 MMGroup. BiH / EU Remote.
