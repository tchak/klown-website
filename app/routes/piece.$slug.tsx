import { MutableRefObject, useEffect, useRef } from 'react';
import type { MetaFunction, LoaderFunction } from 'remix';
import { useLoaderData } from 'remix';
import Siema from 'siema';

import { Markdown } from '~/components/markdown';
import { getPiece, GetPiece as RouteData } from '~/cms.server';
import { usePageColor } from '~/hooks';
import { Side } from '~/components/side';
import { Picture } from '~/components/picture';
import { IconDown } from '~/components/icons';

export const handle = { bodyId: 'piece' };
export const meta: MetaFunction = ({ data }: { data: RouteData }) => {
  return {
    title: `Klown | ${data.piece?.category?.title} | ${data.piece?.title}`,
    description: data.piece?.description ?? '',
  };
};
export const loader: LoaderFunction = async ({ params }) =>
  getPiece(params.slug!);

export default function Piece() {
  const data = useLoaderData<RouteData>();
  const piece = data.piece!;

  const images = piece.images ?? [];
  const needsCarrousel = images.length > 1;
  usePageColor(piece.category?.color);
  return (
    <>
      <Side categories={data.categories} />
      <main>
        <section id="carrousel" className={needsCarrousel ? '' : 'single'}>
          {needsCarrousel ? (
            <Carrousel images={images} />
          ) : images.length == 0 ? null : (
            <figure>
              <Picture
                sources={[
                  {
                    srcSet: images[0].webp,
                    type: 'image/webp',
                  },
                  {
                    srcSet: images[0].jpg,
                    type: 'image/jpeg',
                  },
                ]}
                src={images[0].jpg}
                loading="lazy"
              />
            </figure>
          )}

          <a id="to-details" href="#details" title="Plus d‘informations">
            <IconDown />
          </a>
        </section>

        <header id="details">
          <p>{piece.category?.title}</p>
          <h1>{piece.title}</h1>
          <ul className="secondary">
            {piece.type == 'Video' ? <VideoDetails piece={piece} /> : null}
            {piece.type == 'Painting' ? (
              <PaintingDetails piece={piece} />
            ) : null}
            {piece.type == 'Photo' ? <PhotoDetails piece={piece} /> : null}
            {piece.type == 'Installation' ? (
              <InstallationDetails piece={piece} />
            ) : null}
          </ul>
        </header>

        <div id="content">
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
            {piece.content?.markdown ?? ''}
          </Markdown>
        </div>
        <Related piece={piece} />
      </main>
    </>
  );
}

function VideoDetails({ piece }: { piece: NonNullable<RouteData['piece']> }) {
  return (
    <>
      <li>video</li>
      {piece.duration ? <li>{piece.duration}</li> : null}
      {piece.location ? <li>{piece.location}</li> : null}
      {piece.participants ? <li>{piece.participants}</li> : null}
    </>
  );
}

function PaintingDetails({
  piece,
}: {
  piece: NonNullable<RouteData['piece']>;
}) {
  return (
    <>
      <li>peinture</li>
      {piece.dimensions ? <li>{piece.dimensions}</li> : null}
      {piece.technique ? <li>{piece.technique}</li> : null}
    </>
  );
}

function PhotoDetails({ piece }: { piece: NonNullable<RouteData['piece']> }) {
  return (
    <>
      <li>photo</li>
      {piece.dimensions ? <li>{piece.dimensions}</li> : null}
      {piece.technique ? <li>{piece.technique}</li> : null}
    </>
  );
}

function InstallationDetails({
  piece,
}: {
  piece: NonNullable<RouteData['piece']>;
}) {
  return (
    <>
      <li>installation</li>
      {piece.location ? <li>{piece.location}</li> : null}
      {piece.participants ? <li>{piece.participants}</li> : null}
    </>
  );
}

function Carrousel({
  images,
}: {
  images: NonNullable<RouteData['piece']>['images'];
}) {
  const [ref, prev, next] = useSiema<HTMLDivElement>();
  return (
    <>
      <div className="siema" ref={ref}>
        {images.map(({ id, jpg, webp }) => (
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
    </>
  );
}

function autoHeight(currentSlide) {
  let carrousel = document.querySelector('#carrousel') 
  let currentEl = document.querySelector('.siema > div > div:nth-of-type('+ (currentSlide + 2) +')');
  let maxHeight = currentEl.offsetHeight;
  carrousel.style.maxHeight = maxHeight + 'px';
}

export function resize() {
  useEffect(function onFirstMount() {
    window.addEventListener("resize", setTimeout(autoHeight, 500));
  }, []);
  return null;
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
        onChange: () => {
          autoHeight(siema.currentSlide);
        },
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

  return [ref, prev, next, height];
}

function Related({ piece }: { piece: NonNullable<RouteData['piece']> }) {
  return (
    <>
      <aside id="related">
        <h2>
          Pièces <br />
          en liens
        </h2>
        <nav className="sr-only">
          /*Lister les items ici pour des questions d'accesibilité*/
          <li></li>
        </nav>
      </aside>
    </>
  );
}
