import 'dotenv/config';
import { createClient, fetchExchange } from '@urql/core';

import {
  GetHeaderDocument,
  GetCategoriesDocument,
  GetCategoryDocument,
  GetHeaderQuery,
  GetCategoriesQuery,
  GetCategoryQuery,
} from './graphql-operations';

const API_URL = process.env['API_URL']!;
const API_TOKEN = process.env['API_TOKEN'];

export const client = createClient({
  url: API_URL,
  exchanges: [fetchExchange],
  fetchOptions: {
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
    },
  },
});

export {
  GetHeaderQuery as GetHeader,
  GetCategoriesQuery as GetCategories,
  GetCategoryQuery as GetCategory,
};

export async function getHeader(): Promise<GetHeaderQuery> {
  const { data, error } = await client.query(GetHeaderDocument).toPromise();

  if (error) {
    throw error;
  } else if (!data) {
    throw new Error('Not Found');
  }

  return data;
}

export async function getCategories(): Promise<GetCategoriesQuery> {
  const { data, error } = await client.query(GetCategoriesDocument).toPromise();

  if (error) {
    throw error;
  } else if (!data) {
    throw new Error('Not Found');
  }

  return data;
}

export async function getCategory(slug: string): Promise<GetCategoryQuery> {
  const { data, error } = await client
    .query(GetCategoryDocument, { slug })
    .toPromise();

  if (error) {
    throw error;
  } else if (!data) {
    throw new Error('Not Found');
  }

  return data;
}
