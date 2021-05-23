import { NavLink, Link } from 'react-router-dom';
import { useRouteData } from 'remix';

import type { GetHeader } from '../cms.server';

export function Header() {
  const data = useRouteData<GetHeader>();

  return (
    <header id="topbar" role="navigation" aria-label="topbar">
      <h1>
        <Link to="/">Klown</Link>
      </h1>
      <nav>
        <ul>
          <li>
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
          </li>
          <li>
            <NavLink to="/info">Info</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function Footer() {
  const data = useRouteData<GetHeader>();

  return (
    <footer>
      <p className="description">
        Le site du Klown est un espace de présentation du travail d’Igor
        Galligo. Ce travail est représenté par la gallerie XX à Paris.
      </p>
      <nav>
        <ul>
          <li>
            <ul>
              {data.categories.map((category) => (
                <li key={category.id}>
                  <NavLink to={`/category/${category.slug}`}>
                    {category.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
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
    </footer>
  );
}
