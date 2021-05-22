import 'dotenv/config';
import { createClient, fetchExchange } from '@urql/core';

import {
  GetHeaderDocument,
  GetCategoriesDocument,
  GetCategoryDocument,
  GetPieceDocument,
  GetHeaderQuery,
  GetCategoriesQuery,
  GetCategoryQuery,
  GetPieceQuery,
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
  GetPieceQuery as GetPiece,
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

export async function getPiece(slug: string): Promise<GetPieceQuery> {
  const { data, error } = await client
    .query(GetPieceDocument, { slug })
    .toPromise();

  if (error) {
    throw error;
  } else if (!data) {
    throw new Error('Not Found');
  }

  return data;
}
