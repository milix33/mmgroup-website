# 🚀 MMGroup Website — Quick Start Guide

## ✅ Sajt je spreman za korištenje!

### 🎯 Brzo pokretanje

**Development (pregled i editovanje):**
```bash
# Dvostruki klik na:
start-dev.bat

# Ili u terminalu:
npm run dev
```
Sajt će biti dostupan na: **http://localhost:4321**

**Production build:**
```bash
# Dvostruki klik na:
build.bat

# Ili u terminalu:
npm run build
```
Build fajlovi će biti u `dist/` folderu.

**Production preview:**
```bash
# Dvostruki klik na:
preview.bat

# Ili u terminalu:
npm run build && npm run preview
```

---

## 📁 Struktura sajta

### Stranice (10 + 2 demo)
- ✅ **Home** (`/`) — Hero, usluge, proces, radovi, paketi, FAQ
- ✅ **Usluge** (`/services`) — 4 kategorije (START/PRO/CUSTOM/Hosting)
- ✅ **Radovi** (`/work`) — AIFleetControl + demo projekti
- ✅ **O nama** (`/about`) — Priča, vrijednosti
- ✅ **Paketi** (`/pricing`) — 3 paketa (199€/399€/custom)
- ✅ **Kontakt** (`/contact`) — WhatsApp/Viber/Email + forma + FAQ
- ✅ **Privacy** (`/privacy`) — Privacy policy
- ✅ **Terms** (`/terms`) — Terms of service
- ✅ **Demo: Auto servis** (`/demo/autoservis`)
- ✅ **Demo: Transport** (`/demo/transport`)

---

## 🔧 Prije production deploy-a

### 1. Ažuriraj kontakt podatke

**src/pages/contact.astro** (linija ~25-45):
```astro
<!-- Zamijeni placeholder-e -->
<a href="https://wa.me/38761XXXXXXX">WhatsApp</a>
<a href="viber://chat?number=38761XXXXXXX">Viber</a>
```

### 2. Dodaj backend za forme

Forme trenutno nemaju backend (`action="#"`). Opcije:

**A) Formspree (najbrže, besplatno):**
1. Registruj se na https://formspree.io
2. Kreiraj form i dobij ID
3. Ažuriraj forme:
```astro
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**B) Netlify Forms (ako deploy-uješ na Netlify):**
```astro
<form name="contact" method="POST" data-netlify="true">
```

**C) EmailJS (slanje iz browsera):**
https://www.emailjs.com/

### 3. Dodaj Google Maps u demo stranice

Zamijeni placeholder:
```astro
<!-- Trenutno: -->
<div class="h-64 bg-gray-200">
  <p>[Google Maps placeholder]</p>
</div>

<!-- Sa: -->
<iframe 
  src="https://www.google.com/maps/embed?pb=..." 
  class="w-full h-64 rounded-lg"
  loading="lazy"
></iframe>
```

### 4. Dodaj Analytics (opciono)

**src/layouts/BaseLayout.astro** (u `<head>`):
```astro
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 5. Ažuriraj domain

**astro.config.mjs:**
```javascript
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://tvoj-domen.com', // Ažuriraj!
});
```

**public/sitemap.xml:**
Zamijeni sve `https://mmgroup.ba` sa tvojim domenom.

---

## 🌐 Deployment opcije

### Opcija 1: Vercel (preporučeno — besplatno)

1. Instaliraj: `npm i -g vercel`
2. Deploy: `vercel`
3. Production: `vercel --prod`

Ili:
1. Push na GitHub
2. Poveži repo na https://vercel.com
3. Auto-deploy na svaki push

### Opcija 2: Netlify (besplatno)

1. Instaliraj: `npm i -g netlify-cli`
2. Deploy: `netlify deploy --prod`

Build settings:
- Build command: `npm run build`
- Publish directory: `dist`

### Opcija 3: Cloudflare Pages (besplatno, unlimited bandwidth)

1. Push na GitHub
2. Kreiraj projekt na Cloudflare Pages
3. Poveži repo
4. Build command: `npm run build`
5. Build output: `dist`

### Opcija 4: Custom hosting (VPS, shared hosting)

```bash
# Build sajt
npm run build

# Upload dist/ folder na server (FTP, SSH)
# Postavi web server da servira dist/
```

---

## 📊 Post-deployment

### 1. Submit na Google
- Google Search Console: https://search.google.com/search-console
- Submit sitemap: `https://tvoj-domen.com/sitemap.xml`

### 2. Testiraj
- Sve stranice funkcionalne
- Forme šalju email-ove
- Mobile responsive
- Brzina: https://pagespeed.web.dev

### 3. Setup monitoring
- Uptime: https://uptimerobot.com (besplatno)
- Analytics: Provjeri weekly

---

## 🆘 Troubleshooting

### Dev server neće da startuje?
```bash
# Koristi batch fajlove umjesto npm commands
start-dev.bat
```

### Build greška?
```bash
# Reinstaliraj dependencies
rmdir /s /q node_modules
npm install
npm run build
```

### Forma ne šalje?
- Dodaj backend (vidi gore "Dodaj backend za forme")
- Proveri console za greške

---

## 📞 Dodatna pomoć

Za deployment uputstva: **DEPLOYMENT.md**
Za tehničke detalje: **README.md**
Za kompletan pregled: **SUMMARY.md**

---

## ✨ Sve je spremno!

Sajt je:
- ✅ Kompletno funkcionalan
- ✅ Responsive (mobile/tablet/desktop)
- ✅ SEO optimizovan
- ✅ Production-ready
- ✅ Moderan dizajn sa Tailwind CSS
- ✅ Brz static build

**Samo pokreni `start-dev.bat` i počni!** 🚀
