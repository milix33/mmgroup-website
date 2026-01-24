# 📞 Kontakt Setup — Kako povezati WhatsApp, Viber i Email formu

## ✅ Šta treba da uradiš

### 1. Ažuriraj kontakt podatke

Otvori fajl: **`src/config.ts`**

```typescript
export const CONTACT = {
  // Tvoj broj telefona (bez +, razmaka ili crtica)
  phone: "38761234567", // 👈 AŽURIRAJ OVDJE!
  
  // Email adresa
  email: "info@mmgroup.ba", // 👈 AŽURIRAJ ako treba
  
  // Formspree Form ID (vidi korak 2)
  formspreeId: "YOUR_FORMSPREE_ID", // 👈 AŽURIRAJ OVDJE!
};
```

**Format broja telefona:**
- Samo brojevi, bez znakova
- Sa kodom zemlje (bez +)
- Primjeri:
  - BiH: `38761234567`
  - Srbija: `381641234567`
  - Hrvatska: `385911234567`

---

### 2. Setup Formspree (Besplatno — 50 submita mjesečno)

#### Korak 1: Registruj se

1. Idi na: https://formspree.io
2. Klikni **"Get Started"**
3. Registruj se sa email-om (ili Google/GitHub)
4. Potvrdi email

#### Korak 2: Kreiraj formu

1. U Formspree dashboard-u, klikni **"+ New Form"**
2. **Name:** "MMGroup Contact Form"
3. **Email:** Unesi email gdje želiš da primaš poruke (npr. `info@mmgroup.ba`)
4. Klikni **"Create Form"**

#### Korak 3: Kopiraj Form ID

1. Nakon kreiranja, vidićeš **Form Endpoint**:
   ```
   https://formspree.io/f/xyzabc123
   ```
   
2. Kopiraj samo ID na kraju (npr. `xyzabc123`)

3. Otvori **`src/config.ts`** i ažuriraj:
   ```typescript
   formspreeId: "xyzabc123", // 👈 Tvoj ID
   ```

#### Korak 4: Gotovo!

Forma će sada raditi i slati emailove na tvoju adresu! 🎉

---

### 3. Testiraj sve linkove

#### Test WhatsApp:
1. Otvori sajt: http://localhost:4321/contact
2. Klikni WhatsApp dugme
3. Treba da otvori WhatsApp sa tvojim brojem

#### Test Viber:
1. Klikni Viber dugme
2. Treba da otvori Viber sa tvojim brojem

#### Test Email:
1. Klikni Email dugme
2. Treba da otvori email klijent sa tvojim email-om

#### Test Forma:
1. Popuni formu sa test podacima
2. Klikni "Pošalji upit"
3. Provjeri email — treba da stigne poruka za par sekundi!

---

## 🔧 Kako funkcioniše

### Config fajl (`src/config.ts`)

Sve kontakt podatke čuvaš na jednom mjestu:

```typescript
export const CONTACT = {
  phone: "38761234567",
  email: "info@mmgroup.ba",
  formspreeId: "xyzabc123",
};
```

### Helper funkcije

Automatski generišu linkove:

```typescript
getWhatsAppLink()  // → https://wa.me/38761234567
getViberLink()     // → viber://chat?number=38761234567
getEmailLink()     // → mailto:info@mmgroup.ba
getFormAction()    // → https://formspree.io/f/xyzabc123
```

### Kontakt stranica (`src/pages/contact.astro`)

Automatski koristi podatke iz config-a:

```astro
<a href={getWhatsAppLink()}>WhatsApp</a>
<a href={getViberLink()}>Viber</a>
<a href={getEmailLink()}>Email</a>

<form action={getFormAction()} method="POST">
  <!-- forma -->
</form>
```

---

## 📧 Formspree Features

### Besplatni plan:
- ✅ 50 submita mjesečno
- ✅ Email notifikacije
- ✅ Spam zaštita
- ✅ File uploads (do 10MB)
- ✅ Auto-respond email-ovi
- ✅ Archive submita

### Ako ti treba više:
- **Paid plan:** $10/mjesec za 1000 submita
- **Unlimited:** $40/mjesec za neograničeno

