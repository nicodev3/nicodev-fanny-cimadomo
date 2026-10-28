---
name: Fanny CIMADOMO
description: Site vitrine d’un cabinet de psychologie à Chambéry — lin, mauve, terracotta discret.
colors:
  mauve: "#6e5d6b"
  mauve-hover: "#5c4f5b"
  mauve-on: "#faf8fa"
  terracotta: "#a85d47"
  terracotta-strong: "#8a5340"
  linen: "#f5f3ef"
  paper: "#fcfcfa"
  paper-subtle: "#eeece8"
  paper-sunken: "#e7e5e0"
  paper-muted: "#ebe8e2"
  paper-warm: "#ebe4dc"
  paper-mauve: "#ebe4ea"
  ink: "#2a2c2a"
  ink-heading: "#2c322e"
  ink-secondary: "#4e5551"
  ink-muted: "#5f6864"
  decor: "#9a939f"
  inverse: "#524858"
  on-inverse: "#f4f6f3"
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
    backgroundColor: "{colors.mauve}"
    textColor: "{colors.mauve-on}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.mauve-hover}"
    textColor: "{colors.mauve-on}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.mauve}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
    typography: "{typography.label}"
  input:
    backgroundColor: "{colors.paper-subtle}"
    textColor: "{colors.ink-heading}"
    rounded: "{rounded.md}"
    typography: "{typography.body}"
---

# Design System: Fanny CIMADOMO

## Overview

**Creative North Star: "Le cabinet lin"**

Site d’une psychologue clinicienne à Chambéry. Le visuel doit se lire comme un cabinet réel : papier lin, mauve (violet pastel, RAL 4009) pour l’action, terracotta seulement en ornement. Fraunces porte les titres (WONK et SOFT à 0) ; Manrope porte le texte. La voix est *je* / *vous*, calme, factuelle.

La densité est confortable, pas marketing. Les listes et filets remplacent les grilles de cartes quand le contenu est de lecture (FAQ, motifs). La confiance clinique passe avant la conversion.

**Key Characteristics:**
- Surfaces unies (lin, papier, mauve pâle) — pas de nappes ni de dégradés
- Une action primaire mauve ; le terracotta n’est pas un bouton
- Titres serif, corps sans ; mesure de lecture ~65ch
- Ombres rares, décalées, très légères
- Rayon 0.75rem sur boutons, champs, photo

## Colors

Palette lin / mauve / terracotta extraite de `src/styles/stitch.css`. Le vert sauge des premières versions est abandonné : il ne doit plus réapparaître.

### Primary
- **Mauve cabinet** (`#6e5d6b`, token `--color-primary`): boutons, liens, états ouverts utiles. Hover `#5c4f5b`. Texte sur mauve `#faf8fa`. Contraste 5.5:1 sur lin, 5.9:1 sur papier.

### Secondary
- **Terracotta** (`#a85d47`, fort `#8a5340`): icônes, filets d’accent, jamais un fond de section ni un dégradé de texte.

### Neutral
- **Lin** (`#f5f3ef`): fond de page
- **Papier** (`#fcfcfa`): surfaces relevées
- **Encre** (`#2a2c2a` / titres `#2c322e` / secondaire `#4e5551`)
- **Mauve pâle** (`#ebe4ea`, token `--color-surface-sage`, nom historique): bandeaux, pied, îlot urgence, survol des boutons secondaires
- **Papier atténué** (`#ebe8e2`): bandeau d’urgence du pied de page
- **Décor** (`#9a939f`): traits et motifs décoratifs, jamais du texte
- **Inverse** (`#524858`, texte `#f4f6f3`): réservé ; plus utilisé comme fond de bandeau sur les pages publiques

### Named Rules
**The Solid-Surface Rule.** Les fonds sont des aplatis. Pas de `linear-gradient` / `radial-gradient` décoratifs, pas de texte en dégradé.

**The Mauve-Is-Action Rule.** Le mauve porte l’action. Le terracotta orne ; il n’appelle pas le clic.

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

Plat par défaut. Deux ombres, toujours décalées, teintées mauve :

- **Soft** (`0 1px 8px rgb(82 72 88 / 7%)`): bouton primaire au repos
- **Card** (`0 8px 28px rgb(82 72 88 / 9%)`): levée ponctuelle, pas un halo centré

### Named Rules
**The Hairline-Not-Card Rule.** Une liste de lecture (FAQ) se sépare par un filet `#e7e5e0`, pas par des cartes ombrées.

## Shapes

Rayon 0.75rem sur contrôles et photo portrait. Filets 1px `paper-sunken`. Pas de bordure colorée latérale > 1px. Photo : rectangle 4/5, pas de découpe circulaire.

## Components

### Buttons
- **Shape:** 0.75rem, bordure 2px
- **Primary:** fond mauve, texte clair, ombre soft
- **Hover:** mauve plus foncé
- **Secondary:** papier, texte mauve, bordure sunken ; hover fond mauve pâle + bordure mauve
- **Active:** `scale(0.96)`

### Cards / Containers
Surfaces papier ou transparentes. Les motifs d’accueil et la FAQ ne sont pas des cartes.

- **Bandeau contact** (« Une question avant de prendre rendez-vous ? ») : rangée entre deux filets `paper-sunken`, sans fond ni rayon. Ce n’est jamais la surface la plus lourde de la page.
- **Cartes d’approche** : un seul lien (le titre) étendu à toute la carte ; « En savoir plus » est un repère visuel mauve, pas un second lien.

### Inputs / Fields
Fond `paper-subtle`, rayon 0.75rem, focus outline 1px mauve. Focus clavier global : contour 2px terracotta, décalé de 2px.

### Navigation
Barre unique sticky, papier. Téléphone et RDV toujours visibles. Menu hamburger pour le reste sous `xl`.

### FAQ
Liste éditoriale : titre à gauche dès 1024px, questions en filets, plus/moins à droite. Ouvert : réponse corps, pas de fond coloré.

## Do's and Don'ts

### Do:
- **Do** garder les faits dans `src/data/client.json`.
- **Do** styler dans `src/styles/stitch.css`.
- **Do** utiliser Fraunces + Manrope et les tokens `:root`.
- **Do** préférer filets et proximité aux cartes.

### Don't:
- **Don't** poser de dégradé (texte ou nappe).
- **Don't** réintroduire le vert sauge (`#3d5c4e` et dérivés).
- **Don't** ajouter un kicker / eyebrow.
- **Don't** mettre une bordure colorée gauche/droite > 1px.
- **Don't** traiter le site comme une landing d’acquisition.
- **Don't** inventer diplômes, tarifs, avis, ou Mon Soutien Psy.
