import {
  Flex,
  Container,
  SimpleGrid,
  Text,
  Box,
  Image,
  chakra,
} from "@chakra-ui/react";

import CTABanner from "../../lib/components/CTABanner";

const data = [
  {
    imageURL: "/assets/Chef_Thanh_Nguyen.jpg",
    name: "Chef Thanh Nguyen",
    position: "Owner & Executive Chef",
  },
  {
    imageURL: "/assets/chefs/Chef_Tri_Tran.jpg",
    name: "Chef Tri Tran",
    position: "Chef Partner & Director of Operation",
  },
];

interface ItemProps {
  imageURL: string;
  name: string;
  position: string;
  shortIntro: string;
}

const TeamItem = ({ imageURL, name, position, shortIntro }: ItemProps) => (
  <Flex p={2} w="full" alignItems="center" justifyContent="center">
    <Box
      bg="white"
      maxW="xl"
      borderWidth="1px"
      rounded="md"
      shadow="lg"
      position="relative"
    >
      <Image src={imageURL} alt={`Picture of ${name}`} roundedTop="md" />

      <Box p="6">
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            color="gray.800"
            isTruncated
          >
            {name}
          </Box>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Box as="span" color="gray.600" fontSize="md">
            {position}
          </Box>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center" mt="3">
          <Box as="span" color="gray.600" fontSize="sm">
            {shortIntro}
          </Box>
        </Flex>
      </Box>
    </Box>
  </Flex>
);

const OurTeam = () => {
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
        bgImage="/assets/our-team-bg1.jpg"
        height="300px"
        headingText="Our Team"
      />

      <Container maxW="5xl" py={{ base: "8", lg: "12" }}>
        <chakra.h1
          textAlign="center"
          fontSize="4xl"
          fontWeight="bold"
          color="gray.800"
        >
          Meet Our Team
        </chakra.h1>
        <Text textAlign="center" fontSize="md" color="gray.600">
          Proprietor Thanh Nguyen not only has a passion for creating beautiful
          and extremely fresh sushi rolls and other Asian fare, but he also has
          a friendly and hospitable demeanor which allows American diners to
          ease into his brand of cuisine at a pace that is comfortable and
          appealing as well as affordable.
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          my={{ base: "4", md: "10" }}
          spacing="4"
        >
          {data.map((item) => (
            <TeamItem {...item} key={item.name} />
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default OurTeam;
