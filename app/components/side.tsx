import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import type { GetCategory } from '../cms.server';
import { Picture } from './picture';

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
          <svg width="24" height="24" viewBox="0 -2 60 60" aria-hidden>
            <use href="#i-side" />
          </svg>
        </label>

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
          <svg viewBox="0 0 60 60">
            <use href="#arrow-R" />
          </svg>
        </button>
      </nav>
    </>
  );
}
