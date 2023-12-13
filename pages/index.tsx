import React from 'react';
import Layout from '../components/layouts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { UI } from '../components';

const IndexPage = () => {
  return (
    <Layout title="Schlüßeldienst und Aufsperdienst Wien | Türex">
      <UI.Container className="flex flex-col items-center w-full gap-4">
        <UI.Typography
          variant="xs"
          className="text-center pt-[56px] text-gray-800"
        >
          Keine versteckten Kosten
        </UI.Typography>
        <UI.Button
          variant="contained"
          size="sm"
          light
          className="!rounded-full flex gap-2"
        >
          Preise ansehen <ArrowRightIcon className="w-4" />
        </UI.Button>
      </UI.Container>
      <UI.Container className="flex flex-col items-center w-full gap-4">
        <UI.Typography
          variant="h1"
          weight="bold"
          className="text-center pt-[56px] font-['Lexend']"
        >
          <span className="text-primary-500">Schlüsseldienst</span> Wien:
          <br></br> Der Aufsperrdienst <br></br>
          <span className="text-primary-500">mit Fixpreisen</span>.
        </UI.Typography>
      </UI.Container>
    </Layout>
  );
};

export default IndexPage;
