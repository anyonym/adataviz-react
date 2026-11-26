# README : Adataviz

🔗 [Voir le site en ligne](https://stationnement-motos-nantes.netlify.app)

Adataviz est une application web qui récupère un jeu de données réel depuis une API publique et l'affiche sous forme de cartes.
Les données exploitées sont les zones de stationnement dédiées aux motos et 2 roues motorisés, situées dans l'hypercentre de Nantes.
Des filtres sont applicables par quartiers, et une recherche est possible avec pour critère le nombre de place.
Une mini carte permet de localiser visuellement la zone, l'adresse géographique et les coordonnées GPS sont également présentées.

## Utilisation 

1. Les filtres par quartier de Nantes s'appliquent avec les 3 boutons de navigation situés en haut de page
2. Une barre de recherche par nombre de places est disponible juste dessous
3. Des boutons de pagination apparaissent en bas d'écran selon le nombre de résultats affichés (12 maximum par page)
4. Accessibilité : navigation au clavier prise en charge

## Cartographie et données géographiques

Les coordonnées GPS ont été croisées avec OpenStreetMap afin d'intégrer les mini-cartes avec une localisation exacte, et de retourner l'adresse géographique pour chaque zone de stationnement.

## Pistes d'amélioration

- retour à tous les résultats sans avoir à rafraîchir la page (tri par quartiers)
- le bouton de fitre actif reste visuellement orange
- une fonction de recherche par adresse geographique
- skip de carte en carte sur la page de résultats sans passer par les liens OpenStreetMap
- lien des coordonnées GPS pour ouverture sur application de navigation



## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
