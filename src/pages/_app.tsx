/* eslint-disable react/jsx-props-no-spreading */
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import defaultSEOConfig from "../../next-seo.config";
import { wrapper } from "../store/store";
import { Chakra } from "lib/components/Chakra";
import Layout from "lib/layout";
import "lib/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();

  return (
    <Chakra>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <NextSeo {...defaultSEOConfig} useAppDir />
      </Head>

      {pathname.includes("admin") ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Chakra>
  );
};

export default wrapper.withRedux(MyApp);
