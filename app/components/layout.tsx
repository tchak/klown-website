import { NavLink, Link } from 'react-router-dom';
import { useRouteData } from 'remix';

import type { GetHeader } from '~/cms.server';
import { InlineSVG } from './inline-svg';

export function Header() {
  const data = useRouteData<GetHeader>();

  return (
    <header id="topbar" role="navigation" aria-label="topbar">
      <h1>
        <Link to="/info">Klown</Link>
      </h1>
      <nav>
        <span className="parent">Menu</span>
        <ul>
          {data.categories.map((category) => (
            <li key={category.id}>
              <NavLink to={`/category/${category.slug}`}>
                {category.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <p className="description">
        Le site du Klown est un espace de présentation du travail d’Igor
        Galligo. Ce travail est représenté par la gallerie XX à Paris.
      </p>
      <nav>
        <ul>
          <li>
            <NavLink to="/info">info</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </nav>
      <p className="mentions">2021 — Tous droits réservés</p>
      <p className="mentions">Design Dev: </p>
      <InlineSVG />
    </footer>
  );
}
