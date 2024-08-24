import { generate } from '@neo4j/graphql-ogm'
import path from 'path'
import { OgmService } from '../src/services/ogm'

const main = async () => {
  const ogm = await OgmService.ogm()

  const outFile = path.join(__dirname, '../src/generated/ogm-types.ts')

  await generate({
    ogm,
    outFile,
  })

  console.log('Types Generated')
}

main()
