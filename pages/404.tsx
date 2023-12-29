import React from 'react';
import Layout from '../components/layouts';
import { UI } from '../components';
import Link from 'next/link';

const NotFound = () => {
  return (
    <Layout
      title="Seite nicht gefunden - 404 | TÜREX"
      metaDescription="Hole dir 6 Tipps vom Profi, um einen seriösen Schlüsseldienst in Wien zu entdecken. Jetzt mehr erfahren."
    >
      {/* Content Section START */}
      <UI.Container className="flex items-center justify-center h-[calc(100vh-272px)]">
        <div className="mt-[56px]">
          <UI.Typography
            variant="h1"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Seite nicht gefunden!<br></br> 404
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            <Link href="/" className="underline">
              Zurück zur Homepage
            </Link>
          </UI.Typography>
        </div>
      </UI.Container>
      {/* Content Section END */}
    </Layout>
  );
};

export default NotFound;
