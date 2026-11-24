# Préparer GitHub et Render en binôme

Lundi, préparez votre dépôt GitHub et votre espace Render Hobby à deux.

Mardi, vous en aurez besoin pour le premier déploiement.

## 1. Mettre le projet sur GitHub

Un de vous crée un dépôt GitHub vide et invite l’autre comme collaborateur.

Si votre binôme a déjà un dépôt, gardez-le et vérifiez que vous avez tous les deux accès.

Si `render.yaml` manque dans ce dépôt, ajoutez celui de la nouvelle archive et poussez-le sur `main`.

Sur un compte GitHub Free, choisissez un dépôt public si vous devez protéger `main` jeudi.

Si les règles de l’école imposent un dépôt privé, demandez à l’enseignant quel dépôt utiliser.

Si vous partez d’un dépôt vide, un seul membre du binôme lance les commandes suivantes depuis le dossier `projet-depart`.

Remplacez l’URL d’exemple par celle de votre dépôt.

```bash
git init -b main
git add .
git diff --cached --name-only
```

Vérifiez que `.env.example` est dans la liste et qu’aucun fichier de configuration contenant des identifiants réels n’y figure.

Après cette vérification, lancez ces commandes.

```bash
git commit -m "Ajouter le projet de réservation"
git remote add origin https://github.com/VOTRE-COMPTE/VOTRE-DEPOT.git
git push -u origin main
```

Une fois le projet sur GitHub, l’autre membre peut le cloner sur son PC.

Sur GitHub, ouvrez la branche `main` et vérifiez que `Dockerfile`, `package-lock.json` et `render.yaml` sont visibles à la racine.

[Protéger une branche sur GitHub](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)

## 2. Préparer l’espace Render

Choisissez la personne du binôme qui utilisera Render avec son propre compte.

Le plan **Hobby** prévoit un seul accès.

Vous travaillez tous les deux sur GitHub.

Pour Render, vous faites les manipulations ensemble depuis le poste de la personne qui a créé l’espace.

Ouvrez [le tableau de bord Render](https://dashboard.render.com) et sélectionnez un espace **Hobby** réservé à votre binôme, sans base PostgreSQL Free déjà active.

Vous pouvez utiliser l’espace Hobby créé avec votre compte s’il est disponible pour le cours.

Si besoin, ouvrez le sélecteur d’espaces, choisissez **New Workspace** et sélectionnez **Hobby**, avec un nom comme `cloud-b03`.

Dans le bon espace, ouvrez **New > Blueprint**, connectez GitHub si Render le demande et vérifiez que le dépôt du binôme apparaît.

Si le dépôt privé n’apparaît pas, vérifiez d’abord que l’application Render a accès à ce dépôt sur GitHub.

Dans les réglages de votre compte Render, ouvrez **Account Security > Git Deployment Credentials** et ajoutez votre compte GitHub si besoin.

Revenez à **New > Blueprint** et vérifiez que le dépôt du binôme est proposé.

[Connecter GitHub à Render](https://render.com/docs/git-provider)

Arrêtez-vous avant **Deploy Blueprint**.

Le mardi, le fichier `render.yaml` créera le service web et la base PostgreSQL ensemble.

Chaque espace ne peut avoir qu’une base PostgreSQL Free active.

[Espaces et accès sur Render](https://render.com/docs/team-members) · [Limites de PostgreSQL Free](https://render.com/docs/free#free-postgres)

## À vérifier avant mardi

- [ ] On peut tous les deux ouvrir le dépôt GitHub.
- [ ] Les trois fichiers sont visibles à la racine de `main`.
- [ ] Notre espace Render est en Hobby et le dépôt apparaît dans l’écran Blueprint.
- [ ] On sait qui ouvrira le tableau de bord mardi et aucune ressource du TP n’a encore été créée.

Pour ce cours, gardez l’offre Hobby et les ressources Free.

Si Render demande un forfait payant, un moyen de paiement ou si le dépôt n’apparaît pas, signalez-le à l’enseignant avant le TP.
