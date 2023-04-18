import Head from 'next/head';
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

Home.messages = ['Common', 'Home'];

export async function getStaticProps() {
  return {
    props: {
      messages: pick((await import(`../intl/en/en.js`)).default, Home.messages),
    },
  };
}

export default Home;
