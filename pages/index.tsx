import React from 'react';
import Link from 'next/link';
import Layout from '../components/layouts';
import { UI } from '../components';

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
      <UI.Typography variant="h1" align="center" weight="bold" className="">
        TEST
      </UI.Typography>

      <UI.Checkbox name="lucky"></UI.Checkbox>
    </Layout>
  );
};

export default IndexPage;
