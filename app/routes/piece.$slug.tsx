import { MutableRefObject, useEffect, useRef } from 'react';
import type { MetaFunction, LoaderFunction } from 'remix';
import { useLoaderData } from 'remix';
import Siema from 'siema';
import { DynamicLinksFunction } from 'remix-utils';

import { Markdown } from '~/components/markdown';
import { getPiece, GetPiece as RouteData } from '~/cms.server';
import { usePageColor, pageColor, parseColor, getHexColor } from '~/hooks';
import { Side } from '~/components/side';
import { Picture } from '~/components/picture';
import { IconDown } from '~/components/icons';

export const meta: MetaFunction = ({ data }: { data: RouteData }) => {
  const { bg } = parseColor(data.piece.category?.color);
  const color = getHexColor(bg);
  return {
    title: `Klown | ${data.piece?.category?.title} | ${data.piece?.title}`,
    description: data.piece?.description ?? '',
    'theme-color': color,
  };
};
const dynamicLinks: DynamicLinksFunction<RouteData> = ({ data }) => {
  const { bg } = parseColor(data.piece.category?.color);
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
export const handle = { bodyId: 'piece', dynamicLinks };

export const loader: LoaderFunction = async ({ params }) => {
  const { piece, categories } = await getPiece(String(params.slug));

  return {
    piece,
    categories: categories.map((category) => ({
      ...category,
      pieces: [...category.pieces].sort(() => 0.5 - Math.random()),
    })),
  };
};

export default function Piece() {
  const { piece, categories } = useLoaderData<RouteData>();
  const images = piece.images ?? [];
  const needsCarrousel = images.length > 1;
  const color = piece.category?.color;

  usePageColor(color);

  return (
    <>
      <Side categories={categories} />
      <main {...pageColor(color)}>
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

      <button type="button" className="prev" onClick={prev}>
        <span className="sr-only">Précédent</span>
      </button>
      <button type="button" className="next" onClick={next}>
        <span className="sr-only">Suivant</span>
      </button>
    </>
  );
}

function autoHeight(currentSlide: number) {
  const carrousel = document.querySelector<HTMLDivElement>('#carrousel');
  const currentEl = document.querySelector<HTMLDivElement>(
    '.siema > div > div:nth-of-type(' + (currentSlide + 2) + ')'
  );
  const maxHeight = currentEl?.offsetHeight;
  if (carrousel) {
    carrousel.style.maxHeight = maxHeight + 'px';
  }
}

// export function resize() {
//   useEffect(function onFirstMount() {
//     window.addEventListener('resize', setTimeout(autoHeight, 500));
//   }, []);
//   return null;
// }

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

  return [ref, prev, next];
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
