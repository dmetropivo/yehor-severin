import Head from 'next/head';
import { Inter } from 'next/font/google';
import { pick } from 'lodash';
import HomePageView from '@/modules/home-page/HomePageView';

// const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <>
      <Head>
        <title>Yehor Severin</title>
        <meta
          name="description"
          content="Yehor Severin | Ui/Ux designer. Web and mobile interfaces"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageView />
    </>
  );
};

Home.messages = ['Common'];

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: pick((await import(`../intl/en/en.ts`)).default, Home.messages),
    },
  };
}

export default Home;
