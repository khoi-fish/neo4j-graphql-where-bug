const JwtType = `#graphql
  type JWT @jwt {
    roles: [String!]! @jwtClaim(path: "st-role.v")
  }
`

export { JwtType }
