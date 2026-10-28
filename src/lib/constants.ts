/**
 * Constantes non modifiables par le client (liens institutionnels, etc.).
 * Liens déontologie pied de page : {@link professionDeontologieFooterLink} (psychologue uniquement ; absent pour psychomotricien).
 */

/** Hébergeur des sites livrés sur cette stack (mentions légales). */
export const LEGAL_HOSTING_NAME = "Cloudflare, Inc.";
export const LEGAL_HOSTING_ADDRESS = "101 Townsend St, San Francisco, CA 94107, USA";

/** Absence de cookies de mesure ou publicitaires (stack sans tracking). */
export const LEGAL_NO_TRACKING_NOTICE =
  "Ce site n'utilise pas d'outil de mesure d'audience ni de traceurs publicitaires. Aucun bandeau cookies n'est affiché pour ces finalités.";

/** Phrase sur le remboursement mutuelle (non paramétrable par client.json). */
export const REIMBURSEMENT_MUTUELLE_NOTICE =
  "Certaines mutuelles remboursent une partie des séances.";

/**
 * Numéros nationaux d’urgence (non paramétrables par client.json).
 * Source unique : bloc urgence, accroche du hero, pied de page, panneau conditions.
 */
export const EMERGENCY_NUMBERS: readonly { number: string; label: string; shortLabel: string }[] = [
  { number: "15", label: "SAMU, urgence médicale", shortLabel: "SAMU" },
  { number: "112", label: "numéro d’urgence européen", shortLabel: "urgence européenne" },
  {
    number: "3114",
    label: "numéro national de prévention du suicide, gratuit, 24 h/24 et 7 j/7",
    shortLabel: "prévention du suicide",
  },
];

/** « 15 (SAMU), 112 (urgence européenne) ou 3114 (prévention du suicide) » */
export const EMERGENCY_NUMBERS_SENTENCE = EMERGENCY_NUMBERS.map(
  (item) => `${item.number} (${item.shortLabel})`,
).join(", ").replace(/, ([^,]*)$/, " ou $1");

/** Limites du suivi (liste figée, panneau conditions — non paramétrable par client.json). */
export const CONDITIONS_LIMITS_ITEMS: readonly string[] = [
  "Les consultations ne remplacent pas un service d’urgence.",
  `En cas d’urgence immédiate, contactez le ${EMERGENCY_NUMBERS_SENTENCE}.`,
];

/**
 * Identifiant du formulaire Formspree (`https://formspree.io/f/<id>`).
 * Renseigné par l’intégrateur dans le code, pas dans client.json.
 */
export const FORMSPREE_FORM_ID = "mlgpkqvl";

/** Libellés et liens CTA pied de page (stack fixe : RDV externe + contact). */
export const SITE_BOOKING_PRIMARY_LABEL = "Prendre rendez-vous";
export const SITE_BOOKING_PRIMARY_HREF = "https://www.doctolib.fr/";
export const SITE_BOOKING_SECONDARY_LABEL = "Me contacter";
export const SITE_BOOKING_SECONDARY_HREF = "/contact/";
