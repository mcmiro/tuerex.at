import React from "react";
import Layout from "../components/layouts";
import { UI } from "../components";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  CurrencyEuroIcon,
  LockOpenIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import router from "next/router";
import faqDataPricesPage from "constants/faq/prices-page";

const IndexPage = () => {
  return (
    <Layout
      canonical="https://tuerex.at/preise"
      title="Schlüsseldienst Wien Kosten und Preise verständlich erklärt | Fixpreise | TÜREX"
      metaDescription="Schlüsseldienst Wien Kosten - Fixpreise transparent auf einen Blick, inkl. übersichtlicher Preistabelle, Erklärungen & Tipps um Kosten zu sparen."
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
            className="text-center pt-10 font-['Lexend'] md:text-[48px] md:!leading-[1.1]"
          >
            Schlüsseldienst Wien <br />
            <span className="text-primary-500">Kosten und Preise</span>
          </UI.Typography>
          <UI.Typography
            variant="lg"
            align="center"
            className="max-w-5xl mt-8 !text-[18px] leading-6 text-gray-800"
          >
            Sobald die Tür zufällt, kommt meistens sofort die Frage auf: Was
            kostet ein Schlüsseldienst, wenn man sich ausgesperrt hat? Hier
            bekommst du alle Infos zu den Kosten und den Preisen von unserem{" "}
            <Link
              href="/"
              className="underline text-primary-500 decoration-primary-500 underline-offset-2"
            >
              Schlüsseldienst und Aufsperrdienst Wien
            </Link>
            , inklusive Preisliste und Informationen darüber, wie die Kosten
            entstehen und wie hoch sie sein dürfen.
          </UI.Typography>
          <ul className="flex items-center justify-between pt-12 w-full max-w-[480px]">
            <li className="flex items-center gap-1 text-[18px] md:text-[22px] font-['Lexend'] text-gray-800">
              <CheckIcon className="w-5" />
              Fixpreise
            </li>
            <li className="flex items-center gap-1 text-[18px] md:text-[22px] font-['Lexend'] text-gray-800">
              <CheckIcon className="w-5" /> Behördlich befähigt
            </li>
          </ul>
          <UI.Call />
        </UI.Container>
      </header>
      {/* Hero Section END */}

      <UI.Container element="main" widthMode="full">
        <UI.Container>
          <UI.Breadcrumbs
            className="rounded-full !bg-primary-50 !bg-opacity-50 px-8 "
            containerClassName="!py-3 text-primary-500"
          />
        </UI.Container>

        {/* Content Section START */}
        <UI.Container className="mt-[64px]">
          {/* Table of contents START */}
          <nav className="mt-[56px] border-y border-gray-200 py-8">
            <div className="flex justify-between w-full text-[18px] font-bold pb-4 tracking-wide">
              Inhaltsverzeichnis
            </div>
            <ul className="flex flex-col gap-4 pl-1">
              {/* 1. Group */}
              <li>
                <strong>1. Schlüsseldienst Wien Kosten</strong>
                <ul className="flex flex-col gap-1 pl-4 mt-2">
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#schluesseldienst-preisliste"
                      aria-label="Schlüsseldienst Wien Kosten - Preisliste ansehen"
                    >
                      Schlüsseldienst Preisliste ansehen
                    </Link>
                  </li>
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#kosten-verstehen"
                      aria-label="Schlüsseldienst Wien Kosten verstehen"
                    >
                      Kosten und Zuschläge verstehen
                    </Link>
                  </li>
                </ul>
              </li>
              {/* 2. Group */}
              <li>
                <strong>
                  2. Kosten für Schlüsseldienst pro Tag und Tageszeit
                </strong>
                <ul className="flex flex-col gap-1 pl-4 mt-2">
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#schluesseldienst-kosten-nachts"
                      aria-label="Was kostet ein Schlüsseldienst nachts?"
                    >
                      Schlüsseldienst Kosten nachts
                    </Link>
                  </li>
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#schluesseldienst-kosten-am-wochenende"
                      aria-label="Schlüsseldienst Kosten am Wochenende"
                    >
                      Schlüsseldienst Kosten am Wochenende
                    </Link>
                  </li>
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#schluesseldienst-kosten-am-samstag"
                      aria-label="Was kostet ein Schlüsseldienst am Samstag?"
                    >
                      Schlüsseldienst Kosten am Samstag
                    </Link>
                  </li>
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#schluesseldienst-kosten-am-sonntag"
                      aria-label="Was kostet ein Schlüsseldienst am Sonntag?"
                    >
                      Schlüsseldienst Kosten am Sonntag
                    </Link>
                  </li>
                </ul>
              </li>
              {/* 3. Group */}
              <li>
                <strong>
                  3. Was du über die Schlüsseldienst Kosten wissen musst
                </strong>
                <ul className="flex flex-col gap-1 pl-4 mt-2">
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#warum-sind-schluesseldienst-kosten-so-hoch"
                      aria-label="Warum sind Schlüsseldienst Kosten so hoch?"
                    >
                      Warum sind Schlüsseldienst Kosten so hoch?
                    </Link>
                  </li>
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#schluesseldienst-kosten-nach-17-uhr"
                      aria-label="Warum kostet Schlüsseldienst nach 17 Uhr mehr?"
                    >
                      Warum kostet Schlüsseldienst nach 17 Uhr mehr?
                    </Link>
                  </li>
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#schluesseldienst-kosten-nach-21-uhr"
                      aria-label="Warum kostet Schlüsseldienst nach 21 Uhr mehr?"
                    >
                      Warum kostet Schlüsseldienst nach 21 Uhr mehr?
                    </Link>
                  </li>
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#unterschied-schluesseldienst-aufsperrdienst"
                      aria-label="Schlüsseldienst vs. Aufsperrdienst - was ist der
                      Unterschied?"
                    >
                      Schlüsseldienst vs. Aufsperrdienst - was ist der
                      Unterschied?
                    </Link>
                  </li>
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#wie-viel-darf-ein-schluesseldienst-kosten"
                      aria-label="Wie viel darf ein Schlüsseldienst maximal Kosten?"
                    >
                      Wie viel darf ein Schlüsseldienst maximal Kosten?
                    </Link>
                  </li>
                </ul>
              </li>
              {/* 4. Group */}
              <li>
                <strong>4. Wie bezahlt man einen Schlüsseldienst?</strong>
                <ul className="flex flex-col gap-1 pl-4 mt-2">
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#zahlungsarten"
                      aria-label="Schlüsseldienst Kosten - Mögliche Zahlungsarten"
                    >
                      Mögliche Zahlungsarten
                    </Link>
                  </li>
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#auf-rechnung-bezahlen"
                      aria-label="Kann man den Schlüsseldienst auf Rechnung bezahlen?"
                    >
                      Kann man den Schlüsseldienst auf Rechnung bezahlen?
                    </Link>
                  </li>
                </ul>
              </li>
              {/* 5. Group */}
              <li>
                <strong>5. Tipps vom Profi</strong>
                <ul className="flex flex-col gap-1 pl-4 mt-2">
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#tipp-1"
                      aria-label="Schlüsseldienst Kosten - Mögliche Zahlungsarten"
                    >
                      Wie erkennt man eine Sicherheitstür?
                    </Link>
                  </li>
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#tipp-2"
                      aria-label="Kann man den Schlüsseldienst auf Rechnung bezahlen?"
                    >
                      Preisfallen beim Schlüsseldienst meiden
                    </Link>
                  </li>
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#tipp-3"
                      aria-label="Kann man den Schlüsseldienst auf Rechnung bezahlen?"
                    >
                      20% Ermäßigung für Vorteilsclub Mitglieder
                    </Link>
                  </li>
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#tipp-4"
                      aria-label="Kann man den Schlüsseldienst auf Rechnung bezahlen?"
                    >
                      Kosten sparen - allgemeine Tipps
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <strong>6. FAQs und Kontakt</strong>
                <ul className="flex flex-col gap-1 pl-4 mt-2">
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#faq"
                      aria-label="Schlüsseldienst Kosten FAQ"
                    >
                      Häufig gestellte Fragen
                    </Link>
                  </li>
                  <li className="list-disc">
                    <Link
                      className="underline"
                      href="#kontakt"
                      aria-label="Schlüsseldienst Kontakt"
                    >
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* Table of contents END */}
        </UI.Container>
        {/* Content Section END */}

        {/* Price Section START */}
        <div
          className="bg-[#f5f5f5] pt-16 pb-8"
          id="schluesseldienst-preisliste"
        >
          <UI.Container>
            <UI.Typography
              variant="h2"
              align="center"
              className="mb-8 font-bold md:!leading-[1.1] leading-10"
            >
              <span className="text-primary-500">
                Schlüsseldienst Preisliste:
              </span>{" "}
              <br />
              Kosten für Türöffnungen im Überblick
            </UI.Typography>
            <UI.Typography
              variant="lg"
              align="center"
              className="max-w-5xl pb-8 mx-auto !text-[18px] text-primary-900 leading-8"
            >
              Als{" "}
              <Link
                href="/"
                className="underline decoration-primary-500 text-primary-500 underline-offset-2"
              >
                behördlich geprüfter Schlüsseldienst Wien
              </Link>{" "}
              zeigen wir dir alle unsere Preise komplett transparent. Bei uns
              findest du keine Lockangebote und keine versteckten Kosten. Du
              bekommst klare Fixpreise, die sich nach Uhrzeit, Tageszeit und Art
              der Türöffnung richten. So weißt du immer genau, was auf dich
              zukommt. In unserer Schlüsseldienst Preisliste siehst du alle
              Preise für Türöffnungen auf einen Blick.
            </UI.Typography>
            <UI.PriceTable />
          </UI.Container>
        </div>
        {/* Price Section END */}

        {/* Content Section - Kosten und Zuschläge verstehen - START */}
        <UI.Container className="py-[56px]" id="kosten-verstehen">
          <div className="grid md:grid-cols-2 gap-8 mt-[56px] items-center">
            <div className="relative order-1 md:order-2">
              <Image
                width={1920}
                height={1280}
                src="/images/schluesseldienst-kosten-und-zuschlaege-verstehen.png"
                alt="Schlüsseldienst Kosten und Zuschläge verstehen - Bild eines Schlosses mit einem Euro-Symbol"
                className="overflow-hidden rounded-xl"
              />
            </div>
            <div className="order-2 md:order-1">
              <UI.Typography variant="h2" weight="bold">
                Schlüsseldienst <br />
                <span className="text-primary-500">
                  Kosten und Zuschläge verstehen
                </span>
              </UI.Typography>
              <UI.Typography
                variant="md"
                className="mt-6 !text-[18px] text-primary-900 leading-8"
              >
                Schlüsseldienst Kosten entstehen nicht einfach so, sondern
                basieren auf fairen und nachvollziehbaren Kalkulationen. Dabei
                achten wir darauf, dass sie sowohl für dich als auch für uns als
                Betrieb realistisch bleiben. Die Preise setzen sich aus den
                laufenden Betriebskosten, dem konkreten Aufwand je nach Einsatz
                und den jeweiligen Zuschlägen für die Tageszeit und Wochentag
                zusammen. Erfahre jetzt genau, wie sich die Kosten für unseren
                Schlüsseldienst zusammensetzen und welche Zuschläge in welchen
                Situationen anfallen können.
              </UI.Typography>
              <UI.Button
                variant="contained"
                onClick={() => router.push("#kosten-zusammensetzung")}
                iconVisible={true}
                iconPosition={"right"}
                icon={<ArrowRightIcon className="w-6 rotate-90" />}
                className="w-full mt-12 mb-8 font-bold flex items-center py-4 max-w-[300px]"
              >
                Kosten Zusammensetzung
              </UI.Button>
            </div>
          </div>
        </UI.Container>
        {/* Content Section - Kosten und Zuschläge verstehen - END */}

        {/* Content Section - Kosten Zusammensetzung - START */}
        <UI.Container id="kosten-zusammensetzung" className="py-[56px]">
          <UI.Typography
            variant="h2"
            weight="bold"
            className="font-['Lexend'] md:!leading-[1.1] py-8"
          >
            <span className="text-primary-500">So werden die Kosten</span>
            <br></br>
            bei Schlüsseldienst Preisen zusammengesetzt
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="!text-[18px] text-primary-900 leading-8"
          >
            Die Kosten bei unserem Schlüsseldienst setzen sich aus mehreren
            Faktoren zusammen. Es gibt immer einen festen Grundpreis für die
            jeweilige Leistung. Zusätzlich können Zuschläge dazukommen, abhängig
            von der Tageszeit, dem Wochentag oder der Methode der Türöffnung.
            Sowohl der Grundpreis als auch die Zuschläge sind bei uns fixe
            Beträge. Du findest alle Positionen klar aufgelistet und transparent
            erklärt.
          </UI.Typography>
          <div className="mt-[56px]">
            <UI.Icon icon={CurrencyEuroIcon} />
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              Grundpreis für Türöffnungen pro Türart
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Der Grundpreis richtet sich immer nach der Art der Tür und der
              notwendigen Öffnungsmethode. Das bedeutet, es gibt verschiedene
              Fixpreise. Entscheidend ist, ob es sich um eine Standardtür oder
              eine Sicherheitstür handelt und ob die Tür nur zugefallen oder
              versperrt ist. Die{" "}
              <strong>
                Türöffnung bei zugefallenen Standardtüren kostet 89 Euro
              </strong>
              . Bei{" "}
              <strong>
                zugefallenen Sicherheitstüren liegt der Fixpreis bei 129 Euro
              </strong>
              . Wenn die Tür versperrt ist, beträgt der Grundpreis{" "}
              <strong>bei beiden Türarten 149 Euro</strong>. In allen
              Grundpreisen sind die Anfahrt und die Abfahrt unseres
              Aufsperrdienstes bereits enthalten. Du musst dir also keine
              Gedanken über zusätzliche Kosten machen.
            </UI.Typography>
          </div>
          <div className="mt-[56px]">
            <UI.Icon icon={ClockIcon} />
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              Zuschläge für Schlüsseldienst Kosten einfach erklärt
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Grundsätzlich gibt es zwei Arten von Zuschlägen, die zusätzlich
              zum Grundpreis anfallen können. Diese richten sich nach der
              Uhrzeit, dem Wochentag oder der verwendeten Öffnungsmethode. So
              lassen sich die Schlüsseldienst Wien Kosten besser nachvollziehen.
              Alle Zuschläge sind bei uns fix und werden immer vorab
              kommuniziert.
            </UI.Typography>
            <UI.Typography
              variant="h4"
              className="text-black mt-12  !leading-8"
            >
              Zuschäge pro Tageszeit und Wochentag
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-2 !text-[18px] text-primary-900 leading-8"
            >
              Hier findest du eine Übersicht der Zuschläge pro Tageszeit und
              Wochentag, und wann Sie genau verrechnet werden.
            </UI.Typography>
            <ul className="flex flex-col gap-4 pl-6 mt-6 list-disc ">
              <li>
                <strong className="!text-[18px] leading-8">Spätdienst:</strong>
                <br /> 25€ Zuschlag auf den Grundpreis, werktags zwischen 17:00
                und 21:00 Uhr. Wenn du dich gerade fragst, warum der
                Schlüsseldienst nach 17 Uhr mehr kostet, kannst du es{" "}
                <Link
                  href="#schluesseldienst-kosten-nach-17-uhr"
                  className="underline text-primary-500 underline-offset-2 decoration-primary-500"
                >
                  hier
                </Link>{" "}
                nachlesen.
              </li>
              <li>
                <strong className="!text-[18px] leading-8">Nachtdienst:</strong>
                <br /> 45€ Zuschlag auf den Grundpreis, werktags zwischen 21:00
                und 05:00 Uhr. Wenn du dich gerade fragst, warum der
                Schlüsseldienst nach 21 Uhr mehr kostet, kannst du es{" "}
                <Link
                  href="#schluesseldienst-kosten-nach-21-uhr"
                  className="underline text-primary-500 underline-offset-2 decoration-primary-500"
                >
                  hier
                </Link>{" "}
                nachlesen.
              </li>
              <li>
                <strong className="!text-[18px] leading-8">
                  Sonn- und Feiertage:
                </strong>
                <br /> 45€ Zuschlag auf den Grundpreis, an Sonn- und Feiertagen,
                unabhängig von der Uhrzeit.
              </li>
            </ul>
            <UI.Typography
              variant="h3"
              className="text-black mt-12  !leading-8"
            >
              Zuschäge für Öffnungsmethode
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-2 !text-[18px] text-primary-900 leading-8"
            >
              Sonstige Zuschläge, die auf den Grundpreis und den Zuschlag für
              die Tageszeit und Wochentag verrechnet werden, falls notwendig.
            </UI.Typography>
            <ul className="flex flex-col gap-4 pl-6 mt-6 list-disc">
              <li>
                <strong className="!text-[18px] leading-8">
                  Türöffnung mit Teleskop:
                </strong>
                <br /> 79€ Zuschlag auf den Grundpreis, unabhängig vom Wochentag
                <br /> wird verrechnet, wenn die Türöffnung mit einem Teleskop
                notwendig ist.
              </li>
            </ul>
          </div>
          <div className="my-[56px]">
            <UI.Icon icon={LockOpenIcon} />
            <UI.Typography
              variant="h3"
              className="text-black mt-4 !text-h4 !leading-8"
            >
              Zusätzliche Kosten die in den Preisen enthalten sind
            </UI.Typography>
            <UI.Typography
              variant="md"
              className="mt-6 !text-[18px] text-primary-900 leading-8"
            >
              Neben der eigentlichen Türöffnung entstehen auch laufende
              Betriebskosten, die unseren verlässlichen{" "}
              <Link
                href="/"
                className="underline decoration-primary-500 underline-offset-2 text-primary-500"
              >
                24 Stunden Aufsperrdienst
              </Link>{" "}
              überhaupt erst möglich machen. Dazu gehören zum Beispiel
              einsatzbereite Fahrzeuge, gewartetes Werkzeug, die laufende
              Büroorganisation und eine funktionierende technische
              Infrastruktur. Auch regelmäßige Schulungen unserer Mitarbeitenden
              sind notwendig, damit jede Türöffnung fachgerecht durchgeführt
              wird. Nacht- und Bereitschaftsdienste erfordern zusätzlichen
              Aufwand, der in den Gesamtkosten bereits berücksichtigt ist.
            </UI.Typography>
          </div>
          <UI.Button
            variant="contained"
            onClick={() => router.push("#kosten-pro-tag-und-tageszeit")}
            iconVisible={true}
            iconPosition={"right"}
            icon={<ArrowRightIcon className="w-6 rotate-90" />}
            className="flex items-center w-auto py-4 mt-12 mb-8 font-bold"
          >
            Preise nach Tageszeit und Wochentag
          </UI.Button>
        </UI.Container>
        {/* Content Section - Kosten Zusammensetzung - END */}

        {/* CTA Section START */}
        <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
          <UI.Typography
            variant="h2"
            align="center"
            className="font-bold text-white"
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
        {/* CTA Section END */}

        {/* Content Section - Kosten pro Tageszeit und Wochentag - START */}
        <UI.Container id="kosten-pro-tag-und-tageszeit" className="py-[56px]">
          <UI.Typography
            variant="h2"
            weight="bold"
            className="font-['Lexend'] md:!leading-[1.1] py-8"
          >
            <span className="text-primary-500">Aufsperrdienst Kosten </span>
            <br></br> übersichtliche Preise pro Tag und Tageszeit
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="!text-[18px] text-primary-900 leading-8"
          >
            Damit du nicht selbst die Grundpreise und Zuschläge zusammenrechnen
            musst, haben wir dir hier eine Übersicht der Schlüsseldienst Kosten
            nach Tageszeit und Wochentag zusammengestellt.
          </UI.Typography>
          {/* Navigation START */}
          <UI.Container>
            <div className="grid grid-cols-2 gap-2 mt-8">
              <div className="p-4 m-1 text-center rounded-lg bg-primary-50">
                <Link
                  href="#schluesseldienst-kosten-nachts"
                  className="border-b border-black"
                >
                  Kosten nachts
                </Link>
              </div>
              <div className="p-4 m-1 text-center rounded-lg bg-primary-50">
                <Link
                  href="#schluesseldienst-kosten-am-wochenende"
                  className="border-b border-black"
                >
                  Kosten am Wochenende
                </Link>
              </div>
              <div className="p-4 m-1 text-center rounded-lg bg-primary-50">
                <Link
                  href="#schluesseldienst-kosten-am-samstag"
                  className="border-b border-black"
                >
                  Kosten am Samstag
                </Link>
              </div>
              <div className="p-4 m-1 text-center rounded-lg bg-primary-50">
                <Link
                  href="#schluesseldienst-kosten-am-sonntag"
                  className="border-b border-black"
                >
                  Kosten am Sonntag
                </Link>
              </div>
            </div>
          </UI.Container>
          {/* Navigation END */}
        </UI.Container>
        {/* Price Section START */}
        {/* Night Prices START */}
        <div
          className="bg-[#f5f5f5] pt-16 pb-8"
          id="schluesseldienst-kosten-nachts"
        >
          <UI.Container>
            <UI.Typography variant="h3" className="mb-8 font-bold">
              Was kostet ein{" "}
              <span className="text-primary-500">Schlüsseldienst nachts</span>?
            </UI.Typography>
            <UI.Typography variant="lg" className="pb-8 !text-[18px]">
              Hier findest du die Preistabelle für die Schlüsseldienst kosten
              nachts. Diese Preise gelten nur Werktags nachts{" "}
              <span className="font-semibold text-primary-500">
                zwischen 21:00 und 05:00 Uhr
              </span>
              , und beinhalten bereits die jeweiligen Zuschläge.
            </UI.Typography>
            <div className="mt-4">
              <table className="w-full">
                <thead>
                  <tr className="text-xl border-b border-[#E2E8F0]">
                    <th className="pb-4 text-left">Leistung</th>
                    <th>Preis</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Normal Door */}
                  <tr className="border-b border-[#E2E8F0] h-[56px] text-lg">
                    <td className="flex flex-col gap-2">
                      <span className="pt-4 font-semibold leading-6">
                        Türöffnung zugefallener Standardtür
                      </span>
                      <span className="text-[14px] mb-4 text-gray-700 leading-5">
                        Öffnen von zugefallenen Tür {"(keine Sicherheitstür)"}.
                        Preis gilt wenn die Tür nicht versperrt ist, und der
                        Schlüssel nicht im Zylinder steckt. Inklusive
                        Anfahrtskosten.
                      </span>
                    </td>
                    <td className="w-16 pt-3 font-semibold text-right align-top">
                      134€
                    </td>
                  </tr>
                  {/* Security Door */}
                  <tr className="border-b border-[#E2E8F0] h-[56px] text-lg">
                    <td className="flex flex-col gap-2">
                      <span className="pt-4 font-semibold leading-6">
                        Türöffnung zugefallener Sicherheitstür
                      </span>
                      <span className="text-[14px] mb-4 text-gray-700 leading-5">
                        Öffnen von zugefallener Sicherheitstür. Preis gilt wenn
                        die Tür nicht versperrt ist, und der Schlüssel nicht im
                        Zylinder steckt. Inklusive Anfahrtskosten.
                      </span>
                    </td>
                    <td className="w-16 pt-3 font-semibold text-right align-top">
                      134€
                    </td>
                  </tr>
                  {/* Locked Door */}
                  <tr className="border-b border-[#E2E8F0] h-[56px] text-lg">
                    <td className="flex flex-col gap-2">
                      <span className="pt-4 font-semibold leading-6">
                        Türöffnung versperrter Türen{" "}
                        {"(Standard- oder Sicherheitstüren)"}
                      </span>
                      <span className="text-[14px] mb-4 text-gray-700 leading-5">
                        Öffnen von zugefallener Sicherheitstür. Preis gilt wenn
                        die Tür nicht versperrt ist, und der Schlüssel nicht im
                        Zylinder steckt. Inklusive Anfahrtskosten.
                      </span>
                    </td>
                    <td className="w-16 pt-3 font-semibold text-right align-top">
                      194€
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </UI.Container>
        </div>
        {/* Night Prices END */}

        {/* Weekend Prices START */}
        <div
          className="py-16 pb-8 bg-white"
          id="schluesseldienst-kosten-am-wochenende"
        >
          <UI.Container>
            <UI.Typography variant="h3" className="mb-8 font-bold">
              Was kostet ein{" "}
              <span className="text-primary-500">
                Schlüsseldienst am Wochenende
              </span>
              ?
            </UI.Typography>
            <UI.Typography variant="lg" className="pb-12 !text-[18px]">
              Schlüsseldienst Kosten am Wochenende hängen davon ab, ob es um
              Samstag oder Sonntag geht. Hier sind weitere Informationen,
              getrennt nach den beiden Tagen.
            </UI.Typography>

            {/* Price Saturday */}
            <div className="py-8" id="schluesseldienst-kosten-am-samstag">
              <UI.Typography variant="h3" className="mb-8 font-bold">
                Schlüsseldienst Kosten{" "}
                <span className="text-primary-500">am Samstag</span>
              </UI.Typography>
              <UI.Typography variant="lg" className=" !text-[18px]">
                Samstag gilt als ein Werktag. Somit sind die Kosten für den
                Aufsperrdienst am{" "}
                <span className="font-semibold text-primary-500">
                  Samstag gleich wie die Kosten an Werktagen
                </span>
                , abhängig von der jeweiligen Uhrzeit, laut unserer{" "}
                <Link
                  href="#schluesseldienst-preisliste"
                  className="underline decoration-primary-500 underline-offset-2 text-primary-500"
                >
                  Preisliste
                </Link>{" "}
                . Hier findest du die Preistabelle für die Schlüsseldienst
                kosten am Wochendene, getrennt nach Samstag und Sonntag, und
                beinhalten bereits die jeweiligen Zuschläge.
              </UI.Typography>
            </div>
            {/* Price Sunday */}
            <div className="py-8" id="schluesseldienst-kosten-am-sonntag">
              <UI.Typography variant="h3" className="mb-8 font-bold">
                Schlüsseldienst Kosten{" "}
                <span className="text-primary-500">am Sonntag</span>{" "}
                {"(und Feiertag)"}
              </UI.Typography>
              <UI.Typography
                variant="lg"
                className="pb-12 mx-auto !text-[18px]"
              >
                Hier findest du die Preistabelle für die Schlüsseldienst kosten
                am Sonn- und Feiertag. Diese Preise gelten am{" "}
                <span className="font-semibold text-primary-500">
                  Sonntag und/oder Feiertag, von 00:00 - 24:00 Uhr
                </span>{" "}
                und beinhalten bereits die jeweiligen Zuschläge.
              </UI.Typography>
              <table className="w-full">
                <thead>
                  <tr className="text-xl border-b border-[#E2E8F0]">
                    <th className="pb-4 text-left">Leistung</th>
                    <th>Preis</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Normal Door */}
                  <tr className="border-b border-[#E2E8F0] h-[56px] text-lg">
                    <td className="flex flex-col gap-2">
                      <span className="pt-4 font-semibold leading-6">
                        Türöffnung zugefallener Standardtür
                      </span>
                      <span className="text-[14px] mb-4 text-gray-700 leading-5">
                        Öffnen von zugefallenen Tür {"(keine Sicherheitstür)"}.
                        Preis gilt wenn die Tür nicht versperrt ist, und der
                        Schlüssel nicht im Zylinder steckt. Inklusive
                        Anfahrtskosten.
                      </span>
                    </td>
                    <td className="w-16 pt-3 font-semibold text-right align-top">
                      134€
                    </td>
                  </tr>
                  {/* Security Door */}
                  <tr className="border-b border-[#E2E8F0] h-[56px] text-lg">
                    <td className="flex flex-col gap-2">
                      <span className="pt-4 font-semibold leading-6">
                        Türöffnung zugefallener Sicherheitstür
                      </span>
                      <span className="text-[14px] mb-4 text-gray-700 leading-5">
                        Öffnen von zugefallener Sicherheitstür. Preis gilt wenn
                        die Tür nicht versperrt ist, und der Schlüssel nicht im
                        Zylinder steckt. Inklusive Anfahrtskosten.
                      </span>
                    </td>
                    <td className="w-16 pt-3 font-semibold text-right align-top">
                      134€
                    </td>
                  </tr>
                  {/* Locked Door */}
                  <tr className="border-b border-[#E2E8F0] h-[56px] text-lg">
                    <td className="flex flex-col gap-2">
                      <span className="pt-4 font-semibold leading-6">
                        Türöffnung versperrter Türen{" "}
                        {"(Standard- oder Sicherheitstüren)"}
                      </span>
                      <span className="text-[14px] mb-4 text-gray-700 leading-5">
                        Öffnen von zugefallener Sicherheitstür. Preis gilt wenn
                        die Tür nicht versperrt ist, und der Schlüssel nicht im
                        Zylinder steckt. Inklusive Anfahrtskosten.
                      </span>
                    </td>
                    <td className="w-16 pt-3 font-semibold text-right align-top">
                      194€
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </UI.Container>
        </div>
        {/* Weekend Prices END */}

        {/* Price Section END */}
        {/* Content Section - Kosten pro Tageszeit und Wochentag - END */}
        {/* Section - Warum sind Schlüsseldienst Kosten so hoch - START */}
        <UI.Container
          element="section"
          className="py-[56px]"
          id="warum-sind-schluesseldienst-kosten-so-hoch"
        >
          <div className="grid md:grid-cols-1 gap-24 my-[56px] pt-8 items-center">
            <div>
              <UI.Typography variant="h2" className="font-bold">
                <span className="text-primary-500">
                  Warum sind Schlüsseldienst Kosten
                </span>{" "}
                so hoch?
              </UI.Typography>
              <div className="mt-[24px]">
                <UI.Typography
                  variant="md"
                  className="mt-2 !text-[18px] text-primary-900 leading-8"
                >
                  Damit du nachvollziehen kannst, wie sich die Kosten für einen{" "}
                  <Link
                    href="/"
                    className="underline text-primary-500 decoration-primary-500 underline-offset-2"
                  >
                    24 Stunden Aufsperrdienst
                  </Link>{" "}
                  zusammensetzen, ist es wichtig, den gesamten Ablauf vom
                  Auftrag bis zur geöffneten Tür zu kennen. Unsere Arbeit
                  startet nicht erst vor deiner Tür, sondern schon vorher mit
                  der Organisation, Planung und Vorbereitung. Auch die Anfahrt
                  und schließlich die fachgerechte Türöffnung verlangen Zeit,
                  Erfahrung und den gezielten Einsatz von Ressourcen. Die
                  Infografik zeigt dir, welche Schritte im Hintergrund ablaufen,
                  bevor du wieder Zugang zu deiner Wohnung hast.
                </UI.Typography>
              </div>
            </div>
            <div>
              <Image
                width={1920}
                height={1080}
                objectFit="cover object-center"
                src="/images/warum-kosten-schluesseldienste-so-viel.svg"
                alt="Infografik als Erklärung warum Aufsperrdienst Kosten so hoch sind"
                className="overflow-hidden rounded-xl"
              />
              <figcaption className="mt-12 italic font-medium text-center text-gray-700">
                Ein großer Teil des Aufwands entfällt allein auf die Anfahrt
              </figcaption>
            </div>
            <div className="mt-[24px]">
              <UI.Typography
                variant="md"
                className="mt-2 !text-[18px] text-primary-900 leading-8"
              >
                Wenn du dir die Grafik ansiehst, fällt eines sofort auf. Ein
                großer Teil des Aufwands entsteht allein durch die Anfahrt. In
                vielen Fällen macht das{" "}
                <span className="font-bold text-primary-500">
                  fast zwei Drittel der gesamten Schlüsseldienst Kosten in Wien
                </span>{" "}
                aus. Genau das ist einer der Hauptgründe, warum die Preise bei
                einem Aufsperrdienst manchmal höher erscheinen. Im Gegensatz zu
                Feuerwehr oder Rettung haben wir im Straßenverkehr keine
                Sonderrechte. Wir stehen im normalen Stadtverkehr, stecken im
                Stau, suchen Parkplätze und verlieren dabei wertvolle Zeit. Das
                verursacht laufende Kosten für Sprit, Parkzeit und den gesamten
                Zeitaufwand.
              </UI.Typography>
            </div>
          </div>
        </UI.Container>
        {/* Section - Warum sind Schlüsseldienst Kosten so hoch - END */}

        {/* Section - Warum kostet Schlüsseldienst nach 17 Uhr mehr - START */}
        <div
          className="bg-[#f5f5f5] pt-16 pb-8"
          id="schluesseldienst-kosten-nach-17-uhr"
        >
          <UI.Container>
            <UI.Typography variant="h3" className="mb-8 font-bold">
              Warum kostet ein Schlüsseldienst{" "}
              <span className="text-primary-500">nach 17 Uhr</span> mehr?
            </UI.Typography>
            <UI.Typography variant="lg" className="pb-8 !text-[18px]">
              Viele beenden um diese Uhrzeit ihren Arbeitstag, während für uns
              dann die intensive Phase erst beginnt. Abends steigt das
              Verkehrsaufkommen und die Straßen sind deutlich voller, dadurch
              dauert unsere Anfahrt oft länger. Dieser zusätzliche Aufwand
              spiegelt sich in den Kosten wieder. Es gibt außerdem gesetzliche
              Regelungen, die für Abendstunden, die Nacht sowie Sonn- und
              Feiertage gelten. Nach 17 Uhr und an freien Tagen dürfen
              Schlüsseldienste deshalb höhere Preise verlangen, weil auch die
              Löhne für unser Team in diesen Zeitfenstern steigen. Diese
              Zuschläge sind notwendig und sichern faire Arbeitsbedingungen,
              besonders dann, wenn andere schon Feierabend haben.
            </UI.Typography>
          </UI.Container>
        </div>
        {/* Section - Warum kostet Schlüsseldienst nach 17 Uhr mehr - END */}

        {/* Section - Warum kostet Schlüsseldienst nach 21 Uhr mehr - START */}
        <div
          className="bg-[#f5f5f5] pt-16 pb-8"
          id="schluesseldienst-kosten-nach-21-uhr"
        >
          <UI.Container>
            <UI.Typography variant="h3" className="mb-8 font-bold">
              Warum kostet ein Schlüsseldienst{" "}
              <span className="text-primary-500">nach 21 Uhr</span> mehr?
            </UI.Typography>
            <UI.Typography variant="lg" className="pb-8 !text-[18px]">
              Nach 21 Uhr gilt in ganz Österreich der Nachtzuschlag. Das
              betrifft nicht nur Schlüsseldienste, sondern ist in allen Branchen
              gesetzlich geregelt. Wer zwischen 21 Uhr und 5 Uhr arbeitet,
              bekommt einen Zuschlag für Nachtarbeit. Dieser zusätzliche Aufwand
              wird auch beim Schlüsseldienst berücksichtigt, damit unsere
              Mitarbeitenden für ihren Nachtdienst fair entlohnt werden. Die
              höheren Preise sorgen dafür, dass unser Team rund um die Uhr
              einsatzbereit ist und du jederzeit auf professionelle Hilfe zählen
              kannst. So stellen wir sicher, dass sowohl die gesetzlichen
              Vorgaben eingehalten werden als auch der Service für dich zu jeder
              Tages- und Nachtzeit verfügbar bleibt.
            </UI.Typography>
          </UI.Container>
        </div>
        {/* Section - Warum kostet Schlüsseldienst nach 17 Uhr mehr - END */}

        {/* Section - Schlüsseldienst vs. Aufsperrdienst Unterschied - START */}
        <UI.Container
          element="section"
          className="py-[56px]"
          id="unterschied-schluesseldienst-aufsperrdienst"
        >
          <div className="grid md:grid-cols-2 gap-24 my-[24px] pt-8 items-center">
            <div className="order-2 md:order-1">
              <UI.Typography
                variant="h2"
                className="flex flex-col gap-2 font-bold"
              >
                <span className="text-primary-500">
                  Schlüsseldienst vs. Aufsperrdienst:
                </span>{" "}
                was ist der Unterschied?
              </UI.Typography>
              <div className="mt-[24px]">
                <UI.Typography
                  variant="md"
                  className="mt-2 !text-[18px] text-primary-900 leading-8"
                >
                  Viele sagen Schlüsseldienst und meinen eigentlich den
                  Aufsperrdienst. Ganz falsch ist das nicht, aber es gibt
                  trotzdem einen kleinen Unterschied. Ein Schlüsseldienst
                  kümmert sich um alles rund um Schlösser und Schlüssel. Du
                  kannst hier zum Beispiel Schlüssel nachmachen lassen,{" "}
                  <Link
                    href="leistungen/zylinder-tausch"
                    className="underline text-primary-500 decoration-primary-500 underline-offset-2"
                  >
                    Zylinder austauschen
                  </Link>{" "}
                  oder dich zum Einbruchschutz beraten lassen.Ein Aufsperrdienst
                  ist dann gefragt, wenn du dich ausgesperrt hast und wieder in
                  deine Wohnung musst. Dieser Service sorgt dafür, dass die Tür
                  zuverlässig geöffnet wird, egal zu welcher Uhrzeit. In der
                  Praxis sind wir beides. Wir sind{" "}
                  <Link
                    href="/"
                    className="underline text-primary-500 decoration-primary-500 underline-offset-2"
                  >
                    Schlüsseldienst und Aufsperrdienst in einem
                  </Link>
                  . Der Unterschied liegt nur im jeweiligen Schwerpunkt. Die
                  Preise ändern sich dadurch nicht, sondern richten sich immer
                  nach der konkreten Leistung und der Uhrzeit.
                </UI.Typography>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <Image
                width={1920}
                height={1280}
                src="/images/schluesseldienst-aufsperrdienst-unterschied.jpg"
                alt="Mitarbeiter des Schlüsseldienstes im Einsatz als Aufsperrdienst während der Türöffnung"
                className="overflow-hidden rounded-xl"
              />
            </div>
          </div>
        </UI.Container>
        {/* Section - Schlüsseldienst vs. Aufsperrdienst Unterschied - END */}

        {/* Section - Wie viel darf ein Schlüsseldienst maximal Kosten - START */}
        <UI.Container
          element="section"
          className="py-[56px]"
          id="wie-viel-darf-ein-schluesseldienst-kosten"
        >
          <div className="grid md:grid-cols-1 gap-24 my-[24px] pt-8 items-center">
            <div>
              <UI.Typography
                variant="h3"
                className="flex flex-col gap-2 font-bold"
              >
                Wie viel darf ein{" "}
                <span className="text-primary-500">
                  Schlüsseldienst maximal Kosten?
                </span>
              </UI.Typography>
              <div className="mt-[24px]">
                <UI.Typography
                  variant="md"
                  className="mt-2 !text-[18px] text-primary-900 leading-8"
                >
                  Wie viel ein Schlüsseldienst maximal kosten darf, ist
                  rechtlich nicht eindeutig festgelegt. Es gibt also keine klare
                  Obergrenze, die verbindlich gilt. Trotzdem helfen dir
                  bestimmte Richtwerte und Empfehlungen dabei, die
                  Schlüsseldienst Wien Kosten besser einzuschätzen. In Wien
                  liegt der Grundpreis ohne Zuschläge in der Regel zwischen 89
                  Euro und 149 Euro. Dieser Bereich gilt als realistisch und
                  fair kalkuliert.
                </UI.Typography>
                <UI.Typography
                  variant="md"
                  className="mt-4 !text-[18px] text-primary-900 leading-8"
                >
                  <strong>ACHTUNG:</strong> Viele Anbieter werben allerdings mit
                  sehr niedrigen Preisen und verlangen dann vor Ort deutlich
                  mehr als üblich. Wie du dich vor solchen Tricks schützen
                  kannst,{" "}
                  <Link
                    href="#tipps"
                    className="underline text-primary-500 decoration-primary-500 underline-offset-2"
                  >
                    zeigen wir dir in unseren Tipps
                  </Link>
                  .
                </UI.Typography>
              </div>
            </div>
          </div>
        </UI.Container>
        {/* Section - Wie viel darf ein Schlüsseldienst maximal Kosten - END */}

        {/* Payment Section START */}
        <div id="zahlungsarten">
          <UI.Container
            widthMode="full"
            className="bg-primary-950 py-[56px] text-white"
          >
            <div className="px-4 ">
              <UI.Typography variant="lg" className="text-center">
                Wie bezahlt man einen Schlüsseldienst?
              </UI.Typography>

              <UI.Typography
                variant="h2"
                align="center"
                className="mt-4 font-bold "
              >
                Entscheide einfach selbst wie du gerne bezahlen möchtest
              </UI.Typography>
              <UI.Typography
                variant="lg"
                align="center"
                className="max-w-5xl mx-auto !text-h5 mt-8 text-white"
              >
                Du kannst jederzeit aus mehreren Zahlungsoptionen wählen. Wenn
                du kein Bargeld bei dir hast, ist das kein Problem. Du kannst
                direkt vor Ort mit jeder gängigen Bankomatkarte oder Kreditkarte
                bezahlen. Die Abwicklung erfolgt sofort nach der Türöffnung und
                du bekommst natürlich eine Zahlungsbestätigung.
              </UI.Typography>
              <UI.Payment />
              <UI.Call mode="dark" />
            </div>
          </UI.Container>
        </div>
        {/* Payment Section END */}

        {/* Invoice Payment START */}
        <UI.Container
          id="auf-rechnung-bezahlen"
          element="section"
          widthMode="full"
          className="bg-gray-100 py-[56px] mb-[56px]"
        >
          <UI.Container>
            <UI.Typography variant="lg">Zahlung auf Rechnung</UI.Typography>
            <UI.Typography variant="h3" className="pt-2">
              Kann man den Schlüsseldienst auf Rechnung bezahlen?
            </UI.Typography>
            <UI.Typography variant="lg" className="pt-2">
              <Link
                href="/leistungen/b2b-leistungen"
                className="underline underline-primary-500 text-primary-500 underline-offset-2"
              >
                Geschäftskunden
              </Link>{" "}
              können grundsätzlich immer per Rechnung bezahlen. Bei
              Privatpersonen ist diese Option nur möglich, wenn keine andere
              Zahlungsart verfügbar ist. Da es sich bei der Türöffnung um eine
              kurzfristige und sofort erbrachte Leistung handelt, sollte sie
              direkt vor Ort bezahlt werden. Wir haben natürlich Verständnis,
              wenn du gerade kein Bargeld oder keine Karte bei dir hast. In
              diesem Fall kannst du den Betrag nachträglich per Rechnung
              begleichen.
            </UI.Typography>
          </UI.Container>
        </UI.Container>
        {/* Invoice Payment END */}

        {/* Tipps Section START */}
        <UI.Container element="section" id="tipps" className="py-[56px]">
          <UI.Typography variant="h2" align="center" className="mb-8 font-bold">
            4 Tipps zu Schlüsseldienst Kosten vom Profi
          </UI.Typography>
          <UI.Typography
            variant="lg"
            align="center"
            className="max-w-5xl mx-auto"
          >
            Wir haben vier hilfreiche Tipps für dich vorbereitet, mit denen du
            die Schlüsseldienst Wien Kosten besser einschätzen und gezielt
            sparen kannst. Du erfährst außerdem, woran du erkennst, ob du eine
            Sicherheitstür hast, und wie du Preisfallen zuverlässig vermeidest.
          </UI.Typography>
        </UI.Container>

        <UI.Container element="section" className="py-[56px]" id="tipp-1">
          {/* Tipp #1 START */}
          <div className="grid md:grid-cols-2 gap-8 mt-[56px] pt-8 items-center">
            <div className="order-2 md:order-1">
              <UI.Typography
                variant="h3"
                className="flex flex-col gap-2 font-bold"
              >
                <span className="text-primary-500">Tipp #1</span>
                Woran erkennt man eine Sicherheitstür?
              </UI.Typography>
              <div className="mt-[24px]">
                <UI.Typography
                  variant="md"
                  className="mt-2 !text-[18px] text-primary-900 leading-8"
                >
                  Sicherheitstüren sehen oft ganz gewöhnlich aus, sind aber
                  deutlich stabiler gebaut.
                  <br />
                  <br />
                  <strong>Du erkennst sie an:</strong>
                </UI.Typography>
                <ul className="py-8 pt-4 list-inside">
                  <li className="list-disc">
                    Mehrfachverriegelung{" "}
                    {"(Riegel fahren oben/unten/seitlich aus)"}
                  </li>
                  <li className="list-disc">
                    Stahlverstärktem Türblatt {"(spürbar schwerer)"}
                  </li>
                  <li className="list-disc">
                    Sicherheitszylinder mit Sicherungskarte
                  </li>
                  <li className="list-disc">Einbruchhemmenden Beschlägen</li>
                  <li className="list-disc">Innenliegender Bolzensicherung</li>
                </ul>
                <UI.Typography
                  variant="md"
                  className="mt-2 !text-[18px] text-primary-900 leading-8"
                >
                  Wenn du beim Absperren mehrere Punkte gleichzeitig
                  verriegelst, handelt es sich sehr wahrscheinlich um eine
                  Sicherheitstür.
                </UI.Typography>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                width={1920}
                height={1280}
                objectFit="cover"
                src="/images/sicherheitstuer-erkennen.svg"
                alt="Infografik mit Merkmalen einer Sicherheitstür"
                className="overflow-hidden rounded-xl"
              />
              <figcaption className="mt-2 italic font-medium text-center text-gray-700">
                Übliche Merkmale einer Sicherheitstür
              </figcaption>
            </div>
          </div>
        </UI.Container>
        {/* Tipp #1 END */}

        {/* Tipp #2 START */}
        <UI.Container className="py-[56px]" id="tipp-2">
          <UI.Typography variant="h3" className="flex flex-col gap-2 font-bold">
            <span className="text-primary-500">Tipp #2</span>
            So vermeidest du Preisfallen beim Schlüsseldienst
          </UI.Typography>
          <div className="mt-[24px]">
            <div className="mt-2 !text-[18px] text-primary-900 leading-8">
              <UI.Typography
                variant="md"
                className="mt-2 !text-[18px] text-primary-900 leading-8"
              >
                Um dich vor unseriösen Anbietern zu schützen, solltest du ein
                paar einfache Dinge beachten:
              </UI.Typography>

              <ul className="py-4 list-inside">
                <li className="list-disc">
                  Beauftrage keine Firmen ohne Impressum oder nachvollziehbare
                  Adresse
                </li>
                <li className="list-disc">
                  Vertraue keinen Angeboten unter 70 Euro - das sind meist
                  Lockpreise die vor Ort massiv steigen
                </li>
                <li className="list-disc">
                  Verlange immer einen Fixpreis im Voraus
                </li>
                <li className="list-disc">
                  Keine Barzahlung ohne Beleg akzeptieren
                </li>
              </ul>
              <UI.Typography
                variant="md"
                className="mt-2 !text-[18px] text-primary-900 leading-8"
              >
                Viele Kundinnen und Kunden erzählen uns, dass sie schlechte
                Erfahrungen gemacht haben, bevor sie zu uns gekommen sind. Unser
                Tipp ist deshalb klar. Speichere dir eine seriöse Nummer ins
                Handy, zum Beispiel unsere. Weitere Tipps darüber, wie man einen
                seriösen Anbieter erkennt findest du{" "}
                <Link
                  href="/serioeser-schluesseldienst"
                  className="underline decoration-primary-500 underline-offset-2 text-primary-500"
                >
                  hier
                </Link>
                .
              </UI.Typography>
            </div>
          </div>
        </UI.Container>

        {/* Tipp #2 END */}

        {/* Tipp #3 START */}
        <UI.Container element="section" className="py-[56px]" id="tipp-3">
          <div className="grid md:grid-cols-2 gap-8 mt-[56px] pt-8 items-center">
            <div className="order-2">
              <UI.Typography
                variant="h3"
                className="flex flex-col gap-2 font-bold"
              >
                <span className="text-primary-500">Tipp #3</span>
                20 Prozent Nachlass für Mitglieder
                <br></br>
                des Vorteilsclubs der Stadt Wien
              </UI.Typography>
              <div className="mt-[24px]">
                <UI.Typography
                  variant="md"
                  className="mt-2 !text-[18px] text-primary-900 leading-8"
                >
                  Wenn du Mitglied im Vorteilsclub der Stadt Wien bist, bekommst
                  du bei uns 20 Prozent Ermäßigung auf die Schlüsseldienst
                  Kosten. Alles, was du dafür tun musst, ist bei der
                  Beauftragung deine Vorteilsclub Mitgliedskarte zu zeigen. Wir
                  ziehen den Rabatt automatisch vom Gesamtpreis ab. Weitere
                  Informationen dazu findest du direkt{" "}
                  <Link
                    href="https://vorteilsclub.wien.at/meine-vorteile/tuerex-schluesseldienst-aufsperrdienst"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-primary-500 underline-offset-2 text-primary-500"
                  >
                    auf unserer Vorteilsclub-Seite
                  </Link>
                  .
                </UI.Typography>
              </div>
            </div>
            <div className="order-1">
              <Image
                width={1920}
                height={1280}
                objectFit="cover"
                src="/images/20-prozent-nachlass-fuer-vorteilsclub-stadt-wien.svg"
                alt="20% Nachlass auf Schlüsseldienst Kosten für Stadt Wien Vorteilsclub Mitglieder"
                className="overflow-hidden rounded-xl"
              />
              <figcaption className="mt-2 italic font-medium text-center text-gray-700">
                Mitglieder des Vorteilsclubs der Stadt Wien erhalten 20 %
                Ermäßigung
              </figcaption>
            </div>
          </div>
        </UI.Container>
        {/* Tipp #3 END */}

        {/* Tipp #4 START */}
        <UI.Container className="py-[56px]" id="tipp-4">
          <div className="grid md:grid-cols-2 gap-8 mt-[56px] items-center">
            <div className="order-2 md:order-1">
              <UI.Typography
                variant="h3"
                className="flex flex-col gap-2 font-bold"
              >
                <span className="text-primary-500">Tipp #4</span>
                Allgemeine Tipps um
                <br></br>
                Schlüsseldienst Kosten zu sparen
              </UI.Typography>
              <div className="mt-[24px]">
                <UI.Typography
                  variant="md"
                  className="mt-2 !text-[18px] text-primary-900 leading-8"
                >
                  Ein paar Gewohnheiten helfen dir, unnötige Einsätze zu
                  vermeiden.
                </UI.Typography>
                <ul className="py-4 list-inside">
                  <li className="list-disc">
                    Ersatzschlüssel bei vertrauenswürdiger Person deponieren
                  </li>
                  <li className="list-disc">
                    Tür beim Rausgehen kontrollieren{" "}
                    {"(„Schlüssel? Handy? Geld?“)"}
                  </li>
                  <li className="list-disc">
                    Schlüsseltresor mit Code an sicherem Ort anbringen
                  </li>
                  <li className="list-disc">
                    Nie die Tür zufallen lassen, wenn du nur kurz rausgehst
                  </li>
                  <li className="list-disc">
                    Zylinder mit Not- und Gefahrenfunktion nachrüsten lassen
                  </li>
                  <li className="list-disc">
                    Haushaltsversicherung prüfen, ob sie Türöffnungen übernimmt
                  </li>
                </ul>
                <UI.Typography
                  variant="md"
                  className="mt-2 !text-[18px] text-primary-900 leading-8"
                >
                  Wenn es doch passiert? Eine Übernachtung bei Freunden oder im
                  Hotel ist manchmal günstiger als ein Einsatz am Sonntag um
                  drei Uhr früh.
                </UI.Typography>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                width={1920}
                height={1280}
                objectFit="cover"
                src="/images/keine-versteckte-kosten.jpg"
                alt="Kosten für Schlüsseldienst sparen - Tipp vom Profi"
                className="overflow-hidden rounded-xl"
              />
            </div>
          </div>
        </UI.Container>
        {/* Tipp #4 END */}

        {/* Tipps Section END */}

        {/* FAQ START */}
        <UI.Container className="pb-16" id="faq">
          <UI.Typography variant="h2" className="font-bold mt-[168px] mb-8">
            Häufig gestellte Fragen zu Schlüsseldienst Kosten
          </UI.Typography>
          <UI.Faq items={faqDataPricesPage} />
        </UI.Container>
        {/* FAQ END */}

        {/* CTA Section START */}
        <UI.Container
          widthMode="full"
          className="bg-primary-950 py-[56px]"
          id="kontakt"
        >
          <UI.Typography
            variant="h2"
            align="center"
            className="font-bold text-white"
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
        {/* CTA Section END */}
      </UI.Container>
    </Layout>
  );
};

export default IndexPage;
