import { useRouteData, Link } from 'remix';

import type { GetHeader } from '~/cms.server';

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
              <Link to={`/category/${category.slug}`}>{category.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p className="mentions">{year} — Tous droits réservés</p>
    </footer>
  );
}
