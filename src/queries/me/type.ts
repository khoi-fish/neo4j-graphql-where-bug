const MeType = `#graphql
  """
  Test type that returns info about user
  """
  type Me {
    myId: ID!
    """
    Test type that returns info about user's role
    """
    roles: [String!]!
  }
`

const MeQueryType = `#graphql
  type Query {
    me: Me!
  }
`

export { MeQueryType, MeType }