### Dashboard:
- Vidi sve poruke u Formspree dashboard-u
- Exportuj u CSV
- Integriraj sa Zapier, Slack, itd.

---

## 🎨 Customizacija

### Promijeni email subject

U Formspree dashboard-u:
1. Otvori formu
2. Settings → Email Subject
3. Postavi custom subject, npr: "Novi upit sa MMGroup.ba"

### Dodaj auto-reply

1. Settings → Auto-Reply
2. Uključi auto-reply
3. Napiši poruku koja se šalje korisniku nakon submita:

```
Hvala što ste nas kontaktirali!

Primili smo vašu poruku i odgovorićemo u roku od 24 sata.

S poštovanjem,
MMGroup Tim
```

### Dodaj thank you redirect

U `contact.astro`, dodaj hidden input:

```astro
<form action={getFormAction()} method="POST">
  <input type="hidden" name="_next" value="https://tvoj-domen.com/thank-you" />
  <!-- ostala polja -->
</form>
```

Onda kreiraj `/thank-you` stranicu koja pokazuje success message.

---

## ⚠️ Troubleshooting

### WhatsApp ne radi?

**Problem:** Link ne otvara WhatsApp

**Rješenje:**
- Provjeri format broja u `config.ts` (samo brojevi, sa kodom zemlje)
- Provj eri da je broj ispravan
- Na desktopu: treba WhatsApp Desktop app ili WhatsApp Web

### Viber ne radi?

**Problem:** Link ne otvara Viber

**Rješenje:**
- Na desktopu: instaliran Viber Desktop app
- Na mobilnom: instaliran Viber app
- Format broja mora biti tačan

### Forma ne šalje?

**Problem:** Forma se submituje ali email ne stiže

**Rješenje:**
1. Provjeri `formspreeId` u `config.ts` — mora biti tačan
2. Provjeri spam folder u email-u
3. U Formspree dashboard-u vidi da li je submission zabilježen
4. Provj eri da si potvrdio email u Formspree

**Problem:** "Form not found" greška

**Rješenje:**
- `formspreeId` je pogrešan ili forma nije kreirana
- Kreiraj novu formu u Formspree i kopiraj tačan ID

---

## 🚀 Deploy Notes

### Pre deploy-a:
1. ✅ Ažuriraj `phone` u `config.ts`
2. ✅ Ažuriraj `email` u `config.ts` (ako treba)
3. ✅ Kreiraj Formspree account i formu
4. ✅ Ažuriraj `formspreeId` u `config.ts`
5. ✅ Testiraj sve linkove lokalno

### Nakon deploy-a:
1. Testiraj WhatsApp link na live sajtu
2. Testiraj Viber link na live sajtu
3. Pošalji test formu i provjeri da li email stiže
4. Ako sve radi — gotovo! 🎉

---

## 📱 Demo stranice

Iste kontakt podatke možeš koristiti i na demo stranicama:

**`src/pages/demo/autoservis.astro`**
**`src/pages/demo/transport.astro`**

Ako želiš različite kontakte za demo stranice, možeš dodati u `config.ts`:

```typescript
export const DEMO_CONTACTS = {
  autoservis: {
    phone: "38761111111",
    email: "servis@mmgroup.ba",
  },
  transport: {
    phone: "38762222222",
    email: "transport@mmgroup.ba",
  },
};
```

---

## ✅ Quick Checklist

```
[ ] Otvorio src/config.ts
[ ] Ažurirao phone broj
[ ] Ažurirao email (ako treba)
[ ] Registrovao se na Formspree.io
[ ] Kreirao formu u Formspree
[ ] Kopirao Form ID
[ ] Ažurirao formspreeId u config.ts
[ ] Testirao WhatsApp link
[ ] Testirao Viber link
[ ] Testirao Email link
[ ] Poslao test formu
[ ] Primio test email
```

---

**Sve je spremno!** Kontakt stranica sada potpuno funkcioniše! 🎉

**Lokacija config fajla:** `src/config.ts`
**Formspree Dashboard:** https://formspree.io/forms

---

© 2026 MMGroup
