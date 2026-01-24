# Deployment uputstva — MMGroup sajt

## Pre-deployment checklist

### 1. Ažuriraj kontakt informacije

Zamijeni placeholder-e sa realnim podacima:

**Kontakt stranica** (`src/pages/contact.astro`):
```astro
<!-- Trenutno: -->
<a href="#" class="...">WhatsApp</a>
<a href="#" class="...">Viber</a>
<a href="mailto:info@mmgroup.ba" class="...">Email</a>

<!-- Ažuriraj na: -->
<a href="https://wa.me/38761XXXXXXX" class="...">WhatsApp</a>
<a href="viber://chat?number=38761XXXXXXX" class="...">Viber</a>
<a href="mailto:vas@email.ba" class="...">Email</a>
```

**Demo stranice** (auto servis, transport):
- Ažuriraj telefon, email, adresu
- Dodaj Google Maps embed umjesto placeholder-a

### 2. Backend za forme

Forme su trenutno statičke (`action="#"`). Dodaj backend:

**Opcije:**
- **Formspree** (najbrže): https://formspree.io
- **Netlify Forms** (ako deploy-uješ na Netlify)
- **Custom API endpoint** (vlastiti backend)
- **EmailJS** (slanje direktno iz browsera)

**Primjer sa Formspree:**
```astro
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 3. Analytics

Dodaj Google Analytics ili Plausible u `BaseLayout.astro`:

```astro
<head>
  <!-- ... existing meta tags ... -->
  
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script is:inline>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

### 4. Sitemap URL

Ažuriraj `public/sitemap.xml`:
```xml
<!-- Zamijeni https://mmgroup.ba sa tvojim domenom -->
<loc>https://tvoj-domen.com/</loc>
```

### 5. astro.config.mjs

```javascript
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://tvoj-domen.com', // Ažuriraj URL
});
```

## Deployment opcije

### 1. Vercel (preporučeno)

```bash
# Instaliraj Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Ili preko GitHub:
1. Push na GitHub
2. Povežite repo na Vercel.com
3. Auto-deploy na svaki push

### 2. Netlify

```bash
# Instaliraj Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Production deploy
netlify deploy --prod
```

Ili preko GitHub:
1. Push na GitHub
2. Povežite repo na Netlify.com
3. Auto-deploy na svaki push

**Build settings:**
- Build command: `npm run build`
- Publish directory: `dist`

### 3. Cloudflare Pages

1. Push na GitHub
2. Kreiraj projekt na Cloudflare Pages
3. Povežite repo
4. Build command: `npm run build`
5. Build output: `dist`

### 4. Custom VPS / Shared hosting

```bash
# Build sajt
npm run build

# Upload dist/ folder na server
# Postavi web server (nginx/apache) da servira dist/
```

**Nginx config:**
```nginx
server {
    listen 80;
    server_name tvoj-domen.com;
    root /var/www/mmgroup/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /404.html;
    }
}
```

## Domain setup

### DNS podešavanja

**Za Vercel/Netlify:**
```
Type: CNAME
Name: @ (ili www)
Value: cname.vercel-dns.com (ili sitename.netlify.app)
```

**Za custom server:**
```
Type: A
Name: @
Value: [IP adresa servera]

Type: A
Name: www
Value: [IP adresa servera]
```

## SSL certifikat

- **Vercel/Netlify/Cloudflare**: Automatski (besplatan Let's Encrypt)
- **Custom server**: Koristi Certbot (besplatan Let's Encrypt)

```bash
# Na Ubuntu/Debian
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tvoj-domen.com -d www.tvoj-domen.com
```

## Post-deployment

### 1. Testiraj sajt

- Provjeri sve stranice
- Testiraj forme (da li stiže email)
- Testiraj na mobilnom
- Provjeri brzinu: https://pagespeed.web.dev

### 2. Submit na Google

- Google Search Console: https://search.google.com/search-console
- Dodaj sajt i submit sitemap.xml

### 3. Monitoring

- Setup uptime monitoring (UptimeRobot, Pingdom)
- Provjeri Analytics weekly

## Hosting troškovi

- **Vercel Free**: Unlimited bandwidth, 100 GB-hrs/month (dovoljno za mali-srednji sajt)
- **Netlify Free**: 100 GB bandwidth/month (dovoljno)
- **Cloudflare Pages Free**: Unlimited (najbolje za veći promet)
- **VPS**: 5-20 €/mjesec (Hetzner, DigitalOcean, Vultr)

## Support

Za pitanja: info@mmgroup.ba

---

Sretno sa launch-om! 🚀
