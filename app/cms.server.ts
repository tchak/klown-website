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
  GetInfoDocument,
  GetInfoQuery,
  Stage,
  PieceType,
} from './queries';

const API_URL = String(process.env['API_URL']);
const API_TOKEN = String(process.env['API_TOKEN']);

export { PieceType };

export const getClient = () =>
  createClient({
    url: API_URL,
    exchanges: [fetchExchange],
    preferGetMethod: true,
    fetchOptions: {
      headers: {
        authorization: `Bearer ${API_TOKEN}`,
      },
    },
  });

export type GetPiece = GetPieceQuery & {
  piece: NonNullable<GetPieceQuery['piece']>;
};
export type GetCategory = GetCategoryQuery & {
  category: NonNullable<GetCategoryQuery['category']>;
};
export type GetCategories = GetCategoriesQuery;
export type GetHeader = GetHeaderQuery;
export type GetInfo = GetInfoQuery & {
  info: NonNullable<GetInfoQuery['info']>;
};

export async function getInfo(): Promise<GetInfoQuery> {
  const { data, error } = await getClient()
    .query(GetInfoDocument, { id: 'cky4ol9k8etyc0c98jgid4i7q' })
    .toPromise();

  if (error) {
    throw error;
  } else if (!data) {
    throw new Error('Not Found');
  }

  return data;
}

export async function getHeader(stage = Stage.Draft): Promise<GetHeaderQuery> {
  const { data, error } = await getClient()
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
  const { data, error } = await getClient()
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
  const { data, error } = await getClient()
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
  const { data, error } = await getClient()
    .query(GetPieceDocument, { slug, stage })
    .toPromise();

  if (error) {
    throw error;
  } else if (!data) {
    throw new Error('Not Found');
  }

  return data;
}
