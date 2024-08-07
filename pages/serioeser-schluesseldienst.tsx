import React from 'react';
import Image from 'next/image';
import Layout from '../components/layouts';
import { UI } from '../components';
import WkoLogo from '../assets/images/wko-logo.svg';
import Link from 'next/link';
import serioeserSchluesseldienstStrucutreData from 'utils/structure-data/serioeser-schluesseldienst';

const SerioeserSchluesseldienstPage = () => {
  return (
    <Layout
      canonical="https://tuerex.at/serioeser-schluesseldienst"
      title="6 Tipps um seriösen Schlüsseldienst zu erkennen | TÜREX"
      metaDescription="6 Tipps die du beachten solltest, wenn du einen seriösen Schlüsseldienst in Wien suchst. Tipps vom Profi - jetzt mehr erfahren."
      jsonLd={serioeserSchluesseldienstStrucutreData}
    >
      {/* Hero Section START */}
      <header className="pb-32">
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
            <span className="text-primary-500">Seriösen Schlüsseldienst</span>{' '}
            in<br></br>
            Wien finden.
          </UI.Typography>
          <UI.Typography
            variant="h2"
            weight="bold"
            className="text-center pt-10 font-['Lexend'] "
          >
            6 Tipps vom Profi-Aufsperrdienst in Wien.
          </UI.Typography>
        </UI.Container>
      </header>
      <UI.Container element="main" widthMode="full">
        <UI.Container>
          <UI.Breadcrumbs
            className="rounded-full !bg-primary-50 !bg-opacity-50 px-8 "
            containerClassName="!py-3 text-primary-500"
          />
        </UI.Container>
        {/* Hero Section START */}
        {/* Content Section START */}
        <UI.Container className="mt-[64px]">
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            In diesem Artikel erfährst du, anhand welcher Kriterien du einen
            seriösen{' '}
            <Link href="/" className="underline">
              Schlüsseldienst in Wien
            </Link>{' '}
            erkennen kannst.
          </UI.Typography>
          <div className="mt-[56px] border-y border-gray-200 pb-3">
            <div className="flex justify-between w-full text-[18px] font-bold py-4 tracking-wide">
              Inhaltsverzeichnis
            </div>
            <ul className="pl-8 leading-9">
              <li className="list-disc">
                <Link href="#tipp-one">Ortsansässigkeit</Link>
              </li>
              <li className="list-disc">
                <Link href="#tipp-two">Behördliche Befähigung</Link>
              </li>
              <li className="list-disc">
                <Link href="#tipp-tree">
                  Transparente Preise (Keine versteckten Kosten)
                </Link>
              </li>
              <li className="list-disc">
                <Link href="#tipp-four">Schadenfreie Türöffnung</Link>
              </li>
              <li className="list-disc">
                <Link href="#tipp-five">Sicherheit</Link>
              </li>
              <li className="list-disc">
                <Link href="#tipp-six">Bezahlung</Link>
              </li>
            </ul>
          </div>
        </UI.Container>
        {/* Content Section END */}
        {/* Tipp #1 START */}
        <UI.Container element="section" className="mt-[56px]" id="tipp-one">
          <div className="grid md:grid-cols-2 gap-8 mt-[56px]">
            <div className="order-2 md:order-1">
              <UI.Typography variant="h2" className="font-bold">
                <span className="text-primary-500">Tipp #1</span>
                <br></br>
                Achte auf die Ortsansässigkeit.
              </UI.Typography>
              <div className="mt-[24px]">
                <UI.Typography
                  variant="md"
                  className="mt-2 !text-[18px] text-primary-900 leading-8"
                >
                  Unseriöse Schlüsseldienste sind oft nicht in Wien ansässig,
                  sondern in anderen Städten oder sogar Ländern. Sie werben mit
                  günstigen Preisen, aber die tatsächlichen Kosten fallen am
                  Ende sehr hoch aus.
                  <br></br>
                  <br></br>
                  Wenn du einen Schlüsseldienst in Wien beauftragst, solltest du
                  darauf achten, dass dieser auch in Wien oder zumindest in
                  Wien-Umgebung ansässig ist. Weiterer Vorteil davon ist, dass
                  die Anfahrtskosten fair sind.
                </UI.Typography>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                width={1920}
                height={1280}
                objectFit="cover"
                src="/images/ortsansaessig-in-wien.jpg"
                alt="Wien von oben fotografiert"
                className="overflow-hidden rounded-xl"
              />
            </div>
          </div>
        </UI.Container>
        {/* Tipp #1 END */}
        {/* Tipp #2 START */}
        <UI.Container className="my-[56px]" id="tipp-two">
          <UI.Typography variant="h2" className="font-bold">
            <span className="text-primary-500">Tipp #2</span>
            <br></br>
            Achte auf die behördliche Befähigung des Schlüsseldienstes.
          </UI.Typography>
          <div className="mt-[24px]">
            <div className="mt-2 !text-[18px] text-primary-900 leading-8">
              In Österreich ist es für Schlüsseldienste gesetzlich
              vorgeschrieben, eine Befähigungsprüfung zu absolvieren.
              <br></br>
              <br></br>
              Diese Prüfung wird von der Wirtschaftskammer Wien durchgeführt und
              umfasst unter anderem folgende Themen:
              <br></br>
              <ul className="pl-8">
                <li className="list-disc">Schlosstechnik</li>
                <li className="list-disc">Sicherheit</li>
                <li className="list-disc">Recht</li>
              </ul>
              <br></br>
              Ein seriöser Schlüsseldienst wird dir auf Nachfrage gerne einen
              Nachweis über seine behördliche Befähigung vorlegen.
            </div>
          </div>
        </UI.Container>
        {/* Tipp #2 END */}
        {/* Call Section START */}
        <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
          <UI.Typography
            variant="h2"
            align="center"
            className="font-bold text-white"
          >
            Wir sind befähigt!
          </UI.Typography>
          <UI.Typography
            variant="lg"
            align="center"
            className="!text-h5 mt-8 text-white !leading-8"
          >
            Unser Unternehmen ist behördlich befähigt und von ausgebildeten
            Schlossern geführt.
          </UI.Typography>
          <UI.Call mode="dark" />
          <UI.Container className="flex justify-center gap-4 pt-12">
            <div className="relative w-24 h-8">
              <Image src={WkoLogo} objectFit="fill" alt="wkö logo" />
            </div>
            <UI.Typography
              variant="sm"
              className="font-['Lexend'] text-[10px] text-white"
            >
              Mitglied der Wirtschaftskammer Wien
            </UI.Typography>
          </UI.Container>
        </UI.Container>
        {/* Call Section END */}
        {/* Tipp #3 START */}
        <UI.Container className="my-[56px]" id="tipp-tree">
          <div className="grid md:grid-cols-2 gap-8 mt-[56px]">
            <div className="order-2 md:order-1">
              <UI.Typography variant="h2" className="font-bold">
                <span className="text-primary-500">Tipp #3</span>
                <br></br>
                Achte auf versteckte Kosten.
              </UI.Typography>
              <div className="mt-[24px]">
                <UI.Typography
                  variant="md"
                  className="mt-2 !text-[18px] text-primary-900 leading-8"
                >
                  Ein seriöser Schlüsseldienst wird dir keine versteckten Kosten
                  berechnen. Alle Leistungen und Kosten werden vor Beginn der
                  Arbeiten transparent aufgelistet.
                </UI.Typography>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                width={1920}
                height={1280}
                objectFit="cover"
                src="/images/keine-versteckte-kosten.jpg"
                alt="Schlüßeldienst Kunde bezahlt die Türöffnung. Klare Preisgestaltung"
                className="overflow-hidden rounded-xl"
              />
            </div>
          </div>
        </UI.Container>
        {/* Tipp #3 END */}
        {/* Price Section START */}
        <div className="bg-[#f5f5f5] pt-16 pb-8" id="prices">
          <UI.Container>
            <UI.Typography
              variant="h2"
              align="center"
              className="mt-4 font-bold"
            >
              Unsere
              <br></br>
              <span className="text-primary-500">Fixpreise</span>
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
        {/* Tipp #4 START */}
        <UI.Container className="my-[56px]" id="tipp-four">
          <div className="grid md:grid-cols-2 gap-8 mt-[56px]">
            <div className="order-2 md:order-1">
              <UI.Typography variant="h2" className="font-bold">
                <span className="text-primary-500">Tipp #4</span>
                <br></br>
                Schadenfreie Öffnung.
              </UI.Typography>
              <div className="mt-[24px]">
                <UI.Typography
                  variant="md"
                  className="mt-2 !text-[18px] text-primary-900 leading-8"
                >
                  Ein seriöser Schlüsseldienst wird immer versuchen, die Tür
                  möglichst beschädigungsfrei zu öffnen. Sollte dies nicht
                  möglich sein, wird er dich vorher darüber informieren und die
                  Kosten für einen Schlosswechsel transparent aufschlüsseln.
                </UI.Typography>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                width={1920}
                height={1280}
                objectFit="cover"
                src="/images/schadenfreie-oeffnung.jpg"
                alt="Ein Mitarbeiter öffnet eine Tür schadfrei"
                className="overflow-hidden rounded-xl"
              />
            </div>
          </div>
        </UI.Container>
        {/* Tipp #4 END */}
        {/* Payment Section START */}
        <div id="payment">
          <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
            <div className="px-4">
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
            </div>
          </UI.Container>
        </div>
        {/* Payment Section END */}
        {/* Tipp #5 START */}
        <UI.Container className="mt-[56px]" id="tipp-five">
          <UI.Typography variant="h2" className="font-bold">
            <span className="text-primary-500">Tipp #5</span>
            <br></br>
            Sicherheit.
          </UI.Typography>
          <div className="mt-[24px]">
            <UI.Typography
              variant="md"
              className="mt-2 !text-[18px] text-primary-900 leading-8"
            >
              Ein seriöser Schlüsseldienst wird nach der Öffnung der Tür nach
              deinem Ausweis bitten, und die Richtigkeit deiner Person mittels
              einer{' '}
              <span className="underline">rechtsverbindlichen Erklärung</span>{' '}
              bestätigen lassen.
            </UI.Typography>
          </div>
        </UI.Container>
        {/* Tipp #5 END */}
        {/* Tipp #6 START */}
        <UI.Container className="my-[56px]" id="tipp-six">
          <UI.Typography variant="h2" className="font-bold">
            <span className="text-primary-500">Tipp #6</span>
            <br></br>
            Bezahlung.
          </UI.Typography>
          <div className="mt-[24px]">
            <UI.Typography
              variant="md"
              className="mt-2 !text-[18px] text-primary-900 leading-8"
            >
              Ein seriöser Schlüsseldienst akzeptiert verschiedene
              Zahlungsmöglichkeiten, wie Bargeld, Kreditkarte oder
              Bankomatkarte. So kannst du den Rechnungsbetrag bequem begleichen.
            </UI.Typography>
          </div>
        </UI.Container>
        {/* Tipp #6 END */}
      </UI.Container>
    </Layout>
  );
};

export default SerioeserSchluesseldienstPage;
