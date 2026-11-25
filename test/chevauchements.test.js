const { seChevauchent } = require('../dist/regles')

// Crée un créneau le 15 octobre 2030 à partir de deux heures UTC (ex. '09:00').
const creneau = (debut, fin) => ({
  debut: new Date(`2030-10-15T${debut}:00Z`),
  fin: new Date(`2030-10-15T${fin}:00Z`),
})

test('deux créneaux qui se chevauchent partiellement', () => {
  // 9 h – 10 h et 9 h 30 – 10 h 30 : période commune de 9 h 30 à 10 h.
  const premier = creneau('09:00', '10:00')
  const second = creneau('09:30', '10:30')

  expect(seChevauchent(premier, second)).toBe(true)
})

test('deux créneaux séparés ne se chevauchent pas', () => {
  // 9 h – 10 h et 11 h – 12 h : une heure d'écart entre les deux.
  const premier = creneau('09:00', '10:00')
  const second = creneau('11:00', '12:00')

  expect(seChevauchent(premier, second)).toBe(false)
})

test('un créneau qui commence exactement quand l’autre finit ne chevauche pas', () => {
  // 9 h – 10 h et 10 h – 11 h : ils se touchent à 10 h sans se chevaucher.
  const premier = creneau('09:00', '10:00')
  const second = creneau('10:00', '11:00')

  expect(seChevauchent(premier, second)).toBe(false)
})

test('un créneau entièrement inclus dans l’autre se chevauche', () => {
  // 10 h – 11 h est entièrement compris dans 9 h – 12 h.
  const premier = creneau('09:00', '12:00')
  const second = creneau('10:00', '11:00')

  expect(seChevauchent(premier, second)).toBe(true)
})

test('deux créneaux identiques se chevauchent', () => {
  // Même début et même fin.
  const premier = creneau('09:00', '10:00')
  const second = creneau('09:00', '10:00')

  expect(seChevauchent(premier, second)).toBe(true)
})