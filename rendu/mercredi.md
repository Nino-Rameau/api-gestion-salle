# Les types de tests
 
Exemples sur une application de gestion de stock de magasins.
 
## Tests unitaires
 
Tests bas niveau des méthodes, fonctions individuelles et composants. Tests très rapides à exécuter.
 
Exemple : vérifier que la fonction `vendre(10, 3)` renvoie bien 7.
 
## Tests d'intégration
 
Tests des modules et des services utilisés par l'application (ex : l'interrogation d'une db).
 
Exemple : vérifier qu'un transfert de stock entre deux magasins est bien enregistré en base.
 
## Tests fonctionnels
 
Vérifient uniquement la sortie des actions et non les états intermédiaires (ex : le retour d'une requête d'interrogation de db).
 
Exemple : vérifier que la route `/magasins/Paris/stock` renvoie le bon stock.
 
## Tests de bout en bout
 
Reproduisent le comportement d'un utilisateur.
 
Exemple : un vendeur se connecte, enregistre une vente et voit le stock diminuer.
 
## Tests d'acceptation
 
Tests formels exécutés pour vérifier si le projet répond à ses exigences métier. Une simulation du parcours complet de l'utilisateur.
 
Exemple : vérifier qu'une alerte est envoyée quand un produit passe sous 5 unités, comme demandé par le client.
 
## Tests de performance
 
Évaluent les performances d'un projet sous une charge de travail spécifique.
 
Exemple : simuler 300 caisses qui enregistrent des ventes en même temps pendant les soldes.
 
## Smoke tests
 
Tests simples qui vérifient le fonctionnement de base d'une app. Conçus rapidement pour donner une assurance que les caractéristiques principales du projet fonctionnent comme prévu.
 
Exemple : après une mise en production, vérifier que le site et l'API répondent.