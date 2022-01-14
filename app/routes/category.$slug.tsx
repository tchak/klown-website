import type { MetaFunction, LoaderFunction } from 'remix';
import { useLoaderData } from 'remix';
import { DynamicLinksFunction } from 'remix-utils';

import { Markdown } from '~/components/markdown';
import { getCategory, GetCategory as RouteData } from '~/cms.server';
import { parseColor, getHexColor } from '~/hooks';
import { Side } from '~/components/side';

export const meta: MetaFunction = ({ data }: { data: RouteData }) => {
  const { bg } = parseColor(data.category.color);
  return {
    title: `Klown | ${data.category?.title}`,
    description: data.category?.description ?? '',
    'theme-color': getHexColor(bg),
  };
};
const dynamicLinks: DynamicLinksFunction<RouteData> = ({ data }) => {
  const { bg } = parseColor(data.category.color);
  return [
    {
      rel: 'icon',
      href: `/favicon-${bg}.ico`,
    },
    {
      rel: 'icon',
      href: `/favicon-${bg}.svg`,
    },
    {
      rel: 'apple-touch-icon',
      href: `/apple-touch-icon-${bg}.png`,
    },
  ];
};
export const handle = {
  dynamicLinks,
  body: ({ data }: { data: RouteData }) => {
    const { cc, bg } = parseColor(data.category.color);
    return {
      'data-cc': cc,
      'data-bg': bg,
      'data-categorie': 1,
      id: 'categorie',
    };
  },
};

export const loader: LoaderFunction = async ({ params }) =>
  getCategory(String(params.slug));

export default function Category() {
  const data = useLoaderData<RouteData>();

  return (
    <main>
      <header>
        <h1>{data.category?.title}</h1>
        <p className="exp">{data.category?.pieces.length} pièces</p>
      </header>
      <div className="content">
        <Markdown
          rehypeReactOptions={{
            components: {
              img: (props: any) => (
                <figure>
                  <img {...props} />
                </figure>
              ),
            },
          }}
        >
          {data.category?.content?.markdown ?? ''}
        </Markdown>
      </div>
      <Side
        categories={data.categories.filter(
          (category) => category.id == data.category?.id
        )}
      />
    </main>
  );
}
