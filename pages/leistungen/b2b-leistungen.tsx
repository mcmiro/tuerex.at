import React from 'react';
import Layout from 'components/layouts';
import { UI } from 'components';
import b2bStructureData from 'utils/structure-data/b2b';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import router from 'next/router';
import { priceData } from 'constants/price';
import faqDataB2b from 'constants/faq/b2b';

const IndexPage: React.FC = () => {
  return (
    <Layout
      canonical={`https://tuerex.at/leistungen/b2b-leistungen`}
      title="B2B Schlüsseldienstleistungen in Wien | TÜREX"
      metaDescription="B2B Schlüsseldienste in Wien. Mit Notfall-Prioritätsservice und zuverlässiger laufender Wartung/Reparatur. Zahlung auf Lieferschein, vereinfachte Auftragsvergabe."
      jsonLd={b2bStructureData}
    >
      <header>
        <UI.Navigation isActiveHamburger={true} />
        <UI.HeaderSub title="Individuelle Schlüsseldienstlösungen für Ihr Business.">
          <UI.Typography variant="lg" className="text-white mt-4">
            Priorisiert im Notfall, zuverlässig bei laufenden Aufgaben.
          </UI.Typography>
          <ul className="w-full max-w-[480px] pt-8 text-white">
            <li className="flex items-center gap-1 text-[16px] md:text-[18px] font-['Lexend']">
              <CheckIcon className="w-5" />
              Preisnachlässe für Vertragskunden
            </li>
            <li className="flex items-center gap-1 pt-2 text-[16px] md:text-[18px] font-['Lexend']">
              <CheckIcon className="w-5" />
              Zahlung auf Lieferschein
            </li>
            <li className="flex items-center gap-1 pt-2 text-[16px] md:text-[18px] font-['Lexend']">
              <CheckIcon className="w-5" />
              Prioritätsservice
            </li>
          </ul>
          <UI.Button
            variant="contained"
            onClick={() => router.push('/impressum')}
            iconVisible={true}
            iconPosition={'right'}
            icon={<ArrowRightIcon className="w-8" />}
            className="w-full my-8 font-bold flex items-center py-4 max-w-[300px] bg-white hover:!bg-gray-100 !text-primary-500"
          >
            Unverbindlich anfragen
          </UI.Button>
        </UI.HeaderSub>
        <UI.Breadcrumbs />
      </header>
      {/* Section 1 START */}
      <UI.Container element="main" widthMode="full" className="py-16">
        <UI.Container element="section">
          <UI.Typography variant="lg">
            Schlüsseldienstleistungen, spezialisiert auf B2B.
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            Zuverlässig in der Leistung, unkompliziert in der Abwicklung.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Türex bietet spezialisierte Schlüsseldienst- und Schlosserlösungen,
            die auf die Bedürfnisse von Unternehmen zugeschnitten sind. Unser
            Fokus liegt auf schnellen, zuverlässigen und flexiblen Services, um
            Ihre Anforderungen professionell zu erfüllen.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            Prioritätsservice
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Mit unserem Prioritätsservice behandeln wir Ihre Anliegen mit
            höchster Dringlichkeit. In Notfällen sind Sie immer die Ersten, die
            wir betreuen. Rund um die Uhr, jeden Tag, 365 Tage im Jahr. Ohne
            Auszeit.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            Maßgeschneiderte SLAs
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Unsere Service-Level-Agreements bieten Ihnen maßgeschneiderte
            Leistungen, die Ihre Erwartungen übertreffen. Wir passen uns Ihren
            Bedürfnissen an, um Ihnen den bestmöglichen Service zu bieten.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            Individuelle, effiziente Lösungen
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Wir sind Spezialisten im Fach. Behördlich bewilligt und erfahren
            passen wir alle Leistungen effizient und genau an die Bedürfnisse
            Ihres Unternehmens an. Dabei beraten wir Sie bei jedem Schritt,
            damit Sie immer bestens informiert sind.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 1 END */}
      {/* Section 2 START */}
      <UI.Container
        element="section"
        widthMode="full"
        className="bg-primary-950 py-[56px]"
      >
        <UI.Container>
          <UI.Typography variant="lg" className="text-white">
            Zuerst die Leistung, dann die Formalitäten.
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2 text-white">
            Bequeme Zahlung auf Lieferschein.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8 text-white">
            Wir arbeiten effizient. Das wäre nicht möglich, wenn die
            Beauftragung selbst träge ablaufen würde. Wenn Sie unsere Hilfe
            benötigen, helfen wir sofort. Unseren Vertragskunden bieten wir die
            Zahlung per Lieferschein an. Genau aus diesem Grund ist die
            Zusammenarbeit mit Türex so einfach. Sie beauftragen uns, wann immer
            Sie uns brauchen, und bezahlen bequem am Ende des Monats per
            Rechnung.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      <UI.Container widthMode="full" className="py-16">
        <UI.Container>
          <UI.Typography variant="xl">Prioritätsservice</UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Mit unserem Prioritätsservice behandeln wir Ihre Anliegen mit
            höchster Dringlichkeit. In Notfällen sind Sie immer die Ersten, die
            wir betreuen. Rund um die Uhr, jeden Tag, 365 Tage im Jahr. Ohne
            Auszeit.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 2 END */}
      {/* Section 3 START */}
      <UI.Container element="section" widthMode="full">
        <UI.Container>
          <UI.Typography variant="lg">
            Strukturierte Preisgestaltung.
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            Immer zum Fixpreis.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Wir möchten mit unserer Preisgestaltung für Klarheit sorgen.
            Unabhängig von individuellen Nachlässen bieten wir allgemein
            Fixpreise, auch bei einmaligen Beauftragungen. Unsere Preise richten
            sich nach der Preiserhebung der WKÖ. Somit bekommen Sie einen fairen
            Preis, und wir sind in der Lage, qualitativ hochwertigen Service zu
            bieten.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            Prioritätsservice
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Mit unserem Prioritätsservice behandeln wir Ihre Anliegen mit
            höchster Dringlichkeit. In Notfällen sind Sie immer die Ersten, die
            wir betreuen. Rund um die Uhr, jeden Tag, 365 Tage im Jahr. Ohne
            Auszeit.
          </UI.Typography>
          <ul className="w-full max-w-[480px] pt-8">
            <li className="flex items-center gap-1 text-[16px] md:text-[18px] font-['Lexend']">
              <CheckIcon className="w-5" />
              Inklusive Anfahrtskosten
            </li>
            <li className="flex items-center gap-1 pt-2 text-[16px] md:text-[18px] font-['Lexend']">
              <CheckIcon className="w-5" />
              Übersichtlich gestaltet
            </li>
          </ul>
          <UI.TableNavigation
            filter={priceData[0].title}
            onClick={() => router.push(`/preise`)}
          />
          <UI.TableContent query={priceData[0].title} />
        </UI.Container>
      </UI.Container>
      {/* Section 3 END */}
      {/* Section 4 START */}
      <UI.Container
        element="section"
        widthMode="full"
        className="bg-gray-100 py-[56px] mt-16"
      >
        <UI.Container>
          <UI.Typography variant="lg">
            Wir schätzen Langfristigkeit.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-2">
            Attraktive Preisnachlässe für Vertragskunden.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Eine gute und langfristige Zusammenarbeit mit unseren Kunden liegt
            uns am Herzen. Mit attraktiven Preisnachlässen für langfristige
            Vertragskunden bieten wir Ihnen nicht nur erstklassigen Service,
            sondern auch wirtschaftliche Vorteile.
          </UI.Typography>

          <UI.Button
            variant="contained"
            onClick={() => router.push('/impressum')}
            iconVisible={true}
            iconPosition={'right'}
            icon={<ArrowRightIcon className="w-8" />}
            className="mt-8 font-bold flex items-center"
          >
            <span className="pr-4">Jetzt unverbindlich anfragen</span>
          </UI.Button>
        </UI.Container>
      </UI.Container>
      {/* Section 4 END */}
      {/* Section 5 START */}
      <UI.Container element="section" widthMode="full" className="py-16">
        <UI.Container>
          <UI.Typography variant="lg">
            Wir lieben Automatisierung.
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            Automatisierte Administration, angebunden an Ihre Systeme.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Wir sind nicht nur handwerklich begabt. In unserem Team befinden
            sich auch großartige IT-Experten. Somit sind wir bei der Anpassung
            an Ihre Systeme sehr flexibel. Und wir lieben Automatisierung.
            Unsere IT-Experten sind bereit, Integrationen in Ihre bestehenden
            Systeme zu entwickeln. Somit entsteht für Sie keine zusätzliche
            Administration, wenn Sie uns beauftragen.
          </UI.Typography>
          <UI.Typography variant="lg">
            Schlosser am Tag, Helden in der Nacht.
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-8">
            Unsere Leistungen im Überblick.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Unsere Leistungen umfassen alle Tätigkeiten rund um Ihre Türen und
            Schlösser. Wir halten unser Wissen auf dem Laufenden. In Kombination
            aus bewährten und modernsten Techniken und Geräten führen wir unsere
            Aufgaben durch. Professionell, erfahren und behördlich befähigt.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            Notfall Schlüsseldienstleistungen
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Wir sind rund um die Uhr verfügbar, um bei versperrten Türen zu
            helfen oder Schlösser zu behandeln. Mit Expertise, Techniken und
            Geräten wie speziellen Kamerasystemen können wir jede Tür öffnen.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            Installation von Schließanlagen
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Wir installieren moderne Zylinder und Schließanlagen. Nach einer
            vorherigen Analyse und Beratung wählen wir die besten Optionen für
            die spezifischen Bedürfnisse Ihres Unternehmens aus und installieren
            sie sorgfältig und professionell.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            Wartung
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Regelmäßige Inspektionen und vorbeugende Wartung sorgen dafür, dass
            Ihre Schließsysteme stets einwandfrei funktionieren und Ausfälle
            vermieden werden. Wir führen laufende Wartungen zuverlässig und
            selbstständig durch.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            Reparatur
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Unser geschultes Fachpersonal behebt schnell und zuverlässig
            Störungen und Defekte an Ihren Schließsystemen, um einen
            reibungslosen Betrieb sicherzustellen. Unsere Fachkenntnisse sorgen
            für Reparaturen, egal an welchem System.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            Einbruchschutz & Beratung
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Wir bieten bewährte Lösungen, um Ihre Türen effektiv gegen Einbrüche
            zu sichern und Ihnen ein hohes Maß an Sicherheit zu bieten. Unsere
            umfassende Sicherheitsberatung hilft Ihnen, Ihre Immobilie nach
            neuestem Stand zu schützen.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 5 END */}
      {/* Section 6 START */}
      <UI.Container element="section" widthMode="full" className="py-16">
        <UI.Container>
          <UI.Typography variant="lg">Türex ist der Schlüssel.</UI.Typography>
          <UI.Typography variant="h3" className="pt-2">
            Unsere Vorteile im Überblick.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            Effektive Prozesse
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Von der ersten Kontaktaufnahme bis zur Ausführung des Auftrags legen
            wir Wert auf transparente und effiziente Abläufe. Sie wissen
            jederzeit, was passiert und welche Schritte als nächstes folgen.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            Kosteneffizienz & Zahlung
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Wir bieten klare und faire Preise ohne versteckte Kosten. Mit
            unseren Preisnachlässen für Vertragskunden profitieren Sie von
            attraktiven Konditionen und Zahlung per Lieferschein.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            Schnelligkeit
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            In Notfällen zählt jede Sekunde. Deshalb sind wir in der Regel
            innerhalb von 30 Minuten bei Ihnen vor Ort.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 6 END */}
      {/* Section 7 START */}
      <UI.Container
        element="section"
        widthMode="full"
        className="bg-primary-950 py-[56px]"
      >
        <UI.Container>
          <UI.Typography variant="h2" className="text-white">
            Jetzt unverbindlich anfragen.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-8 text-white">
            Schnell und unkompliziert zu Ihrer individuellen Sicherheitslösung.
            Teilen Sie uns Ihre Wünsche mit. Unser Team ist schon bereit.
          </UI.Typography>
          <UI.Button
            variant="contained"
            onClick={() => router.push('/impressum')}
            iconVisible={true}
            iconPosition={'right'}
            icon={<ArrowRightIcon className="w-8" />}
            className="mt-8 font-bold flex items-center"
          >
            <span className="pr-4">Jetzt unverbindlich anfragen</span>
          </UI.Button>
        </UI.Container>
      </UI.Container>
      {/* Section 7 END */}
      {/* Section FAQ START */}
      <UI.Container element="section" widthMode="full" className="py-16">
        <UI.Container>
          <UI.Typography variant="xl" className="pt-16">
            B2B Services
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2 pb-8">
            Häufig gestellte Fragen.
          </UI.Typography>
          <UI.Faq items={faqDataB2b} />
        </UI.Container>
      </UI.Container>
      {/* Section FAQ END */}
    </Layout>
  );
};

export default IndexPage;
