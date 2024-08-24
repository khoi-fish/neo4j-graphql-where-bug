import { Neo4jGraphQL } from '@neo4j/graphql'
import express, { json } from 'express'
import http from 'http'
import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4'

import { mergedResolvers, mergedTypeDefs } from './schema'
import { context } from './context'
import { Neo4JService } from './services/neo4j'
import { OgmService } from './services/ogm'

const main = async () => {
  await Neo4JService.init()
  await OgmService.init()

  const { driver } = Neo4JService
  const ogm = await OgmService.ogm()

  const neoSchema = new Neo4jGraphQL({
    typeDefs: mergedTypeDefs,
    resolvers: mergedResolvers,
    driver,
  })

  try {
    await neoSchema.getSchema()
    await neoSchema.assertIndexesAndConstraints({ options: { create: true } })

    const app = express()
    const httpServer = http.createServer(app)

    const server = new ApolloServer({
      schema: await neoSchema.getSchema(),
      introspection: process.env.ENVIRONMENT === 'local' ?? false,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    })

    await server.start()

    app.use(
      '/graphql',
      json(),
      expressMiddleware(server, {
        context: async (ctx) => {
          if (
            (ctx.req.headers['x-introspection'] ||
              ctx.req.body.operationName === 'IntrospectionQuery') &&
            process.env.ENVIRONMENT === 'local'
          ) {
            return { ...ctx, ...context, ogm }
          }

          const jwt = {
            iat: 1724442925,
            exp: 9724445955,
            sub: '4252a2b0-9492-4bef-8a94-fa20c97e7f71',
            tId: 'public',
            sessionHandle: 'a9021a8e-0d39-4639-8cb4-276e1724ba69',
            'st-ev': { v: true, t: 1724442925149 },
            'st-role': { v: ['admin'], t: 1724172602771 },
            'st-perm': { v: [], t: 1724172602871 },
          }

          return { ...ctx, ...context, ogm, jwt }
        },
      }),
    )

    app.listen(4000, () => {
      console.log('🚀  Server ready at: localhost:4000/graphql')
    })
  } catch (e) {
    if (e instanceof Error) {
      console.log(`Connection error\n${e}\nCause: ${e.cause}`)
    } else {
      console.log(`Server ran into an unknown error: ${e}`)
    }
    await driver.close()
  }
}

main()
