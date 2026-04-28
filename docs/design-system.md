# Design System — DigitalHero

## 1. Fondations

### 1.1 Tokens de couleur

- **Neutres (surface & texte)**
  - `--color-bg`: fond principal
  - `--color-bg-elevated`: fond de carte/panneau
  - `--color-surface`: surface secondaire
  - `--color-text`: texte principal
  - `--color-text-muted`: texte secondaire
  - `--color-border`: bordures standards
- **Marque & actions**
  - `--color-primary`, `--color-primary-hover`, `--color-primary-active`
  - `--color-secondary`, `--color-secondary-hover`
  - `--color-accent`
- **États système**
  - `--color-success`, `--color-warning`, `--color-danger`, `--color-info`
  - `--color-focus-ring`

### 1.2 Typographie

- `--font-family-sans`: famille principale
- `--font-size-xs` à `--font-size-5xl`
- `--font-weight-regular`, `--font-weight-medium`, `--font-weight-semibold`, `--font-weight-bold`
- `--line-height-tight`, `--line-height-normal`, `--line-height-relaxed`

### 1.3 Spacing

Échelle 4pt/8pt:

- `--space-0`, `--space-1`, `--space-2`, `--space-3`, `--space-4`, `--space-5`, `--space-6`, `--space-8`, `--space-10`, `--space-12`, `--space-16`

### 1.4 Radius

- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-full`

### 1.5 Ombres

- `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-focus`

### 1.6 Motion

- `--duration-fast`, `--duration-base`, `--duration-slow`
- `--ease-standard`

## 2. Layout, grille et breakpoints

### 2.1 Container & grille

- Largeur max: `--container-max: 72rem`
- Gouttières: `--container-padding-inline`
- Grille recommandée:
  - Mobile: 4 colonnes
  - Tablette: 8 colonnes
  - Desktop: 12 colonnes

### 2.2 Breakpoints

- `--bp-sm`: 30rem (480px)
- `--bp-md`: 48rem (768px)
- `--bp-lg`: 64rem (1024px)
- `--bp-xl`: 80rem (1280px)

## 3. Composants de base

- **Button** (`.btn`, variantes primary/secondary/ghost)
- **Card** (`.card`)
- **Badge** (`.badge`, variantes info/success/warning/danger)
- **Input** (`.input`, `.textarea`, `.select`)
- **Header/Nav** (zones de navigation avec focus et contraste renforcés)

## 4. États interactifs

Chaque composant interactif doit exposer:

- `:hover` (souris)
- `:focus-visible` (clavier)
- `:active` (pression)
- `:disabled` (inactif, opacité réduite, curseur explicite)

Règle focus:

- Focus ring visible au clavier via `outline` + `box-shadow` sur `--color-focus-ring`.

## 5. Règles WCAG AA

- Contraste texte normal: **≥ 4.5:1**
- Contraste texte large (≥24px ou 18.66px gras): **≥ 3:1**
- Contraste composants UI / indicateurs visuels: **≥ 3:1**
- Taille cible interactive recommandée: **44×44px** minimum
- Pas de perte d’information sans couleur seule
- Navigation complète au clavier, ordre de tabulation logique
- Respect de `prefers-reduced-motion`

## 6. Objectifs Lighthouse (budget cible)

- **Performance**: ≥ 90
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 95
- **SEO**: ≥ 95

## 7. Références d’implémentation

- Variables centralisées dans `src/tokens.css`
- Consommation explicite des tokens dans `src/styles.css`
