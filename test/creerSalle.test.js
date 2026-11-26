const { describe, test, expect, beforeEach, afterEach } = require('@jest/globals')
const { BadRequestException } = require('@nestjs/common')
const { Api } = require('../dist/app')
const { creerApiSimulee } = require('./creerApiSimulee')

describe('Unitaire : appeler directement la méthode', () => {
  test('refuse un nom vide', async () => {
    const query = jest.fn()
    const controleur = new Api({ pool: { query } })
    const demande = { nom: '   ' }

    const resultat = controleur.creerSalle(demande)

    await expect(resultat).rejects.toThrow(BadRequestException)
    expect(query).not.toHaveBeenCalled()
  })
})

describe('Fonctionnel HTTP : utiliser la route comme un client', () => {
  let contexte

  beforeEach(async () => {
    contexte = await creerApiSimulee()
  })

  afterEach(async () => {
    if (contexte) await contexte.fermer()
    contexte = undefined
  })

  test('F1 : refuse une création avec un nom vide', async () => {
    // ARRANGE
    const demande = { nom: '   ' }

    // ACT : passe par HTTP au lieu d'appeler creerSalle directement
    const reponse = await contexte.api.post('/salles').send(demande)

    // ASSERT
    expect(reponse.status).toBe(400)
    expect(reponse.body.statusCode).toBe(400)
    expect(contexte.query).not.toHaveBeenCalled()
  })
})
