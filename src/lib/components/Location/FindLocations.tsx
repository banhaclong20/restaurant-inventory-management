import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  VStack,
  Button,
  Flex,
  chakra,
  Grid,
  GridItem,
  Container,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { GoLocation } from "react-icons/go";

import { LOCATIONS } from "../../constant";

interface LocationProps {
  locationName: string;
  address: string;
  icon: ReactNode;
  locationLink: string;
}

function LocationItem(props: LocationProps) {
  const router = useRouter();
  const { locationName, address, locationLink, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py="5"
      shadow="sm"
      border="1px solid #DDD"
      rounded="lg"
      _hover={{ background: "#f6faff" }}
      className="stats"
    >
      <Flex justifyContent="space-between">
        <Box pl={{ base: 2, md: 2 }}>
          <StatNumber fontSize="xl" fontWeight="medium">
            {locationName}
          </StatNumber>
          <StatLabel
            fontSize={{ base: "xs", md: "xs", lg: "sm" }}
            fontWeight="medium"
            isTruncated
          >
            {address}
          </StatLabel>
          <Button
            colorScheme="orange"
            variant="outline"
            size="sm"
            mt="5"
            rightIcon={<ArrowForwardIcon />}
            onClick={() => router.push(locationLink)}
          >
            Location Detail
          </Button>
        </Box>
        <Box
          my="auto"
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent="center"
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function FindLocations() {
  const router = useRouter();
  return (
    <Box as={Container} maxW="5xl" my={5} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
        mb="10"
      >
        <GridItem colSpan={12}>
          <VStack alignItems="center" spacing="10px">
            <chakra.h2
              fontSize="3xl"
              fontWeight="700"
              textTransform="uppercase"
            >
              Find Locations
            </chakra.h2>
            <Button
              colorScheme="gray"
              size="md"
              variant="outline"
              onClick={() => router.push("/locations")}
            >
              Explore your favorite Oishii location
            </Button>
          </VStack>
        </GridItem>
      </Grid>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: "4", md: "6" }}>
        {LOCATIONS.map(({ locationName, address, locationLink }) => (
          <LocationItem
            key={locationName}
            locationName={locationName}
            address={address}
            locationLink={`/locations/${locationLink}`}
            icon={<GoLocation size="2em" />}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
