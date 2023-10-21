
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [{
    'https://gapi.storyblok.com/v1/api': {
      headers: {
        Token: 'BZ0NgSMSAdfmsEZIpqKk4Att',
      }
    },
  }],
  documents: 'src/storyblok/graphql',
  generates: {
    'src/storyblok/generated/sdk.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request']
    }
  }
};

export default config;
