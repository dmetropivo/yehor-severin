import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';
import { useRouter } from 'next/router';
import CommonInclusionLayout from '@/UI/layouts/CommonInclusionLayout/CommonInclusionLayout';
import MainPageLayout from '@/UI/layouts/MainPageLayout/MainPageLayout';
import PopupProvider from '../contexts/PopupContext';

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();

  return (
    <NextIntlProvider locale={locale || 'en'} messages={pageProps.messages}>
      <CommonInclusionLayout>
        <PopupProvider>
          <MainPageLayout>
            <Component {...pageProps} />
          </MainPageLayout>
        </PopupProvider>
      </CommonInclusionLayout>
    </NextIntlProvider>
  );
};

export default App;
