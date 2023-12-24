import React from 'react';
import Layout from '../components/layouts';
import { UI } from '../components';

const IndexPage = () => {
  return (
    <Layout
      title="Abwicklung und sonstige Informationen | TÜREX"
      metaDescription="Erfahre alles, was du über die Abwicklung nach der Beauftragung unseres Schlüsseldienstes wissen musst. Jetzt mehr erfahren."
    >
      <header className="mb-16">
        <UI.HeaderSub title="Abwicklung" />
        <UI.Breadcrumbs />
      </header>
      {/* Content Section START */}
      <UI.Container>
        <div className="mt-[56px]">
          <UI.Typography
            variant="h3"
            className="text-black mt-4 !text-h4 !leading-8"
          >
            Subline
          </UI.Typography>
          <UI.Typography
            variant="md"
            className="mt-6 !text-[18px] text-primary-900 leading-8"
          >
            Content
          </UI.Typography>
        </div>
      </UI.Container>
      {/* Content Section END */}
    </Layout>
  );
};

export default IndexPage;