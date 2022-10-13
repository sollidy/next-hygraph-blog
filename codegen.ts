import { CodegenConfig, generate } from '@graphql-codegen/cli'
import { loadEnvConfig } from '@next/env'
loadEnvConfig(process.cwd())

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GQL_API_URL,
  documents: ['src/**/*.{gql,graphql}'],
  generates: {
    'src/shared/graphql.request.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
    },
  },
}
export default config
