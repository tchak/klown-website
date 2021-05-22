import type { MetaFunction, LoaderFunction } from 'remix';
import { useRouteData, Link } from 'remix';

import { getCategories, GetCategories as RouteData } from '../cms.server';
import { usePageColor } from '../hooks';

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
          {data.categories.map((category) => (
            <li key={category.id}>
              <Link to={`/category/${category.slug}`}>{category.title}</Link>
              <VideoWrapper video={category.backgroundVideo} />
              <div className="over" aria-hidden></div>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}

type BackgroundVideo = RouteData['categories'][0]['backgroundVideo'];

function VideoWrapper({ video }: { video: BackgroundVideo }) {
  if (video) {
    return (
      <div className="videoWrapper">
        <video muted autoPlay loop aria-hidden>
          <source src={video.url} type={video.mimeType!} />
        </video>
      </div>
    );
  }
  return <div className="videoWrapper"></div>;
}
