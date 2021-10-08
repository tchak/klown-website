import type { MetaFunction, LoaderFunction } from 'remix';
import { useRouteData, Link } from 'remix';

import { getCategories, GetCategories as RouteData } from '~/cms.server';
import { usePageColor, useHoverPageColor } from '~/hooks';

export const handle = { bodyId: 'index' };
export const meta: MetaFunction = () => ({ title: 'Klown' });
export const loader: LoaderFunction = async () => getCategories();

export default function Index() {
  const data = useRouteData<RouteData>();

  usePageColor('rw');

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
          <source src={video.url} type={video.mimeType!} />
        </video>
      )}
    </div>
  );
}
