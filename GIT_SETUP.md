# Git Setup — Complete ✅

## Status

✅ Git repository inicijalizovan
✅ Main branch kreiran
✅ Remote povezan: https://github.com/milix33/mmgroup-website.git
✅ Initial commit napravljen (40 fajlova)
✅ Push na GitHub uspješan

---

## Git Info

**Repository:** https://github.com/milix33/mmgroup-website
**Branch:** main
**Remote:** origin

**Commit:**
```
Initial commit: Complete MMGroup website with Astro + Tailwind

- 10 main pages (Home, Services, Work, About, Pricing, Contact, Privacy, Terms)
- 2 demo pages (Auto Servis, Transport)
- 5 reusable components (Navbar, Footer, Hero, Card, CTA)
- Mobile responsive design
- SEO optimized
- Production ready
```

---

## Kako dalje raditi

### Promjene i commit
```bash
# Dodaj izmjenjene fajlove
git add .

# Napravi commit
git commit -m "Opis izmjena"

# Push na GitHub
git push
```

### Provjeri status
```bash
git status
git log --oneline
```

### Pull najnovije izmjene
```bash
git pull
```

---

## Deployment sa GitHub

### Vercel
1. Idi na https://vercel.com
2. Import Git Repository
3. Odaberi: https://github.com/milix33/mmgroup-website
4. Framework Preset: Astro
5. Deploy

**Auto-deploy:** Svaki push na main će automatski deploy-ovati

### Netlify
1. Idi na https://netlify.com
2. Add new site → Import from Git
3. Connect to GitHub
4. Odaberi repo: mmgroup-website
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy

**Auto-deploy:** Svaki push na main će automatski deploy-ovati

### Cloudflare Pages
1. Idi na https://pages.cloudflare.com
2. Create a project → Connect to Git
3. Odaberi repo: mmgroup-website
4. Build command: `npm run build`
5. Build output: `dist`
6. Deploy

**Auto-deploy:** Svaki push na main će automatski deploy-ovati

---

## GitHub Actions (CI/CD) — Opciono

Možeš dodati automatsko testiranje i deployment:

**.github/workflows/deploy.yml:**
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - name: Deploy to Vercel
        run: npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

---

## Git Commands Cheat Sheet

```bash
# Status
git status                  # Provjeri status
git log --oneline          # Vidi commit historiju
git diff                   # Vidi izmjene

# Branch-evi
git branch                 # Lista branch-eva
git branch feature-xyz     # Kreiraj novi branch
git checkout feature-xyz   # Prebaci se na branch
git checkout main          # Vrati se na main

# Commit i Push
git add .                  # Stage sve izmjene
git commit -m "message"    # Napravi commit
git push                   # Push na GitHub
git pull                   # Pull sa GitHub-a

# Undo
git restore file.txt       # Poništi izmjene fajla
git reset HEAD~1           # Undo zadnjeg commit-a (lokalno)

# Remote
git remote -v              # Vidi remote-ove
git remote show origin     # Detalji o remote-u
```

---

## 🎉 Gotovo!

Sajt je sada na GitHub-u i spreman za deployment!

**Next steps:**
1. Poveži sa Vercel/Netlify/Cloudflare za auto-deploy
2. Svaki push na `main` će automatski ažurirati live sajt
3. Radi lokalno, commit, push → automatski deploy!

**Repository URL:** https://github.com/milix33/mmgroup-website

---

© 2026 MMGroup
