const { seChevauchent } = require('../dist/regles')

// Crée un créneau le 15 octobre 2030 à partir de deux heures UTC (ex. '09:00').
const creneau = (debut, fin) => ({
  debut: new Date(`2030-10-15T${debut}:00Z`),
  fin: new Date(`2030-10-15T${fin}:00Z`),
})

test('deux créneaux qui se chevauchent partiellement', () => {
  const premier = creneau('09:00', '10:00')
  const second = creneau('09:30', '10:30')

  expect(seChevauchent(premier, second)).toBe(true)
})

test('deux créneaux séparés ne se chevauchent pas', () => {
  const premier = creneau('09:00', '10:00')
  const second = creneau('11:00', '12:00')

  expect(seChevauchent(premier, second)).toBe(false)
})

test('un créneau qui commence exactement quand l’autre finit ne chevauche pas', () => {
  const premier = creneau('09:00', '10:00')
  const second = creneau('10:00', '11:00')

  expect(seChevauchent(premier, second)).toBe(false)
})

test('un créneau entièrement inclus dans l’autre se chevauche', () => {
  const premier = creneau('09:00', '12:00')
  const second = creneau('10:00', '11:00')

  expect(seChevauchent(premier, second)).toBe(true)
})

test('deux créneaux identiques se chevauchent', () => {
  const premier = creneau('09:00', '10:00')
  const second = creneau('09:00', '10:00')

  expect(seChevauchent(premier, second)).toBe(true)
})