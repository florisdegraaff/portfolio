import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated/sdk';

const getStoryblokSdk = () => {
  const Token = process.env.STORYBLOK_PREVIEW_TOKEN
  if (!Token) return;

  const client = new GraphQLClient('https://gapi.storyblok.com/v1/api', {
    headers: {
      Token
    }
  })

  const sdk = getSdk(client)
  return sdk
}

export const storyblokSdk = getStoryblokSdk()