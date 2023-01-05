import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="blackAlpha.100"
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: "blackAlpha.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithNewsletter() {
  const year = new Date().getFullYear();
  return (
    <Box color="#FFF" className="footer">
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack align="center">
            <Link href="/about-us">About us</Link>
            <Link href="/menu">Menus</Link>
            <Link href="/locations">Locations</Link>
            <Link href="/testimonials">Testimonials</Link>
          </Stack>
          <Flex align="center" flexDir="column" textAlign="center">
            <Box mb="2">
              <h2 className="footer-logo">Oishii Restaurants</h2>
              <Text fontSize="sm">info@oishiirestaurants.com</Text>
            </Box>

            <Text fontSize="sm" mb="2">
              © {year} Oishii Restaurant. All rights reserved
            </Text>
          </Flex>

          <Stack align="center">
            <Link href="/locations?from=promotion">Promotions</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/our-team">Our Team</Link>
            <Link href="/locations?from=contact">Contact us</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
