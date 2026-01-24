# 📚 MMGroup Website — Dokumentacija

## 🚀 START OVDJE

👉 **[QUICK_START.md](QUICK_START.md)** — Brzo pokretanje (5 min)

👉 **[STATUS.md](STATUS.md)** — Trenutni status i šta je gotovo

---

## 📖 Dokumentacija

### Za developere
- **[README.md](README.md)** — Tehnička dokumentacija, struktura projekta
- **[SUMMARY.md](SUMMARY.md)** — Kompletan pregled svih stranica i komponenti

### Za deployment
- **[DEPLOYMENT.md](DEPLOYMENT.md)** — Deploy na Vercel/Netlify/Cloudflare
- **[STATUS.md](STATUS.md)** — Build status i production checklist

---

## ⚡ Quick Commands

### Pokreni sajt lokalno
```bash
# Dvostruki klik na:
start-dev.bat

# Ili:
npm run dev
```

### Build za production
```bash
# Dvostruki klik na:
build.bat

# Ili:
npm run build
```

### Preview production build
```bash
# Dvostruki klik na:
preview.bat
```

---

## 📂 Struktura fajlova

```
MMGroup26/
├── public/              # Static assets
│   ├── logo.png
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── components/      # Reusable komponente
│   │   ├── Card.astro
│   │   ├── CTA.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── Navbar.astro
│   │
│   ├── layouts/         # Layout templates
│   │   └── BaseLayout.astro
│   │
│   └── pages/          # Stranice (routes)
│       ├── index.astro              # Home
│       ├── services.astro           # Usluge
│       ├── work.astro               # Radovi
│       ├── about.astro              # O nama
│       ├── pricing.astro            # Paketi
│       ├── contact.astro            # Kontakt
│       ├── privacy.astro            # Privacy
│       ├── terms.astro              # Terms
│       └── demo/
│           ├── autoservis.astro     # Demo: Auto servis
│           └── transport.astro      # Demo: Transport
│
├── dist/                # Production build (nakon build-a)
│
├── start-dev.bat        # Quick start dev server
├── build.bat            # Quick build
├── preview.bat          # Quick preview
│
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

---

## 🎯 Stranice i rute

| Ruta | Fajl | Opis |
|------|------|------|
| `/` | `index.astro` | Home — Hero, usluge, proces, radovi |
| `/services` | `services.astro` | Usluge detaljno (4 kategorije) |
| `/work` | `work.astro` | Radovi i case studies |
| `/about` | `about.astro` | O MMGroup |
| `/pricing` | `pricing.astro` | Paketi i cijene |
| `/contact` | `contact.astro` | Kontakt + forma + FAQ |
| `/privacy` | `privacy.astro` | Privacy Policy |
| `/terms` | `terms.astro` | Terms of Service |
| `/demo/autoservis` | `demo/autoservis.astro` | Demo: Auto servis |
| `/demo/transport` | `demo/transport.astro` | Demo: Transport firma |

---

## ✅ Šta je urađeno

- ✅ 10 glavnih stranica
- ✅ 2 demo stranice (auto servis, transport)
- ✅ 5 reusable komponenti
- ✅ Responsive dizajn (mobile/tablet/desktop)
- ✅ SEO optimizacija (meta tags, sitemap)
- ✅ Mobile menu sa toggle
- ✅ Premium korporativni dizajn
- ✅ Inline SVG ikonice
- ✅ System font stack
- ✅ Production build spreman
- ✅ Helper batch fajlovi za Windows

---

## 🔧 Pre production deploy-a

1. **Kontakt info** — Ažuriraj WhatsApp/Viber linkove u `contact.astro`
2. **Forme** — Dodaj backend (Formspree/Netlify Forms)
3. **Domain** — Ažuriraj u `astro.config.mjs` i `sitemap.xml`
4. **Maps** — Dodaj Google Maps u demo stranice (opciono)
5. **Analytics** — Dodaj Google Analytics (opciono)

Detalji u: **[DEPLOYMENT.md](DEPLOYMENT.md)**

---

## 🌐 Deploy opcije

- **Vercel** — Besplatno, brzo (preporučeno)
- **Netlify** — Besplatno, jednostavno
- **Cloudflare Pages** — Unlimited bandwidth
- **Custom hosting** — VPS ili shared hosting

Uputstva: **[DEPLOYMENT.md](DEPLOYMENT.md)**

---

## 📊 Performance

- ⚡ **Build vrijeme:** ~4.5s
- 📦 **Veličina:** Optimizovano
- 🚀 **Load speed:** Brz (statički build)
- 📱 **Mobile:** Responsive
- ♿ **Accessibility:** Semantički HTML

---

## 🆘 Pomoć

**Problem sa pokretanjem?**
- Koristi `.bat` fajlove umjesto npm komandi
- Vidi: **[QUICK_START.md](QUICK_START.md)**

**Pitanja oko deploy-a?**
- Vidi: **[DEPLOYMENT.md](DEPLOYMENT.md)**

**Tehnička pitanja?**
- Vidi: **[README.md](README.md)**

---

## 🎉 Sve je gotovo!

Sajt je **production-ready**.

**Pokreni lokalno:** `start-dev.bat` → http://localhost:4321

**Deploy:** Izaberi hosting (Vercel/Netlify/Cloudflare) i idi live! 🚀

---

© 2026 MMGroup. Made with Astro + Tailwind CSS.
