import React, { ReactNode } from 'react';
import Head from 'next/head';
import { UI } from 'components';

type Props = {
  children?: ReactNode;
  title?: string;
  metaDescription?: string;
};

const Layout = ({
  children,
  title = 'This is the default title',
  metaDescription,
}: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <header>
        <UI.Navigation isActiveHamburger={true} />
      </header>
      <main className="min-h-[80vh]">{children}</main>
      <UI.Footer />
    </div>
  );
};

export default Layout;
