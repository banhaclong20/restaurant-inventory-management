/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Provider } from "react-redux";

import { wrapper } from "../store/store";
import { Chakra } from "lib/components/Chakra";
import Layout from "lib/layout";
import { SEO } from "lib/layout/SEO";
import "lib/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Chakra>
      <SEO />
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      {pathname.includes("admin") ? (
        <Component {...props} />
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
