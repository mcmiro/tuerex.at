import React from 'react';
import Layout from 'components/layouts';
import { UI } from 'components';
import { CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import TableContentSingleService from 'components/organisms/price-table/table-single-service';
import { services } from 'constants/services';
import { priceDataSecureDoor } from 'constants/price/secure-door';
import faqDataSecureDoor from 'constants/faq/secure-door';
import sicherheitsTuerStrucutreData from 'utils/structure-data/sicherheitstuer';

const IndexPage: React.FC = () => {
  return (
    <Layout
      canonical={`https://tuerex.at/leistungen/zugefallene-sicherheitstueren`}
      title="Öffnung zugefallener Sicherheitstüren | Leistungen | TÜREX"
      metaDescription="Sicherheitstür verschlossen? Erfahre hier alles über unsere Dienstleistungen zur sicheren und professionellen Öffnung von Sicherheitstüren."
      jsonLd={sicherheitsTuerStrucutreData}
    >
      <header>
        <UI.Navigation isActiveHamburger={true} />
        <UI.HeaderSub title="Öffnung zugefallener Sicherheitstüren.">
          <UI.Typography variant="lg" className="text-white mt-4">
            Wenn sie nicht versperrt sind und der Schlüssel nicht im Zylinder
            steckt.
          </UI.Typography>
        </UI.HeaderSub>
        <UI.Breadcrumbs />
      </header>
      {/* Section 1 START */}
      <UI.Container element="main" widthMode="full" className="py-16">
        <UI.Container element="section">
          <UI.Typography variant="lg">
            Fachlich und behördlich zertifiziert
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            Wenn deine Sicherheitstür verschlossen ist, stehen wir bereit.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Unser spezialisiertes Team in Wien steht dir rund um die Uhr zur
            Verfügung, um verschlossene Sicherheitstüren zu öffnen. Wir sind
            darauf trainiert, schnell und effizient zu handeln. Hier findest du
            alle relevanten Informationen zu unserem Service.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 1 END */}
      {/* Section 2 START */}
      <UI.Container widthMode="full" className="py-[56px]">
        <UI.Container element="section">
          <UI.Typography variant="lg">
            Schnelle Hilfe & kompetente Lösungen
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-2">
            Der Öffnungs-Prozess im Detail.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Rufe uns an (00-24h)
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Kontaktiere uns und beschreibe dein Problem. Unser fachkundiges Team
            gibt dir sofort am Telefon eine klare Übersicht der nächsten
            Schritte, eine transparente Kostenschätzung und die voraussichtliche
            Ankunftszeit unseres Technikers.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Schnelle Reaktion und Ankunft
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Sobald du uns anrufst, macht sich einer unserer qualifizierten
            Techniker sofort auf den Weg zu dir. Im Durchschnitt sind wir
            innerhalb von 30 Minuten bei unseren Kunden in Wien. Die genaue
            Ankunftszeit hängt von der aktuellen Auftragslage und der
            Verkehrssituation ab.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Fachgerechte Türöffnung vor Ort
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Sobald unser Techniker bei dir ist, analysiert er die Situation und
            wählt die optimale Methode zur Öffnung deiner Sicherheitstür. Mit
            spezialisierten Werkzeugen und Techniken sorgen wir eine sichere und
            beschädigungsfreie Öffnung der Tür.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Abschluss und Bezahlung
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Nach erfolgreicher Öffnung der Tür bitten wir dich, eine
            rechtsverbindliche Erklärung zu unterschreiben. Dies dient sowohl
            deiner als auch unserer Sicherheit. Die Bezahlung erfolgt direkt vor
            Ort, entweder in Bar oder per Kartenzahlung.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 2 END */}
      {/* Section 3 START */}
      <UI.Container element="section" widthMode="full">
        <UI.Container>
          <UI.Typography variant="lg">Sicher und professionell</UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            Methoden, die wir zum öffnen von Sicherheitstüren verwenden.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Unsere Techniker sind bestens geschult und verwenden verschiedene
            Methoden, um Sicherheitstüren zu öffnen, ohne Schäden zu
            verursachen. Wir haben hier die häufigsten Techniken die wir für die
            Öffnung von Sicherheitstüren verwenden aufgezählt.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Lockpicking
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Wir setzen hochwertige Dietriche ein, um die Pins im
            Sicherheitsschloss präzise zu manipulieren. Diese Technik erfordert
            viel Geschick und Fingerspitzengefühl, welche unsere erfahrenen
            Schlüsseldienst-Techniker meistern.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Bumping
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Speziell angefertigtes Bump-Key (Schlagschlüssel) wird ins Schloss
            eingeführt und mit einem Schlag bewegt, um die Pins zu setzen. Diese
            Technik ermöglicht es uns, die Tür effizient zu öffnen, ohne das
            Schloss zu beschädigen.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Picking Gun
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Unsere Techniker nutzen mechanische und elektrische Picking Guns,
            die schnelle Bewegungen erzeugen, um die Pins im Schloss zu lösen.
            Dies ist eine effektive Methode, um besonders schwierige Schlösser
            zu öffnen.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Bohrtechnik
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            In seltenen Fällen, wenn andere Methoden nicht erfolgreich sind,
            verwenden wir spezielle Bohrer, um das Schloss zu öffnen. Diese
            Methode erfordert den anschließenden Austausch des Schlosses, wird
            aber nur als letzte Option genutzt.
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
          <UI.Typography variant="lg">Transparent und fair</UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            Unsere Fixpreise für zugefallene Sicherheitstüren.
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
            Wir bieten transparente und faire Preise, ohne versteckte Kosten.
            Unsere Preisgestaltung richtet sich nach den Richtlinien der WKÖ
            (Wirtschaftskammer Wien), um dir den besten Service zum besten Preis
            zu garantieren.
          </UI.Typography>
          <TableContentSingleService service={priceDataSecureDoor} />
        </UI.Container>
      </UI.Container>
      {/* Section 4 END */}
      {/* Section 5 START */}
      <UI.Container widthMode="full" className="py-16">
        <UI.Container element="section">
          <UI.Typography variant="h3" className="mt-8">
            Dauer der Türöffnung: ca. 30 Minuten
          </UI.Typography>
          <UI.Typography variant="lg">
            Die Öffnung einer Sicherheitstür dauert in der Regel zwischen 20 und
            30 Minuten. Da Sicherheitstüren oft komplexere Schlösser und
            zusätzliche Sicherheitsmechanismen besitzen, kann die Öffnung in
            bestimmten Fällen auch etwas länger dauern.
          </UI.Typography>
          <UI.Typography variant="xl" className="mt-8">
            Die Kosten verstehen.
          </UI.Typography>
          <UI.Typography variant="h2">
            Warum kostet der Schlüsseldienst so viel?
          </UI.Typography>
          <UI.Typography variant="lg">
            Unsere Preise basieren auf den Erhebungen der WKO für unsere
            Branche. Dies ermöglicht es uns, rund um die Uhr qualitativ
            hochwertige Dienstleistungen anzubieten. Die Kosten setzen sich aus
            verschiedenen Faktoren zusammen.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            24h Notdienst
          </UI.Typography>
          <UI.Typography variant="lg">
            Unser 24/7-Service steht jederzeit für Notfälle bereit. Dies
            beinhaltet erhöhte Personalkosten für Bereitschaftszuschläge für
            unsere Techniker. Damit stellen wir jedoch sicher, dass wir 24h/365
            Tage im Jahr unterwegs sein können.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            Fahrzeuge und Betriebskosten
          </UI.Typography>
          <UI.Typography variant="lg">
            Um immer mobil und schnell vor Ort sein zu können, müssen die Kosten
            für Fahrzeuge und deren Betrieb gedeckt sein. Dies umfasst die
            Kosten für Wartung, Reparaturen, Kraftstoff und Versicherungen, etc.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            Verwaltungskosten
          </UI.Typography>
          <UI.Typography variant="lg">
            Effiziente Verwaltung ist entscheidend für reibungslose Abläufe.
            Dazu gehören Kosten für Büromieten, Kommunikationstechnologien und
            IT-Systeme. So gewährleisten wir stets effiziente und
            kundenorientierte Prozesse.
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
      {/* Section 6 START */}
      <UI.Container widthMode="full" className="py-[56px]">
        <UI.Container element="section">
          <UI.Typography variant="h2">
            So erkennst du ob deiner Tür eine Sicherheitstür ist?
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Manchmal ist es schwer, zwischen Standard- und Sicherheitstüren zu
            unterscheiden. Wir haben Tipps für dich vorbereitet, die dir dabei
            helfen sollen, deine Tür zu erkennen.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            #1 Verstärktes Material
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Fühle das Gewicht und die Dicke deiner Tür. Wenn sie sehr robust und
            schwer ist, besteht sie wahrscheinlich aus verstärktem Material und
            ist eine Sicherheitstür.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            #2 Sicherheits-Schließsysteme
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Versuche dich zu erinnern, wie viele Verriegelungspunkte deine Tür
            hat. Sicherheitstüren haben oft mehrere, die über die gesamte Länge
            der Tür verteilt sind.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            #3 Erweiterter Einbruchschutz
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Prüfe, ob deine Tür spezielle Verstärkungen oder Schutzmechanismen
            gegen Aufbruchversuche hat. Sicherheitstüren sind dafür konstruiert,
            Einbrecher abzuhalten.
          </UI.Typography>
          <UI.Typography variant="xl" className="pt-16">
            #4 Spezielle Türbänder
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Sicherheitstüren haben oft verstärkte Türbänder, die zusätzlichen
            Schutz bieten. Überprüfe, ob deine Tür solche Bänder hat, um sie als
            Sicherheitstür zu identifizieren.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 6 END */}
      {/* Section 7 START */}
      <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
        <UI.Container element="section">
          <UI.Typography variant="h3" className="text-white">
            Tipps für das Warten auf den Schlüsseldienst.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8 text-white">
            Wir haben einige Tipps für unsere Kunden vorbereitet, damit das
            Warten auf den Schlüsseldienst so stressfrei wie möglich verläuft.
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
            Zugeklappte Sicherheitstür
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2 pb-8">
            Häufig gestellte Fragen.
          </UI.Typography>
          <UI.Faq items={faqDataSecureDoor} />
        </UI.Container>
      </UI.Container>
      {/* Section FAQ END */}
    </Layout>
  );
};

export default IndexPage;
