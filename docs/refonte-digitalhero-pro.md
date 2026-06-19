# Refonte digitalhero.pro

Date: 2026-06-19

## Cible

Refonte du site public `digitalhero.pro`.

## Reference visuelle validee

Digital Hero Campus sert de reference visuelle: navy/orange, UI mobile-first, cartes de parcours, marque master dominante, approche claire et actionnable.

## Ce qui change

- Remplacement de la demo mock par un vrai site vitrine/programme Digital Hero.
- Hero principal centre sur `DIGITAL HERO` et la signature `Du talent local au heros digital`.
- Mise en place des tokens officiels:
  - Digital Navy `#06172F`
  - Hero Orange `#FF7A1A`
  - Light Gray `#F4F6F8`
  - Soft Orange `#FFE2C8`
  - Secondary Blue `#102A4C`
- Parcours programme en 4 blocs: fondations digitales, productivite & IA, communication & contenu, employabilite digitale.
- Chapitres territoriaux avec `Digital Hero` dominant et la ville secondaire.

## Contraintes respectees

- Aucun checkout local.
- Aucune nouvelle dependance.
- Aucun secret lu ou modifie.
- Aucun domaine ou DNS modifie.
- Aucune mutation de production: travail isole en branche + PR.

## Validation attendue

La CI GitHub doit executer `npm run build` sur la PR.
