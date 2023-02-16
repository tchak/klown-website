import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { Markdown } from '~/components/markdown';
import { getInfo, GetInfo as RouteData } from '~/cms.server';
import { getHexColor } from '~/hooks';
export const handle = {
  body: () => {
    return {
      'data-cc': 'k',
      'data-bg': 'w',
      id: 'info',
    };
  },
};
export const meta: MetaFunction = ({ data }: { data: RouteData }) => ({
  title: 'Klown | Information',
  description: (data.info.presentation?.text ?? '').replace(/\\n/g, ' '),
  'theme-color': getHexColor('w'),
});
export const loader: LoaderFunction = async () => getInfo();

export default function Info() {
  const data = useLoaderData<RouteData>();

  return (
    <main>
      <h1 className="sr-only">Information</h1>

      <div id="texte_presentation">
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
          {data.info.presentation?.markdown ?? ''}
        </Markdown>
      </div>

      <ul className="details">
        <li></li>
      </ul>
    </main>
  );
}
