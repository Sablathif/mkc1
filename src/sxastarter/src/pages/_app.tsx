import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';
import { SitecorePageProps } from 'lib/page-props';
import { ReactElement } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import 'assets/sass/style.scss';

type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};
type AppPropsWithLayout = AppProps<SitecorePageProps> & {
  Component: NextPageWithLayout<SitecorePageProps>;
};
function App({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const { dictionary /*, ...rest*/ } = pageProps;
  const getLayout = Component.getLayout ?? ((page) => page);
  const component = getLayout(<Component {...pageProps} />);
  return (
    // Use the next-localization (w/ rosetta) library to provide our translation dictionary to the app.
    // Note Next.js does not (currently) provide anything for translation, only i18n routing.
    // If your app is not multilingual, next-localization and references to it can be removed.
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="PLAY! Summit" />
      </Head>
      <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
        {component}
      </I18nProvider>
    </>
  );
}

export default App;
