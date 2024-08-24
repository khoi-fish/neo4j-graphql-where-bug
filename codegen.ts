import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'http://localhost:4000/graphql': {
      headers: {
        'X-Introspection': '1',
      },
    },
  },
  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        contextType: '../context#Context',
      },
    },
  },
}

export default config
