import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  SimpleGrid,
  Box,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuDivider,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { useSelector } from "react-redux";

import { selectLocationName } from "../../../store/locationSlice";
import FindLocations from "../Location/FindLocations";
import { LOCATIONS } from "lib/constant";

interface MenuIconProps {
  locationLink: string;
  onlineLinks: {
    doordash: string;
    opentable: string;
  };
}

const MenuIcon = ({ locationLink, onlineLinks }: MenuIconProps) => (
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<BsThreeDotsVertical />}
      variant="solid"
      colorScheme="grey"
    />
    <MenuList>
      <Link href={onlineLinks.doordash} target="_blank">
        <MenuItem icon={<ExternalLinkIcon />}>Order Online</MenuItem>
      </Link>
      <Link href={onlineLinks.opentable} target="_blank">
        <MenuItem icon={<ExternalLinkIcon />}>Reservation</MenuItem>
      </Link>
      <Link href={`/locations/${locationLink}`}>
        <MenuItem icon={<ExternalLinkIcon />}>Location Detail</MenuItem>
      </Link>
      <MenuDivider />
      <Link href="/menu">
        <MenuItem icon={<HamburgerIcon />}>Full Menu Items</MenuItem>
      </Link>
    </MenuList>
  </Menu>
);

const TopHeader = () => {
  const selectedLocation = useSelector(selectLocationName);
  const location = LOCATIONS.find((i) => i.locationName === selectedLocation);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      gap={4}
      w="full"
      backgroundColor="#272c34"
    >
      <Container maxW="3xl">
        <SimpleGrid
          columns={2}
          height="50px"
          spacing={2}
          display="flex"
          justifyContent="space-between"
        >
          <Box alignItems="center" display="flex">
            <Flex justifyContent="center" mt={4}>
              <Popover placement="bottom" isLazy>
                <PopoverTrigger>
                  <Button
                    aria-label="Locations"
                    _focus={{ boxShadow: "none" }}
                    colorScheme="orange"
                    variant="white"
                    w="fit-content"
                    style={{ position: "relative", top: "-8px" }}
                    color="#FFF"
                    fontSize={{ base: "xs", md: "md" }}
                  >
                    <Icon as={TiLocation} mr="2" ml={{ base: 0, md: "-4" }} />{" "}
                    Locations
                  </Button>
                </PopoverTrigger>
                <PopoverContent w="fit-content" _focus={{ boxShadow: "none" }}>
                  <PopoverArrow />
                  <PopoverBody>
                    <FindLocations asPopup />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </Box>
          <Box
            color="#FFF"
            alignItems="center"
            display="flex"
            fontSize={{ base: "xs", md: "md" }}
          >
            {location ? (
              <>
                <span style={{ fontWeight: "bold" }}>Your Location</span>:{" "}
                {location.name}
                <Box color="#2d2d2d">
                  <MenuIcon {...location} />
                </Box>
              </>
            ) : (
              <Link href="/locations">View our Promotions</Link>
            )}
          </Box>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default TopHeader;
