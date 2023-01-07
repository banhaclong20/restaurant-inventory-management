/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Oishii - DFW's premier Sushi and Pan-Asian Restaurant",
  titleTemplate: "%s | Oishii Restaurants",
  defaultTitle: "Oishii Restaurants",
  description: "DFW's premier Sushi and Pan-Asian Restaurant",
  keywords:
    "premier sushi, sushi dallas, sushi plano, sushi frisco, sushi dfw, dallas sushi, plano sushi, frisco sushi, dfw sushi",
  canonical: "https://oishiirestaurants.com",
  openGraph: {
    url: "https://oishiirestaurants.com",
    title: "%s | Oishii Restaurants",
    description: "Best Sushi and Pan-Asian Restaurant in Dallas | Plano, TX",
    images: [
      {
        url: "https://oishii-sushi-web.vercel.app/assets/menu/SalmonTacos.jpg",
        alt: "oishiirestaurants.com og-image",
      },
    ],
    site_name: "Oishii Restaurants",
    type: "website",
  },
  twitter: {
    cardType: "summary_large_image",
    title: "Oishii - DFW's premier Sushi and Pan-Asian Restaurant",
    description:
      "Wide variety of sushi, sashimi and more. Best quality sushi in DFW",
    image: "https://oishii-sushi-web.vercel.app/assets/menu/tunatower.jpg",
  },
};

export default defaultSEOConfig;
