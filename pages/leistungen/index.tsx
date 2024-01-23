import React from 'react';
import Layout from 'components/layouts';
import { UI } from 'components';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import axios from 'axios';
import DistrictItem from 'models/districts-content';

const IndexPage: React.FC<{ data: DistrictItem[] }> = ({ data }) => {
  return (
    <Layout
      title="Unsere Leistungen | TÜREX"
      metaDescription="Erfahre alles über unsere Dienstleistungen im Bereich Schlosserarbeiten. Jetzt mehr entdecken."
    >
      <header className="mb-16">
        <UI.HeaderSub title="Leistungen" />
        <UI.Breadcrumbs />
      </header>
      {/* Content Section START */}
      <UI.Container>
        <div className="mt-[56px]">
          <UI.Icon icon={CheckBadgeIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Leistungen
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Erlebe die umfassenden Dienstleistungen von Türex. Unsere Services
            sind darauf ausgerichtet, dir nicht nur bei Türöffnungen zu helfen,
            sondern umfassen alle Schlosserarbeiten, um deine Sicherheit auf ein
            neues Niveau zu heben.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Icon icon={CheckBadgeIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Schlüsseldienst - rund um die Uhr für dich da
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Wenn du dich vor verschlossenen Türen wiederfindest oder einen
            Schlüsselbruch erlebst, kannst du auf unseren{' '}
            <Link href="/" className="underline">
              24/7 Schlüsselnotdienst
            </Link>{' '}
            zählen. Unsere Experten bieten nicht nur schnelle und schadfreie
            Türöffnungen, sondern kümmern sich auch um individuelle Reparaturen
            nach deinen Bedürfnissen.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Icon icon={CheckBadgeIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Leistungen rund um Schlosserarbeiten
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Unsere Dienstleistungen gehen über den traditionellen
            Schlüsselnotdienst hinaus. Wir setzen auf modernste Technologien und
            bewährte Methoden, um deine Sicherheit zu maximieren. Von
            Zylinderanlagen bis zu individuellen Schließsystemen legen wir
            höchste Wert auf Qualität und Zuverlässigkeit, um eine umfassende
            Optimierung deiner Sicherheit und Privatsphäre zu gewährleisten.
            Vertraue auf unsere Erfahrung und Hingabe, um die Sicherheit deines
            Zuhauses oder Unternehmens auf das nächste Level zu heben.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Icon icon={CheckBadgeIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Zylinderanlagen
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Unsere maßgeschneiderten Zylinderanlagen-Lösungen bieten nicht nur
            erstklassigen Schutz, sondern auch eine benutzerfreundliche
            Handhabung. Mit modernster Technologie und hochwertigen Materialien
            gewährleisten wir maximale Sicherheit für dein Zuhause oder
            Unternehmen.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Icon icon={CheckBadgeIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Schlossanlagen
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Vertraue auf unsere Experten für die professionelle Installation und
            Wartung hochwertiger Schlösser. Unsere Schlossanlagen zeichnen sich
            durch Robustheit und Präzision aus, um einen zuverlässigen Schutz
            vor unbefugtem Zugang zu gewährleisten.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Icon icon={CheckBadgeIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Schließanlagen
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Effiziente Zugangskontrolle ist entscheidend, und unsere
            intelligenten Schließanlagen bieten genau das. Sie ermöglichen eine
            flexible und sichere Verwaltung von Berechtigungen, um den
            individuellen Anforderungen deines Sicherheitskonzepts gerecht zu
            werden. Wir montieren die ideale Schließanlage für dich.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Icon icon={CheckBadgeIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Sicherheitsbeschlag
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Unsere verstärkten Sicherheitsbeschläge bieten nicht nur eine
            ästhetische Ergänzung zu deinen Türen, sondern auch eine zusätzliche
            Schutzschicht. Hergestellt aus robusten Materialien, tragen sie dazu
            bei, potenzielle Schwachstellen zu stärken und die Sicherheit deines
            Zuhauses zu erhöhen.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Icon icon={CheckBadgeIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Einbruchschutz für Türen
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Unsere umfassenden Sicherheitsmaßnahmen für Türen beruhen auf einer
            Kombination aus modernster Sicherheitstechnologie und bewährten
            Schutzvorrichtungen. Wir bieten individuelle Lösungen, die auf deine
            spezifischen Anforderungen zugeschnitten sind, um ein Höchstmaß an
            Sicherheit zu gewährleisten.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Icon icon={CheckBadgeIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Balkenschloss
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Das Balkenschloss ist eine effektive Ergänzung für deine
            Eingangstür. Es bietet zusätzliche Sicherheit durch seine robuste
            Bauweise und einfache Bedienung.
          </UI.Typography>
        </div>
        <div className="my-[56px]">
          <UI.Icon icon={CheckBadgeIcon} />
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Individuelle Reparaturen
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Unsere Schlosser bieten nicht nur Standardlösungen, sondern auch
            individuelle Reparaturen, die sich nach deinen Wünschen richten. Wir
            passen Schließsysteme und Sicherheitsvorkehrungen speziell an deine
            Bedürfnisse an, um eine maßgeschneiderte Sicherheitslösung zu
            gewährleisten.
          </UI.Typography>
        </div>
      </UI.Container>
      {/* Content Section END */}
      <UI.Container>
        <UI.Typography variant="h3">Unsere Tätigkeitsgebiete:</UI.Typography>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[28px] mb-[56px]">
          {data.map((el: any, index: number) => (
            <div
              key={index}
              className="bg-primary-50 p-4 m-1 rounded-lg text-center"
            >
              <Link
                href={`/wien/${el.postalCode}`}
                className="border-b border-black"
              >
                Wien {el.postalCode}
              </Link>
            </div>
          ))}
        </div>
      </UI.Container>
    </Layout>
  );
};

export default IndexPage;

export const getStaticProps = async () => {
  const response = await axios.get(
    `${process.env.NEXT_LOCAL_URL}/districts.json`
  );
  const data = response.data.data;

  return {
    props: { data },
  };
};
