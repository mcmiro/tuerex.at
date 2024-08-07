import React from 'react';
import Layout from '../components/layouts';
import { UI } from '../components';
import Link from 'next/link';

const ImpressumPage = () => {
  return (
    <Layout
      title="Impressum | TÜREX"
      metaDescription="Impressum und Kontaktdaten von Türex. Jetzt mehr erfahren."
    >
      <header className="mb-16">
        <UI.Navigation isActiveHamburger={true} />
        <UI.HeaderSub title="Impressum" />
        <UI.Breadcrumbs />
      </header>
      {/* Content Section START */}
      <UI.Container element="main" widthMode="contained">
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Praktische Durchführung, Dienstleistung und Umsetzung.
          </UI.Typography>
          <ul className="my-[56px] leading-8">
            <li>
              <strong>Firmenname:</strong> Sead Hadrovic e.U.
            </li>
            <li>
              <strong>Adresse:</strong> Oldenburggasse 6, 1230 Wien
            </li>
            <li>
              <strong>E-Mail-Adresse:</strong>{' '}
              <Link href={'mailto:info@tuerex.at'} className="underline">
                info@tuerex.at
              </Link>
            </li>
            <li>
              <strong>Telefon:</strong>{' '}
              <Link href={'tel:+436763741204'} className="underline">
                +43 676 374 12 04
              </Link>
            </li>
            <li>
              <strong>Gewerbeordnung:</strong> Metalltechnik für Metall- und
              Maschinenbau (Handwerk), eingeschränkt auf Aufsperrdienst und
              Schlossmontagen
            </li>
            <li>
              <strong>Mitglied bei:</strong> WKÖ
            </li>
            <li>
              <strong>Behörde gem. ECG (E-Commerce Gesetz):</strong>{' '}
              Magistratisches Bezirksamt des XXIII. Bezirkes
            </li>
            <li>
              <strong>Firmengericht:</strong> Handelsgericht Wien
            </li>
          </ul>
        </div>
      </UI.Container>
      {/* Content Section END */}
    </Layout>
  );
};

export default ImpressumPage;
