import React, { ReactNode } from 'react';
import Head from 'next/head';
import { UI } from 'components';

type Props = {
  children?: ReactNode;
  title?: string;
  metaDescription?: string;
  canonical?: string;
  jsonLd?: any;
};

const Layout = ({
  children,
  title = 'TÜREX',
  metaDescription,
  canonical,
  jsonLd,
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={metaDescription} />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            key="item-jsonld"
          />
        )}
      </Head>
      {children}
      <UI.Footer />
    </>
  );
};

export default Layout;
