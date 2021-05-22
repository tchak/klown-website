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
  Stage,
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

export async function getHeader(stage = Stage.Draft): Promise<GetHeaderQuery> {
  const { data, error } = await client
    .query(GetHeaderDocument, { stage })
    .toPromise();

  if (error) {
    throw error;
  } else if (!data) {
    throw new Error('Not Found');
  }

  return data;
}

export async function getCategories(
  stage = Stage.Draft
): Promise<GetCategoriesQuery> {
  const { data, error } = await client
    .query(GetCategoriesDocument, { stage })
    .toPromise();

  if (error) {
    throw error;
  } else if (!data) {
    throw new Error('Not Found');
  }

  return data;
}

export async function getCategory(
  slug: string,
  stage = Stage.Draft
): Promise<GetCategoryQuery> {
  const { data, error } = await client
    .query(GetCategoryDocument, { slug, stage })
    .toPromise();

  if (error) {
    throw error;
  } else if (!data) {
    throw new Error('Not Found');
  }

  return data;
}

export async function getPiece(
  slug: string,
  stage = Stage.Draft
): Promise<GetPieceQuery> {
  const { data, error } = await client
    .query(GetPieceDocument, { slug, stage })
    .toPromise();

  if (error) {
    throw error;
  } else if (!data) {
    throw new Error('Not Found');
  }

  return data;
}
