# MMGroup — Kompletan multi-page statički sajt

## ✅ ISPORUČENO

### Stranice (10 + 2 demo)

1. **Home** (`/`) ✅
   - Hero sa gradijentem
   - Social proof bar (4 benefita)
   - Services preview (4 kartice) → /services
   - Process (4 koraka)
   - Featured work (AIFleetControl + 2 demo) → /work
   - Pricing teaser (3 paketa) → /pricing
   - FAQ preview (3 pitanja) → /contact
   - CTA banner

2. **Services** (`/services`) ✅
   - Landing stranice (START)
   - Business sajtovi (PRO)
   - Web aplikacije (CUSTOM)
   - Održavanje & Hosting
   - CTA banner

3. **Work** (`/work`) ✅
   - AIFleetControl case study
   - Demo: Auto servis → /demo/autoservis
   - Demo: Transport → /demo/transport
   - Kako isporučujemo (4 koraka)
   - CTA banner

4. **About** (`/about`) ✅
   - O MMGroup
   - Vrijednosti (4 kartice)
   - Zašto nas firme biraju (5 razloga)
   - Remote work info
   - CTA banner

5. **Pricing** (`/pricing`) ✅
   - START: od 199 €
   - PRO: od 399 € (najpopularnije)
   - CUSTOM: po dogovoru
   - Hosting: 15–30 € mjesečno
   - Način plaćanja
   - CTA banner

6. **Contact** (`/contact`) ✅
   - 3 velika dugmeta: WhatsApp, Viber, Email
   - Kontakt forma (statička)
   - FAQ (6 pitanja)

7. **Privacy** (`/privacy`) ✅
   - Privacy Policy placeholder

8. **Terms** (`/terms`) ✅
   - Terms of Service placeholder

9. **Demo: Auto servis** (`/demo/autoservis`) ✅
   - Hero
   - Usluge (6 kartica)
   - Paketi održavanja (3 paketa)
   - Booking forma
   - Mapa placeholder
   - Kontakt info

10. **Demo: Transport** (`/demo/transport`) ✅
    - Hero
    - Usluge (6 kartica)
    - Flota (3 tipa vozila)
    - Relacije (8 destinacija)
    - Ponuda forma
    - O nama
    - Kontakt info

### Komponente (5)

1. `Navbar.astro` — Sticky nav sa mobile menu
2. `Footer.astro` — 3 kolone sa linkovima
3. `Hero.astro` — Reusable hero sa gradient
4. `Card.astro` — Reusable card sa hover
5. `CTA.astro` — Full-width CTA banner

### Layout

1. `BaseLayout.astro` — Base layout sa head meta, navbar slot, footer slot

### Public

1. `logo.png` — MMGroup logo (MMgroup-04.png)
2. `robots.txt` — Allow all
3. `sitemap.xml` — Sve stranice

### Config

1. `astro.config.mjs` — Astro + Tailwind
2. `tailwind.config.mjs` — System font stack, content paths
3. `tsconfig.json` — Strict TypeScript
4. `package.json` — Dependencies
5. `.gitignore` — node_modules, dist, .astro

## 🎨 DIZAJN

- **Boje**: Indigo (#4F46E5) i Emerald (#10B981)
- **Tipografija**: System font stack
- **Layout**: max-w-7xl, px-4 sm:px-6 lg:px-8
- **Cards**: rounded-2xl, border, shadow-sm, hover:shadow-md
- **Buttons**: rounded-lg, hover states
- **Spacing**: py-20 sekcije, gap-8 grid
- **Mobile**: Sve responsive, mobile menu

## 🚀 TEHNOLOGIJE

- Astro 4.15
- Tailwind CSS 3.4
- TypeScript strict mode
- Inline SVG ikonice (bez eksternih biblioteka)
- Statički build (bez backenda)

## 📊 SEO

- Unique title i description za svaku stranicu
- OG tags
- Sitemap.xml
- Robots.txt
- Semantički HTML

## 🔗 NAVIGATION

```
Home
  ├─ Usluge
  ├─ Radovi
  │   ├─ Demo: Auto servis
  │   └─ Demo: Transport
  ├─ O nama
  ├─ Paketi
  └─ Kontakt

Footer Legal:
  ├─ Privacy
  └─ Terms
```

## 📦 POKRETANJE

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/
npm run preview   # preview production build
```

## ✨ FEATURES

- ✅ 10 stranica + 2 demo
- ✅ Mobile menu (toggle JS)
- ✅ Smooth hover/focus states
- ✅ SEO optimizovano
- ✅ Fast static build
- ✅ Premium dizajn
- ✅ Responsive na svim uređajima
- ✅ System font stack (brz load)
- ✅ Inline SVG (bez eksternih zavisnosti)
- ✅ Čist, maintainable kod

## 📝 NAPOMENE

- Forme su statičke (action="#"), potrebna backend integracija za funkcionalnost
- WhatsApp/Viber linkovi su placeholder (#), dodati realne URL-ove
- Mapa u demo stranicama je placeholder, dodati Google Maps embed
- Logo je postavljen (MMgroup-04.png kao logo.png)

---

Kompletan, production-ready sajt spreman za deploy! 🎉
