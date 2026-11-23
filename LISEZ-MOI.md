# Lundi en autonomie · Salle 204

Avant de commencer, vérifiez que vous avez Git, Node.js 22 avec npm, Docker avec Compose et un éditeur de code.

Il vous faut aussi un terminal avec `curl`.

Lancez `node -v` pour vérifier que vous avez au moins la version 22.13 dans la série 22.

Lancez `docker info` dans le terminal où vous ferez le TP.

Si vous utilisez WSL sous Windows, activez l’intégration de votre distribution dans Docker Desktop.

## Démarrer et essayer l’API

Ouvrez le dossier `projet-depart` et suivez son [README](projet-depart/README.md) pour lancer l’API et PostgreSQL.

Ouvrez `/health` et gardez la réponse.

Créez **Salle 204**, puis réservez-la de 9 h à 10 h.

Essayez de la réserver de nouveau à 9 h 30, puis à 10 h pile.

Pour chaque essai, notez le statut HTTP et ce que vous avez observé.

Repérez dans le code où l’API traite la réservation et où les données sont enregistrées.

Faites un schéma simple du trajet de la requête, du client jusqu’à PostgreSQL.

Indiquez où arrivera la connexion HTTPS quand l’API sera en ligne.

## Préparer mardi en binôme

Suivez la [fiche GitHub et Render](preparer-render.md) pour créer votre dépôt et préparer votre espace Hobby.

Vérifiez que votre dépôt apparaît dans Render et arrêtez-vous à cette étape.

On lancera le déploiement ensemble mardi.

## À garder pour mardi

- La commande de démarrage et la réponse de `/health`.
- Les résultats de vos essais à 9 h 30 et à 10 h.
- Votre schéma et cinq cas de test avec le résultat que vous attendez pour chacun.
