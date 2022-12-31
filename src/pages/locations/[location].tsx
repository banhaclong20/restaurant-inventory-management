import { CheckIcon, Icon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Text,
  List,
  UnorderedList,
  ListItem,
  SimpleGrid,
  ListIcon,
  Center,
  Image,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsFillTelephoneFill, BsDisplay } from "react-icons/bs";
import { HiLocationMarker, HiClipboardList } from "react-icons/hi";

import { LOCATIONS } from "../../lib/constant";

type OnlineLinksProps = {
  googleMap: string;
  opentable: string;
  doordash: string;
  facebook: string;
  instagram: string;
};

type PromotionProps = {
  desc: string;
  image?: string;
  type: string;
};

interface LocationProps {
  address: string;
  businessHours: string[];
  name: string;
  onlineLinks: OnlineLinksProps;
  phone: string;
  services: string[];
  website?: string;
  promotions?: Array<PromotionProps>;
}

export default () => {
  const router = useRouter();
  const { location } = router.query;
  const {
    address,
    businessHours,
    name,
    onlineLinks,
    phone,
    services,
    website,
    promotions,
  }: LocationProps =
    LOCATIONS.find((item) => item.locationLink === location) || [];

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="WYCLIFF" />

      {onlineLinks?.googleMap && (
        <iframe
          src={onlineLinks.googleMap}
          width="100%"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Oishii Restaurants at Wycliff, Dallas"
        />
      )}

      <Box py={5} px={6} maxW="6xl">
        <Heading as="h4" size="lg" mt={6} mb={2}>
          {name}
        </Heading>

        <List>
          {services?.map((item) => (
            <ListItem key={item}>
              <ListIcon as={CheckIcon} color="white.500" />
              {item}
            </ListItem>
          ))}
        </List>

        {promotions &&
          promotions?.map(({ desc, image, type }) => (
            <Box
              maxW="sm"
              borderWidth="1px"
              overflow="hidden"
              mt="6"
              key={desc}
            >
              {image && <Image src={image} alt="promotion image" />}
              <Box p="6">
                <Box
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  textDecoration="underline"
                  textTransform="uppercase"
                >
                  {type}:
                </Box>
                <Box mt="1" fontWeight="normal" as="p" lineHeight="tight">
                  {desc}
                </Box>
              </Box>
            </Box>
          ))}

        <Heading as="h4" size="md" mt={6} mb={2}>
          <Icon as={HiLocationMarker} /> Location
        </Heading>
        <Text color="black.500">{address}</Text>
        <Heading as="h4" size="md" mt={6} mb={2}>
          <Icon as={BsFillTelephoneFill} /> Phone
        </Heading>
        <Text color="black.500">{phone}</Text>
        {website && (
          <>
            <Heading as="h4" size="md" mt={6} mb={2}>
              <Icon as={BsDisplay} /> Website
            </Heading>
            <Link href={website}>
              <Text color="black.500">{website}</Text>
            </Link>
          </>
        )}

        <Heading as="h4" size="md" mt={6} mb={2}>
          <Icon as={HiClipboardList} /> Hours
        </Heading>
        <UnorderedList>
          {businessHours?.map((h) => (
            <ListItem key={h}>{h}</ListItem>
          ))}
        </UnorderedList>
        <small>*Holiday hours may differ</small>
      </Box>

      <Box p={4} maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
          <Link href="/menu">
            <Center
              bg="#272c34"
              h="100px"
              w={{ base: "300px", md: "375px" }}
              color="white"
            >
              View Menu
            </Center>
          </Link>
          {onlineLinks?.doordash && (
            <Link href={onlineLinks?.doordash}>
              <Center bg="#272c34" h="100px" color="white">
                Order Online
              </Center>
            </Link>
          )}
          {onlineLinks?.opentable && (
            <Link href={onlineLinks?.opentable}>
              <Center bg="#272c34" h="100px" color="white">
                Reservation
              </Center>
            </Link>
          )}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
