import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/layouts';
import { UI } from '../components';
import faqData from 'content/faq';
import WkoLogo from '../assets/images/wko-logo.svg';
import indexStrucutreData from 'utils/structure-data';
import {
  ArrowRightIcon,
  CheckIcon,
  CheckBadgeIcon,
  ClockIcon,
  KeyIcon,
  DevicePhoneMobileIcon,
  LockOpenIcon,
  UserIcon,
  ArrowSmallRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import router from 'next/router';

const IndexPage = () => {
  const [priceTableVisible, setPriceTabelVisible] = useState<boolean>(false);

  const hanldeClosePriceTable = () => {
    setPriceTabelVisible(false);
  };

  return (
    <Layout
      title="24/7 Schlüsseldienst Wien | Aufsperrdienst zum Fixpreis | TÜREX"
      metaDescription="Schlüsseldienst Wien rund um die Uhr. Behördlich befähigter Aufsperrdienst mit klarer Preisgestaltung. Türöffnungen ohne Schaden. Jetzt anrufen."
      jsonLd={indexStrucutreData}
    >
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
      <header className="min-h-screen">
        <UI.Container className="flex flex-col items-center w-full gap-4 pb-8">
          <div className="pt-[56px] pb-4">
            <UI.AvailabilityCheck />
          </div>
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
            className="text-center pt-10 font-['Lexend'] md:text-[56px] md:!leading-[1.1]"
          >
            <span className="text-primary-500">Schlüsseldienst</span> &<br></br>
            Aufsperrdienst in Wien<br></br>
            <span className="text-primary-500">mit Fixpreisen</span>
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
          <div className="relative w-full h-8">
            <Link href="https://firmen.wko.at/sead-hadrovi%C4%87/wien/?firmaid=281d167a-1201-460e-9c76-dabac353623b">
              <Image src={WkoLogo} layout="fill" alt="wkö logo" />
            </Link>
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
      <UI.Container className="mt-[56px]">
        <UI.Typography variant="h2" weight="bold">
          Verlässlicher <br></br>
          <span className="text-primary-500">24h Schlüsseldienst</span>.
        </UI.Typography>
        <div className="grid md:grid-cols-2 gap-8 mt-[56px]">
          <div className="order-2 md:order-1">
            <div>
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
                Nach dem erfolgreichen Entsperren, kannst du unsere Rechnung
                einfach an deine Haushaltsversicherung senden.
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
                abgebrochener Schlüssel - eine schonende Türöffnung ist unser
                Ziel.
              </UI.Typography>
            </div>
          </div>
          <div className="relative mb-[56px] order-1 md:order-2">
            <Image
              width={1920}
              height={1280}
              layout="cover"
              src="/images/schluesseldienst-wien-aufsperrdienst.jpg"
              alt="Schlüsseldienst Wien Mitarbeiter öffnet eine Tür"
              className="rounded-xl overflow-hidden"
            />
          </div>
        </div>
      </UI.Container>
      {/* Content Section END */}
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
      {/* Content Section START */}
      <UI.Container>
        <UI.Typography variant="h2" className="font-bold mt-[56px]">
          <span className="text-primary-500">Schlüsseldienst Wien</span>
          <br></br>
          so einfach geht es.
        </UI.Typography>
        <div className="mt-[56px]">
          <UI.Icon icon={DevicePhoneMobileIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Schlüsseldienst anrufen
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Einfach anrufen und uns dein Problem schildern. Wir sind in
            kürzester Zeit bei dir, um beim Problem zu helfen.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Icon icon={ClockIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Kurz abwarten
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Nach deinem Anruf ist unser Team blitzschnell unterwegs, sodass du
            nicht lange im Notfall warten musst.
          </UI.Typography>
        </div>
        <div className="my-[56px]">
          <UI.Icon icon={LockOpenIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Aufsperren lassen
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Unsere Experten öffnen deine Tür schnell und ohne Schäden, damit du
            schnell wieder in Ihre Räumlichkeiten gelangen kannst.
          </UI.Typography>
        </div>
      </UI.Container>
      {/* Content Section END */}
      {/* Call Section START */}
      <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
        <UI.Typography
          variant="h2"
          align="center"
          className="text-white font-bold"
        >
          Rufe uns jetzt an.
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
          <UI.Typography variant="h2" align="center" className="font-bold mt-4">
            Schlüsseldienst<br></br>
            <span className="text-primary-500">Preise und Kosten</span>.
          </UI.Typography>
          <UI.Typography variant="lg" align="center" className="mt-8">
            Transparent und mit klarer Preisgestaltung. Hier findest du die
            Auflistung unserer Preise.
          </UI.Typography>
          <UI.PriceTable />
        </UI.Container>
      </div>
      {/* Price Section END */}
      {/* Content Section START */}
      <UI.Container className="mt-[56px]">
        <div className="grid md:grid-cols-2 gap-8 mt-[56px]">
          <div className="relative order-1 md:order-2">
            <Image
              width={1920}
              height={1280}
              layout="cover"
              src="/images/serioeser-schluesseldienst.jpg"
              alt="Mitarbeiter des seriösen Schlüsseldienstes öffnen die Eingangstür"
              className="rounded-xl overflow-hidden"
            />
          </div>
          <div className="order-2 md:order-1">
            <UI.Typography variant="h2" weight="bold">
              <span className="text-primary-500">Seriöser Schlüsseldienst</span>
              ?<br></br>
              Bei uns bist du richtig.
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Unser Unternehmen ist behördlich befähigt und verpflichtet sich zu
              höchster Seriosität und Transparenz. Erfahre jetzt mehr darüber,
              was du bei Schlüsseldienst Unternehmen bezüglich Seriosität wissen
              musst.
            </UI.Typography>
          </div>
        </div>
        <UI.Button
          variant="contained"
          onClick={() => router.push('/serioeser-schluesseldienst')}
          iconVisible={true}
          iconPosition={'right'}
          icon={<ArrowSmallRightIcon className="w-8" />}
          className="w-full my-8 font-bold flex items-center py-4 max-w-[300px]"
        >
          Mehr erfahren
        </UI.Button>
      </UI.Container>
      <UI.Container className="flex items-center gap-4 w-full py-8">
        <div className="relative w-24 h-8">
          <Image src={WkoLogo} layout="fill" alt="wkö logo" />
        </div>
        <UI.Typography variant="sm" className="font-['Lexend'] text-[10px]">
          Mitglied der Wirtschaftskammer Wien
        </UI.Typography>
      </UI.Container>
      <UI.Container>
        <UI.Typography variant="h2" className="font-bold mt-[56px]">
          <span className="text-primary-500">Aufsperrdienst Wien</span> - das
          ist bezüglich der <span className="text-primary-500">Türöffnung</span>{' '}
          deinerseits zu beachten.
        </UI.Typography>
        <div className="mt-[56px]">
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Nach dem unser Schlüsselnotdienst die Tür erfolgreich entsperrt hat,
            benötigen wir kurz deine Kooperation. Du wirst gebeten, deinen
            Ausweis bereitzustellen, um deine Identität zu bestätigen und die
            rechtsverbindliche Erklärung zu unterzeichnen.
          </UI.Typography>
        </div>
        <div className="my-[56px]">
          <UI.Icon icon={UserIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Ausweis und rechtsverbindliche Erklärung
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Der Ausweis dient nur zur Überprüfung deiner Person. Diesen zeigst
            du einfach unserem Kollegen vor Ort. <br></br>
            <br></br>Zusätzlich wirst du von uns eine{' '}
            <a
              href="/echtsverbindliche-erklaerung.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="underline text-primary-500"
            >
              rechtsverbindliche Erklärung
            </a>{' '}
            unterzeichnen.
          </UI.Typography>
        </div>
      </UI.Container>
      <UI.Container>
        <div className="grid md:grid-cols-2 gap-8 mt-[56px]">
          <div>
            <UI.Typography variant="h2" weight="bold">
              Mehr als nur ein{' '}
              <span className="text-primary-500">Schlüsseldienst</span>.
            </UI.Typography>
            <div className="mt-[56px]">
              <UI.Typography
                variant="md"
                className="mt-6 !text-[18px] text-primary-900 leading-8"
              >
                Wir bieten nicht nur den Schlüsseldienst an, sondern auch
                professionelle Schlosserarbeiten für deine Sicherheit.
              </UI.Typography>

              <UI.Button
                variant="contained"
                onClick={() => router.push('/leistungen')}
                iconVisible={true}
                iconPosition={'right'}
                icon={<ArrowSmallRightIcon className="w-8" />}
                className="w-full my-8 font-bold flex items-center py-4 max-w-[300px]"
              >
                Alle Leistungen ansehen
              </UI.Button>
            </div>
          </div>
          <div className="relative">
            <Image
              width={1920}
              height={1280}
              layout="cover"
              src="/images/mehr-als-ein-schluesseldienst.jpg"
              alt="Professioneller Schlosser in seiner Werkstatt"
              className="rounded-xl overflow-hidden"
            />
          </div>
        </div>
      </UI.Container>
      {/* Content Section END */}
      {/* FAQ START */}
      <UI.Container className="pb-16">
        <UI.Typography variant="h2" className="font-bold mt-[168px] mb-8">
          Häufig gestellte Fragen
        </UI.Typography>
        <UI.Faq items={faqData} />
      </UI.Container>
      {/* FAQ END */}
      {/* Call Section START */}
      <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
        <UI.Typography
          variant="h2"
          align="center"
          className="text-white font-bold"
        >
          Rufe uns jetzt an.
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
    </Layout>
  );
};

export default IndexPage;
