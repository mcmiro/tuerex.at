import React from 'react';
import Layout from '../components/layouts';
import { UI } from '../components';
import Link from 'next/link';
import { contactData } from 'constants/contact';
import { PhoneIcon } from '@heroicons/react/24/outline';

const IndexPage = () => {
  return (
    <Layout
      canonical="https://www.tuerex.at/abwicklung"
      title="Informationen zur Abwicklung | TÜREX"
      metaDescription="Erfahre mehr über die Abwicklung - von Beauftragung bis Tipps für die Wartezeit. Jetzt mehr erfahren."
    >
      <header className="mb-16">
        <UI.Navigation isActiveHamburger={true} />
        <UI.HeaderSub title="Abwicklung" />
        <UI.Breadcrumbs />
      </header>
      {/* Content Section START */}
      <UI.Container element="main" widthMode="full">
        <UI.Container element="section">
          <div className="mt-[56px]">
            <UI.Typography
              variant="h3"
              align="center"
              weight="bold"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              Informationen zur Abwicklung
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Hier findest du Informationen rund um den Ablauf unserer
              Türöffnungen.
            </UI.Typography>
          </div>
        </UI.Container>
        <UI.Container>
          <div className="mt-[56px]">
            <UI.Typography
              variant="h3"
              align="center"
              weight="bold"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              Beauftragung, Preis und Wartezeit
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              So beauftragst du unseren{' '}
              <Link href={'/'} className="underline">
                Schlüsseldienst in Wien
              </Link>
              .
            </UI.Typography>
          </div>
        </UI.Container>
        <UI.Container>
          <div className="mt-[56px]">
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              1. Einfach anrufen (Rund um die Uhr erreichbar)
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Um unseren Schlüsseldienst zu beauftragen, musst du nur anrufen.{' '}
              <br></br>
              Unsere 24/7 Hotline erwartet deinen Anruf und führt dich durch den
              weiteren Prozess.
            </UI.Typography>
            <div className="mt-8">
              <a
                href={`tel:${contactData.phone}`}
                className="w-full max-w-[300px] mx-auto flex gap-4 items-center justify-center font-bold bg-primary-500 py-3 px-6 text-base rounded-lg text-white"
              >
                Jetzt anrufen
                <PhoneIcon className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          <div className="mt-[56px]">
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              2. Situationsanalyse
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Unser professionelles Team erkundigt sich während des Telefonats
              sorgfältig nach der Situation, berücksichtigt dabei spezifische
              Gegebenheiten (z. B. die Art der Tür, etc.) und stellt sicher,
              dass wir alle relevanten Informationen haben.
            </UI.Typography>
          </div>
          <div className="mt-[56px]">
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              3. Preis
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Nach dieser gründlichen Analyse teilen wir dir gleich per Telefon
              den erwarteten Fixpreis mit. Sobald du einverstanden bist, machen
              wir uns auf den Weg zu dir. Genauere Informationen über die Preise
              für jeweilige Leistungen kannst du hier einsehen.
            </UI.Typography>
            <Link
              href={'/preise'}
              className="border-b border-primary-500 text-primary-500"
            >
              Preise
            </Link>
          </div>
          <div className="mt-[56px]">
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              4. Ermittlung der Wartezeit
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Sobald wir alle Informationen haben, teilen wir dir die
              voraussichtliche Wartezeit mit. Im Normalfall sind wir innerhalb
              von maximal 45 Minuten bei dir, um rasch eine Lösung zu bieten.
            </UI.Typography>
            <Link
              href={'/#tipps'}
              className="border-b border-primary-500 text-primary-500"
            >
              Tipps für die Wartezeit
            </Link>
          </div>
        </UI.Container>
        <UI.Container>
          <div className="mt-[56px]">
            <UI.Typography
              variant="h3"
              align="center"
              weight="bold"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              Türöffnung und Bestätigung
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Sobald wir eintreffen, starten wir ohne zusätzliches Warten mit
              der Türöffnung.
            </UI.Typography>
          </div>
          <div className="mt-[56px]">
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              Rasche Erledigung
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Ob zugeschlagene Tür oder eine verschlossene Sicherheitstür,
              unsere Profis haben die passende Lösung für eine schnelle und
              ordnungsgemäße Erledigung.
            </UI.Typography>
          </div>
          <div className="my-[56px]">
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              Bestätigung
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Nach der Öffnung wirst du gebeten, deinen Ausweis bereitzustellen,
              um deine Identität zu bestätigen und die rechtsverbindliche
              Erklärung zu unterzeichnen. Dies ist gesetzlich vorgeschrieben,
              und wir sind dazu verpflichtet, höchste Seriosität und Transparenz
              zu bieten.
            </UI.Typography>
          </div>
        </UI.Container>
      </UI.Container>
      {/* Content Section END */}
    </Layout>
  );
};

export default IndexPage;
