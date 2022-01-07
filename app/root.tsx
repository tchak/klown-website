import { LinksFunction, LoaderFunction, MetaFunction, useMatches } from 'remix';
import { Meta, Links, Scripts, LiveReload, ScrollRestoration } from 'remix';
import { Outlet } from 'react-router-dom';
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
        <DynamicLinks />
      </head>
      <body id={bodyId} data-cc="r" data-bg="w" data-categorie="1">
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
