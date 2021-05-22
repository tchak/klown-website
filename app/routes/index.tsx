import type { MetaFunction, LoaderFunction } from 'remix';
import { useRouteData, Link } from 'remix';

import {
  getCategories,
  GetCategories as RouteData,
} from '../api-client.server';

export const handle = { bodyId: 'index' };
export const meta: MetaFunction = () => ({ title: 'Klown' });
export const loader: LoaderFunction = async () => getCategories();

export default function Index() {
  const data = useRouteData<RouteData>();

  return (
    <main>
      <nav>
        <ul>
          {data.categories.map((category) => (
            <li key={category.id}>
              <Link to={`/category/${category.slug}`}>{category.title}</Link>
              <div className="videoWrapper">
                {category.backgroundVideo && (
                  <video muted autoPlay loop aria-hidden>
                    <source
                      src={category.backgroundVideo?.url}
                      type={category.backgroundVideo?.mimeType!}
                    />
                  </video>
                )}
              </div>
              <div className="over" aria-hidden></div>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
