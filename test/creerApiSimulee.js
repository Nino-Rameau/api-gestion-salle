require('reflect-metadata')

const { Test } = require('@nestjs/testing')
const request = require('supertest')
const { AppModule } = require('../dist/app')
const { Database } = require('../dist/database')

// Démarre l'API Nest en mémoire avec une fausse base : chaque requête SQL passe par `query`.
async function creerApiSimulee() {
  const query = jest.fn().mockRejectedValue(new Error('Requête SQL non préparée dans le test'))
  const moduleTest = await Test.createTestingModule({ imports: [AppModule] })
    .overrideProvider(Database)
    .useValue({ pool: { query } })
    .compile()

  const app = moduleTest.createNestApplication()
  app.useLogger(false)

  try {
    await app.init()
    return { api: request(app.getHttpServer()), query, fermer: () => app.close() }
  } catch (erreur) {
    await app.close()
    throw erreur
  }
}

module.exports = { creerApiSimulee }
