import React from 'react';
import Layout from 'components/layouts';
import { UI } from 'components';
import { CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import TableContentSingleService from 'components/organisms/price-table/table-single-service';
import { services } from 'constants/services';
import { priceDataTelescope } from 'constants/price/telescope';
import faqDataTelescope from 'constants/faq/telescope';
import teleskopStrucutreData from 'utils/structure-data/teleskop';

const IndexPage: React.FC = () => {
  return (
    <Layout
      canonical={`https://tuerex.at/leistungen/tueroeffnung-mit-teleskop`}
      title="Türöffnung mittels Teleskopstange | Leistungen | TÜREX"
      metaDescription="Präzise Türöffnungen mittels Teleskopstange. Die moderne Technik ermöglicht eine beschädigungsfreie Inspektion und Öffnung. Jetzt mehr erfahren."
      jsonLd={teleskopStrucutreData}
    >
      <header>
        <UI.Navigation isActiveHamburger={true} />
        <UI.HeaderSub title="Türöffnung mittels Teleskop.">
          <UI.Typography variant="lg" className="text-white mt-4">
            Inspektion und Türöffnung mithilfe einer Teleskopstange mit
            angebrachter Kamera
          </UI.Typography>
        </UI.HeaderSub>
        <UI.Breadcrumbs />
      </header>
      {/* Section 1 START */}
      <UI.Container element="main" widthMode="full" className="py-16">
        <UI.Container element="section">
          <UI.Typography variant="lg">
            Moderne Technik für sicheres Öffnen
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            Türöffnung und Inspektion mithilfe einer Teleskopstange.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            In manchen Fällen ist es nicht möglich, die Türöffnung mit
            standardisierten Werkzeugen und Verfahren durchzuführen. In solchen
            Situationen ist es notwendig, die Tür mithilfe einer Teleskopstange
            mit angebrachter Kamera zu inspizieren und zu öffnen.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 1 END */}
      {/* Section 2 START */}
      <UI.Container widthMode="full" className="py-[56px]">
        <UI.Container element="section">
          <UI.Typography variant="lg">
            So funktioniert das Öffnen mit Teleskop
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-2">
            Alle Schritte im Überblick.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Vorbereitung
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Wir bereiten die notwendigen Schritte für die Türöffnung vor, indem
            wir das Teleskopwerkzeug einsetzen, um eine Bestandsaufnahme
            durchzuführen. Dabei überprüfen wir die Tür und das Schloss.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Türöffnung
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Durch präzises Positionieren der Teleskopstange öffnen wir deine
            Tür, indem wir das Werkzeug genau in den Türspalt einführen. So
            haben wir einen besseren Überblick und können deine Tür möglichst
            schadenfrei öffnen.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Funktionstest
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Wir führen einen Funktionstest durch. War in deinem Fall ein
            schadfreies Öffnen nicht möglich, prüfen wir dein Schloss auf
            Schäden und beraten dich gerne individuell zu den nächsten
            Schritten.
          </UI.Typography>
          <UI.Call />
        </UI.Container>
      </UI.Container>
      {/* Section 2 END */}
      {/* Section 4 START */}
      <UI.Container
        element="section"
        widthMode="full"
        className="bg-gray-100 py-[56px] mt-16"
      >
        <UI.Container>
          <UI.Typography variant="lg">Transparenter Aufpreis</UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            Kosten für das Öffnen mittels Teleskopstange.
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
            Wenn die Teleskopstange zum Einsatz kommen muss, wird unsere
            Dienstleistung nicht doppelt berechnet. Stattdessen gibt es einen
            Aufpreis für den Einsatz der Teleskopstange, der zur jeweiligen
            aktuellen Öffnung dazugerechnet wird.
          </UI.Typography>
          <TableContentSingleService service={priceDataTelescope} />
        </UI.Container>
      </UI.Container>
      {/* Section 4 END */}
      {/* Section 5 START */}
      <UI.Container widthMode="full" className="py-16">
        <UI.Container element="section">
          <UI.Typography variant="h3" className="mt-8">
            Dauer: 20-30 Minuten
          </UI.Typography>
          <UI.Typography variant="lg">
            Inspektion und Türöffnung mit einem Teleskopwerkzeug dauern in der
            Regel 20 bis 30 Minuten, abhängig von der Art des Schlosses, der Tür
            und der konkreten Situation.
          </UI.Typography>
          <UI.Typography variant="xl" className="mt-8">
            Die Kosten einfach erklärt
          </UI.Typography>
          <UI.Typography variant="h2">
            Der Teleskop-Aufpreis im Detail.
          </UI.Typography>
          <UI.Typography variant="lg">
            Die Türöffnung mit einem Teleskop-System bietet erhebliche Vorteile,
            die über die Standardmethoden hinausgehen, aber auch zusätzliche
            Ressourcen und Technologien erfordert. Hier sind die Hauptgründe,
            warum diese spezialisierte Methode als Aufpreis zur normalen Öffnung
            verrechnet wird.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            Einsatz modernster Technologie
          </UI.Typography>
          <UI.Typography variant="lg">
            Diese Technologie ermöglicht es uns, das Innere des Schlosses und
            den Türmechanismus detailliert zu inspizieren. Der Kauf, die Wartung
            und die Kalibrierung dieser hoch entwickelten Ausrüstung sind
            kostenintensiv.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            Erhöhte Präzision und Sicherheit
          </UI.Typography>
          <UI.Typography variant="lg">
            Dies reduziert das Risiko von Beschädigungen erheblich und erhöht
            die Erfolgsrate der Türöffnung. Diese Präzision erfordert
            spezialisierte Werkzeuge und eine höhere Qualifikation, sowie die
            Weiterbildung unserer Techniker.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            Erweiterter Arbeitsaufwand
          </UI.Typography>
          <UI.Typography variant="lg">
            Die detaillierte Analyse des Schlosses und der Mechanismen bedeutet,
            dass der Techniker mehr Zeit für die Inspektion und die
            anschließende Öffnung benötigt. Dies erhöht den Arbeitsaufwand und
            die aufgewendete Zeit pro Einsatz.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 5 END */}
      {/* Section 6 START */}
      <UI.Container widthMode="full" className="py-[56px]">
        <UI.Container element="section">
          <UI.Typography variant="xl" className="pt-8">
            Die Funktion von Teleskop
          </UI.Typography>
          <UI.Typography variant="h2">
            So funktioniert die Teleskopstange im Detail.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-4">
            Das Teleskop-System, das wir bei Türex verwenden, besteht aus einer
            flexiblen Stange mit einer hochauflösenden Kamera an der Spitze.
            Diese Kamera überträgt Echtzeitbilder auf einen Monitor, den der
            Techniker nutzt. Durch das Einführen der Teleskopstange in den
            Türspalt kann der Techniker das Innere des Schlosses und den
            Türmechanismus genau inspizieren. Diese detaillierten Bilder
            ermöglichen es, Hindernisse und beschädigte Teile zu identifizieren
            und die beste Öffnungsmethode zu bestimmen. Dadurch wird eine
            präzise und schonende Türöffnung gewährleistet, die das Risiko von
            Beschädigungen minimiert und auch bei komplexen Schlosssystemen
            effektiv ist.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 6 END */}
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
          <UI.Typography variant="h3" className="text-white">
            Tipps für das Warten auf den Schlüsseldienst
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8 text-white">
            Wir haben einige Tipps für unsere Kunden vorbereitet, um die
            Wartezeit auf den Schlüsseldienst möglichst stressfrei zu
            verbringen.
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
            Tür öffnen mit Teleskop
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2 pb-8">
            Häufig gestellte Fragen.
          </UI.Typography>
          <UI.Faq items={faqDataTelescope} />
        </UI.Container>
      </UI.Container>
      {/* Section FAQ END */}
    </Layout>
  );
};

export default IndexPage;
