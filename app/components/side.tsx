import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import type { GetCategory } from '../cms.server';

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
        <label htmlFor="toggle-sideNav">Pièces</label>

        <input
          id="c1-sort-0"
          type="radio"
          name="c1-sort-medium"
          hidden
          defaultChecked
        />
        <input id="c1-sort-1" type="radio" name="c1-sort-medium" hidden />
        <input id="c1-sort-2" type="radio" name="c1-sort-medium" hidden />
        <input id="c1-sort-3" type="radio" name="c1-sort-medium" hidden />
        <div className="sort-options">
          <p>Medium&nbsp;</p>
          <ul>
            <li data-for="sort-0">
              <label htmlFor="c1-sort-0">⦰</label>
            </li>
            <li data-for="sort-1">
              <label htmlFor="c1-sort-1">Video</label>
            </li>
            <li data-for="sort-2">
              <label htmlFor="c1-sort-2">Peinture</label>
            </li>
            <li data-for="sort-3">
              <label htmlFor="c1-sort-3">Photo</label>
            </li>
          </ul>
        </div>

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
                        <img
                          className="cover"
                          src={piece.images[0].jpg}
                          loading="lazy"
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
