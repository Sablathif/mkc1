import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';
import { SitecorePageProps } from 'lib/page-props';
// DEMO TEAM CUSTOMIZATION - CDP and Sitecore Send integration. Per page layouts. Fonts and icons. etc.
import { ReactElement } from 'react';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'assets/sass/style.scss';
import 'assets/css/main.css';
import { useRouter } from 'next/router';
// END CUSTOMIZATION
import { NextPage } from 'next';
type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};
type AppPropsWithLayout = AppProps<SitecorePageProps> & {
  Component: NextPageWithLayout<SitecorePageProps>;
};
// END CUSTOMIZATION
// DEMO TEAM CUSTOMIZATION (next line) - Different prop type. Add router.
function App({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const router = useRouter();
  const { sc_horizon } = router.query;
  console.log('sc_mode', sc_horizon);
  const { dictionary } = pageProps;
  const getLayout = Component.getLayout ?? ((page) => page);
  const component = getLayout(<Component {...pageProps} />);
  // END CUSTOMIZATION
  // DEMO TEAM CUSTOMIZATION - Add head section, CDP, and Sitecore Send integration
  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="PLAY! Summit" />
      </Head>
      <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
        {/* DEMO TEAM CUSTOMIZATION (next line) - Per page layouts */}
        {component}
      </I18nProvider>
    </>
  );
  // END CUSTOMIZATION
}
export default App;
