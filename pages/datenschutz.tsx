import React from 'react';
import Layout from '../components/layouts';
import { UI } from '../components';

const IndexPage = () => {
  return (
    <Layout
      title="Datenschutzerklärung | TÜREX"
      metaDescription="Alle relevanten Informationen zur Datenschutzerklärung. Jetzt mehr erfahren."
    >
      <header className="mb-16">
        <UI.HeaderSub title="Datenschutzerklärung" />
        <UI.Breadcrumbs />
      </header>
      {/* Content Section START */}
      <UI.Container>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Datenschutzerklärung
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
            Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der
            gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen
            Datenschutzinformationen informieren wir Sie über die wichtigsten
            Aspekte der Datenverarbeitung im Rahmen unserer Website. Beim Besuch
            unserer Webseite wird Ihre IP-Adresse, Beginn und Ende der Sitzung
            für die Dauer dieser Sitzung erfasst. Dies ist technisch bedingt und
            stellt damit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO
            dar. Soweit im Folgenden nichts anderes geregelt wird, werden diese
            Daten von uns nicht weiterverarbeitet.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Kontakt mit uns
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit
            uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der
            Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns
            gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
            weiter.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Cookies
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Unsere Website verwendet so genannte Cookies. Dabei handelt es sich
            um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät
            abgelegt werden. Sie richten keinen Schaden an.
            <br></br>
            <br></br>
            Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu
            gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert,
            bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim
            nächsten Besuch wiederzuerkennen.
            <br></br>
            <br></br>
            Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so
            einrichten, dass er Sie über das Setzen von Cookies informiert und
            Sie dies nur im Einzelfall erlauben.
            <br></br>
            <br></br>
            Bei der Deaktivierung von Cookies kann die Funktionalität unserer
            Website eingeschränkt sein.
          </UI.Typography>
        </div>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Web-Analyse
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Unsere Website verwendet Funktionen des Webanalysedienstes: Google
            Analytics, Goole Search Console - Graben 19, 1010 Wien. Dazu werden
            Cookies verwendet, die eine Analyse der Benutzung der Website durch
            Ihre Benutzer ermöglicht. Die dadurch erzeugten Informationen werden
            auf den Server des Anbieters übertragen und dort gespeichert.
            <br></br>
            <br></br>
            Sie können dies verhindern, indem Sie Ihren Browser so einrichten,
            dass keine Cookies gespeichert werden. Wir haben mit dem Anbieter
            einen entsprechenden Vertrag zur Auftragsdatenverarbeitung
            abgeschlossen.
            <br></br>
            <br></br>
            Ihre IP-Adresse wird erfasst, aber umgehend (z.B. durch Löschung der
            letzten 8 Bit)pseudonymisiert. Dadurch ist nur mehr eine grobe
            Lokalisierung möglich.
            <br></br>
            <br></br>
            Die Datenverarbeitung erfolgt auf Basis der gesetzlichen
            Bestimmungen des § 96 Abs 3 TKG sowie des Art 6 Abs 1 lit a
            (Einwilligung) und/oder f (berechtigtes Interesse) der DSGVO.
            <br></br>
            <br></br>
            Unser Anliegen im Sinne der DSGVO ist die Verbesserung unseres
            Angebotes und unseres Webauftritts. Da uns die Privatsphäre unserer
            Nutzer wichtig ist, werden die Nutzerdaten pseudonymisiert.
          </UI.Typography>
        </div>
        <div className="my-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Ihre Rechte
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten
            grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung,
            Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.
            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
            Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche
            sonst in einer Weise verletzt worden sind, können Sie sich bei uns
            [info@tuerex.at] oder der Datenschutzbehörde beschweren.
          </UI.Typography>
        </div>
      </UI.Container>
      {/* Content Section END */}
    </Layout>
  );
};

export default IndexPage;
