/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Oishii - DFW's premier Sushi and Pan-Asian Restaurant",
  titleTemplate: "%s | Oishii Restaurants",
  defaultTitle: "Oishii Restaurants",
  description: "DFW's premier Sushi and Pan-Asian Restaurant",
  canonical: "https://oishiirestaurants.com",
  openGraph: {
    url: "https://oishiirestaurants.com",
    title: "Oishii Restaurants",
    description: "DFW's premier Sushi and Pan-Asian Restaurant",
    images: [
      {
        url: "https://oishii-sushi-web.vercel.app/assets/menu/SalmonTacos.jpg",
        alt: "oishiirestaurants.com og-image",
      },
    ],
    site_name: "Oishii-Restaurants",
  },
};

export default defaultSEOConfig;
