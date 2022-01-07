import type { LoaderFunction } from 'remix';
import { useLoaderData } from 'remix';

import { Markdown } from '~/components/markdown';
import { getInfo, GetInfo as RouteData } from '~/cms.server';
export const handle = {
  body: () => {
    return {
      'data-cc': 'k',
      'data-bg': 'w',
      id: 'info',
    };
  },
};
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
