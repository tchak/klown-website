import type { MetaFunction, LoaderFunction } from 'remix';
import { useRouteData } from 'remix';
import Markdown from 'react-markdown';

import { getPiece, GetPiece as RouteData } from '../cms.server';
import { usePageColor } from '../hooks';

export const handle = { bodyId: 'piece' };
export const meta: MetaFunction = ({ data }: { data: RouteData }) => {
  return {
    title: `Klown | ${data.piece?.category?.title} | ${data.piece?.title}`,
    description: data.piece?.description ?? '',
  };
};
export const loader: LoaderFunction = async ({ params }) =>
  getPiece(params.slug);

export default function Category() {
  const data = useRouteData<RouteData>();

  usePageColor(data.piece?.color);

  return (
    <main>
      <section id="carrousel"></section>
      <header id="details">
        <p>{data.piece?.category?.title}</p>
        <h1>{data.piece?.title}</h1>
        <ul className="secondary">
          <li>Detail</li>
          <li>Detail</li>
        </ul>
      </header>
      <div id="content">
        <Markdown>{data.piece?.content?.markdown ?? ''}</Markdown>
      </div>
      <Side />
    </main>
  );
}

function Side() {
  return null;
}
