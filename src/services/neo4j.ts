import neo4j, { Driver } from 'neo4j-driver'

class Neo4JService {
  private static neo4jDriver: Driver

  static async init() {
    if (!this.neo4jDriver) {
      this.neo4jDriver = neo4j.driver(
        process.env.NEO4J_URL!,
        neo4j.auth.basic(process.env.NEO4J_USER!, process.env.NEO4J_PASS!),
      )
    }
  }

  static get driver() {
    if (!this.neo4jDriver) {
      this.init()
    }

    return this.neo4jDriver
  }
}

export { Neo4JService }
