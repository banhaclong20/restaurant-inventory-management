import { HamburgerIcon, TriangleUpIcon, SmallAddIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Container,
  SimpleGrid,
  Menu as MenuComp,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import Link from "next/link";

import CTABanner from "../../lib/components/CTABanner";
import { LAVUI_MENU } from "../../lib/constant/menu";

import MenuSection from "./MenuSection";

const MenuNavigationIcon = () => (
  <MenuComp>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<HamburgerIcon />}
      variant="solid"
      colorScheme="orange"
    />
    <MenuList>
      <MenuGroup title="MENU">
        <Link href="/menu/lavui#Appetizers">
          <MenuItem icon={<SmallAddIcon />}>Appetizers</MenuItem>
        </Link>
        <Link href="/menu/lavui#Entrées">
          <MenuItem icon={<SmallAddIcon />}>Entrées</MenuItem>
        </Link>
        <Link href="/menu/lavui#Banh Mi">
          <MenuItem icon={<SmallAddIcon />}>Banh Mi</MenuItem>
        </Link>
        <Link href="/menu/lavui#Noodle Dishes">
          <MenuItem icon={<SmallAddIcon />}>Noodle Dishes</MenuItem>
        </Link>
        <Link href="/menu/lavui#Salads">
          <MenuItem icon={<SmallAddIcon />}>Salads</MenuItem>
        </Link>
        <Link href="/menu/lavui#Pho">
          <MenuItem icon={<SmallAddIcon />}>Pho</MenuItem>
        </Link>
        <Link href="/menu/lavui#Bun (vermicelli Bowls)">
          <MenuItem icon={<SmallAddIcon />}>Bun</MenuItem>
        </Link>
        <Link href="/menu/lavui#Beverages">
          <MenuItem icon={<SmallAddIcon />}>Beverages</MenuItem>
        </Link>
      </MenuGroup>
      <MenuDivider />
      <Link href="/menu/lavui#">
        <MenuItem icon={<TriangleUpIcon />}>Go to Top</MenuItem>
      </Link>
    </MenuList>
  </MenuComp>
);

const LavuiMenu = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      mb={8}
      w="full"
      className="menu-page"
    >
      <CTABanner
        bgImage="/assets/lavui/Porkvermicellibowl.jpg"
        height="300px"
        headingText="Lavui Menu"
        id="lavui-menu-cta"
      />
      <br />
      <MenuSection
        category="Appetizers"
        data={LAVUI_MENU.APPETIZERS}
        isSubMenu
        isLavui
      />

      <MenuSection
        category="Entrées"
        data={LAVUI_MENU.ENTREES}
        isSubMenu
        isLavui
      />

      <CTABanner
        bgImage="/assets/lavui/banhmisandwich.jpg"
        height="200px"
        headingText="Banh Mi"
        id="banhmi"
      />
      <br />

      <MenuSection
        category="Banh Mi"
        data={LAVUI_MENU.BANHMI}
        isSubMenu
        additionalInfo="butter, pate, carrots, daikon, cilantro, cucumbers, jalapeño, scallion oil"
        isLavui
      />

      <MenuSection
        category="Noodle Dishes"
        data={LAVUI_MENU.NOODLE_DISHED}
        isSubMenu
        additionalInfo="egg, onions, carrots, celery, bean sprouts, green onions"
        isLavui
      />

      <MenuSection
        category="Salads"
        data={LAVUI_MENU.SALADS}
        isSubMenu
        additionalInfo="carrots, daikon, onions, fried shallots, peanuts, lime juice, herbs, shrimp chips"
        isLavui
      />

      <CTABanner
        bgImage="/assets/lavui/pho.jpeg"
        height="200px"
        headingText="Pho"
        id="pho-cta"
      />
      <br />

      <MenuSection
        category="Pho"
        data={LAVUI_MENU.PHO}
        isSubMenu
        additionalInfo="bean sprouts, basil, cilantro, jalapeño, onions, lime"
        isLavui
      />

      <MenuSection
        category="Bun (vermicelli Bowls)"
        data={LAVUI_MENU.BUN}
        isSubMenu
        additionalInfo="rice noodles, cucumbers, lettuce, bean sprouts, cilantro, peanuts, fish sauce"
        isLavui
      />

      <MenuSection
        category="Additions"
        data={LAVUI_MENU.ADDITIONS}
        isSubMenu
        isLavui
      />

      <MenuSection
        category="Beverages"
        data={LAVUI_MENU.BEVERAGES}
        isSubMenu
        isLavui
      />

      <Container maxW="6xl" mb="10">
        <SimpleGrid columns={{ base: 1 }} textAlign="center" spacing={2}>
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.800">
            *Consuming raw or undercooked meats, poultry, seafood, shellfish, or
            eggs may increase your risk of foodborne illness.
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.800">
            All rolls served with sesame seeds. Please inform your server of any
            food allergies. Substitutions subject to additional charge.
          </Text>
        </SimpleGrid>
      </Container>
      <MenuNavigationIcon />
    </Flex>
  );
};

export default LavuiMenu;
