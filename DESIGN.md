---
name: Fanny Cimadomo
description: Site vitrine d’un cabinet de psychologie à Chambéry — lin, sauge, terracotta discret.
colors:
  sage: "#3d5c4e"
  sage-hover: "#2f4a3e"
  sage-on: "#f4f6f3"
  terracotta: "#a85d47"
  terracotta-strong: "#8a5340"
  linen: "#f5f3ef"
  paper: "#fcfcfa"
  paper-subtle: "#eeece8"
  paper-sunken: "#e7e5e0"
  paper-warm: "#ebe4dc"
  paper-sage: "#e8ece9"
  ink: "#2a2c2a"
  ink-heading: "#2c322e"
  ink-secondary: "#4e5551"
  ink-muted: "#5f6864"
  moss: "#8a9a90"
  inverse: "#2f453c"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.5rem, 4.5vw + 1rem, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 2vw + 1.25rem, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.35
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.02em"
rounded:
  md: "0.75rem"
  lg: "1rem"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.sage-on}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.sage-hover}"
    textColor: "{colors.sage-on}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.sage}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
    typography: "{typography.label}"
  input:
    backgroundColor: "{colors.paper-subtle}"
    textColor: "{colors.ink-heading}"
    rounded: "{rounded.md}"
    typography: "{typography.body}"
---

# Design System: Fanny Cimadomo

## Overview

**Creative North Star: "Le cabinet lin"**

Site d’une psychologue clinicienne à Chambéry. Le visuel doit se lire comme un cabinet réel : papier lin, sauge pour l’action, terracotta seulement en ornement. Fraunces porte les titres (WONK et SOFT à 0) ; Manrope porte le texte. La voix est *je* / *vous*, calme, factuelle.

La densité est confortable, pas marketing. Les listes et filets remplacent les grilles de cartes quand le contenu est de lecture (FAQ, motifs). La confiance clinique passe avant la conversion.

**Key Characteristics:**
- Surfaces unies (lin, papier, sauge pâle) — pas de nappes ni de dégradés
- Une action primaire sauge ; le terracotta n’est pas un bouton
- Titres serif, corps sans ; mesure de lecture ~65ch
- Ombres rares, décalées, très légères
- Rayon 0.75rem sur boutons, champs, photo

## Colors

Palette lin / sauge / terracotta extraite de `src/styles/stitch.css`.

### Primary
- **Sauge cabinet** (`#3d5c4e`): boutons, liens, états ouverts utiles. Hover `#2f4a3e`. Texte sur sauge `#f4f6f3`.

### Secondary
- **Terracotta** (`#a85d47`, fort `#8a5340`): icônes, filets d’accent, jamais un fond de section ni un dégradé de texte.

### Neutral
- **Lin** (`#f5f3ef`): fond de page
- **Papier** (`#fcfcfa`): surfaces relevées
- **Encre** (`#2a2c2a` / titres `#2c322e` / secondaire `#4e5551`)
- **Sauge pâle** (`#e8ece9`): bandeaux, pied, îlots calmes

### Named Rules
**The Solid-Surface Rule.** Les fonds sont des aplatis. Pas de `linear-gradient` / `radial-gradient` décoratifs, pas de texte en dégradé.

**The Sage-Is-Action Rule.** La sauge porte l’action. Le terracotta orne ; il n’appelle pas le clic.

## Typography

**Display Font:** Fraunces (Georgia)
**Body Font:** Manrope (system-ui)

**Character:** serif de cabinet pour l’autorité, sans humaniste pour la lecture. Fraunces reste droit : `font-variation-settings: "WONK" 0, "SOFT" 0`.

### Hierarchy
- **Display** (500, clamp 2.5–3.5rem, 1.12): H1
- **Headline** (400, clamp 2–2.5rem, 1.25): H2 de section
- **Title** (500, 1.25rem, 1.35): questions FAQ, titres de motifs
- **Body** (400, 1rem, 1.65, max ~65ch)
- **Label** (600, 0.875rem, +0.02em): boutons, chrome

### Named Rules
**The No-Eyebrow Rule.** Pas de kicker au-dessus d’un titre. Le titre parle tout seul.

## Layout

Conteneur `max-width: 80rem`. Rythme : groupes serrés, sections à `padding-block: 3rem`. Breakpoint structurel 1024px (hero, FAQ en deux colonnes titre / liste). 768px pour les motifs en deux colonnes. FAQ : une seule colonne de questions, jamais une grille de cartes.

## Elevation & Depth

Plat par défaut. Deux ombres, toujours décalées, teintées sauge :

- **Soft** (`0 1px 8px rgb(47 69 60 / 7%)`): bouton primaire au repos
- **Card** (`0 8px 28px rgb(47 69 60 / 9%)`): levée ponctuelle, pas un halo centré

### Named Rules
**The Hairline-Not-Card Rule.** Une liste de lecture (FAQ) se sépare par un filet `#e7e5e0`, pas par des cartes ombrées.

## Shapes

Rayon 0.75rem sur contrôles et photo portrait. Filets 1px `paper-sunken`. Pas de bordure colorée latérale > 1px. Photo : rectangle 4/5, pas de découpe circulaire.

## Components

### Buttons
- **Shape:** 0.75rem, bordure 2px
- **Primary:** fond sauge, texte lin, ombre soft
- **Hover:** sauge plus foncée
- **Secondary:** papier, texte sauge, bordure sunken ; hover fond sauge pâle + bordure sauge
- **Active:** `scale(0.96)`

### Cards / Containers
Surfaces papier ou transparentes. Les motifs d’accueil et la FAQ ne sont pas des cartes.

### Inputs / Fields
Fond `paper-subtle`, rayon 0.75rem, focus outline 1px sauge.

### Navigation
Barre unique sticky, papier. Téléphone et RDV toujours visibles. Menu hamburger pour le reste sous `xl`.

### FAQ
Liste éditoriale : titre à gauche dès 1024px, questions en filets, plus/moins à droite. Ouvert : réponse corps, pas de fond sauge.

## Do's and Don'ts

### Do:
- **Do** garder les faits dans `src/data/client.json`.
- **Do** styler dans `src/styles/stitch.css`.
- **Do** utiliser Fraunces + Manrope et les tokens `:root`.
- **Do** préférer filets et proximité aux cartes.

### Don't:
- **Don't** poser de dégradé (texte ou nappe).
- **Don't** ajouter un kicker / eyebrow.
- **Don't** mettre une bordure colorée gauche/droite > 1px.
- **Don't** traiter le site comme une landing d’acquisition.
- **Don't** inventer diplômes, tarifs, avis, ou Mon Soutien Psy.
