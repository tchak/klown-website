import type { MetaFunction, LoaderFunction } from 'remix';
import { useRouteData } from 'remix';
import Markdown from 'react-markdown';

import { getCategory, GetCategory as RouteData } from '../cms.server';

export const handle = { bodyId: 'categorie' };
export const meta: MetaFunction = ({ data }: { data: RouteData }) => {
  return { title: data.category?.title! };
};
export const loader: LoaderFunction = async ({ params }) =>
  getCategory(params.slug);

export default function Category() {
  const data = useRouteData<RouteData>();
  return (
    <main>
      <header>
        <h1>{data.category?.title}</h1>
        <p className="exp">{data.category?.projects.length}</p>
      </header>
      <div className="content">
        <Markdown>{data.category?.description?.markdown ?? ''}</Markdown>
      </div>
      <Side />
    </main>
  );
}

function Side() {
  return null;
}
