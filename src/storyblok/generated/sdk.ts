import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BlockScalar: { input: any; output: any; }
  ISO8601DateTime: { input: any; output: any; }
  JsonScalar: { input: any; output: any; }
};

export type Alternate = {
  __typename?: 'Alternate';
  fullSlug: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isFolder?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['Int']['output']>;
  published: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
};

export type ContentItem = {
  __typename?: 'ContentItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<Scalars['JsonScalar']['output']>;
  content_string?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<ContentItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Datasource = {
  __typename?: 'Datasource';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type DatasourceEntries = {
  __typename?: 'DatasourceEntries';
  items: Array<DatasourceEntry>;
  total: Scalars['Int']['output'];
};

export type DatasourceEntry = {
  __typename?: 'DatasourceEntry';
  dimensionValue?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Datasources = {
  __typename?: 'Datasources';
  items: Array<Datasource>;
};

export type FilterQueryOperations = {
  /** Must match all values of given array */
  all_in_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Greater than date (Exmples: 2019-03-03 or 2020-03-03T03:03:03) */
  gt_date?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** Greater than float value */
  gt_float?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than integer value */
  gt_int?: InputMaybe<Scalars['Int']['input']>;
  /** Matches exactly one value */
  in?: InputMaybe<Scalars['String']['input']>;
  /** Matches any value of given array */
  in_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches exactly one integer value */
  in_int?: InputMaybe<Scalars['Int']['input']>;
  /** Matches exactly one value with a wildcard search using * */
  like?: InputMaybe<Scalars['String']['input']>;
  /** Less than date (Format: 2019-03-03 or 2020-03-03T03:03:03) */
  lt_date?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** Less than float value */
  lt_float?: InputMaybe<Scalars['Float']['input']>;
  /** Less than integer value */
  lt_int?: InputMaybe<Scalars['Int']['input']>;
  /** Matches all without the given value */
  not_in?: InputMaybe<Scalars['String']['input']>;
  /** Matches all without the given value */
  not_like?: InputMaybe<Scalars['String']['input']>;
};

export type LinkEntries = {
  __typename?: 'LinkEntries';
  items: Array<LinkEntry>;
};

export type LinkEntry = {
  __typename?: 'LinkEntry';
  id?: Maybe<Scalars['Int']['output']>;
  isFolder?: Maybe<Scalars['Boolean']['output']>;
  isStartpage?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type NavigationComponent = {
  __typename?: 'NavigationComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  links?: Maybe<Scalars['BlockScalar']['output']>;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<NavigationComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type NavigationItems = {
  __typename?: 'NavigationItems';
  items?: Maybe<Array<Maybe<NavigationItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PageComponent = {
  __typename?: 'PageComponent';
  _editable?: Maybe<Scalars['String']['output']>;
  _uid?: Maybe<Scalars['String']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['JsonScalar']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PageFilterQuery = {
  title?: InputMaybe<FilterQueryOperations>;
};

export type PageItem = {
  __typename?: 'PageItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<PageComponent>;
  created_at?: Maybe<Scalars['String']['output']>;
  default_full_slug?: Maybe<Scalars['String']['output']>;
  first_published_at?: Maybe<Scalars['String']['output']>;
  full_slug?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_startpage?: Maybe<Scalars['Boolean']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  meta_data?: Maybe<Scalars['JsonScalar']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  published_at?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort_by_date?: Maybe<Scalars['String']['output']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type PageItems = {
  __typename?: 'PageItems';
  items?: Maybe<Array<Maybe<PageItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type QueryType = {
  __typename?: 'QueryType';
  ContentNode?: Maybe<ContentItem>;
  ContentNodes?: Maybe<ContentItems>;
  DatasourceEntries?: Maybe<DatasourceEntries>;
  Datasources?: Maybe<Datasources>;
  Links?: Maybe<LinkEntries>;
  NavigationItem?: Maybe<NavigationItem>;
  NavigationItems?: Maybe<NavigationItems>;
  PageItem?: Maybe<PageItem>;
  PageItems?: Maybe<PageItems>;
  RateLimit?: Maybe<RateLimit>;
  Space?: Maybe<Space>;
  Tags?: Maybe<Tags>;
};


export type QueryTypeContentNodeArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeContentNodesArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeDatasourceEntriesArgs = {
  datasource?: InputMaybe<Scalars['String']['input']>;
  dimension?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTypeDatasourcesArgs = {
  by_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeLinksArgs = {
  paginated?: InputMaybe<Scalars['Boolean']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeNavigationItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeNavigationItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypePageItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypePageItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>;
  by_uuids?: InputMaybe<Scalars['String']['input']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>;
  excluding_fields?: InputMaybe<Scalars['String']['input']>;
  excluding_ids?: InputMaybe<Scalars['String']['input']>;
  excluding_slugs?: InputMaybe<Scalars['String']['input']>;
  fallback_lang?: InputMaybe<Scalars['String']['input']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>;
  filter_query_v2?: InputMaybe<PageFilterQuery>;
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>;
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>;
  from_release?: InputMaybe<Scalars['String']['input']>;
  is_startpage?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  published_at_gt?: InputMaybe<Scalars['String']['input']>;
  published_at_lt?: InputMaybe<Scalars['String']['input']>;
  resolve_links?: InputMaybe<Scalars['String']['input']>;
  resolve_relations?: InputMaybe<Scalars['String']['input']>;
  search_term?: InputMaybe<Scalars['String']['input']>;
  sort_by?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
  with_tag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypeTagsArgs = {
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type RateLimit = {
  __typename?: 'RateLimit';
  maxCost: Scalars['Int']['output'];
};

export type Space = {
  __typename?: 'Space';
  domain: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  languageCodes: Array<Maybe<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String']['output'];
  taggingsCount: Scalars['Int']['output'];
};

export type Tags = {
  __typename?: 'Tags';
  items: Array<Tag>;
};

export type TranslatedSlug = {
  __typename?: 'TranslatedSlug';
  lang: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
};

export type NavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type NavigationQuery = { __typename?: 'QueryType', NavigationItem?: { __typename?: 'NavigationItem', content?: { __typename?: 'NavigationComponent', links?: any | null } | null } | null };

export type PageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PageQuery = { __typename?: 'QueryType', ContentNode?: { __typename?: 'ContentItem', content?: any | null, is_startpage?: boolean | null } | null };


export const NavigationDocument = gql`
    query Navigation {
  NavigationItem(id: "settings/navigation") {
    content {
      links
    }
  }
}
    `;
export const PageDocument = gql`
    query Page($id: ID!) {
  ContentNode(id: $id) {
    content
    is_startpage
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Navigation(variables?: NavigationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<NavigationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NavigationQuery>(NavigationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Navigation', 'query');
    },
    Page(variables: PageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageQuery>(PageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Page', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;