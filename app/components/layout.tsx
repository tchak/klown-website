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
  return (
    <footer>
      <p className="description">
        Le site du Klown est un espace de présentation du travail d’Igor
        Galligo. Ce travail est représenté par la gallerie XX à Paris.
      </p>
      <nav>
        <ul>
          <li>
            <Link to="/info">info</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
      <p className="mentions">2021 — Tous droits réservés</p>
      <p className="mentions">
        Design&#8239;: <a href="https://benjmng.eu">Benjamin G.</a><br/>
        Développement&#8239;: <a href="https://github.com/tchak">Paul Chavard</a>
      </p>
    </footer>
  );
}
