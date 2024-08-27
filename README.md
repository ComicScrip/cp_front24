# Checkpoint frontend

## Instructions

Tu vas utiliser une API GraphQL qui fournit des informations sur un ensemble de pays.

Tu peux démarrer le checkpoint en une commande (qui utilise  docker), dans le répertoire racine :

```sh
npm start
```

Si tu ne souhaites pas utiliser docker, rends-toi simplement dans les sous-repertoires backend et frontend et lis les instructions dans le fichier README à l'interieur.

Une fois le projet lancé, rends-toi sur [http://localhost:4000/graphql](http://localhost:4000/graphql) afin d'explorer l'API.

![explorer api graphql](https://github.com/WildCodeSchool/checkpoint-front-wns/blob/main/screenshots/example/exploring_graphql_api.png?raw=true)

Pour réaliser ce projet, tu peux si tu le souhaites utiliser du CSS pur ou bien utiliser un framework CSS de ton choix (TailwindCSS, MaterialUI, Schadcn, AntDesign, ...)

Tu vas devoir développer la partie front de 3 fonctionnalités :

- Listing des pays (avec au minimum les infos "name" et "emoji") pour chaque pays
- Affichage des détails d'un pays sur une page dédiée ("name", "code", "emoji" et nom du continent s'il est renseigné)
- Ajout d'un pays (avec au minimum les infos "name", "code" et "emoji")

Voici un aperçu de ce que cela pourrait donner :

![ajout et listing des pays](https://github.com/WildCodeSchool/checkpoint-front-wns/blob/main/screenshots/example/listing_add_desktop.png?raw=true)

![details d'un pays](https://github.com/WildCodeSchool/checkpoint-front-wns/blob/main/screenshots/example/country_details_desktop.png?raw=true)

En bonus, tu pourras compléter le développement : 

- Permettre de renseigner un continent (à l'aide d'un select) lors de l'ajout d'un pays.
- [Manipuler le cache d'apollo](https://www.apollographql.com/docs/react/caching/cache-interaction/#using-graphql-queries) afin de ne pas avoir à déclancher un rechargement de toute la liste des pays juste après un ajout.

Dès que tu as fini, **penses à prendre un screenshot de toutes tes pages en mobile et en desktop et à placer ces derniers dans le dossier screenhots**, où tu trouveras [des examples visuels des resultats attendus](https://github.com/WildCodeSchool/checkpoint-front-wns/tree/main/screenshots/example).

## Critères d'évaluation : 

- (1pt) Apollo client est configuré et utilisable dans toutes les pages et composants. Le projet se lance, un header commun est présent sur toutes les pages.
- (1pt) La liste des pays est affichée.
- (1pt) La page détails affiche bien toutes les informations demandées.
- (1pt) On peut ajouter un pays (avec au minimum les infos "name", "code" et "emoji"). Lorsque le pays est ajouté, on le voit apparaitre dans la liste.
- (0.5pt) L'application est responsive.
- (0.5pt) Les états/erreurs de saisie ou de chargement de données sont gérées.

Bonus :

- (0.5pt) On peut spécifier un continent via un select lors de l'ajout d'un pays.
- (0.5pt) On peut filtrer la liste des pays par continent.
- (0,5pt) Lorsqu'un pays est ajouté, il est visible dans la liste sans rechargment de cette dernière depuis l'API. 
- (0.5pt) L'application développée obtient un score de 90 ou plus sur les critères "Accessibilité", "Bonnes pratiques" et "SEO" de Lighthouse (voir screenshot d'example).


