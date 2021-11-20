import { useLoaderData, Link } from 'remix';

import type { GetHeader } from '~/cms.server';

export function Header() {
  const data = useLoaderData<GetHeader>();

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
      <p className="mentions">
        Design&#8239;: <a href="https://benjmng.eu">Benjamin G.</a>
        <br />
        Développement&#8239;:{' '}
        <a href="https://github.com/tchak">Paul Chavard</a>
      </p>
    </footer>
  );
}
