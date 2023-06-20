# IOT-Canit

Ce projet simule une salle de cinéma, avec une matrice représentant les niveaux de décibels de différentes parties de la salle. Il est divisé en deux parties principales : le Back-end (Serveur Node.js) et le Front-end (Client Angular).

##Back-end

Le Back-end est écrit en Node.js et utilise Express, Socket.IO et CORS. Il fournit une API qui génère une matrice de valeurs de décibels et peut émettre des événements lorsque le niveau de décibels dépasse un certain seuil.

##Installation et exécution

Assurez-vous que Node.js est installé sur votre machine.

Naviguez jusqu'au répertoire du Back-end en utilisant :

`cd backNode/`

Installez les dépendances nécessaires en utilisant la commande suivante :

`npm install`

Pour démarrer le serveur, utilisez la commande :

`node index.js`

Le serveur devrait maintenant être en écoute sur le port 3000.

##Utilisation de l'API

L'API fournit une seule route GET : /generateMatrix. Vous pouvez spécifier le nombre de lignes et de colonnes que vous souhaitez pour la matrice en passant des paramètres de requête. Par exemple, pour générer une matrice de 10 lignes et 20 colonnes, vous pouvez envoyer une requête à l'URL suivante : http://localhost:3000/generateMatrix?rows=10&columns=20.

Si vous ne spécifiez pas de paramètres de requête, la matrice générée aura par défaut 20 lignes et 10 colonnes.

##Front-End

Le front-end de ce projet est écrit en Angular. Il fournit une interface utilisateur pour interagir avec l'API de simulation de salle de cinéma fournie par le back-end.

##Installation et exécution

Assurez-vous que Node.js et Angular/cli soit installé

Naviguez jusqu'au répertoire du front-end en utilisant :

`cd frontAngular/`

Installez les dépendances nécessaires en utilisant la commande suivante :

`npm install `

Pour démarrer l'application, utilisez la commande :

`npm start`

L'application devrait maintenant être accessible à l'adresse http://localhost:4200 dans votre navigateur.

##Utilisation de l'interface utilisateur
Une fois l'application lancée, vous verrez une interface utilisateur avec un tableau de sièges de cinéma et un bouton "Générateur". Lorsque vous cliquez sur le bouton "Générateur", une simulation est lancée et la matrice des sièges est mise à jour pour refléter les niveaux de décibels dans différentes parties de la salle.

Les sièges sont représentés par des images, qui changent en fonction du niveau de décibels :

Un siège avec un niveau de décibels inférieur à 50 est considéré comme "bon" et est représenté par une image de siège vert.
Un siège avec un niveau de décibels compris entre 50 et 60 est considéré comme "en danger" et est représenté par une image de siège orange.
Un siège avec un niveau de décibels supérieur à 60 est considéré comme "en alerte" et est représenté par une image de siège rouge.
Si au moins un siège est "en alerte", une alerte est affichée à l'utilisateur après la fin de la simulation.