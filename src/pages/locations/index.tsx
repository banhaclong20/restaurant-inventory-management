import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

import CTABanner from "../../lib/components/CTABanner";
import FindLocations from "../../lib/components/Location/FindLocations";

const Locations = () => {
  const router = useRouter();
  const { from } = router?.query || {};

  const CTABannerContent = {
    headingText: "Our Locations",
    descText: "",
    bgImage: "/assets/location-bg.jpg",
  };

  if (from === "promotion") {
    CTABannerContent.headingText = "Promotions";
    CTABannerContent.descText =
      "Select location to view our Promotion/Happy Hours";
    CTABannerContent.bgImage = "/assets/CTA_bg_appetizer.jpeg";
  } else if (from === "contact") {
    CTABannerContent.headingText = "Contact Us";
    CTABannerContent.descText = "Select location to get in touch with Oishii";
    CTABannerContent.bgImage = "/assets/contact-us-bg.jpg";
  } else if (from === "reservation") {
    CTABannerContent.headingText = "Get Reservation | Order Online";
    CTABannerContent.descText =
      "Select your closest location to have more options";
    CTABannerContent.bgImage = "/assets/CTA_bg_appetizer.jpeg";
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      mb={8}
      w="full"
    >
      <CTABanner
        bgImage={CTABannerContent.bgImage}
        height="500px"
        headingText={CTABannerContent.headingText}
        descText={CTABannerContent.descText}
        isTextCenter
      />

      <FindLocations />
    </Flex>
  );
};

export default Locations;
