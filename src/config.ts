// MMGroup Contact Configuration
// Ažuriraj ove podatke sa svojim kontakt informacijama

export const CONTACT = {
  // Telefon bez +, razmaka ili crtica (samo brojevi)
  // Primer: "38761234567" za bosanski broj
  phone: "38761234567", // AŽURIRAJ OVDJE!
  
  // Email adresa
  email: "info@mmgroup.ba",
  
  // Formspree Form ID (registruj se na https://formspree.io)
  // Nakon registracije kreiraj form i dobićeš ID poput "xyzabc123"
  formspreeId: "YOUR_FORMSPREE_ID", // AŽURIRAJ OVDJE!
  
  // WhatsApp link se automatski generiše iz phone broja
  // Format: https://wa.me/38761234567
  
  // Viber link se automatski generiše iz phone broja
  // Format: viber://chat?number=38761234567
};

// Helper funkcije
export const getWhatsAppLink = () => `https://wa.me/${CONTACT.phone}`;
export const getViberLink = () => `viber://chat?number=${CONTACT.phone}`;
export const getEmailLink = () => `mailto:${CONTACT.email}`;
export const getFormAction = () => 
  CONTACT.formspreeId === "YOUR_FORMSPREE_ID" 
    ? "#" 
    : `https://formspree.io/f/${CONTACT.formspreeId}`;
