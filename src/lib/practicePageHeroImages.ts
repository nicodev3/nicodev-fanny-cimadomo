import type { ImageMetadata } from "astro";
import integrativeHero from "../assets/approche-integrative.png";
import emdrHero from "../assets/emdr.png";
import tccHero from "../assets/tcc.png";

export type PracticePageHero = { image: ImageMetadata; alt: string };

const PRACTICE_PAGE_HERO: Record<string, PracticePageHero> = {
  "approche-integrative": {
    image: integrativeHero,
    alt: "Illustration lumineuse : une silhouette à genoux tient une tresse de fils colorés qui sort d’un profil de visage aux formes pastel.",
  },
  emdr: {
    image: emdrHero,
    alt: "Illustration lumineuse : une silhouette assise en méditation, reliée par un fil corail et un arc de points à un profil de visage aux touches pastel.",
  },
  "therapies-tcc": {
    image: tccHero,
    alt: "Illustration : une silhouette dénoue un fil rouge issu d’un enchevêtrement de pensées dans un profil de visage.",
  },
};

export function getPracticePageHero(slug: string): PracticePageHero | undefined {
  return PRACTICE_PAGE_HERO[slug];
}
