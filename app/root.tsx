import { LinksFunction, LoaderFunction, MetaFunction, useMatches } from 'remix';
import { Meta, Links, Scripts, LiveReload, useRouteData } from 'remix';
import { Outlet, Link, NavLink } from 'react-router-dom';

import stylesUrl from './styles/index.css';
import { Strobos } from './components/strobos';
import { InlineSVG } from './components/inline-svg';
import type { GetHeader } from '~/cms.server';
import { getHeader } from './cms.server';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: stylesUrl },
    { rel: 'stylesheet', href: '/font/GeneralSans/stylesheet.css' },
  ];
};

export const meta: MetaFunction = () => {
  return {
    title: 'Klown',
    viewport: 'width=device-width, initial-scale=1.0',
    description: '',
  };
};

export const loader: LoaderFunction = async () => getHeader();

function useBodyId() {
  const match = useMatches().find(({ handle }) => !!handle);
  return match?.handle?.bodyId ?? 'index';
}

function Document({
  bodyId = 'index',
  children,
}: {
  bodyId?: string;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Meta />
        <Links />
      </head>
      <body id={bodyId} data-cc="r" data-bg="w" data-categorie="1">
        {children}

        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document bodyId={useBodyId()}>
      <Header />
      <Outlet />
      <Strobos />
      <Footer />
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <pre>{error.stack}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  );
}

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
