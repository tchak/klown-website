import type { MetaFunction, LoaderFunction } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';

import { getCategories, GetCategories as RouteData } from '~/cms.server';
import { useHoverPageColor, getHexColor } from '~/hooks';

export const handle = {
  body: () => {
    return {
      'data-cc': 'r',
      'data-bg': 'w',
      id: 'index',
    };
  },
};
export const meta: MetaFunction = () => ({
  title: 'Klown',
  'theme-color': getHexColor('w'),
});
export const loader: LoaderFunction = async () => getCategories();

export default function Index() {
  const data = useLoaderData<RouteData>();

  return (
    <main>
      <nav>
        <ul>
          {data.categories.map((category, i) => (
            <CategoryLink key={category.id} category={category} index={i + 1} />
          ))}
        </ul>
      </nav>
    </main>
  );
}

function CategoryLink({
  category,
  index,
}: {
  category: RouteData['categories'][0];
  index: number;
}) {
  const { hoverProps } = useHoverPageColor(category.color, index);

  return (
    <li>
      <Link {...hoverProps} to={`/category/${category.slug}`}>
        {category.title}
      </Link>
      <VideoWrapper video={category.backgroundVideoShort} />
    </li>
  );
}

type BackgroundVideo = RouteData['categories'][0]['backgroundVideoShort'];

function VideoWrapper({ video }: { video: BackgroundVideo }) {
  return (
    <div className="videoWrapper">
      {video && (
        <video muted autoPlay loop aria-hidden>
          <source src={video.url} type={String(video.mimeType)} />
        </video>
      )}
    </div>
  );
}
