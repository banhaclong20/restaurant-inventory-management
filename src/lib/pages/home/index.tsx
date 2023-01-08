import { Flex } from "@chakra-ui/react";

import CTABanner from "../../components/CTABanner";
import FindLocations from "../../components/Location/FindLocations";
import Feature from "../../layout/Feature";
import Hero from "../../layout/Hero";

const btns = [
  {
    btnText: "View Menu",
    hasBackground: true,
    link: "/menu",
  },
  {
    btnText: "Get Reservation",
    hasBackground: false,
    link: "/locations?from=reservation",
  },
];

const Home = () => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="center"
    gap={4}
    mb={8}
    w="full"
  >
    <Hero />
    <Feature />
    <CTABanner
      bgImage="/assets/sushi-feature-bg.jpg"
      headingText="Wide variety of sushi, sashimi and more. Best quality sushi at an efficient time"
      buttons={btns}
    />
    <FindLocations />
  </Flex>
);

export default Home;
