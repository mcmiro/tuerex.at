import React from 'react';
import Layout from '../components/layouts';
import { UI } from '../components';

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <UI.Container>
        <UI.Typography variant="h1" align="center" weight="bold" className="">
          GRRrrrr... 🦖
        </UI.Typography>
      </UI.Container>
    </Layout>
  );
};

export default IndexPage;
