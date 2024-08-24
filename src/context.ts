import { OGM } from '@neo4j/graphql-ogm'
import { ModelMap } from './generated/ogm-types'

type Neo4JAuthContext = {
  jwt: {
    sub: string
  }
  roles: string[]
}

type OGMType = {
  ogm: OGM<ModelMap>
}

type Context = Neo4JAuthContext & OGMType

const context = {}

export { Context, context }
