const { seChevauchent } = require('../dist/regles')

test('détecte deux réservations qui se chevauchent', () => {
  // Préparer : créer les données nécessaires au test.
  const premier = {
    debut: new Date('2030-10-15T09:00:00Z'),
    fin: new Date('2030-10-15T10:00:00Z'),
  }

  // La seconde va de 9 h 30 à 10 h 30.
  // Les deux réservations ont donc une période commune de 9 h 30 à 10 h.
  const second = {
    debut: new Date('2030-10-15T09:30:00Z'),
    fin: new Date('2030-10-15T10:30:00Z'),
  }

  // Agir : appeler la fonction avec ces données et récupérer sa réponse.
  const resultat = seChevauchent(premier, second)

  // Vérifier : comparer la réponse au résultat attendu.
  // expect désigne la valeur à vérifier et toBe(true) exige le booléen true.
  expect(resultat).toBe(true)
})