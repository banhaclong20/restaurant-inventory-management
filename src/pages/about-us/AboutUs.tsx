import {
  Flex,
  Container,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Stack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import CTABanner from "../../lib/components/CTABanner";

const AboutUs = () => {
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
        bgImage="/assets/CTA_bg_sushi-roll.jpeg"
        height="300px"
        headingText="About Us"
      />

      <Container
        maxW="5xl"
        py={{ base: "8", lg: "12" }}
        mt={{ base: "0", lg: "10" }}
      >
        <SimpleGrid
          columns={{ base: 1 }}
          spacing={10}
          mb={{ base: "4", md: "4" }}
          pb={{ base: "4", md: "8" }}
        >
          <Stack spacing={4}>
            <Text
              textTransform="uppercase"
              color="orange.400"
              fontWeight={600}
              fontSize="sm"
              bg="gray.50"
              p={2}
              alignSelf="flex-start"
              rounded="md"
            >
              Our Story
            </Text>
            <Heading color="gray.800">Welcome to Oishii Restaurants</Heading>
            <Text color="gray.500" fontSize={{ base: "md", md: "lg" }}>
              Chef Thanh Nguyen of Oishii is a man of few words. Or so it seems
              from the other side of the sushi bar as I watch him swiftly yet
              meticulously craft, roll, torch, slice, shred and garnish raw fish
              with an eye for detail. He moves with quickness like most sushi
              chefs I’ve admired, but he doesn’t miss an opportunity to engage
              with those around him. People flock to this longstanding
              neighborhood gem not only for the food, but the people behind it.
            </Text>
          </Stack>
        </SimpleGrid>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          mb={{ base: "4", md: "4" }}
          pb={{ base: "4", md: "8" }}
        >
          <Flex>
            <Image
              rounded="md"
              alt="feature image"
              src="/assets/chefs/Chef_Thanh_Nguyen.jpg"
              objectFit="cover"
            />
          </Flex>

          <Flex>
            <Image
              rounded="md"
              alt="feature image"
              src="/assets/chefs/Chef_Tri_Tran.jpg"
              objectFit="cover"
            />
          </Flex>
        </SimpleGrid>

        <SimpleGrid
          columns={{ base: 1 }}
          spacing={10}
          mb={{ base: "4", md: "12" }}
          pb={{ base: "4", md: "8" }}
        >
          <Stack spacing={4}>
            <Heading color="gray.800">His Story</Heading>
            <Text color="gray.500" fontSize={{ base: "md", md: "lg" }}>
              It’s one you might find on Lifetime or among the other
              motivational blockbusters out there. It all starts in a village
              200 miles from Saigon, Vietnam in June 1973.
            </Text>
            <Text color="gray.500" fontSize={{ base: "md", md: "lg" }}>
              Thanh Nguyen was born in the Year of the Ox, which to most comes
              as an unlucky sign. The youngest of eight, Thanh worked in the
              rice fields of Vietnam with his five sisters, two brothers and
              their mother. His family immigrated to the US in 1992 to the city
              of Dallas in the footsteps of Thanh’s sisters who ventured to the
              States in 1982 as one of “the Boat People.”
            </Text>
            <Text color="gray.500" fontSize={{ base: "md", md: "lg" }}>
              At age 18, he entered high school to learn English, and by 1995,
              he graduated Plano East Senior High School. After taking a year
              off between high school and college to work and travel with the
              Fishing Company of Alaska, Thanh entered The University of Texas
              at Dallas, where he graduated in 2001 with a Bachelor of Computer
              Science. He is the first member of his family to graduate from
              college. Moving on to work in technical support at Alcatel and
              Budget Rent-a-Car, Thanh found comfort in working nights at
              different restaurants. After almost nine years at Plano restaurant
              Nakamoto, Thanh went on to the restaurant Steel and became Dallas’
              first Vietnamese sushi chef. While there, Thanh discovered a
              Vietnamese buffet off Wycliff Avenue where he could enjoy the
              flavors he missed from back home. Then one day, the owner of this
              buffet told Thanh she was looking to sell. Thanh pushed together
              his savings and acquired the space in 2003 to make way for his own
              endeavor, Oishii, a Japanese term for “delicious.”
            </Text>
            <Text color="gray.500" fontSize="sm" textAlign="right">
              - Lauryn Bodden, D Magazine
            </Text>
          </Stack>
        </SimpleGrid>

        <Flex
          w="full"
          h="200px"
          backgroundImage="url(/assets/CTA_bg_sashimi.jpeg)"
          backgroundSize="cover"
          backgroundPosition="center center"
        >
          <VStack
            w="full"
            justify="center"
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient="linear(to-r, blackAlpha.600, transparent)"
          >
            <Stack maxW="2xl" align="flex-start" spacing={6}>
              <Text
                color="white"
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
                align="center"
              >
                Variety of Flavours from Oishii Restaurants. Come In And Eat
                With Us!
              </Text>
            </Stack>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AboutUs;
