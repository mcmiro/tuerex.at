import React from 'react';
import Layout from '../components/layouts';
import { UI } from '../components';
import {
  CheckBadgeIcon,
  ClockIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';

const IndexPage = () => {
  return (
    <Layout title="Schlüßeldienst und Aufsperdienst Wien | Türex">
      <header className="mb-16">
        <UI.HeaderSub title="Abwicklung" />
        <UI.Breadcrumbs />
      </header>
      {/* Content Section START */}
      <UI.Container>
        <UI.Typography variant="h2" className="font-bold">
          Verlässlicher <br></br>
          <span className="text-primary-500">24h Schlüsseldienst</span>.
        </UI.Typography>
        <div className="mt-[56px]">
          <UI.Icon icon={CheckBadgeIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Akzeptiert von Hausversicherungen
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Nach dem erfolgreichen Entsperren, kannst du unsere Rechnung einfach
            an deine Haushaltsversicherung senden.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Icon icon={ClockIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            24h Schlüsselnotdienst
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Wir sind rund um die Uhr, 365 Tage im Jahr, für dich da, um in
            Notfällen zu helfen.
          </UI.Typography>
        </div>
        <div className="my-[56px]">
          <UI.Icon icon={KeyIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Schadfreie Türöffnung
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Unsere Profis öffnen Türen ohne Schäden. Ob ausgesperrt oder
            abgebrochener Schlüssel - eine schonende Türöffnung ist unser Ziel.
          </UI.Typography>
        </div>
      </UI.Container>
      {/* Content Section END */}
    </Layout>
  );
};

export default IndexPage;
