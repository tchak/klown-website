import { LinksFunction, LoaderFunction, MetaFunction } from 'remix';
import {
  Meta,
  Links,
  Scripts,
  LiveReload,
  ScrollRestoration,
  Outlet,
  useMatches,
} from 'remix';
import { DynamicLinks } from 'remix-utils';

import stylesUrl from './styles/index.css';
import { Strobos } from './components/strobos';
import { Header, Footer } from './components/layout';
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

function useBodyAttributes() {
  const attributes = useMatches()
    .map((match) => {
      const fn = match?.handle?.body;
      if (typeof fn !== 'function') return false;
      return match?.handle?.body(match);
    })
    .find(Boolean);
  return attributes ?? { id: 'index', 'data-cc': 'r', 'data-bg': 'w' };
}

function Document({
  body,
  children,
}: {
  body?: { id: string };
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Meta />
        <Links />
        <DynamicLinks />
      </head>
      <body {...body}>
        {children}

        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document body={useBodyAttributes()}>
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
