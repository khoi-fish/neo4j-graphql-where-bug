const UserType = `#graphql
  type User {
    id: ID!
    name: String
    cabinets: [Cabinet!]! @relationship(type: "HAS_CABINET", direction: OUT)
  }

  extend type User @authorization(
    validate: [
      { operations: [CREATE, DELETE], where: { jwt: { roles_INCLUDES: "admin" } } },
      { operations: [READ, UPDATE], where: { node: { id: "$jwt.sub" } } },
    ],
    filter: [
      {
        where: {
          node: {
            id: "$jwt.sub"
          }
        }
      }
    ]
  )
`

const CabinetType = `#graphql
  type Cabinet {
    id: ID! @id
    name: String!
    folders: [Folder!]! @relationship(type: "HAS_FOLDER", direction: OUT)
    categories: [Category!]! @relationship(type: "HAS_CATEGORY", direction: OUT)
    user: User! @relationship(type: "HAS_CABINET", direction: IN)
  }

  extend type Cabinet @authorization(
    filter: [
      {
        where: {
          node: {
            user: {
              id: "$jwt.sub"
            }
          }
        }
      }
    ]
  )
`

const CategoryType = `#graphql
  type Category {
    id: ID! @id
    name: String!
    files: [File!]! @relationship(type: "HAS_FILE", direction: OUT)
    folder: [Folder!]! @relationship(type: "HAS_CATEGORY", properties: "ColorType", direction: IN)
    cabinet: Cabinet! @relationship(type: "HAS_CATEGORY", direction: IN)
  }

  extend type Category @authorization(
    filter: [{ where: { node: { cabinet: { user: { id: "$jwt.sub" } } } } }]
  )
`

const FolderType = `#graphql
  type Folder {
    id: ID! @id
    name: String!
    categories: [Category!]!
      @relationship(
        type: "HAS_CATEGORY"
        properties: "ColorType"
        direction: OUT
      )
    files: [File!]! @relationship(type: "HAS_FILE", direction: OUT)
    cabinet: Cabinet! @relationship(type: "HAS_CABINET", direction: IN)
  }

  extend type Folder
    @authorization(filter: [{ where: { node: { cabinet: { user: { id: "$jwt.sub" } } } } }])

  type ColorType @relationshipProperties {
    color: String
  }
`

const FileType = `#graphql
  type File {
    id: ID! @unique
    name: String!
    category: Category @relationship(type: "HAS_FILE", direction: IN)
    folder: Folder! @relationship(type: "HAS_FILE", direction: IN)
  }

  extend type File @authorization(
    filter: [
      { 
        where: {
          node: {
            folder: {
              cabinet: {
                user: {
                  id: "$jwt.sub"
                }
              }
            }
          }
        }
      }
    ]
  )
`

export { UserType, CabinetType, CategoryType, FolderType, FileType }
