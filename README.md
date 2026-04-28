# DigitalHero - structure minimale

Ce dépôt contient une base **Vite + React** avec:
- chargement des données locales via `public/data/mock.json`
- routage côté client (`/page/:page`, `/item/:id`)
- pagination sans backend

## Démarrage

```bash
npm install
npm run dev
```

## Vérification rapide

- Ouvrir `http://localhost:5173`
- Vérifier que la page affiche la source `public/data/mock.json`
- Naviguer entre les pages via **Précédent/Suivant**
- Ouvrir le détail d'un item puis revenir à la liste
