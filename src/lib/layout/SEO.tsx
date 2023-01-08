import Head from "next/head";
import { useRouter } from "next/router";

import {
  SEO_TITLE,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_OG_IMAGE,
  SEO_TWITTER_IMAGE,
  PRODUCTION_URL,
  SEO_PAGE,
} from "../constant/SEO";

export type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterImage?: string;
};

export const SEO = ({
  description = SEO_DESCRIPTION,
  keywords = SEO_KEYWORDS,
  title = SEO_TITLE,
  ogImage = SEO_OG_IMAGE,
  ogUrl = PRODUCTION_URL,
  twitterImage = SEO_TWITTER_IMAGE,
}: SEOProps) => {
  const { pathname, asPath } = useRouter();
  const page = pathname.substring(1);

  const getTitle = () => {
    switch (page) {
      case "menu":
      case "gallery":
      case "about-us":
      case "locations":
      case "testimonials":
        return SEO_PAGE[page].SEO_TITLE;
      default:
        return SEO_TITLE;
    }
  };

  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{getTitle()}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SEO_TITLE} />
      <meta property="og:url" content={`${ogUrl}${asPath}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
