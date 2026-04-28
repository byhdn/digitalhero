# DigitalHero

Site vitrine front-end orienté performance, accessibilité et cohérence visuelle.

## Prérequis

- Node.js **20+**
- npm **10+**
- Git

## Installation

```bash
npm install
```

## Preview locale

Lancer le serveur de développement avec rechargement à chaud:

```bash
npm run dev
```

Puis ouvrir l'URL affichée dans le terminal (souvent `http://localhost:5173`).

## Build production

Construire les assets optimisés:

```bash
npm run build
```

Prévisualiser le build localement:

```bash
npm run preview
```

## Déploiement GitHub Pages

### Option 1 — via workflow GitHub Actions (recommandé)

1. Vérifier que la branche par défaut est `main`.
2. Ajouter un workflow `.github/workflows/deploy.yml` déclenché sur push `main`.
3. Configurer la publication de `dist/` via l’action officielle `actions/deploy-pages`.
4. Dans **Settings → Pages**, sélectionner **GitHub Actions** comme source.

Exemple de commande locale avant push:

```bash
npm run build
```

### Option 2 — via `gh-pages`

Installer la dépendance:

```bash
npm install --save-dev gh-pages
```

Ajouter les scripts dans `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Déployer:

```bash
npm run deploy
```

## Structure du projet

```text
.
├── docs/
│   └── design-system.md        # Référentiel design system (tokens, composants, accessibilité)
├── src/
│   ├── tokens.css              # Variables de design (couleurs, typo, spacing, etc.)
│   └── styles.css              # Styles globaux et composants consommant explicitement les tokens
├── README.md
└── LICENSE
```

## Checklist de validation finale

- [ ] **Qualité visuelle**
  - [ ] UI cohérente avec le design system (`docs/design-system.md`).
  - [ ] États hover/focus/active visibles sur tous les éléments interactifs.
- [ ] **Responsive**
  - [ ] Mobile (≥320px), tablette (≥768px), desktop (≥1024px), large (≥1280px) vérifiés.
  - [ ] Aucune coupure de layout ni débordement horizontal.
- [ ] **Accessibilité (WCAG AA)**
  - [ ] Contraste des textes et composants non textuels conforme.
  - [ ] Navigation clavier complète + focus visible.
  - [ ] Libellés explicites, hiérarchie des titres valide, landmarks sémantiques.
- [ ] **Performance**
  - [ ] Images optimisées, formats modernes utilisés si possible.
  - [ ] CSS/JS minimisés en production.
  - [ ] Budget Lighthouse respecté (voir `docs/design-system.md`).
- [ ] **Technique**
  - [ ] `npm run build` passe sans erreur.
  - [ ] `npm run preview` démarre correctement.
  - [ ] Déploiement GitHub Pages opérationnel.
