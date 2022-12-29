import { Flex, Text, Container, SimpleGrid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import CTABanner from "../../lib/components/CTABanner";
import {
  SUSHI,
  SASHIMI,
  MAKI_ROLL,
  OISHII_SPECIALTY,
  DINNER_MENU,
  WINES,
} from "../../lib/constant/menu";

import MenuSection from "./MenuSection";
import WineList from "./WineList";

const Menu = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Menu" />
      <CTABanner
        bgImage="/assets/bluefin-sushi.jpg"
        height="300px"
        headingText="Our Menu"
        id="sushi-sashimi"
      />
      <br />
      <MenuSection category="Sushi" data={SUSHI} />
      <MenuSection category="Sashimi" data={SASHIMI} />
      <CTABanner
        bgImage="/assets/feature-sushi-bg.jpg"
        height="200px"
        headingText="Our Special Rolls"
        id="special-rolls"
      />
      <br />
      <MenuSection category="Maki Roll" data={MAKI_ROLL} />
      <MenuSection category="Oishii Specialty" data={OISHII_SPECIALTY} />

      <Container maxW="6xl" mb="10">
        <SimpleGrid columns={{ base: 1 }} textAlign="center" spacing={2}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            --- All rolls served with sesame seeds. Please inform your server of
            any food allergies. Substitutions subject to additional charge. ---
          </Text>
        </SimpleGrid>
      </Container>

      <CTABanner
        bgImage="/assets/dinner-menu-bg.jpg"
        height="200px"
        headingText="Dinner Menu"
        id="dinner-menu"
      />
      <br />

      <MenuSection
        category="Appetizers"
        data={DINNER_MENU.APPETIZERS}
        isSubMenu
      />
      <MenuSection category="Soups" data={DINNER_MENU.SOUPS} isSubMenu />
      <MenuSection category="Salads" data={DINNER_MENU.SALADS} isSubMenu />
      <MenuSection
        category="Signature Dishes"
        data={DINNER_MENU.SIGNATURE_DISHES}
        isSubMenu
      />
      <MenuSection category="Chicken" data={DINNER_MENU.CHICKEN} isSubMenu />
      <MenuSection category="Pork" data={DINNER_MENU.PORK} isSubMenu />
      <MenuSection
        category="Beef Tenderloin"
        data={DINNER_MENU.BEEF_TENDERLOIN}
        isSubMenu
      />
      <MenuSection category="Seafood" data={DINNER_MENU.SEAFOOD} isSubMenu />
      <MenuSection
        category="Vietnamese Vermincelli - Bun"
        data={DINNER_MENU.VIETNAMESE_VERMINCELLI}
        isSubMenu
      />
      <MenuSection
        category="Noodle Soups & Pho"
        data={DINNER_MENU.NODDLE_SOUPS}
        isSubMenu
      />
      <MenuSection
        category="Vegetables to Share"
        data={DINNER_MENU.VEGETABLES}
        isSubMenu
      />

      <Container maxW="6xl" mb="10">
        <SimpleGrid columns={{ base: 1 }} textAlign="center" spacing={2}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            All menu items and prices are subject to change according to
            seasonality and availability.
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            For all take-out orders, a 10% service charge will be applied.
          </Text>
        </SimpleGrid>
      </Container>

      <CTABanner
        bgImage="/assets/wine-menu-bg.jpg"
        height="200px"
        headingText="WINES | SAKE MENU"
        id="wines-sake-menu"
      />
      <br />

      <WineList
        category="CHAMPAGNE	&	SPARKLING	WINES"
        data={WINES.CHAMPAGNE_SPARKLING_WINES}
      />
      <WineList
        category="WHITE	WINES	– CRISP & LIGHTER	BODY"
        data={WINES.WHITE_WINES_CRISP_LIGHTER_BODY}
      />
      <WineList
        category="WHITE	WINES	– MEDIUM & FULL BODY"
        data={WINES.WHITE_WINES_MEDIUM_FULL_BODY}
      />
      <WineList category="ROSÉ WINES" data={WINES.ROSE_WINES} />
      <WineList category="OFF	DRY	&	SWEET	WINES" data={WINES.OFF_DRY_SWEET_WINES} />
      <WineList
        category="RED	WINES	– SOFT & LIGHT"
        data={WINES.RED_WINES_SOFT_LIGHT}
      />
      <WineList
        category="RED	WINES	– MEDIUM BODY"
        data={WINES.RED_WINES_MEDIUM_BODY}
      />
      <WineList
        category="RED	WINES	– FULL BODY"
        data={WINES.RED_WINES_FULL_BODY}
      />
      <WineList category="NIHONSHU – SAKE" data={WINES.NIHONSHU_SAKE} />
    </Flex>
  );
};

export default Menu;
