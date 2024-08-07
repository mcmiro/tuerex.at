import React from 'react';
import Layout from 'components/layouts';
import { UI } from 'components';
import { CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import TableContentSingleService from 'components/organisms/price-table/table-single-service';
import { services } from 'constants/services';
import versperrteTuerStrucutreData from 'utils/structure-data/versperrtetuer';
import faqDataLockedDoor from 'constants/faq/locked-door';
import { priceDataLockedDoor } from 'constants/price/locked-door';

const IndexPage: React.FC = () => {
  return (
    <Layout
      canonical={`https://tuerex.at/leistungen/versperrte-tueren`}
      title="Öffnung versperrter Türen | Leistungen | TÜREX"
      metaDescription="Wenn du dich ausgesperrt hast, findest du hier alles darüber, wie wir sicher und professionell deine Türe öffnen. Jetzt mehr erfahren."
      jsonLd={versperrteTuerStrucutreData}
    >
      <header>
        <UI.Navigation isActiveHamburger={true} />
        <UI.HeaderSub title="Öffnung von versperrten Türen (Standard- und Sicherheitstüren).">
          <UI.Typography variant="lg" className="text-white mt-4">
            Wenn die Tür versperrt ist und / oder der Schlüssel im Zylinder
            steckt oder abgebrochen ist.
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
            Wenn die Sicherheitstür verschlossen ist, stehen wir bereit.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Wir bieten schnelle und zuverlässige Hilfe bei versperrten Türen,
            sowohl Standard- als auch Sicherheitstüren. Wenn der Schlüssel noch
            im Zylinder steckt oder abgebrochen ist, entfernen wir diesen und
            machen deine Wohnung wieder zugänglich. Unser Schlüsseldienst in
            Wien ist jederzeit dafür bereit.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 1 END */}
      {/* Section 2 START */}
      <UI.Container widthMode="full" className="py-[56px]">
        <UI.Container element="section">
          <UI.Typography variant="lg">
            Schnelle & kompetente Hilfe vor Ort
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-2">
            So funktioniert das Öffnen von Versperrten Türen.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Unsere Hotline anrufen (00-24h)
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Beschreibe uns dein Problem am Telefon. Unser erfahrenes Team gibt
            dir sofort eine klare Übersicht der nächsten Schritte, eine
            transparente Kostenschätzung und die voraussichtliche Ankunftszeit
            unseres Technikers.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Sofortige Einsatzbereitschaft
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Nachdem du uns kontaktiert hast, macht sich einer unserer
            qualifizierten Techniker sofort auf den Weg zu dir. Durchschnittlich
            sind wir innerhalb von 30 Minuten bei unseren Kunden in Wien,
            abhängig von aktuellem Standort.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Fachgerechte Türöffnung
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Sobald unser Techniker bei dir eintrifft, wird die Situation
            sorgfältig bewertet und die optimale Methode zur Öffnung deiner
            Sicherheitstür ausgewählt. Danach sorgen wir für eine
            beschädigungsfreie und effiziente Türöffnung.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Abschließende Formalitäten und Zahlung
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Nach erfolgreicher Türöffnung bitten wir dich, eine
            rechtsverbindliche Erklärung zu unterschreiben, um sowohl deine als
            auch unsere Sicherheit zu gewährleisten. Die Bezahlung kann direkt
            vor Ort entweder in Bar oder per Kartenzahlung erfolgen.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 2 END */}
      {/* Section 3 START */}
      <UI.Container element="section" widthMode="full">
        <UI.Container>
          <UI.Typography variant="lg">
            Behördlich befähigt und erfahren
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            So öffnen wir die versperrte Tür.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            In Kombination mit Erfahrung und Fachkenntnissen verwenden wir
            moderne Werkzeuge und Techniken. Damit du über die Techniken und
            Methoden informiert bist, findest du hier eine Beschreibung der
            häufigsten.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Lockpicking
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Unsere erfahrenen Techniker verwenden hochwertige Dietriche, um die
            Pins im Schloss zu manipulieren und die Tür zu öffnen, selbst wenn
            der Schlüssel im Zylinder steckt oder abgebrochen ist.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Bumping
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Wenn ein Schlüssel im Schloss steckt, können wir spezielle Bump-Keys
            einsetzen, um die Pins im Schloss zu setzen und die Tür zu öffnen.
            Diese Methode ist effektiv und beschädigt weder Tür noch Schloss.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Picking Gun
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Mechanische und elektrische Picking Guns ermöglichen uns, die Pins
            im Schloss durch schnelle, präzise Bewegungen zu lösen, auch wenn
            ein abgebrochener Schlüsselteil im Zylinder steckt. Diese Technik
            ist besonders effektiv und schonend.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Extraktion abgebrochener Schlüssel
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Mit speziellen Werkzeugen können wir abgebrochene Schlüsselreste
            sicher aus dem Zylinder entfernen, ohne das Schloss zu beschädigen.
            Diese Methode ist besonders nützlich, wenn der abgebrochene
            Schlüssel den Schließmechanismus blockiert.
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
          <UI.Typography variant="lg">Strukturiert und fair</UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            Unsere Fixpreise
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
            Unsere Preise sind klar und gerecht, ohne versteckte Gebühren. Wir
            orientieren uns an den Vorgaben der Wirtschaftskammer Wien (WKÖ), um
            dir hochwertigen Service zu einem fairen Preis zu bieten.
          </UI.Typography>
          <TableContentSingleService service={priceDataLockedDoor} />
        </UI.Container>
      </UI.Container>
      {/* Section 4 END */}
      {/* Section 5 START */}
      <UI.Container widthMode="full" className="py-16">
        <UI.Container element="section">
          <UI.Typography variant="h3" className="mt-8">
            Dauer der Türöffnung: 15-60 Minuten
          </UI.Typography>
          <UI.Typography variant="lg">
            Je nach Art der Tür (Standardtür oder Sicherheitstür), sowie der
            Komplexität und den Sicherheitsmechanismen, variiert die Dauer
            zwischen 15 und 60 Minuten. Eine genauere Zeitangabe kann erst vor
            Ort nach der Begutachtung der Tür gemacht werden.
          </UI.Typography>
          <UI.Typography variant="xl" className="mt-8">
            Die Kosten verstehen.
          </UI.Typography>
          <UI.Typography variant="h2">
            Der Grund für hohe Kosten vom Schlüsseldienst.
          </UI.Typography>
          <UI.Typography variant="lg">
            Unsere Preisgestaltung folgt den Richtlinien der WKÖ für unsere
            Branche. Dadurch können wir dir jederzeit erstklassige
            Dienstleistungen bieten. Die Gesamtkosten umfassen verschiedene
            Elemente, die unseren hochwertigen Service sicherstellen.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            Rund-um-die-Uhr Notdienst
          </UI.Typography>
          <UI.Typography variant="lg">
            Unser 24/7-Notdienst ist jederzeit für dich im Einsatz. Dies
            erfordert zusätzliche Personalkosten, insbesondere für die
            Bereitschaft unserer Techniker. So können wir sicherstellen, dass
            wir das ganze Jahr über rund um die Uhr verfügbar sind.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            Fahrzeuge und Betrieb
          </UI.Typography>
          <UI.Typography variant="lg">
            Um schnell und mobil vor Ort sein zu können, müssen die Kosten für
            unsere Fahrzeuge gedeckt sein. Dies schließt Wartung, Reparaturen,
            Kraftstoff und Versicherungen ein, um eine ständige
            Einsatzbereitschaft zu gewährleisten.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            Verwaltung und Administration
          </UI.Typography>
          <UI.Typography variant="lg">
            Nur eine gut organisierte Verwaltung sichert reibungslose Abläufe.
            Dazu gehören Kosten wir Büromieten, moderne Kommunikationssysteme
            und IT-Infrastruktur. So gewährleisten wir immer effiziente und
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
            Zylinder immer vor Ort vorhanden.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            In manchen Fällen ist es unumgänglich, den Türzylinder
            auszutauschen, obwohl dies immer die letzte Option darstellt. Unser
            Team ist jedoch bestens vorbereitet und hat stets Ersatz-Zylinder
            dabei. Auf Wunsch können wir vor Ort einen provisorischen Zylinder
            installieren. Alternativ kannst du auch einen neuen Zylinder bei uns
            kaufen und uns mit dem Einbau beauftragen. Die Kosten hierfür
            variieren je nach Modell und Aufwand. Mehr darüber erfährst du{' '}
            <Link
              href="https://tuerex.at/leistungen/zylinder-tausch"
              className="underline"
            >
              hier
            </Link>
            .
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 6 END */}
      {/* Section 7 START */}
      <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
        <UI.Container element="section">
          <UI.Typography variant="h3" className="text-white">
            Tipps für das Warten auf den Schlüsseldienst
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8 text-white">
            Wir haben einige Tipps für unsere Kunden vorbereitet um das Warten
            auf den Schlüsseldienst zu möglichst stressfrei zu meistern.
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
            Öffnung versperrter Türen
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2 pb-8">
            Häufig gestellte Fragen.
          </UI.Typography>
          <UI.Faq items={faqDataLockedDoor} />
        </UI.Container>
      </UI.Container>
      {/* Section FAQ END */}
    </Layout>
  );
};

export default IndexPage;
