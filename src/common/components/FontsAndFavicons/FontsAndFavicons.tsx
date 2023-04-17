import Head from 'next/head';

const FontsAndFavicons = () => {
  return (
    <>
      <Head>
        {/*<link rel="icon" href="/images/favicon-v5.ico" sizes="any" />*/}
        {/*<link rel="icon" href="/images/favicon-v6.svg" type="image/svg+xml" />*/}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @font-face {
            font-family: 'SF-Pro-Rounded';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: local(''),
                 url('/fonts/SF-Pro-Rounded/FontsFree-Net-SF-Pro-Rounded-Regular.ttf') format('ttf');
          }
          @font-face {
            font-family: 'SF-Pro-Rounded';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: local(''),
                 url('/fonts/SF-Pro-Rounded/FontsFree-Net-SF-Pro-Rounded-Medium.ttf') format('ttf');
          }
          @font-face {
            font-family: 'SF-Pro-Rounded';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: local(''),
                 url('/fonts/SF-Pro-Rounded/FontsFree-Net-SF-Pro-Rounded-Semibold.ttf') format('ttf');
          }
          @font-face {
            font-family: 'SF-Pro-Rounded';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: local(''),
                 url('/fonts/SF-Pro-Rounded/FontsFree-Net-SF-Pro-Rounded-Bold.ttf') format('ttf');
          }`,
          }}
        />
      </Head>
      <link
        rel="preload"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
        href="/fonts/SF-Pro-Rounded/FontsFree-Net-SF-Pro-Rounded-Regular.ttf"
      />

      <link
        rel="preload"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
        href="/fonts/SF-Pro-Rounded/FontsFree-Net-SF-Pro-Rounded-Medium.ttf"
      />
      <link
        rel="preload"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
        href="/fonts/SF-Pro-Rounded/FontsFree-Net-SF-Pro-Rounded-Semibold.ttf"
      />
      <link
        rel="preload"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
        href="/fonts/SF-Pro-Rounded/FontsFree-Net-SF-Pro-Rounded-Bold.ttf"
      />
    </>
  );
};

export default FontsAndFavicons;
