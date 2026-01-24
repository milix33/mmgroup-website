# 🚀 Deploy na Vercel — Step by Step

## ✅ Git je već povezan sa GitHub!

Repository: https://github.com/milix33/mmgroup-website

---

## Opcija 1: Vercel Web Dashboard (Najlakše)

### 1. Idi na Vercel
Otvori: https://vercel.com

### 2. Sign up / Login
- Klikni "Sign Up" (ako nemaš nalog)
- Izaberi "Continue with GitHub"
- Autorizuj Vercel da pristupa GitHub-u

### 3. Import Project
- Klikni "Add New..." → "Project"
- Klikni "Import Git Repository"
- Pronaći: `milix33/mmgroup-website`
- Klikni "Import"

### 4. Configure Project
Vercel će automatski detektovati Astro:
- **Framework Preset:** Astro (auto-detected)
- **Build Command:** `npm run build` (auto)
- **Output Directory:** `dist` (auto)
- **Install Command:** `npm install` (auto)

### 5. Deploy
- Klikni "Deploy"
- Sačekaj 30-60 sekundi
- Gotovo! 🎉

**Tvoj live URL:** `https://mmgroup-website-xxxx.vercel.app`

---

## Opcija 2: Vercel CLI

```bash
# Instaliraj Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (iz root foldera projekta)
vercel

# Production deploy
vercel --prod
```

---

## Auto-Deploy Setup ✨

Vercel automatski pokreće deploy kada:
- ✅ Push-uješ na `main` branch → Production deploy
- ✅ Push-uješ na bilo koji drugi branch → Preview deploy
- ✅ Pull Request se kreira → Preview deploy za svaki PR

**Nema potrebe za dodatnim setupom! Sve radi out-of-the-box.**

---

## Custom Domain Setup

### 1. U Vercel Dashboard
- Idi na Project → Settings → Domains
- Klikni "Add Domain"
- Unesi svoj domen (npr. `mmgroup.ba`)

### 2. DNS Setup
Dodaj ove DNS zapise kod svog domain providera:

**Za root domain (mmgroup.ba):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Za www subdomain (www.mmgroup.ba):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. SSL
- SSL certifikat se automatski generiše (besplatan Let's Encrypt)
- Aktivira se za ~5 minuta

---

## Environment Variables (ako treba)

Ako imaš API ključeve ili tajne:

### U Vercel Dashboard
- Project → Settings → Environment Variables
- Dodaj variablu:
  - **Name:** npr. `FORMSPREE_ID`
  - **Value:** tvoj ID
  - **Environment:** Production

### U Astro kodu
```js
// astro.config.mjs
const formspreeId = import.meta.env.FORMSPREE_ID;
```

---

## Build Settings (ako treba prilagoditi)

### vercel.json (opciono)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "astro"
}
```

---

## Monitoring & Analytics

### 1. Vercel Analytics (besplatno)
```bash
npm i @vercel/analytics
```

**src/layouts/BaseLayout.astro:**
```astro
---
import { Analytics } from '@vercel/analytics/astro';
---

<head>
  <!-- ... existing meta tags ... -->
</head>
<body>
  <slot />
  <Analytics />
</body>
```

### 2. Deployment Logs
- Project → Deployments → Klikni na deployment
- Vidi build logs, runtime logs

### 3. Speed Insights
- Automatski dostupno u Dashboard-u
- Real-time performance metrics

---

## Troubleshooting

### Build greška?
**Provjeri Build Log:**
- Deployment → Failed → View Build Log
- Česte greške:
  - Missing dependencies → `npm install` lokalno pa commit
  - Type errors → `npm run build` lokalno da vidiš grešku

### Stranica ne radi?
**Provjeri Output Directory:**
- Settings → Build & Development Settings
- Output Directory: `dist` (mora biti!)

### Domain ne radi?
**Provjeri DNS:**
- Koristi https://dnschecker.org
- DNS propagacija traje 5-30 min

---

## Redeploy (Ručno)

Ako treba force redeploy:

### U Vercel Dashboard
- Deployments → Latest → ... (kebab menu)
- Klikni "Redeploy"
- Potvrdi

### Ili sa CLI
```bash
vercel --prod --force
```

---

## Preview Deploys (za testiranje)

### Kreiranje Preview-a
```bash
# Kreiraj novi branch
git checkout -b feature-xyz

# Napravi izmjene
# ...

# Commit i push
git add .
git commit -m "Test feature"
git push -u origin feature-xyz
```

**Vercel automatski kreira preview URL:**
`https://mmgroup-website-git-feature-xyz-milix33.vercel.app`

---

## Korisne Vercel komande

```bash
# Login
vercel login

# Deploy production
vercel --prod

# List deployments
vercel ls

# Vidi logs
vercel logs

# Remove deployment
vercel rm deployment-url

# Otvori project u browseru
vercel
```

---

## 🎉 Gotovo!

**Deployment Flow:**
1. Radi lokalno (izmjene)
2. `git add . && git commit -m "message"`
3. `git push`
4. Vercel automatski deploy-uje! ✨

**Live za ~60 sekundi!**

---

## Cijene

**Hobby (Besplatno):**
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/mjesec
- ✅ Automatic SSL
- ✅ Custom domains
- ✅ Serverless functions (100GB-hrs)

**Dovoljno za mali-srednji business sajt!**

Upgrade na Pro ($20/mjesec) samo ako:
- Trebaš više od 100 GB bandwidth-a
- Team collaboration features
- Priority support

---

**Vercel Dashboard:** https://vercel.com/dashboard
**Docs:** https://vercel.com/docs

© 2026 MMGroup
