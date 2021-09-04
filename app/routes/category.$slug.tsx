import type { MetaFunction, LoaderFunction } from 'remix';
import { useRouteData } from 'remix';
import Markdown from 'react-markdown';

import { getCategory, GetCategory as RouteData } from '~/cms.server';
import { usePageColor } from '~/hooks';
import { Side } from '~/components/side';

export const handle = { bodyId: 'categorie' };
export const meta: MetaFunction = ({ data }: { data: RouteData }) => {
  return {
    title: `Klown | ${data.category?.title}`,
    description: data.category?.description ?? '',
  };
};
export const loader: LoaderFunction = async ({ params }) =>
  getCategory(params.slug);

export default function Category() {
  const data = useRouteData<RouteData>();

  usePageColor(data.category?.color);

  return (
    <main>
      <header>
        <h1>{data.category?.title}</h1>
        <p className="exp">{data.category?.pieces.length}</p>
      </header>
      <div className="content">
        <Markdown>{data.category?.content?.markdown ?? ''}</Markdown>
      </div>
      <Side
        categories={data.categories.filter(
          (category) => category.id == data.category?.id
        )}
      />
    </main>
  );
}
