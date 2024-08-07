import React from 'react';
import Layout from 'components/layouts';
import { UI } from 'components';
import { CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import TableContentSingleService from 'components/organisms/price-table/table-single-service';
import { services } from 'constants/services';
import zylinderStrucutreData from 'utils/structure-data/zylindertausch';
import faqDataCylinder from 'constants/faq/cylinder';
import { priceDataCylinder } from 'constants/price/cylinder';

const IndexPage: React.FC = () => {
  return (
    <Layout
      canonical={`https://tuerex.at/leistungen/zylinder-tausch`}
      title="Zylindertausch, Verkauf und Montage | Leistungen | TÜREX"
      metaDescription="Finde heraus, wann ein Zylindertausch notwendig oder empfehlenswert ist und wie er sicher durchgeführt wird. Jetzt mehr erfahren."
      jsonLd={zylinderStrucutreData}
    >
      <header>
        <UI.Navigation isActiveHamburger={true} />
        <UI.HeaderSub title="Zylindertausch, Beratung und Verkauf.">
          <UI.Typography variant="lg" className="text-white mt-4">
            Falls erwünscht und erforderlich (z. B. bei einem abgebrochenen
            Schlüssel).
          </UI.Typography>
        </UI.HeaderSub>
        <UI.Breadcrumbs />
      </header>
      {/* Section 1 START */}
      <UI.Container element="main" widthMode="full" className="py-16">
        <UI.Container element="section">
          <UI.Typography variant="lg">Immer vorbereitet</UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            Wir haben immer eine Lösung dabei.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Wenn dein Zylinder defekt ist, sind wir vor Ort bestens vorbereitet.
            Nach der Türöffnung durch unseren{' '}
            <Link href="/" className="underline">
              24h-Aufsperrnotdienst
            </Link>{' '}
            kannst du uns direkt für den Zylindertausch beauftragen. Du musst
            dich aber nicht sofort entscheiden. Wir haben immer einen
            provisorischen Zylinder dabei, den du sofort montieren lassen
            kannst. So hast du Zeit, in Ruhe über einen neuen Zylinder
            nachzudenken.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 1 END */}
      {/* Section 2 START */}
      <UI.Container widthMode="full" className="py-[56px]">
        <UI.Container element="section">
          <UI.Typography variant="lg">
            Zylindertausch inklusive Beratung und Verkauf
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-2">
            Unsere Leistungen im Überblick.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Beratung und Verkauf
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Wir bieten eine Auswahl an Zylindermodellen, die du direkt bei uns
            kaufen kannst, und verrechnen diese ohne Aufpreis weiter. Mit
            unserer Expertise beraten wir dich, um die beste Wahl zu treffen,
            unabhängig davon, ob du den Zylinder letztendlich bei uns oder
            anderswo kaufst.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Provisorischer Zylinder
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Du hast die Möglichkeit, direkt vor Ort einen provisorischen{' '}
            {'"Notfall-Zylinder"'} von uns montieren zu lassen. Diese haben wir
            immer dabei – auch nachts, am Wochenende und an Feiertagen. So hast
            du eine Zwischenlösung, bis ein dauerhafter Zylinder montiert wird.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Neue Zylinder ohne Zusatzkosten
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Wenn du einen neuen Zylinder benötigst, bieten wir dir unser
            sorgfältig ausgewähltes Sortiment an. Die Kosten für den Zylinder
            werden ohne zusätzliche Kosten direkt an dich weitergegeben. So
            erhältst du hochwertige Qualität zum besten Preis.
          </UI.Typography>
          <UI.Typography variant="h4" className="pt-2">
            Zylindertausch
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-8">
            Du kannst uns auch ausschließlich für die Montage des Zylinders
            beauftragen, unabhängig davon, wo du den Zylinder kaufst. Wir
            verrechnen den Tausch nach Aufwand. Der Preis für einen
            Zylindertausch hängt vom konkreten Aufwand ab und kann erst nach
            Einsicht vor Ort angeboten werden.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 2 END */}
      {/* Section 3 START */}
      <UI.Container element="section" widthMode="full">
        <UI.Container>
          <UI.Typography variant="lg">Zylindertausch</UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            So tauschen wir deinen Zylinder aus.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Unsere Erfahrung in Kombination mit Fachkenntnissen über Zylinder
            gewährleistet einen sicheren und ordnungsgemäßen Austausch. Hier
            findest du die entsprechenden Leistungen.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Entfernen des alten Zylinders
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Wir entfernen den alten Zylinder fachgerecht und ohne Beschädigungen
            an der Tür oder dem Schloss. Dies umfasst das Lösen der Schrauben
            und das Herausziehen des Zylinders und eventueller Reste.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Einbau des neuen Zylinders
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Der neue Zylinder wird präzise eingesetzt und sicher befestigt.
            Dabei achten wir darauf, dass der Zylinder perfekt in das bestehende
            Schloss passt. Gegebenenfalls stellen wir alles noch so ein, damit
            es bestens funktioniert.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Überprüfung der Funktionalität
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Nach dem Einbau prüfen wir, ob der neue Zylinder einwandfrei
            funktioniert. Dazu gehört das Testen des Schließmechanismus mit dem
            neuen Schlüssel, um sicherzustellen, dass alles reibungslos läuft.
          </UI.Typography>
          <UI.Typography variant="h3" className="pt-16">
            Beratung und Entsorgung
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-2">
            Unsere Techniker geben dir wertvolle Tipps zur Pflege und Wartung
            des neuen Zylinders, um dessen Lebensdauer zu verlängern und die
            Sicherheit zu gewährleisten. Wir entsorgen den alten Zylinder,
            sodass du dich um nichts mehr kümmern musst.
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
          <UI.Typography variant="lg">Zylindertausch Kosten</UI.Typography>
          <UI.Typography variant="h2" className="pt-2">
            Unsere Preise
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
            Die Preise für Zylindertausch oder Kauf hängen immer vom konkreten
            Fall ab. Abhängig vom Modell und dem konkreten Aufwand im
            spezifischen Fall können die Preise variieren. Dadurch ist es nicht
            immer möglich, diese vorherzusagen. In unserer Preisliste findest du
            jedoch zumindest eine Orientierung der Kosten.
          </UI.Typography>
          <TableContentSingleService service={priceDataCylinder} />
        </UI.Container>
      </UI.Container>
      {/* Section 4 END */}
      {/* Section 5 START */}
      <UI.Container widthMode="full" className="py-16">
        <UI.Container element="section">
          <UI.Typography variant="h3" className="mt-8">
            Dauer: 15-30 Minuten
          </UI.Typography>
          <UI.Typography variant="lg">
            Abhängig von der Komplexität des Schlosses und den spezifischen
            Anforderungen vor Ort.
          </UI.Typography>
          <UI.Typography variant="xl" className="mt-8">
            Die Kosten verstehen.
          </UI.Typography>
          <UI.Typography variant="h2">
            Woraus setzen sich die Kosten für einen Zylindertausch zusammen?
          </UI.Typography>
          <UI.Typography variant="lg">
            Die endgültigen Kosten für einen Zylindertausch hängen von mehreren
            Faktoren ab. Konkret gesagt, geht es um den spezifischen Fall und
            das Zylindermodell. Hier findest du eine Übersicht aller Faktoren
            für die Preiszusammensetzung.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            Kosten des neuen Schlosses
          </UI.Typography>
          <UI.Typography variant="lg">
            Die Kosten für das neue Schloss hängen vom Modell ab. Diese beginnen
            bei 15 € für provisorische Zylinder und bei 30 € für dauerhafte
            Zylinder. Das Modell bestimmt auch den notwendigen Arbeitsaufwand.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            Stundensatz für Arbeitsaufwand
          </UI.Typography>
          <UI.Typography variant="lg">
            Wir berechnen unseren Stundensatz nach WKÖ-Richtlinien für den
            Austausch von Zylindern. Der konkrete Aufwand hängt von der Art der
            Tür und dem gewählten Zylinder ab. Wir schätzen den Aufwand ab und
            berechnen pro angefangener Stunde.
          </UI.Typography>
          <UI.Typography variant="h3" className="mt-8">
            Notfall- oder Normaldienst
          </UI.Typography>
          <UI.Typography variant="lg">
            Ein weiterer Faktor bei der Preiskalkulation ist die Uhrzeit, bzw.
            Tag. Unser Stundensatz variiert je nachdem, ob der Zylindertausch im
            Notdienst oder im Normaldienst durchgeführt wird. Genauere
            Informationen erhältst du direkt vor Ort von unserem Techniker.
          </UI.Typography>
        </UI.Container>
      </UI.Container>
      {/* Section 5 END */}
      {/* Section 6 START */}
      <UI.Container widthMode="full" className="py-[56px]">
        <UI.Container element="section">
          <UI.Typography variant="xl" className="pt-8">
            Für den Notfall vorbereitet
          </UI.Typography>
          <UI.Typography variant="h2">
            Zylinder immer vor Ort vorhanden.
          </UI.Typography>
          <UI.Typography variant="lg" className="pt-4">
            Manchmal lässt sich der Austausch des Türzylinders nicht vermeiden,
            obwohl dies immer die letzte Lösung darstellt. Unser Team ist dafür
            bestens gerüstet und hat immer Ersatz-Zylinder mit. Auf Wunsch
            können wir einen vorübergehenden Zylinder vor Ort installieren.
            Alternativ kannst du einen neuen Zylinder bei uns erwerben und uns
            mit dem Einbau beauftragen. Die Kosten hierfür hängen vom Modell und
            dem Arbeitsaufwand ab.
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
            Tipps für das Warten auf den Schlüsseldienst.
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
            Zylindertausch
          </UI.Typography>
          <UI.Typography variant="h2" className="pt-2 pb-8">
            Häufig gestellte Fragen.
          </UI.Typography>
          <UI.Faq items={faqDataCylinder} />
        </UI.Container>
      </UI.Container>
      {/* Section FAQ END */}
    </Layout>
  );
};

export default IndexPage;
