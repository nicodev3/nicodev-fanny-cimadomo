# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Adultes, souvent en souffrance actuelle (anxiété, psychotraumatisme, dépression, deuil, harcèlement, épuisement professionnel, isolement, questionnement identitaire), qui cherchent une psychologue clinicienne à Chambéry / en Savoie.

Job principal du visiteur : **comprendre si Fanny est la bonne professionnelle**, puis **contacter ou prendre rendez-vous**. Ce n’est pas un tunnel de conversion prioritaire au RDV.

## Product Purpose

Site vitrine du cabinet de Fanny CIMADOMO, psychologue clinicienne. Il doit permettre de :

- vérifier le cadre (cabinet, confidentialité, public adultes, approches) ;
- juger la pertinence (spécialités, formation, EMDR en cours, TCC / approche intégrative) ;
- passer à l’action (formulaire, téléphone, email, réservation Perfactive).

Succès : le visiteur part avec une décision claire — « je la contacte » ou « ce n’est pas pour moi » — sans avoir été poussé.

## Positioning

Cabinet libéral d’une clinicienne, pas une plateforme de thérapie en ligne ni un contenu wellness. L’accompagnement est **intégratif** (TCCE, clinique du psychotraumatisme / EMDR, apports systémiques et thérapie des schémas), **en présentiel uniquement**, pour **adultes**.

Le différentiel factuel : formation en psychologie légale, clinique du trauma, EMDR niveau 1 en cours — pas un positionnement marketing inventé.

## Operating Context

- Contenu métier dans `src/data/client.json` (source de vérité factuelle ; ne pas inventer diplômes, tarifs, horaires, promesses).
- Prise de rendez-vous externe : Perfactive (`https://perfactive.fr/fanny-cimadomo/new`).
- Contact : email et téléphone ; formulaire du socle Nicodev.
- Consultation au cabinet, 173 rue Emile Romanet, 73000 Chambéry. Parking gratuit ; arrêt Croix de Bissy (lignes C / D).
- Horaires déclarés : vendredi 9h–17h (les autres jours sont désactivés dans le questionnaire).
- Tarif : consultation individuelle adultes, 65 € / 45 min. Paiement virement, chèque, espèces.
- Annulation 48 h (jours ouvrés) sinon dédommagement financier possible ; retard important → séance écourtée.
- Mon Soutien Psy : **non** proposé. Mutuelles : facture fournie, le patient vérifie lui-même.

## Capabilities and Constraints

- Socle Astro Nicodev : pages, header/footer, formulaire, pages d’approche (`TCC`, `EMDR`, `approche intégrative` activées).
- Styles visuels dans `src/styles/stitch.css` (fichier CSS du fork, **pas** un lock Stitch). Markup Astro + `client.json` restent la structure.
- Pas de visio. Pas d’espace patient. Pas de blog métier obligatoire.
- `seo.baseUrl` est `https://fcpsy.fr` : transfert Wix vers OVH en cours, domaine pas encore actif.
- Décision ouverte : le visuel Stitch n’est **pas** une identité figée.

## Brand Commitments

- Nom : Fanny CIMADOMO (nom de famille toujours en capitales, dans le texte comme dans les titres). Titre : Psychologue / psychologue clinicienne. Ville : Chambéry.
- Voix : la praticienne parle d’elle en *je*, s’adresse au visiteur en *vous* (écoute, respect, confidentialité, rythme du patient).
- **Registre cabinet / professionnel de santé** : discret, digne, lisible. Interdit : landing marketing agressive, urgence commerciale, « delight » de produit SaaS, promesse thérapeutique.
- Les écrans Google Stitch ne sont pas un brief visuel contraignant.

## Evidence on Hand

- Questionnaire importé : `src/data/client.json`.
- Copy accueil : `src/content/site-copy/accueil.md`.
- Pages d’approche : `src/content/practice-pages/` (tcc, emdr, approche-integrative).
- Ancien site Wix (legacy) : `fannycimadomopsy.wixsite.com` — référence d’historique, pas de design à reproduire.
- **Absences à ne pas fabriquer** : témoignages patients, notes, avant/après, preuves sociales inventées, affiliation d’ordre, prise en charge Mon Soutien Psy, photos cabinet non fournies.

## Product Principles

1. La confiance clinique passe avant la conversion.
2. Les faits du cabinet (tarif, cadre, approches, limites) doivent rester exacts et visibles.
3. Un visiteur en détresse ne doit pas subir une interface bruyante, urgente ou « fun ».
4. Le site doit aider à **choisir** (oui ou non), pas à retenir par le spectacle.
5. Toute claim médicale, diplôme ou disponibilité vient du questionnaire, jamais d’une hypothèse.
