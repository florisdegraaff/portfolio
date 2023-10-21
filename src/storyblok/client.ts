import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  headers: {
    Token: process.env.STORYBLOK_PREVIEW_TOKEN ?? ''
  },
  cache: new InMemoryCache(),
});