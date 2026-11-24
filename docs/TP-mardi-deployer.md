# Mardi après-midi · Mettre l’API en ligne

**5 h en binôme**

Cet après-midi, vous mettez l’API de votre binôme en ligne.

On doit pouvoir appeler `/health` en HTTPS et retrouver les salles après un redémarrage.

Travaillez depuis la racine de votre dépôt.

Avant ce TP, vous devez avoir préparé le dépôt du binôme et son espace Render Hobby.

Si une étape manque, reprenez `preparer-render.md` dans le ZIP du lundi.

## 1. Refaire le démarrage local · 1 h

```bash
docker compose up --build -d --wait db api
docker compose ps
docker compose logs --tail=40 api
curl -i http://localhost:3000/health
```

Vous devez obtenir un statut 200 et le corps `{"status":"ok"}`.

Ouvrez le Dockerfile et retrouvez les instructions qui installent les dépendances, compilent TypeScript et lancent l’API.

Dans `compose.yaml`, repérez le nom utilisé par l’API pour joindre PostgreSQL.

Si l’API ne répond pas, lisez les logs avant de changer la configuration.

## 2. Vérifier le dépôt et lire la configuration · 30 min

```bash
git status --short
git remote -v
git fetch origin
git log -1 --oneline origin/main
git ls-tree --name-only origin/main -- Dockerfile package-lock.json render.yaml
cat render.yaml
```

Vérifiez que les trois fichiers sont sur la branche `main` de votre dépôt GitHub.

Dans `render.yaml`, repérez les deux lignes `plan: free`, la région commune et la référence utilisée pour renseigner `DATABASE_URL`.

Retrouvez aussi le chemin que Render interrogera pour vérifier la santé de l’API.

## 3. Déployer le Blueprint · 1 h 30

Dans Render, sélectionnez l’espace Hobby de votre binôme.

Ouvrez **New > Blueprint**, connectez votre dépôt GitHub et sélectionnez `main`.

Gardez `render.yaml` à la racine et donnez un nom à votre Blueprint, par exemple `reservations-b03`.

Avant de cliquer sur **Deploy Blueprint**, vérifiez que l’aperçu annonce deux ressources **Free** à Francfort, le service web Docker et la base PostgreSQL.

Si une ressource apparaît en payant ou si une base Free existe déjà dans cet espace, arrêtez-vous et montrez l’écran à l’enseignant.

Lancez le Blueprint une fois, puis suivez les logs de construction et de démarrage.

Render relie l’API à PostgreSQL avec l’URL interne et les identifiants générés pour votre base.

Dans **Blueprint > Settings**, mettez **Auto Sync** sur **No** après la première synchronisation.

Du côté du service web, vérifiez que **Auto-Deploy** est sur **Off**.

Jeudi, vous changerez l’auto-déploiement du service depuis son tableau de bord.

Utilisez uniquement des données fictives, car les routes de cette API de cours sont publiques.

[Déployer un Blueprint sur Render](https://render.com/docs/infrastructure-as-code#setup)

## 4. Vérifier depuis Internet · 2 h

Remplacez l’URL d’exemple par celle de votre service.

Si le service Free s’est mis en veille, laissez-lui le temps de redémarrer et refaites la requête.

```bash
BASE=https://votre-service.onrender.com
curl -i "$BASE/health"
curl -i "$BASE/salles" \
  -H 'Content-Type: application/json' \
  -d '{"nom":"Salle 204"}'
curl -i "$BASE/salles"
```

Notez l’identifiant de la salle créée.

Dans Render, le SHA est l’identifiant du commit dont le code tourne en ligne.

Relancez le service depuis Render et vérifiez que la même salle apparaît toujours.

Dans les commandes suivantes, remplacez `1` par l’identifiant de votre salle.

```bash
SALLE=1
curl -i "$BASE/reservations" \
  -H 'Content-Type: application/json' \
  -d "{\"salleId\":$SALLE,\"debut\":\"2030-10-15T09:00:00Z\",\"fin\":\"2030-10-15T10:00:00Z\"}"
```

Vous devez obtenir 201 au premier essai.

Rejouez la même commande pour vérifier que l’API renvoie 409.

Si l’API ne répond plus, regardez quel déploiement est actif et vérifiez la connexion à la base dans les logs.

## Ce que vous rendez

Déposez un court compte rendu par binôme.

- L’URL HTTPS et le SHA affiché par Render.
- La réponse de `/health` et une preuve que la salle est encore là après le redémarrage.
- Les statuts obtenus au premier et au deuxième essai de réservation.
- Le schéma du lundi mis à jour, avec le proxy, l’API et PostgreSQL.
- Un extrait de log de démarrage, sans identifiants ni URL de connexion.
