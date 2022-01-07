import { useEffect, ChangeEventHandler, MouseEventHandler } from 'react';
import { useSearchParams, Link } from 'remix';

import type { GetCategory } from '~/cms.server';
import { Picture } from './picture';
import { ArrowR, IconSide, IconReset, IconFilter } from './icons';

export function Side({
  categories,
}: {
  categories: GetCategory['categories'];
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    document.querySelector('.cat-container')?.classList.remove('noJS');
  }, []);

  const selectedType = searchParams.get('type')?.toLowerCase();
  const types = [
    ...new Set(
      categories.flatMap((category) =>
        category.pieces.map((piece) => piece.type)
      )
    ),
  ].sort();
  const onChangeType: ChangeEventHandler<HTMLInputElement> = (event) => {
    const type = event.target.value;
    if (type) {
      searchParams.set('type', type);
    } else {
      searchParams.delete('type');
    }
    setSearchParams(searchParams);
  };

  const scrollRight: MouseEventHandler<HTMLButtonElement> = () => {
    const step = document.body.clientWidth * 0.9;
    const delta = step / 4;
    const scrollContainer =
      document.querySelector<HTMLUListElement>('.cat-container');

    if (scrollContainer) {
      if (
        scrollContainer.offsetWidth + scrollContainer.scrollLeft + delta >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollBy(step, 0);
      }
    }
  };

  return (
    <>
      <input id="toggle-sideNav" type="checkbox" hidden />
      <nav id="sideNav">
        <label htmlFor="toggle-sideNav">
          <h1>Pièces</h1>
          <IconSide />
        </label>

        <input
          id="medium-reset"
          type="radio"
          name="sort-by-medium"
          value=""
          checked={!selectedType}
          onChange={onChangeType}
          hidden
        />
        {types.map((type, index) => (
          <input
            key={type}
            id={`medium-${index + 1}`}
            type="radio"
            name="sort-by-medium"
            value={type.toLowerCase()}
            checked={type.toLowerCase() == selectedType}
            onChange={onChangeType}
            hidden
          />
        ))}
        <ul className="sort-options">
          <li data-for="medium-reset">
            <label htmlFor="medium-reset">
              <IconReset width={18} height={18} />
              <IconFilter width={18} height={18} />
            </label>
          </li>
          {types.map((type, index) => (
            <li key={type} data-for={`medium-${index + 1}`}>
              <label htmlFor={`medium-${index + 1}`}>{type}</label>
            </li>
          ))}
        </ul>

        <ul className="cat-container noJS">
          {categories.map((category, index) => (
            <li key={category.id} className="cat" data-categorie={index + 1}>
              <input
                id={`toggle-c${index + 1}`}
                name="toggle-c"
                type="radio"
                hidden
              />
              <label htmlFor={`toggle-c${index + 1}`}>{category.title}</label>
              <ul className="item-container">
                {category.pieces.map((piece) =>
                  piece.images[0] ? (
                    <li
                      key={piece.id}
                      className="item"
                      data-medium={types.indexOf(piece.type) + 1}
                    >
                      <Link to={`/piece/${piece.slug}`}>
                        <Picture
                          className="cover"
                          sources={[
                            {
                              srcSet: piece.images[0].webp,
                              type: 'image/webp',
                            },
                            {
                              srcSet: piece.images[0].jpg,
                              type: 'image/jpeg',
                            },
                          ]}
                          src={piece.images[0].jpg}
                          loading="lazy"
                          alt={piece.title}
                        />
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </li>
          ))}
        </ul>

        <button type="button" id="scrollTrigger" onClick={scrollRight}>
          <ArrowR height={38} width={38} />
        </button>
      </nav>
    </>
  );
}
