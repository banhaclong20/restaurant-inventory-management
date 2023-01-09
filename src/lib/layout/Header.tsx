/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Container,
  Stack,
  Collapse,
  Icon,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavItem {
  label: string;
  children?: Array<NavItem>;
  subLabel?: string;
  href?: string;
}

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Menus",
    href: "/menu",
    children: [
      {
        label: "All Menu",
        subLabel: "View all items",
        href: "/menu",
      },
      {
        label: "Sushi & Sashimi",
        subLabel: "Fresh seafood everyday",
        href: "/menu#sushi-sashimi",
      },
      {
        label: "Special Rolls",
        subLabel: "Best in town",
        href: "/menu#special-rolls",
      },
      {
        label: "Dinner Menu",
        subLabel: "Our best Pan-Asian Cuisine",
        href: "/menu#dinner-menu",
      },
      {
        label: "Wines | Sake Menu",
        subLabel: "Latest list for Wines and Sake",
        href: "/menu#wines-sake-menu",
      },
      {
        label: "Lavui Menu",
        subLabel: "Vietnamese Restaurant",
        href: "/menu/lavui",
      },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
];

const NAV_ITEMS_RIGHT = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "Our Locations",
    href: "/locations",
  },
];

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role="group"
      display="block"
      p={2}
      rounded="md"
      _hover={{ bg: "orange.50" }}
    >
      <Stack direction="row" align="center">
        <Box>
          <Text
            transition="all .3s ease"
            _groupHover={{ color: "orange.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize="sm">{subLabel}</Text>
        </Box>
        <Flex
          transition="all .3s ease"
          transform="translateX(-10px)"
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify="flex-end"
          align="center"
          flex={1}
        >
          <Icon color="pink.400" w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const DesktopNav = ({ menus }) => {
  const linkColor = "gray.600";
  const linkHoverColor = "gray.800";
  const popoverContentBgColor = "white";

  return (
    <Stack direction="row" spacing={4}>
      {menus?.map(({ label, href, children }: NavItem) => (
        <Box key={label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Link
                p={2}
                href={href ?? "#"}
                fontSize="sm"
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                className={label === "Our Locations" ? "locations-nav" : ""}
              >
                {label === "Menus" ? (
                  <>
                    {label} <ChevronDownIcon w={6} h={6} ml="-1" pb="0.5" />
                  </>
                ) : (
                  label
                )}
              </Link>
            </PopoverTrigger>

            {children && (
              <PopoverContent
                border={0}
                boxShadow="xl"
                bg={popoverContentBgColor}
                p={4}
                rounded="xl"
                minW="sm"
              >
                <Stack>
                  {children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color="gray.600">
          {label}
        </Text>
        {/* {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )} */}
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: "0!important" }}
        onClick={children && onToggle}
      >
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor="gray.200"
          align="start"
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg="white" p={4} display={{ md: "none" }}>
      {[...NAV_ITEMS, ...NAV_ITEMS_RIGHT].map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default function DesktopNavWithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  return (
    <Box>
      <Container as={Stack} maxW="6xl">
        <Flex
          bg="white"
          color="gray.600"
          minH="60px"
          py={{ base: 4 }}
          px={{ base: 4 }}
          align="center"
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant="ghost"
              aria-label="Toggle Navigation"
              color="gray.600"
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "left", md: "center" }}>
            <Flex
              display={{ base: "none", md: "flex" }}
              mr={10}
              alignItems="center"
            >
              <DesktopNav menus={NAV_ITEMS} />
            </Flex>
            <Flex>
              <Image
                width={{ base: "150px", md: "270px" }}
                alt="Oishii Restaurants Logo"
                src="/assets/oishii-logo.png"
                className="oishii-logo-img"
                onClick={() => router.push("/")}
              />
            </Flex>
            <Flex
              display={{ base: "none", md: "flex" }}
              ml={10}
              alignItems="center"
            >
              <DesktopNav menus={NAV_ITEMS_RIGHT} />
            </Flex>
          </Flex>
          <Flex
            flex={{ base: 1, md: "auto" }}
            display={{ base: "flex", md: "none" }}
            justify={{ base: "right", md: "center" }}
          />
        </Flex>

        <Collapse in={isOpen} animateOpacity onClick={onToggle}>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  );
}
