import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'

import { MeResolver } from '../queries/me/resolver'
import { MeType, MeQueryType } from '../queries/me/type'
import { globalAuthentication } from './global'
import { JwtType } from '../types/JWT'
import {
  CabinetType,
  CategoryType,
  FileType,
  FolderType,
  UserType,
} from '../types'

const typeDefs = [
  CabinetType,
  CategoryType,
  FileType,
  FolderType,
  JwtType,
  MeType,
  MeQueryType,
  UserType,
]

const resolvers = [MeResolver]

const mergedTypeDefs = mergeTypeDefs([globalAuthentication, ...typeDefs])
const mergedResolvers = mergeResolvers(resolvers)
const ogmTypeDefs = mergeTypeDefs(typeDefs)

export { mergedResolvers, mergedTypeDefs, ogmTypeDefs }
