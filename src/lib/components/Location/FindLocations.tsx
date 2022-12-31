import { ArrowForwardIcon, AddIcon, CheckIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { GoLocation } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

import { LOCATIONS } from "../../constant";
import { setLocationName, selectLocationName } from "store/locationSlice";

interface LocationProps {
  locationName: string;
  address: string;
  icon: ReactNode;
  locationLink: string;
  asPopup: boolean;
}

function LocationItem(props: LocationProps) {
  const router = useRouter();
  const { locationName, address, locationLink, icon, asPopup } = props;
  const selectedLocation = useSelector(selectLocationName);
  const dispatch = useDispatch();
  const selectedItem = selectedLocation === locationName;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py="5"
      shadow="sm"
      border={selectedItem ? "2px solid #dd6b20" : "1px solid #DDD"}
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
          {(asPopup || (!asPopup && selectedItem)) && (
            <Button
              colorScheme="orange"
              variant={selectedItem ? "solid" : "outline"}
              size="sm"
              mt="5"
              leftIcon={selectedItem ? <CheckIcon /> : <AddIcon />}
              onClick={() => dispatch(setLocationName(locationName))}
              mr="2"
            >
              {selectedItem ? "Selected Location" : "Select this location"}
            </Button>
          )}

          {!asPopup && (
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
          )}
        </Box>
        {!asPopup && (
          <Box my="auto" color="gray.600" alignContent="center">
            {icon}
          </Box>
        )}
      </Flex>
    </Stat>
  );
}

interface FindLocationsProps {
  asPopup?: boolean;
}

export default function FindLocations({ asPopup = false }: FindLocationsProps) {
  const router = useRouter();
  return (
    <Box as={Container} maxW="5xl" my={asPopup ? 0 : 5} p={asPopup ? 2 : 4}>
      {!asPopup && (
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
      )}

      <SimpleGrid
        columns={{ base: 1, md: asPopup ? 1 : 2 }}
        spacing={{ base: "4", md: asPopup ? 2 : 6 }}
      >
        {LOCATIONS.map(({ locationName, address, locationLink }) => (
          <LocationItem
            key={locationName}
            locationName={locationName}
            address={address}
            asPopup={asPopup}
            locationLink={`/locations/${locationLink}`}
            icon={<GoLocation size="2em" />}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
