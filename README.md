# README : Adataviz-React

Adataviz-React est une application web qui récupère un jeu de données réel depuis une API publique et l'affiche sous forme de cartes.
Les données exploitées sont les zones de stationnement dédiées aux motos et 2 roues motorisés, situées dans l'hypercentre de Nantes.
Des filtres sont applicables par quartiers, et une recherche est possible avec pour critère le nombre de place.
Une mini carte permet de localiser visuellement la zone.

## Utilisation 

1. Les filtres par quartier de Nantes s'appliquent avec les 3 boutons de navigation situés en haut de page
2. Une barre de recherche par nombre de places est disponible juste dessous
3. Des boutons de pagination apparaissent en bas d'écran selon le nombre de résultats affichés (12 maximum par page)
4. Accessibilité : navigation au clavier prise en charge

## Cartographie et données géographiques

Les coordonnées GPS ont été croisées avec OpenStreetMap afin d'intégrer les mini-cartes avec une localisation exacte, un lien permet d'ouvrir la carte OpenStreetMap dans un nouvel onglet.