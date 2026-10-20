// @ts-check
import { fontProviders } from "astro/config";
/**
 * Polices du design client, servies par l’API Fonts d’Astro (téléchargement au build,
 * self-hosting, `@font-face`, préchargement et fallbacks optimisés).
 * Vide par défaut : le socle utilise les polices système.
 *
 * Exemple (Google Fonts ou fichiers locaux via `fontProviders.local()`) :
 *
 *   import { fontProviders } from "astro/config";
 *   export const siteFonts = [
 *     {
 *       provider: fontProviders.google(),
 *       name: "Inter",
 *       cssVariable: "--font-inter",
 *       weights: [400, 600],
 *       subsets: ["latin"],
 *       fallbacks: ["sans-serif"],
 *     },
 *   ];
 *
 * Puis dans `src/styles/stitch.css` : `:root { --font-sans: var(--font-inter); }`
 * Le layout précharge automatiquement chaque police déclarée ici.
 *
 * @type {import("astro").AstroUserConfig["fonts"]}
 */
export const siteFonts = [
  {
    provider: fontProviders.google(),
    name: "Fraunces",
    cssVariable: "--font-fraunces",
    weights: [400, 500, 600, 700],
    styles: ["normal", "italic"],
    subsets: ["latin"],
    fallbacks: ["Georgia", "serif"],
  },
  {
    provider: fontProviders.google(),
    name: "Manrope",
    cssVariable: "--font-manrope",
    weights: [400, 500, 600, 700],
    styles: ["normal"],
    subsets: ["latin"],
    fallbacks: ["system-ui", "sans-serif"],
  },
];
