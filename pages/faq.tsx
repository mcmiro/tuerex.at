import React from 'react';
import Layout from '../components/layouts';
import { UI } from '../components';
import faqDataBooking from 'constants/faq/booking';
import faqDataGeneral from 'constants/faq/general';
import faqDataOther from 'constants/faq/other';
import faqDataPricesAndPayment from 'constants/faq/prices-and-payment';
import faqDataSecurity from 'constants/faq/security';
import faqStructureData from 'utils/structure-data/faq';

const IndexPage = () => {
  return (
    <Layout
      title="Häufig gestellte Fragen | TÜREX"
      metaDescription="Antworten auf die am häufigsten gestellten Fragen. Jetzt mehr erfahren."
      jsonLd={faqStructureData}
    >
      <header className="mb-16">
        <UI.HeaderSub title="Häufig gestellte Fragen (FAQ)" />
        <UI.Breadcrumbs />
      </header>
      {/* Content Section START */}
      {/* General START */}
      <UI.Container className="pb-16">
        <UI.Typography variant="h2" className="font-bold mt-[32px] mb-8">
          Allgemeine Informationen
        </UI.Typography>
        <UI.Faq items={faqDataGeneral} />
      </UI.Container>
      {/* General END */}
      {/* Prices START */}
      <UI.Container className="pb-16">
        <UI.Typography variant="h2" className="font-bold mt-[32px] mb-8">
          Preise und Bezahlung
        </UI.Typography>
        <UI.Faq items={faqDataPricesAndPayment} />
      </UI.Container>
      {/* Prices END */}
      {/* Booking START */}
      <UI.Container className="pb-16">
        <UI.Typography variant="h2" className="font-bold mt-[32px] mb-8">
          Buchung und Storno
        </UI.Typography>
        <UI.Faq items={faqDataBooking} />
      </UI.Container>
      {/* Booking END */}
      {/* Security START */}
      <UI.Container className="pb-16">
        <UI.Typography variant="h2" className="font-bold mt-[32px] mb-8">
          Seriosität und Sicherheit
        </UI.Typography>
        <UI.Faq items={faqDataSecurity} />
        {/* Other START */}
        <UI.Container className="pb-16">
          <UI.Typography variant="h2" className="font-bold mt-[32px] mb-8">
            Sonstiges
          </UI.Typography>
          <UI.Faq items={faqDataOther} />
        </UI.Container>
        {/* Other END */}
      </UI.Container>
      {/* Security END */}

      {/* Content Section END */}
    </Layout>
  );
};

export default IndexPage;
