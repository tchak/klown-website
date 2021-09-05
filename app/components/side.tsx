import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import type { GetCategory } from '~/cms.server';
import { Picture } from './picture';
import { ArrowR, IconSide, IconReset, IconFilter } from './icons';

export function Side({
  categories,
}: {
  categories: GetCategory['categories'];
}) {
  useEffect(() => {
    document.querySelector('.cat-container')?.classList.remove('noJS');
  }, []);

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
          hidden
          checked
        />
        <input id="medium-1" type="radio" name="sort-by-medium" hidden />
        <input id="medium-2" type="radio" name="sort-by-medium" hidden />
        <input id="medium-3" type="radio" name="sort-by-medium" hidden />
        <input id="medium-4" type="radio" name="sort-by-medium" hidden />
        <input id="medium-5" type="radio" name="sort-by-medium" hidden />
        <ul className="sort-options">
          <li data-for="medium-reset">
            <label htmlFor="medium-reset">
              <IconReset width={18} height={18} />
              <IconFilter width={18} height={18} />
            </label>
          </li>
          <li data-for="medium-1">
            <label htmlFor="medium-1">Video</label>
          </li>
          <li data-for="medium-2">
            <label htmlFor="medium-2">Peinture</label>
          </li>
          <li data-for="medium-3">
            <label htmlFor="medium-3">Photo</label>
          </li>
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
                    <li key={piece.id} className="item">
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

        <button id="scrollTrigger">
          <ArrowR height={60} width={60} />
        </button>
      </nav>
    </>
  );
}
