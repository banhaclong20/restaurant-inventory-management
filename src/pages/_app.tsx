/* eslint-disable react/jsx-props-no-spreading */
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { Provider } from "react-redux";

import { wrapper } from "../store/store";
import { Chakra } from "lib/components/Chakra";
import Layout from "lib/layout";
import { SEO } from "lib/layout/SEO";
import "lib/styles/globals.css";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const { pathname } = useRouter();
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Chakra>
      <SEO />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PDMSMKVP1Q"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PDMSMKVP1Q', {
            page_path: window.location.pathname,
            });
          `}
      </Script>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      {pathname.includes("admin") ? (
        <SessionProvider session={session}>
          <Component {...props} />
        </SessionProvider>
      ) : (
        <Provider store={store}>
          <Layout>
            <Component {...props} />
          </Layout>
        </Provider>
      )}
    </Chakra>
  );
};

export default MyApp;
