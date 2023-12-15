import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/layouts';
import { UI } from '../components';
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/outline';
import WkoLogo from '../assets/images/wko-logo.svg';
import { contactData } from 'mocks/contact';

const IndexPage = () => {
  const [priceTableVisible, setPriceTabelVisible] = useState<boolean>(false);

  const hanldeClosePriceTable = () => {
    setPriceTabelVisible(false);
  };

  return (
    <Layout title="Schlüßeldienst und Aufsperdienst Wien | Türex">
      {/* Modal Price START */}
      {priceTableVisible && (
        <UI.ModalDialog onClick={hanldeClosePriceTable}>
          <UI.Typography variant="h5" align="center" className="font-bold mt-4">
            Schlüsseldienst Preise
          </UI.Typography>
          <UI.PriceTable />
        </UI.ModalDialog>
      )}
      {/* Modal Price END */}
      {/* Hero Section START */}
      <div className="min-h-screen">
        <UI.Container className="flex flex-col items-center w-full gap-4 pb-8">
          <UI.Typography
            variant="xs"
            className="text-center pt-[56px] text-gray-800"
          >
            Keine versteckten Kosten
          </UI.Typography>
          <UI.AvailabilityCheck />
          <UI.Button
            variant="contained"
            size="sm"
            light
            className="!rounded-full flex gap-2 items-center"
            onClick={() => setPriceTabelVisible(true)}
          >
            Preise ansehen <ArrowRightIcon className="w-4" />
          </UI.Button>
          <UI.Typography
            variant="h1"
            weight="bold"
            className="text-center pt-10 font-['Lexend']"
          >
            <span className="text-primary-500">Schlüsseldienst</span> &<br></br>
            Aufsperrdienst in Wien<br></br>
            <span className="text-primary-500">mit Fixpreisen</span>
          </UI.Typography>
          <ul className="flex items-center justify-between pt-12 w-full">
            <li className="flex items-center gap-1 text-[18px] md:text-[22px] font-['Lexend'] text-gray-800">
              <CheckIcon className="w-5" />
              24h/365 Tage
            </li>
            <li className="flex items-center gap-1 text-[18px] md:text-[22px] font-['Lexend'] text-gray-800">
              <CheckIcon className="w-5" /> Behördlich befähigt
            </li>
          </ul>
          <div className="w-full pt-12">
            <a
              href={`tel:${contactData.phone}`}
              className="w-full flex gap-4 items-center justify-center font-bold bg-primary-500 py-3 px-6 text-base rounded-lg text-white"
            >
              Jetzt anrufen
              <PhoneIcon className="w-6 h-6 text-white" />
            </a>
            <UI.Typography variant="sm" className="text-center pt-2 pb-8">
              00-24h erreichbar
            </UI.Typography>
          </div>
          <div className="relative w-full h-8">
            <Image src={WkoLogo} layout="fill" alt="wkö logo" />
          </div>
          <UI.Typography
            variant="sm"
            className="text-center font-['Lexend'] text-[10px] -mt-2"
          >
            Mitglied der Wirtschaftskammer Wien
          </UI.Typography>
        </UI.Container>
      </div>
      {/* Hero Section START */}
      {/* Price Section START */}
      <div className="w-full px-4 bg-[#f5f5f5] pt-16 pb-8">
        <UI.Typography variant="h2" align="center" className="font-bold mt-4">
          Schlüsseldienst<br></br>
          <span className="text-primary-500">Preise und Kosten</span>.
        </UI.Typography>
        <UI.Typography variant="lg" align="center" className="mt-8">
          Transparent und ohne versteckte Kosten. Hier findest du die Auflistung
          unserer Preise. Sowohl für den Notdienst, als auch für den
          Normaldienst.
        </UI.Typography>
        <UI.PriceTable />
        <div className="w-full pt-12">
          <a
            href={`tel:${contactData.phone}`}
            className="w-full flex gap-4 items-center justify-center font-bold bg-primary-500 py-3 px-6 text-base rounded-lg text-white"
          >
            Jetzt anrufen
            <PhoneIcon className="w-6 h-6 text-white" />
          </a>
          <UI.Typography variant="sm" className="text-center pt-2 pb-8">
            00-24h erreichbar
          </UI.Typography>
        </div>
      </div>
      {/* Price Section END */}
    </Layout>
  );
};

export default IndexPage;
