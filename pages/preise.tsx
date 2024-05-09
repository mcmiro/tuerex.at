import React from 'react';
import Layout from '../components/layouts';
import { UI } from '../components';
import { CheckIcon } from '@heroicons/react/24/outline';

const IndexPage = () => {
  return (
    <Layout
      title="Schlüsseldienst Preise & Kosten | klare Preisgestaltung | TÜREX"
      metaDescription="Entdecke transparente Schlüsseldienst Preise bei TÜREX. Klare Preisgestaltung, fair und ohne versteckte Kosten. Jetzt mehr erfahren."
    >
      {/* Hero Section START */}
      <header className="pb-8">
        <UI.Navigation isActiveHamburger={true} />
        <UI.Container className="flex flex-col items-center w-full gap-4 pb-8">
          <div className="pt-[56px] pb-4">
            <UI.AvailabilityCheck />
          </div>
          <UI.Typography
            variant="h1"
            weight="bold"
            className="text-center pt-10 font-['Lexend'] md:text-[56px] md:!leading-[1.1]"
          >
            <span className="text-primary-500">Schlüsseldienst</span>
            <br></br>
            Preise & Kosten:<br></br>
            unsere <span className="text-primary-500">Preisliste</span>.
          </UI.Typography>
          <UI.Typography variant="xs" className="text-center text-gray-800">
            Klare Preisgestaltung
          </UI.Typography>
          <ul className="flex items-center justify-between pt-12 w-full max-w-[480px]">
            <li className="flex items-center gap-1 text-[18px] md:text-[22px] font-['Lexend'] text-gray-800">
              <CheckIcon className="w-5" />
              24h/365 Tage
            </li>
            <li className="flex items-center gap-1 text-[18px] md:text-[22px] font-['Lexend'] text-gray-800">
              <CheckIcon className="w-5" /> Behördlich befähigt
            </li>
          </ul>
          <UI.Call />
        </UI.Container>
      </header>
      {/* Hero Section START */}
      <UI.Container element="main" widthMode="full">
        {/* Price Section START */}
        <div className="bg-[#f5f5f5] pt-16 pb-8" id="prices">
          <UI.Container>
            <UI.Typography variant="lg" align="center">
              Transparent und mit klarer Preisgestaltung. Hier findest du die
              Auflistung unserer Preise.
            </UI.Typography>
            <UI.PriceTable />
          </UI.Container>
        </div>
        {/* Price Section END */}
        {/* Payment Section START */}
        <div id="payment">
          <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
            <UI.Typography
              variant="h2"
              align="center"
              className="text-white font-bold"
            >
              Entscheide selbst, wie du gerne bezahlst.
            </UI.Typography>
            <UI.Typography
              variant="lg"
              align="center"
              className="!text-h5 mt-8 text-white"
            >
              Bequem & direkt vor Ort.
            </UI.Typography>
            <UI.Payment />
            <UI.Call mode="dark" />
          </UI.Container>
        </div>
        {/* Payment Section END */}
      </UI.Container>
    </Layout>
  );
};

export default IndexPage;
