import { BellIcon } from "@chakra-ui/icons";
import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { selectLocationName } from "../../../store/locationSlice";
import { LOCATIONS } from "lib/constant";

const PromoBanner = () => {
  const selectedLocation = useSelector(selectLocationName);
  const location = LOCATIONS.find((i) => i.locationName === selectedLocation);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      backgroundColor="#607d8b"
      mt="-1rem"
    >
      <SimpleGrid
        columns={2}
        height="50px"
        spacing={2}
        display="flex"
        justifyContent="center"
      >
        <Box alignItems="center" display="flex">
          <Text color="white" fontWeight="600">
            <BellIcon
              boxSize={6}
              style={{ position: "relative", top: "-2px", marginRight: "5px" }}
            />
            {location ? location.promoBannerText : "New location coming soon"}
          </Text>
        </Box>
      </SimpleGrid>
    </Flex>
  );
};

export default PromoBanner;
