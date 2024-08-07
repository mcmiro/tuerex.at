import React from 'react';
import Layout from 'components/layouts';
import { UI } from 'components';
import { CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import TableContentSingleService from 'components/organisms/price-table/table-single-service';
import { priceDataNormalDoor } from 'constants/price/normal-door';
import { services } from 'constants/services';
import faqDataNormalDoor from 'constants/faq/normal-door';
import standardTuerStrucutreData from 'utils/structure-data/standardtuer';

const IndexPage: React.FC = () => {
  return (
    <Layout
      canonical={`https://tuerex.at/leistungen/zugefallene-standardtueren`}
      title="Öffnung zugefallener Standardtüren | Leistungen | TÜREX"
      metaDescription="Türe zugefallen? Hier findest du alles, bezüglich der Öffnung. Informationen über Preise, Dauer und Abwicklung, inklusive Tipps vom Aufsperrdienst Profi."
      jsonLd={standardTuerStrucutreData}
    >
      <header>
        <UI.Navigation isActiveHamburger={true} />
        <UI.HeaderSub title="Öffnung zugefallener Standardtüren (keine Sicherheitstüren)">
          <UI.Typography variant="lg" className="text-white mt-4">
            Wenn sie nicht versperrt sind und der Schlüssel nicht im Zylinder
            steckt
          </UI.Typography>
        </UI.HeaderSub>
        <UI.Breadcrumbs />
      </header>
      {/* Section 1 START */}
      <UI.Container element="main" widthMode="full" className="py-16">
        <UI.Container element="section">
          <UI.Typography variant="lg">
            Fachlich und behördlich befähigt
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            Türe zugefallen? Wir öffnen rasch.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Wir helfen schnell und unkompliziert bei zugefallenen Standardtüren.
            Unser{' '}
            <Link href="/" className="underline">
              Aufsperrnotdienst in Wien
            </Link>{' '}
            ist genau auf solche Situationen spezialisiert und jederzeit bereit.
            Erfahre jetzt alles Notwendige über das Öffnen von zugefallenen
            Standardtüren.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 1 END */}
      {/* Section 2 START */}
      <UI.Container widthMode="full" className="py-[56px]">
        <UI.Container element="section">
          <UI.Typography variant="lg">Rasch & unkompliziert</UI.Typography>
          <UI.Typography variant="h3" className="pt-2">
            Der Ablauf im Detail.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Anruf und Erstberatung (00-24h)
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Du rufst uns an und beschreibst uns kurz dein Problem. Wir beraten
            dich direkt am Telefon über die nächsten Schritte, geben dir sofort
            eine transparente Kostenschätzung und informieren dich über die
            voraussichtliche Ankunftszeit.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Rasche Ankunft
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Einer unserer geschulten Techniker macht sich danach auf den Weg zu
            dir. Durchschnittlich benötigt unser Schlüsseldienst maximal 30
            Minuten um vor Ort zu sein. Abhängig jedoch von der aktuellen
            Auftrags- und Verkehrslage kann dies entweder etwas kürzer oder
            länger dauern.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Schadlose Türöffnung vor Ort
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Vor Ort bewertet unser Techniker die Situation genau und bestimmt
            die optimale Methode für die Öffnung der Tür. Mithilfe ausgewählter
            Werkzeuge und bewährten Techniken öffnet der Techniker die Tür
            schnell, ohne Schaden und effizient.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Bestätigung und Bezahlung
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Nach der erfolgreichen Türöffnung bleibt nur noch rechtsverbindliche
            Erklärung zu unterzeichnen. Diese ist gesetzlich vorgeschrieben und
            dient der beidseitigen Sicherheit. Danach erfolgt die Bezahlung,
            entweder in Bar oder mit Kartenzahlung, direkt vor Ort.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 2 END */}
      {/* Section 3 START */}
      <UI.Container element="section" widthMode="full">
        <UI.Container>
          <UI.Typography variant="lg">Schadlos & professionell</UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            So öffnet unser Schlüsseldienst deine Tür.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Je nach Art der Standardtür und des Schlosses wählt der Techniker
            die passenden Methoden und Werkzeuge aus. Die folgenden Methoden
            werden am häufigsten bei zugefallenen Standardtüren angewandt.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Türfallen-Öffnung
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Mit speziellen Karten oder Bändern wird die Türfalle zurückgezogen,
            ohne den Türzylinder zu beschädigen. Diese Methode ist besonders
            schonend und gehört zu den Best Practices für das Öffnen
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Zieh- und Drückwerkzeuge
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Diese Werkzeuge ermöglichen es, die Türfalle zu betätigen, indem man
            sie von außen erreicht und manipuliert. Dies ist besonders effektiv
            bei Türen, die nur zugefallen sind, um sie ohne Schaden zu öffnen.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Manipulation des Schlosses
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            In speziellen Fällen kann das Schloss direkt manipuliert werden, um
            die Tür zu öffnen. Dies erfordert viel Geschick und Erfahrung, um
            Schäden zu vermeiden. Keine Sorge, wir sind darin erfahren und
            bestens über die gängigen Schlösser informiert.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Spezielle Kamerasysteme
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            In besonders schwierigen Fällen kann unser Techniker spezielle
            Kamerasysteme einsetzen. Dabei wird eine Teleskopstange mit
            angebrachter Kamera verwendet, um das Innere des Schlosses zu
            inspizieren und die beste Methode zur Öffnung zu bestimmen.
          </UI.Typography>
          <UI.Call />
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
            Fair & nach WKÖ-Richtlinien
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            Fixpreise für Öffnung zugefallener Standardtüren.
          </UI.Typography>
          <ul className="w-full max-w-[480px] pt-8">
            <li className="flex items-center gap-1 text-[16px] md:text-[18px] font-['Lexend']">
              <CheckIcon className="w-5" />
              Transparente Preisgestaltung
            </li>
            <li className="flex items-center gap-1 pt-2 text-[16px] md:text-[18px] font-['Lexend']">
              <CheckIcon className="w-5" />
              Anfahrtskosten inkludiert
            </li>
          </ul>
          <UI.Typography variant="lg" className="pt-8">
            Unsere Preise sind fair und transparent, ohne versteckte Kosten. Wir
            richten uns nach den Preiserhebungen der WKÖ (Wirtschaftskammer
            Wien), um dir den einen fairen und transparenten Fixpreis zu
            garantieren.
          </UI.Typography>
          <TableContentSingleService service={priceDataNormalDoor} />
        </UI.Container>
      </UI.Container>
      {/* Section 4 END */}
      {/* Section 5 START */}
      <UI.Container widthMode="full" className="py-16">
        <UI.Container element="section">
          <UI.Typography variant="h3" className="mt-8">
            Dauer der Türöffnung: ca. 15 Minuten
          </UI.Typography>
          <UI.Typography variant="lg">
            Abhängig von der Art des Schlosses und der Tür kann dies auch bis zu
            etwa 30 Minuten dauern. Unsere erfahrenen Techniker sind jedoch in
            der Lage, die meisten zugefallenen Türen innerhalb von 10 bis 15
            Minuten zu öffnen.
          </UI.Typography>
          <UI.Typography variant="xl" className="mt-8">
            Absolut transparent
          </UI.Typography>
          <UI.Typography variant="h2">
            Warum kostet ein Schlüsseldienst so viel?
          </UI.Typography>
          <UI.Typography variant="lg">
            Unsere Preise orientieren sich an der Preiserhebung der WKÖ für
            unsere Branche. Dadurch können wir dir eine hohe Qualität unserer
            Dienstleistungen, Werkzeuge und des Personals rund um die Uhr
            bieten. Diese Kalkulation deckt alle notwendigen Kosten, die uns
            ermöglichen, unsere Dienstleistungen seriös und professionell
            durchzuführen.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            24h Bereitschaft
          </UI.Typography>
          <UI.Typography variant="lg">
            Wir bieten einen Rund-um-die-Uhr-Service an, um in Notfällen
            jederzeit verfügbar zu sein. Die Kosten für die 24/7-Bereitschaft
            beinhalten zusätzliche Gehälter und Bereitschaftszuschläge für
            unsere Techniker, die auch nachts, an Wochenenden und Feiertagen
            einsatzbereit sind.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            Fahrzeuge und Erhaltungskosten
          </UI.Typography>
          <UI.Typography variant="lg">
            Unsere Techniker sind mobil und müssen schnell vor Ort sein. Die
            Erhaltungskosten unserer Fahrzeuge umfassen regelmäßige Wartungen,
            Reparaturen, Kraftstoff und Versicherungen. Damit stellen wir
            sicher, dass unser Service reibungslos funktionieren kann.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            Administrationskosten
          </UI.Typography>
          <UI.Typography variant="lg">
            Effiziente Verwaltung und Koordination sind entscheidend für
            qualitativ hochwertigen Service. Dies beinhaltet Kosten für
            Büromieten, Kommunikationstechnologien und IT-Systeme, damit unsere
            Abläufe reibungslos funktionieren.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 5 END */}
      {/* Section Servcies START */}
      <UI.Container widthMode="full" className="py-16">
        <UI.Container element="section">
          <UI.Typography variant="xl" className="pt-16">
            Andere Leistungen von Türex ansehen:
          </UI.Typography>
          <div className="grid grid-cols-3 gap-2 mt-8">
            {services.map((el, index: number) => (
              <div
                key={index}
                className="bg-primary-50 p-4 m-1 rounded-lg text-center"
              >
                <Link href={el.url} className="border-b border-black">
                  {el.title}
                </Link>
              </div>
            ))}
          </div>
        </UI.Container>
      </UI.Container>
      {/* Section Servcies END */}
      {/* Section 7 START */}
      <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
        <UI.Container element="section">
          <UI.Typography variant="lg" className="pt-8 text-white">
            Darauf solltest du achten
          </UI.Typography>
          <UI.Typography variant="h2" className="text-white">
            Tür zugefallen - sollte man selbst öffnen?
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8 text-white">
            Es mag verlockend sein, zu versuchen, die Tür selbst zu öffnen, aber
            das kann riskant sein. Es ist immer besser, einen professionellen
            Schlüsseldienst zu kontaktieren, um die Aufgabe fachlich und sicher
            zu erledigen.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8 text-white">
            Ohne die richtigen Werkzeuge und Techniken besteht ein hohes Risiko,
            die Tür, den Rahmen oder das Schloss zu beschädigen, was teure
            Reparaturen nach sich ziehen kann. Moderne Türschlösser sind oft
            komplex und erfordern spezielle Kenntnisse und Werkzeuge, um sie
            ohne Schaden zu öffnen. Ein unsachgemäßer Öffnungsversuch kann das
            Schloss beschädigen und somit die Sicherheit deines Zuhauses
            beeinträchtigen.
          </UI.Typography>
          <UI.Typography variant="h3" className="text-white mt-8">
            Unser Tipp.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2 text-white">
            Wenn du dennoch versuchst, die Tür selbst zu öffnen, sei äußerst
            vorsichtig und wende keine Gewalt an.
          </UI.Typography>
          <UI.Typography variant="h3" className="text-white mt-8">
            Tipps für das Warten auf den Schlüsseldienst.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2 text-white">
            Wir haben einige Tipps für unsere Kunden vorbereitet um das Warten
            auf den Schlüsseldienst zu möglichst stressfrei zu gestalten.
          </UI.Typography>
          <Link
            href="https://tuerex.at/#tipps"
            className="underline text-white"
          >
            Tipps ansehen
          </Link>
        </UI.Container>
      </UI.Container>
      {/* Section 7 END */}
      {/* Section FAQ START */}
      <UI.Container widthMode="full" className="py-16">
        <UI.Container element="section">
          <UI.Typography variant="xl" className="pt-16">
            Zugeklappte Standardtür
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2 pb-8">
            Häufig gestellte Fragen.
          </UI.Typography>
          <UI.Faq items={faqDataNormalDoor} />
        </UI.Container>
      </UI.Container>
      {/* Section FAQ END */}
    </Layout>
  );
};

export default IndexPage;
