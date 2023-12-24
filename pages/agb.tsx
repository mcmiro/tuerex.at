import React from 'react';
import Layout from '../components/layouts';
import { UI } from '../components';

const IndexPage = () => {
  return (
    <Layout
      title="Allgemeine Geschäftsbedingungen | TÜREX"
      metaDescription="Allgemeine Geschäftsbedingungen für die Verwendung unserer Dienstleistungen. Jetzt mehr erfahren."
    >
      <header className="mb-16">
        <UI.HeaderSub title="Allgemeine Geschäftsbedingungen" />
        <UI.Breadcrumbs />
      </header>
      {/* Content Section START */}
      <UI.Container>
        <UI.Typography variant="h2" className="font-bold">
          Allgemeine Geschäftsbedingungen (Stand: 01.12.2023)
        </UI.Typography>
        <UI.Typography variant="md" className="font-bold">
          {`Diese allgemeinen Geschäftsbedingungen gelten als Dienstleistungsvertrag zwischen "tuerex.at" (im Folgenden "AN" genannt) und dem Kunden (im Folgenden "AG" genannt).`}
        </UI.Typography>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            1. Tätigkeitsbereich
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            {`"tuerex.at" ist eine Webplattform, die Schlüsseldienstleistungen in Wien vermittelt. Als solche steht es uns frei, ausgewählte Partnerunternehmen für die Durchführung der Dienstleistungen zu beauftragen.`}
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            1. 2. Partnerunternehmen
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Unsere Partnerunternehmen im Schlüsseldienst verfügen über die
            erforderlichen Lizenzen und Qualifikationen. Der AN ist jedoch nicht
            verpflichtet, diese zu kontrollieren. Sollten Sie Unstimmigkeiten
            bemerken, bitten wir Sie, dies umgehend unter info@tuerex.at zu
            melden.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            1. 3. Pflichten der Partnerunternehmen
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Die Partnerunternehmen sind dafür verantwortlich, die
            Dienstleistungen ordnungsgemäß und erfolgreich durchzuführen. Dies
            umfasst professionelles Verhalten, pünktliches Erscheinen und die
            Einhaltung der gesetzlichen Vorschriften im Bereich Schlüsseldienst.
            <br></br>
            <br></br>
            Wenn ein Partnerunternehmen aufgrund von Verkehrs-, Sicherheits-
            oder technisch bedingten Gründen unpünktlich oder gar nicht
            erscheint, gilt dies als entschuldigt. <br></br>
            <br></br>
            In diesem Fall folgen Sie bitte den Anweisungen des
            Partnerunternehmens vor Ort.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            2. Zahlung und sonstige Kosten
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Die abgeschlossenen Dienstleistungen sind direkt vor Ort zu
            bezahlen. Als Zahlungsoptionen gelten die gängigen Kredit- und
            Bankomatkarten (EC Karten) sowie Bargeld (EURO).
            <br></br>
            <br></br>
            Die Zahlung erfolgt nach Wunsch des Kunden vor Ort.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            2. 1. Fixpreise
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Alle angegebenen Fixpreise sind Brutto und beinhalten die
            gesetzliche Mehrwertsteuer. Die Preise werden anhand der
            spezifischen Dienstleistung (Art der Tür, etc.) kalkuliert und
            ändern sich nicht, es sei denn, es kommt zum Mehraufwant für den AN,
            oder die Angaben des AN stimmen bei der Ankunft nicht.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            2. 2. Zahlungsunfähigkeit
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Wenn die Dienstleistung seitens AG nicht bezahlt werden kann, wird
            eine Rechnung per E-Mail oder Post zugeschickt. Diese beinhaltet den
            Bruttopreis der Dienstleistung, mit einem Zahlungsziel von 5
            Werktagen (ohne Abzug oder Skonto). <br></br>
            <br></br>
            Sollte die Zahlung innerhalb dieser Frist nicht erfolgen, behalten
            wir uns vor, die offene Forderung an ein Inkassobüro weiterzuleiten.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            3. Pflichten des AG
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Der AG ist verpflichtet, die bestellte Dienstleistung in Anspruch zu
            nehmen. Falls dies seitens AG ohne vorherige Stornierung ignoriert
            wird, ist die volle Summe der Dienstleistung zu bezahlen.
            <br></br>
            <br></br>
            Der AG hat zudem für die Richtigkeit der bei der telefonischen
            Beauftragung angegebenen Daten zu sorgen.
            <br></br>
            <br></br>
            Pünktliches Erscheinen zur vereinbarten Uhrzeit gehört ebenfalls zur
            Pflicht des AG.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            4. Storno
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Eine bestellte Dienstleistung kann jederzeit durch AG storniert
            werden. Bei Stornierung fällt eine Pauschal-Stornogebühr in Höhe von
            € 50 an.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            5. Mehrfache Buchung
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Falls seitens AG mehrfache Buchungen (bei AN und einem oder mehreren
            Anbietern) für dieselbe Dienstleistung getätigt wurden, ist der AG
            verpflichtet, die bestellte Dienstleistung zu konsumieren und die
            übrigen zu stornieren.
            <br></br>
            <br></br>
            Es steht dem AG frei, auch bei AN zu stornieren. In diesem Fall
            gelten unsere Storno-Richtlinien (Punkt 4).
            <br></br>
            <br></br>
            Sollte kein Storno seitens AG erfolgen, sehen wir uns gezwungen, die
            Dienstleistung in voller Summe zu verrechnen, auch wenn diese nicht
            in Anspruch genommen wird.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            6. Sonstiges
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Mündliche und sonstige Vereinbarungen direkt zwischen AG und dem
            Partner des AN, ohne dass AN darüber informiert wurde, sind
            strengstens untersagt.
            <br></br>
            <br></br>
            Falls solche Vereinbarungen dennoch stattfinden, übernimmt AN keine
            Haftung für weitere Ereignisse.
            <br></br>
            <br></br>
            In diesem Fall gelten die obigen allgemeinen Geschäftsbedingungen
            nicht.
          </UI.Typography>
        </div>
        <div className="my-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            6. 1. Gerichtsstand und Bedingungen
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Sollte eine dieser Bedingungen unwirksam sein, bleiben andere von
            der Wirksamkeit unberührt.
            <br></br>
            <br></br>
            Für nicht beschriebene Bedingungen treten die örtlichen
            Gesetzesbestimmungen in Kraft.
            <br></br>
            <br></br>
            Sofern nicht anders vereinbart, ist der Gerichtsstand Wien.
          </UI.Typography>
        </div>
      </UI.Container>
      {/* Content Section END */}
    </Layout>
  );
};

export default IndexPage;
