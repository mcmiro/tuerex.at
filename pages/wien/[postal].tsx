import React from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Layout from "components/layouts";
import Reviews from "components/molecules/reviews";
import { UI } from "components";
import WkoLogo from "../../assets/images/wko-logo.svg";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  CurrencyEuroIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import NowOpen from "components/molecules/now-open";
import Link from "next/link";

export interface DistrictData {
  postalCode: string;
  districtName?: string;
  description?: string;
  proofSectionHeadline?: string;
  proofSectionCopy?: string;
  proofHeadlineOne?: string;
  proofCopyOne?: string;
  proofHeadlineTwo?: string;
  proofCopyTwo?: string;
  proofHeadlineThree?: string;
  proofCopyThree?: string;
  pricesSectionCopy?: string;
  differenceSectionCopy?: string;
  waitingTime?: { districtPart: string; time: string }[];
  faqs?: { question: string; answer: string }[];
}

export interface ContentProps {
  data: DistrictData;
  allDistricts: DistrictData[];
}

const IndexPage = ({ data, allDistricts }: ContentProps) => {
  const otherDistricts = (allDistricts || [])
    .filter((d) => d?.postalCode && d.postalCode !== data.postalCode)
    .sort((a, b) => a.postalCode.localeCompare(b.postalCode));

  // Dynamic JSON-LD schema for Google SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["EmergencyService", "Locksmith"],
    name: `Schlüsseldienst ${data.postalCode} Wien & Aufsperrdienst ${data.postalCode} Wien`,
    image: "https://tuerex.at/logo.svg",
    "@id": `https://tuerex.at/wien/${data.postalCode}`,
    url: `https://tuerex.at/wien/${data.postalCode}`,
    telephone: "+436763741204",
    email: "info@tuerex.at",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Oldenburggasse 6",
      addressLocality: "Wien",
      addressRegion: "Vienna",
      postalCode: data.postalCode,
      addressCountry: "AT",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+436763741204",
      contactType: "Customer Service",
      availableLanguage: ["German"],
    },
    serviceType: [
      `Schlüsseldienst ${data.postalCode} Wien`,
      `Aufsperrdienst ${data.postalCode} Wien`,
      "Öffnung zugefallener Standardtüren",
      "Öffnung zugefallener Sicherheitstüren",
      "Öffnung versperrter Standardtüren",
      "Öffnung versperrter Sicherheitstüren",
      "Zylindertausch",
    ],
    areaServed: {
      "@type": "Place",
      name: `${data.districtName} (${data.postalCode})`,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.1512,
      longitude: 16.3313,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    description: data.description,
    sameAs: [
      "https://www.instagram.com/tuerex_schluesseldienst",
      "https://www.linkedin.com/company/tuerex-schluesseldienst",
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tuerex.at/wien/${data.postalCode}`,
      name: `Schlüsseldienst ${data.postalCode} Wien - ab 89€ Fixpreis | TÜREX`,
      description: data.description,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "89",
      url: `https://tuerex.at/wien/${data.postalCode}#preise`,
      availability: "https://schema.org/InStock",
      validFrom: "2022-01-01",
      description: data.pricesSectionCopy,
    },

    // FAQ Section
    ...(data.faqs && Array.isArray(data.faqs) && data.faqs.length > 0
      ? {
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: data.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        }
      : {}),
    // Reviews Section
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Organization",
        name: "TÜREX",
      },
      reviewBody:
        // Use the same dynamic review text as rendered in the UI
        `Unsere Kunden bewerten uns regelmäßig mit 5 von 5 Sternen. Besonders geschätzt werden unsere schnelle Hilfe und transparente Preise. Hier kannst du dir ansehen, was Kunden über unseren Schlüsseldienst ${data.postalCode} Wien sagen.`,
    },
    // Waiting time per district part
    ...(data.waitingTime &&
    Array.isArray(data.waitingTime) &&
    data.waitingTime.length > 0
      ? {
          potentialAction: data.waitingTime.map((item) => ({
            "@type": "InformAction",
            name: `Wartezeit für ${item.districtPart}`,
            description: `Aktuelle Wartezeit: ${item.time}`,
          })),
        }
      : {}),
  };

  return (
    <Layout
      title={`Schlüsseldienst ${data.postalCode} Wien - ab 89€ Fixpreis | TÜREX`}
      metaDescription={data.description}
      jsonLd={jsonLd}
      canonical={`https://tuerex.at/wien/${data.postalCode}/`}
    >
      {/* Hero Section START */}
      <header className="pb-8">
        <UI.Navigation isActiveHamburger={true} />
        <UI.Container className="flex flex-col items-center w-full gap-8 pb-8">
          {/* Now Open START */}
          <NowOpen />
          {/* Now Open END */}

          {/* Headlines START */}
          <UI.Typography
            variant="h1"
            weight="bold"
            className="text-center pt-10 md:text-[46px] font-['Lexend'] md:!leading-[1.2]"
          >
            Schlüsseldienst <br />
            <span className="text-primary-500">{data.postalCode} Wien</span>
          </UI.Typography>

          <UI.Typography
            variant="h2"
            className="max-w-4xl mt-2 !text-[18px] md:!text-[24px] text-center leading-normal"
          >
            Mit{" "}
            <span className=" text-primary-500">
              24h Aufsperrdienst {data.postalCode} Wien
            </span>
            , für schadlose <br />
            Türöffnungen in ganz Wien {"-"} {data.districtName} <br />
            <span className=" text-primary-500"> bereits ab 89€ Fixpreis.</span>
          </UI.Typography>
          {/* Headlines END */}

          {/* Claims START */}
          <ul className="flex items-center justify-center w-full max-w-3xl gap-12 py-12 md:gap-16">
            <li className="flex items-center gap-1 text-[16px] font-['Lexend'] text-gray-700 ">
              <CheckIcon className="w-5" />
              <Link href="#preise" className="underline underline-offset-4">
                Fixpreise
              </Link>
            </li>
            <li className="flex items-center gap-1 text-[16px] font-['Lexend'] text-gray-700">
              <CheckIcon className="w-5" />{" "}
              <Link
                href="#top-bewertung"
                className="underline underline-offset-4"
              >
                Top-Bewertung
              </Link>
            </li>
          </ul>
          {/* Claims END */}

          {/* Call CTA START */}
          <UI.Call />
          {/* Call CTA END */}
        </UI.Container>
      </header>
      {/* Hero Section END */}

      {/* Social Proof START */}
      <UI.Container widthMode="full" className="relative py-6 bg-gray-50">
        <section className="flex flex-col items-center justify-center gap-4 md:flex-row ">
          <div className="relative w-24 h-8">
            <Image
              src={WkoLogo}
              layout="fill"
              alt="Logo Wirtschaftskammer Wien (WKO)"
            />
          </div>

          <UI.Typography
            variant="sm"
            className="text-center font-['Lexend'] text-[10px] "
          >
            Behördlich befähigt
          </UI.Typography>
        </section>
      </UI.Container>
      {/* Social Proof END */}

      {/* Breadcrumbs START */}
      <nav className="flex justify-center my-8">
        <UI.Breadcrumbs
          className="px-6 rounded-full bg-gray-50"
          containerClassName="leading-tight text-primary-500"
        />
      </nav>
      {/* Breadcrumbs END */}

      {/* Proof Section START */}
      <UI.Container element="section" className="py-[56px]">
        <UI.Typography variant="h2" weight="bold" align="center">
          <span className="text-primary-500">
            Schlüsseldienst {data.postalCode} Wien:
          </span>{" "}
          <br />
          {data.proofSectionHeadline}
        </UI.Typography>
        <UI.Typography
          variant="lg"
          align="center"
          className="max-w-4xl mx-auto mt-6 leading-8 text-primary-900"
        >
          {data.proofSectionCopy}
        </UI.Typography>
        <ul className="flex flex-col lg:flex-row justify-start lg:justify-between gap-8 mt-[98px]">
          <li className="w-full lg:w1/3">
            <UI.Icon icon={ClockIcon} />
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              {data.proofHeadlineOne}
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[16px] text-primary-900 leading-6"
            >
              {data.proofCopyOne}
            </UI.Typography>
          </li>
          <li className="w-full lg:w1/3">
            <UI.Icon icon={KeyIcon} />
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              {data.proofHeadlineTwo}
            </UI.Typography>

            <UI.Typography
              variant="md"
              className="mt-6 !text-[16px] text-primary-900 leading-6"
            >
              {data.proofCopyTwo}
            </UI.Typography>
          </li>
          <li className="w-full lg:w1/3">
            <UI.Icon icon={CurrencyEuroIcon} />
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              {data.proofHeadlineThree}
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[16px] text-primary-900 leading-6"
            >
              {data.proofCopyThree}
            </UI.Typography>
          </li>
        </ul>
      </UI.Container>
      {/* Proof Section END */}

      {/* Price Section START */}
      <div className="bg-[#f5f5f5] pt-16 pb-8" id="preise">
        <UI.Container>
          <UI.Typography
            variant="h2"
            align="center"
            className="max-w-4xl mx-auto mt-4 font-bold"
          >
            <span className="text-primary-500">Kosten und Preise</span>
            <br></br> für Schlüsseldienst & Aufsperrdienst {data.postalCode}{" "}
            Wien
          </UI.Typography>
          <UI.Typography variant="lg" align="center" className="mt-8">
            {data.pricesSectionCopy}
          </UI.Typography>
          <UI.PriceTable />
        </UI.Container>
      </div>
      {/* Price Section END */}

      {/* Price Info START */}
      <UI.Container
        id="kosten-verstehen"
        element="section"
        widthMode="full"
        className="bg-gray-100 py-[56px]"
      >
        <UI.Container>
          <UI.Typography variant="lg">
            Mehr über die Kosten erfahren
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-2">
            Warum kosten Schlüsseldienste / Aufsperrdienste in {data.postalCode}{" "}
            Wien so viel?
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Die Kosten für einen Einsatz setzen sich aus mehreren Faktoren
            zusammen. Das gilt sowohl für den Schlüsseldienst {data.postalCode}{" "}
            Wien als auch für den Aufsperrdienst {data.postalCode} Wien.
            Preisentscheidend sind unter anderem die Tageszeit{" "}
            {"(Tag/Nacht, Uhrzeit, Sonn- und Feiertag)"}, die Art der
            Türöffnung, sowie Türart.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-4">
            Dazu haben wir einen kompakten Guide vorbereitet, der alle Preise
            transparent auflistet und verständlich erklärt, wie sich die Kosten
            und Zuschläge je nach Tageszeit und Wochentag zusammensetzen und
            welche Aufpreise je nach Öffnungsmethode möglich sind. Außerdem
            enthält er praktische Spartipps, mit denen du unnötige Kosten
            vermeidest. Unabhängig davon ob du dich gerade in {data.postalCode}{" "}
            Wien, oder in einem anderen Bezirk befindest.
          </UI.Typography>
          <UI.Button
            variant="contained"
            iconVisible={true}
            iconPosition={"right"}
            icon={<ArrowRightIcon className="w-6" />}
            className="flex items-center py-4 mt-12 font-bold"
          >
            <Link href="/preise" target="_blank">
              {" "}
              Mehr erfahren
            </Link>
          </UI.Button>
        </UI.Container>
      </UI.Container>
      {/* Price Info END */}

      {/* Bonus Club START */}
      <UI.Container element="section" className="py-[56px]" id="nachlass">
        <div className="grid md:grid-cols-2 gap-8 mt-[56px] pt-8 items-center">
          <div className="order-2">
            <UI.Typography
              variant="h3"
              className="flex flex-col gap-2 font-bold"
            >
              <span className="text-primary-500">20% Nachlass auf </span>{" "}
              Schlüsseldienst und Aufsperrdienst Leistungen <br /> in{" "}
              {data.postalCode} Wien erhalten
            </UI.Typography>
            <div className="mt-[24px]">
              <UI.Typography
                variant="md"
                className="mt-2 !text-[18px] text-primary-900 leading-8"
              >
                Wenn du im Bezirk {data.districtName}, in {data.postalCode}{" "}
                Wien, wohnst Mitglied im Vorteilsclub der Stadt Wien bist,
                erhältst du 20 Prozent Nachlass auf Türöffnungen sowie auf alle
                weiteren Leistungen. Zeige einfach vor Ort deine Mitgliedskarte
                des Vorteilsclubs, dann ziehen wir den Rabatt automatisch vom
                Preis ab. Weitere Informationen findest du auf{" "}
                <Link
                  href="https://vorteilsclub.wien.at/meine-vorteile/tuerex-schluesseldienst-aufsperrdienst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-primary-500 underline-offset-2 text-primary-500"
                >
                  unserem Profil bei Vorteilsclub Wien
                </Link>
                .
              </UI.Typography>
            </div>
          </div>
          <div className="order-1">
            <Image
              width={1920}
              height={1280}
              src="/images/20-prozent-nachlass-fuer-vorteilsclub-stadt-wien.svg"
              alt={`20% Nachlass auf alle Leistungen für Mitglieder des Stadt Wien Vorteilsclubs aus ${data.postalCode} Wien`}
              className="overflow-hidden rounded-xl"
            />
            <figcaption className="mt-2 italic font-medium text-center text-gray-700">
              Mitglieder des Vorteilsclubs der Stadt Wien aus <br /> Wien{" "}
              {data.districtName} erhalten 20% Ermäßigung
            </figcaption>
          </div>
        </div>
      </UI.Container>
      {/* Bonus Club END */}

      {/* Reviews Section START */}
      <UI.Container widthMode="full" className="mt-[56px]">
        <section
          id="top-bewertung"
          className="py-[56px] bg-gray-100 px-4"
          aria-label="Top-Bewertung"
        >
          <UI.Typography variant="h2" align="center" className="font-bold">
            <span className="text-primary-500">
              Top{"-"}Bewertung von Kunden
            </span>{" "}
            <br /> aus {data.postalCode} Wien.
          </UI.Typography>
          <UI.Typography
            variant="lg"
            align="center"
            className="!text-h5 py-12 max-w-4xl mx-auto"
          >
            Unsere Kunden bewerten uns regelmäßig mit 5 von 5 Sternen. Besonders
            geschätzt werden unsere schnelle Hilfe und transparente Preise. Hier
            kannst du dir ansehen, was Kunden über unseren Schlüsseldienst{" "}
            {data.postalCode} Wien sagen.
          </UI.Typography>
          <Reviews />
        </section>
      </UI.Container>
      {/* Reviews Section END */}

      {/* CTA Section START */}
      <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
        <UI.Typography
          variant="h3"
          align="center"
          className="font-bold text-white"
        >
          Rund um die Uhr in Wien {"-"}
          {data.districtName} erreichbar
        </UI.Typography>
        <UI.Typography
          variant="lg"
          align="center"
          className="max-w-5xl mx-auto !text-[18px] mt-8 leading-6  text-white"
        >
          Unser Aufsperrdienst {data.postalCode} Wien ist 24h täglich
          erreichbar. Egal ob du einen Schlüsselnotdienst in {data.postalCode}{" "}
          Wien in der Nacht benötigst, oder einfach einen zuverlässigen
          Schlosser am Tag. Unsere Telefonnummer ist immer gleich und immer
          erreichbar.
        </UI.Typography>
        <UI.Call mode="dark" />
      </UI.Container>
      {/* CTA Section END */}

      {/* √ District Waiting Time START */}
      <UI.Container element="section" className="py-[56px]" id="tipp-1">
        <div className="grid md:grid-cols-2 gap-12 mt-[56px] pt-8 items-center">
          <div className="order-2 md:order-1">
            <UI.Typography
              variant="h2"
              className="flex flex-col gap-2 font-bold"
            >
              <span className="text-xl text-primary-500">
                Aktuelle Wartezeit in Wien {data.districtName}
              </span>
              So lange dauert es, bis <br /> unser Schlüsseldienst{" "}
              {data.postalCode} bei dir ist
            </UI.Typography>
            <div className="mt-[24px]">
              <UI.Typography
                variant="md"
                className="mt-2 !text-[16px] text-primary-900 "
              >
                Die durchschnittliche Wartezeit in {data.postalCode} Wien
                beträgt derzeit zwischen 20 und 30 Minuten. Je nach
                Auftragslage, Tageszeit und deinem konkreten Standort im Bezirk
                kann sie jedoch variieren. Bitte beachte, dass es sich dabei nur
                um Richtwerte handelt. Die genaue Wartezeit erfährst du direkt
                von unseren Technikern zum Zeitpunkt deines Anrufs. Hier findest
                du eine Übersicht der aktuellen Wartezeiten pro Viertel in{" "}
                {data.postalCode} {data.districtName}.
              </UI.Typography>
              <ul className="flex flex-col gap-2 py-8 pt-6 list-inside">
                {Array.isArray(data.waitingTime) &&
                data.waitingTime.length > 0 ? (
                  data.waitingTime.map((item, idx) => (
                    <li
                      key={`${item.districtPart}-${idx}`}
                      className="list-disc"
                    >
                      <strong>{item.districtPart}:</strong> {item.time}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-600 list-disc">
                    Keine aktuellen Daten vorhanden.
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              width={1080}
              height={1080}
              src={`/images/bezirke/wien-karte-${data.postalCode}.svg`}
              alt={`${data.postalCode} Wien farblich hervorgehoben auf der Karte von Wien`}
              className="overflow-hidden rounded-xl"
            />
            <figcaption className="mt-2 italic font-medium text-center text-gray-700">
              Karte von {data.postalCode} Wien {"-"} {data.districtName}
            </figcaption>
          </div>
        </div>
      </UI.Container>
      {/* District Waiting Time END */}

      {/* √ Section - Schlüsseldienst vs. Aufsperrdienst Unterschied - START */}
      <UI.Container
        element="section"
        className="py-[56px]"
        id="unterschied-schluesseldienst-aufsperrdienst"
      >
        <div className="grid md:grid-cols-2 gap-28  my-[24px] pt-8 items-center">
          <div className="order-2 md:order-1">
            <UI.Typography
              variant="h3"
              className="flex flex-col gap-2 font-bold"
            >
              <span className="text-primary-500">
                Schlüsseldienst {data.postalCode} <br /> oder Aufsperrdienst{" "}
                {data.postalCode}:
              </span>{" "}
              was ist der Unterschied?
            </UI.Typography>
            <div className="mt-[24px]">
              <UI.Typography
                variant="md"
                className="mt-2 !text-[18px] text-primary-900 leading-8"
              >
                {data.differenceSectionCopy}
              </UI.Typography>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <Image
              width={1920}
              height={1280}
              src="/images/schluesseldienst-aufsperrdienst-unterschied.jpg"
              alt={`Monteur vom Schlüsseldienst ${data.postalCode} Wien sperrt eine Tür auf, im Einsatz als 24h Aufsperrdienst ${data.postalCode} Wien`}
              className="overflow-hidden rounded-xl"
            />
          </div>
        </div>
      </UI.Container>
      {/* Section - Schlüsseldienst vs. Aufsperrdienst Unterschied - END */}

      {/* √ FAQ START */}
      <UI.Container className="py-16" id="faq">
        <UI.Typography variant="h2" className="flex flex-col gap-2 font-bold">
          <span className="text-primary-500">Häufig gestellte Fragen</span>
          zum Schlüsseldienst {data.postalCode} Wien
        </UI.Typography>
        <div className="mt-16 mb-12">
          <UI.Typography
            variant="md"
            className="mt-2 !text-[18px] text-primary-900 leading-8"
          >
            Hier findest du die häufigsten Fragen unserer Kunden aus{" "}
            {data.postalCode} Wien und die Antworten auf diese. Falls deine
            Frage nicht dabei ist, zögere uns zu kontaktieren. Wir sind rund um
            die Uhr für dich da.
          </UI.Typography>
        </div>
        {/* Map district faqs to Faq component props */}
        {data.faqs && Array.isArray(data.faqs) && (
          <UI.Faq
            items={data.faqs.map((faq: any) => ({
              title: faq.question,
              content: faq.answer,
            }))}
          />
        )}
      </UI.Container>
      {/* FAQ END */}

      {/* √ Other Districts START */}
      <UI.Container id="andere-bezirke" className="py-[56px]">
        <UI.Typography
          variant="h3"
          weight="bold"
          className="font-['Lexend'] md:!leading-[1.2] py-8"
        >
          <span className="text-primary-500">
            Bist du nicht aus {data.postalCode} Wien?
          </span>
          <br></br>Kein Problem. Wir sind in allen Bezirken tätig.
        </UI.Typography>
        <UI.Typography
          variant="md"
          className="!text-[18px] text-primary-900 leading-8"
        >
          Unabhängig davon, in welchem Bezirk du einen{" "}
          <Link href="/" className="border-b border-black">
            Schlüsseldienst Wien
          </Link>{" "}
          oder{" "}
          <Link href="/" className="border-b border-black">
            Aufsperrdienst Wien
          </Link>{" "}
          benötigst, sind wir für dich da {"–"} rund um die Uhr, an jedem Tag im
          Jahr, ohne Ausnahme. Unsere Spezialisten kommen direkt zu dir vor Ort,
          egal in welchem Bezirk du dich befindest. Wenn du jedoch spezifische
          Informationen für deinen Bezirk nachlesen möchtest, klicke jetzt
          einfach auf deinen Bezirk und erfahre mehr.
        </UI.Typography>
        {/* Disctricts Loop START */}
        <UI.Container widthMode="full">
          <div className="grid grid-cols-2 gap-2 mt-8 md:grid-cols-5">
            {otherDistricts.map((d: DistrictData) => (
              <div
                key={d.postalCode}
                className="p-4 m-1 text-center rounded-lg bg-primary-50"
              >
                <Link
                  href={`/wien/${d.postalCode}`}
                  className="border-b border-black"
                >
                  {d.postalCode} Wien
                </Link>
              </div>
            ))}
          </div>
        </UI.Container>
        {/* Disctricts Loop  END */}
      </UI.Container>
      {/* Other Districts END */}
      {/* CTA Section START */}
      <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
        <UI.Typography
          variant="h3"
          align="center"
          className="font-bold text-white"
        >
          Jetzt Schlüsseldienst {data.districtName} Wien anrufen
        </UI.Typography>
        <UI.Typography
          variant="lg"
          align="center"
          className="max-w-5xl mx-auto !text-[18px] mt-8 leading-6  text-white"
        >
          Unser Schlüsseldienst in {data.postalCode} Wien ist jederzeit
          einsatzbereit und wartet auf deinen Anruf. Rufe uns jetzt an. Unser
          Aufsperrdienst ist in wenigen Minuten an deinem Standort in{" "}
          {data.postalCode} und bietet dir professionelle Hilfe. Schnell,
          zuverlässig und effizient. Zum Fixpreis ohne versteckte Kosten.
        </UI.Typography>
        <UI.Call mode="dark" />
      </UI.Container>
      {/* CTA Section END */}
    </Layout>
  );
};

export default IndexPage;

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public", "districts.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const districts = JSON.parse(fileContents).data;
  const paths = districts.map((el: any) => ({
    params: { postal: el.postalCode },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async (context: any) => {
  const { params } = context;
  const postalCode = params.postal;

  const filePath = path.join(process.cwd(), "public", "districts.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const allDistricts = JSON.parse(fileContents).data || [];
  const data = allDistricts.find(
    (el: any) => el.postalCode?.toString() === postalCode
  );

  if (!data) {
    return { notFound: true };
  }

  return { props: { data, allDistricts } };
};
