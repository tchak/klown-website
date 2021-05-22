import type { MetaFunction, LoaderFunction } from 'remix';
import { useRouteData } from 'remix';
import Markdown from 'react-markdown';

import { getPiece, GetPiece as RouteData } from '../cms.server';

export const handle = { bodyId: 'piece' };
export const meta: MetaFunction = ({ data }: { data: RouteData }) => {
  return {
    title: data.piece?.title!,
    description: data.piece?.description ?? '',
  };
};
export const loader: LoaderFunction = async ({ params }) =>
  getPiece(params.slug);

export default function Category() {
  const data = useRouteData<RouteData>();

  return (
    <main>
      <header>
        <h1>{data.piece?.title}</h1>
      </header>
      <div className="content">
        <Markdown>{data.piece?.content?.markdown ?? ''}</Markdown>
      </div>
      <Side />
    </main>
  );
}

function Side() {
  return null;
}
