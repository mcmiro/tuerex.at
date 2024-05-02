import React, { useEffect, useState } from 'react';
import Layout from 'components/layouts';
import { UI } from 'components';
import WkoLogo from '../../assets/images/wko-logo.svg';
import DistrictItem from 'models/districts-content';
import {
  CheckBadgeIcon,
  CheckIcon,
  ClockIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';
import axios from 'axios';
import Link from 'next/link';

const IndexPage: React.FC<{
  data: DistrictItem;
  districts: DistrictItem[];
}> = ({ data, districts }) => {
  const [navigationitems, setNavigationItems] = useState<DistrictItem[]>();

  const findSurroundingItems = (targetPostalCode: string) => {
    const targetIndex = districts.findIndex(
      (el) => el.postalCode === targetPostalCode
    );

    if (targetIndex !== -1) {
      const startIndex = Math.max(0, targetIndex - 2);
      const endIndex = Math.min(districts.length - 1, targetIndex + 2);

      const surroundingItems = districts
        .slice(startIndex, endIndex + 1)
        .filter((el) => el.postalCode !== targetPostalCode);

      setNavigationItems(surroundingItems);
    }

    return [];
  };

  useEffect(() => {
    findSurroundingItems(data.postalCode);
  }, []);

  return (
    <Layout
      title={`Schlüsseldienst ${data.postalCode} Wien (${data.districtName}) | Aufsperr-Notdienst | TÜREX`}
      metaDescription={data.description}
    >
      {/* Hero Section START */}
      <header className="pb-8">
        <UI.Container className="flex flex-col items-center w-full gap-4 pb-8">
          <div className="pt-[56px] pb-4">
            <UI.AvailabilityCheck />
          </div>
          <UI.Typography
            variant="h1"
            weight="bold"
            className="text-center pt-10 font-['Lexend'] md:text-[56px] md:!leading-[1.1]"
          >
            <span className="block text-primary-500">Schlüsseldienst</span>
            {data.postalCode} Wien - {data.districtName}
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
          <div className="relative w-full h-8 mt-8">
            <img src={WkoLogo.src} alt="wkö logo" className="mx-auto" />
          </div>
          <UI.Typography
            variant="sm"
            className="text-center font-['Lexend'] text-[10px] -mt-2"
          >
            Mitglied der Wirtschaftskammer Wien
          </UI.Typography>
        </UI.Container>
      </header>
      {/* Hero Section START */}
      {/* Content Section START */}
      <UI.Container>
        <UI.Typography variant="h2" className="font-bold">
          {data.subline}
        </UI.Typography>
        <UI.Typography
          variant="md"
          className="mt-6 !text-[18px] text-primary-900 leading-8"
        >
          {data.introCopy}
        </UI.Typography>
        <div className="mt-[56px]">
          <UI.Icon icon={CheckBadgeIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            {data.headlineOne}
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            {data.copyOne}
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Icon icon={ClockIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            {data.headlineTwo}
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            {data.copyTwo}
          </UI.Typography>
        </div>
        <div className="my-[56px]">
          <UI.Icon icon={KeyIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            {data.headlineThree}
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            {data.copyThree}
          </UI.Typography>
        </div>
      </UI.Container>
      {/* Content Section END */}
      {/* Call Section START */}
      <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
        <UI.Typography
          variant="h2"
          align="center"
          className="font-bold text-white"
        >
          Jetzt anrufen.
        </UI.Typography>
        <UI.Typography
          variant="lg"
          align="center"
          className="!text-h5 mt-8 text-white !leading-8"
        >
          Wir sind rund um die Uhr erreichbar. Sowohl als Schlüsselnotdienst,
          als auch im Normaldienst.
        </UI.Typography>
        <UI.Call mode="dark" />
      </UI.Container>
      {/* Call Section END */}
      {/* Price Section START */}
      <div className="bg-[#f5f5f5] pt-16 pb-8" id="prices">
        <UI.Container>
          <UI.Typography variant="h2" align="center" className="mt-4 font-bold">
            Schlüsseldienst in {data.postalCode} Wien<br></br>
            <span className="text-primary-500">Preise und Kosten</span>.
          </UI.Typography>
          <UI.Typography variant="lg" align="center" className="mt-8">
            Transparent und ohne versteckte Kosten. Hier findest du die
            Auflistung unserer Preise. Sowohl für den Notdienst, als auch für
            den Normaldienst.
          </UI.Typography>
          <UI.PriceTable />
        </UI.Container>
      </div>
      {/* Price Section END */}
      {/* Navigatio START */}
      <div className="bg-[#f5f5f5] py-[56px]">
        <UI.Container>
          <UI.Typography variant="h4">Weitere Bezirke:</UI.Typography>
          <div className="flex justify-between mt-[16px]">
            {navigationitems &&
              navigationitems.map((el: DistrictItem, index: number) => {
                return (
                  <div
                    key={index}
                    className="inline-block px-6 py-2 border rounded-lg border-primary-500"
                  >
                    <Link
                      href={`/wien/${el.postalCode}`}
                      className="border-b border-primary-500"
                    >
                      Wien {el.postalCode}
                    </Link>
                  </div>
                );
              })}
          </div>
        </UI.Container>
      </div>
      {/* Navigatio END */}
      {/* Payment Section START */}
      <div id="payment">
        <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
          <UI.Typography
            variant="h2"
            align="center"
            className="font-bold text-white"
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
    </Layout>
  );
};

export default IndexPage;

export async function getStaticPaths() {
  const response = await axios.get(
    `${process.env.NEXT_LOCAL_URL}/districts.json`
  );
  const paths = response.data.data.map((el: any) => ({
    params: { postal: el.postalCode },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export const getStaticProps = async (context: any) => {
  const { params } = context;
  const postalCode = params.postal;

  const response = await axios.get(
    `${process.env.NEXT_LOCAL_URL}/districts.json`
  );

  const districts = response.data.data;

  const data = response.data.data.find(
    (el: any) => el.postalCode.toString() === postalCode
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, districts },
  };
};
