import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import React from 'react';
import axios from 'axios';
import Layout from 'components/layouts';
import { UI } from 'components';
import WkoLogo from '../../assets/images/wko-logo.svg';
import Link from 'next/link';

const IndexPage = ({ data }: any) => {
  return (
    <Layout
      title={`${data.seo.title} | TÜREX`}
      metaDescription={data.seo.description}
    >
      {/* Hero Section START */}
      <header className="pb-8">
        <UI.Container className="flex flex-col items-center w-full gap-4 pt-[56px]">
          <UI.AvailabilityCheck />
          <UI.Call className="!pt-4" />
          <div className="relative w-full h-8">
            <img src={WkoLogo.src} alt="wkö logo" className="mx-auto" />
          </div>
          <UI.Typography
            variant="sm"
            className="text-center font-['Lexend'] text-[10px] -mt-2"
          >
            Mitglied der Wirtschaftskammer Wien
          </UI.Typography>
        </UI.Container>
      </header>
      {/* Hero Section START */}
      {/* Content Section START */}
      <UI.Container className="pb-8 blocks-renderer">
        {/*<UI.BlockRendererClient content={data.content} />*/}
        <BlocksRenderer
          content={data.content}
          blocks={{
            paragraph: ({ children }) => (
              <UI.Typography
                variant="md"
                className="pb-4 !text-[18px] text-primary-900 leading-8"
              >
                {children}
              </UI.Typography>
            ),
            heading: ({ children, level }) => {
              switch (level) {
                case 1:
                  return (
                    <UI.Typography variant="h1" weight="bold" className="pb-4">
                      {children}
                    </UI.Typography>
                  );
                case 2:
                  return (
                    <UI.Typography variant="h2" weight="bold" className="pb-4">
                      {children}
                    </UI.Typography>
                  );
                case 3:
                  return (
                    <UI.Typography variant="h3" weight="bold" className="pb-4">
                      {children}
                    </UI.Typography>
                  );
                case 4:
                  return (
                    <UI.Typography variant="h4" weight="bold" className="pb-4">
                      {children}
                    </UI.Typography>
                  );
                case 5:
                  return (
                    <UI.Typography variant="h5" weight="bold" className="pb-4">
                      {children}
                    </UI.Typography>
                  );
                case 6:
                  return (
                    <UI.Typography variant="h6" weight="bold" className="pb-4">
                      {children}
                    </UI.Typography>
                  );
                default:
                  return (
                    <UI.Typography variant="h1" weight="bold" className="pb-4">
                      {children}
                    </UI.Typography>
                  );
              }
            },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            link: ({ children, url }) => <Link to={url}>{children}</Link>,
          }}
          modifiers={{
            bold: ({ children }) => <strong>{children}</strong>,
            italic: ({ children }) => (
              <span className="italic">{children}</span>
            ),
          }}
        />
      </UI.Container>
      {/* Content Section END */}
      {/* Call Section START */}
      <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
        <UI.Typography
          variant="h2"
          align="center"
          className="text-white font-bold"
        >
          Jetzt anrufen.
        </UI.Typography>
        <UI.Typography
          variant="lg"
          align="center"
          className="!text-h5 mt-8 text-white !leading-8"
        >
          Wir sind rund um die Uhr erreichbar. Sowohl als Schlüsselnotdienst,
          als auch im Normaldienst.
        </UI.Typography>
        <UI.Call mode="dark" />
      </UI.Container>
      {/* Call Section END */}
      {/* Price Section START */}
      <div className="bg-[#f5f5f5] pt-16 pb-8" id="prices">
        <UI.Container>
          <UI.Typography variant="h2" align="center" className="font-bold mt-4">
            Schlüsseldienst<br></br>
            <span className="text-primary-500">Preise und Kosten</span>.
          </UI.Typography>
          <UI.Typography variant="lg" align="center" className="mt-8">
            Transparent und ohne versteckte Kosten. Hier findest du die
            Auflistung unserer Preise. Sowohl für den Notdienst, als auch für
            den Normaldienst.
          </UI.Typography>
          <UI.PriceTable />
        </UI.Container>
      </div>
      {/* Price Section END */}
      {/* Payment Section START */}
      <div id="payment">
        <UI.Container widthMode="full" className="bg-primary-950 py-[56px]">
          <UI.Typography
            variant="h2"
            align="center"
            className="text-white font-bold"
          >
            Entscheide selbst, wie du gerne bezahlst.
          </UI.Typography>
          <UI.Typography
            variant="lg"
            align="center"
            className="!text-h5 mt-8 text-white"
          >
            Bequem & direkt vor Ort.
          </UI.Typography>
          <UI.Payment />
          <UI.Call mode="dark" />
        </UI.Container>
      </div>
      {/* Payment Section END */}
    </Layout>
  );
};

export default IndexPage;

export async function getStaticPaths() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/services?populate=*`
  );
  const paths = response.data.data.map((el: any) => ({
    params: { slug: el.attributes.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export const getStaticProps = async (context: any) => {
  const { params } = context;
  const slug = params.slug;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/services?populate=*&slug=${slug}`
  );

  const data = response.data.data.find(
    (el: any) => el.attributes.slug.toLowerCase() === slug
  );
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: data.attributes },
  };
};
