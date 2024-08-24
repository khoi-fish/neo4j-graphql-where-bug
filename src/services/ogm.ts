import { OGM } from '@neo4j/graphql-ogm'
import { ModelMap } from '../generated/ogm-types'
import { ogmTypeDefs } from '../schema'
import { Neo4JService } from './neo4j'

class OgmService {
  private static privateOgm: OGM<ModelMap>

  static async init() {
    await Neo4JService.init()
    const { driver } = Neo4JService
    this.privateOgm = new OGM<ModelMap>({ typeDefs: ogmTypeDefs, driver })
    await this.privateOgm.init()
  }

  static async ogm() {
    if (!this.privateOgm) {
      try {
        await this.init()
      } catch (e) {
        console.log(`Encountered error: ${e}`)
      }
      return this.privateOgm
    }

    return Promise.resolve(this.privateOgm)
  }
}

export { OgmService }
