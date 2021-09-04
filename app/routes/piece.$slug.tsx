import { MutableRefObject, useEffect, useRef } from 'react';
import type { MetaFunction, LoaderFunction } from 'remix';
import { useRouteData } from 'remix';
import Markdown from 'react-markdown';
import Siema from 'siema';

import { getPiece, GetPiece as RouteData } from '~/cms.server';
import { usePageColor } from '~/hooks';
import { Side } from '~/components/side';
import { Picture } from '~/components/picture';

export const handle = { bodyId: 'piece' };
export const meta: MetaFunction = ({ data }: { data: RouteData }) => {
  return {
    title: `Klown | ${data.piece?.category?.title} | ${data.piece?.title}`,
    description: data.piece?.description ?? '',
  };
};
export const loader: LoaderFunction = async ({ params }) =>
  getPiece(params.slug);

export default function Piece() {
  const data = useRouteData<RouteData>();

  usePageColor(data.piece?.category?.color);
  const [ref, prev, next] = useSiema<HTMLDivElement>();

  return (
    <>
      <Side categories={data.categories} />
      <main>
        <section id="carrousel">
          <div className="siema" ref={ref}>
            {data.piece?.images.map(({ id, jpg, webp }) => (
              <figure key={id}>
                <Picture
                  sources={[
                    {
                      srcSet: webp,
                      type: 'image/webp',
                    },
                    {
                      srcSet: jpg,
                      type: 'image/jpeg',
                    },
                  ]}
                  src={jpg}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>

          <button type="button" className="prev" onClick={prev}></button>
          <button type="button" className="next" onClick={next}></button>

          <a id="to-details" href="#details">
            Plus d'information ⋁
          </a>
        </section>
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
      </main>
    </>
  );
}

function useSiema<Element extends HTMLElement>(): [
  MutableRefObject<Element | null>,
  () => void,
  () => void
] {
  const ref = useRef<Element>(null);
  const siemaRef = useRef<Siema>();

  useEffect(() => {
    if (ref.current) {
      const siema = (siemaRef.current = new Siema({
        selector: ref.current,
        duration: 500,
        easing: 'ease-in-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: () => {},
        onChange: () => {},
      }));

      return () => siema.destroy(true);
    }
  }, []);

  const prev = () => {
    siemaRef.current?.prev();
  };
  const next = () => {
    siemaRef.current?.next();
  };

  return [ref, prev, next];
}
