import React from 'react';
import Layout from '../components/layouts';
import { UI } from '../components';

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <UI.Container>
        <UI.Typography variant="h1" align="center" weight="bold">
          GRRrrrr... 🦖
        </UI.Typography>
        <UI.Button variant="outline">TEST</UI.Button>
      </UI.Container>
    </Layout>
  );
};

export default IndexPage;
