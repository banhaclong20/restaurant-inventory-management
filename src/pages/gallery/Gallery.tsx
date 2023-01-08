import { Flex, Container, SimpleGrid, Text } from "@chakra-ui/react";

import CTABanner from "../../lib/components/CTABanner";
import ImageGallery from "../../lib/components/ImageGallery";

const Gallery = () => {
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
        bgImage="/assets/gallery-bg-1.jpg"
        height="300px"
        headingText="Gallery"
      />
      <Container
        maxW="5xl"
        py={{ base: "2", lg: "5" }}
        mt={{ base: "0", lg: "5" }}
      >
        <SimpleGrid columns={{ base: 1 }} spacing={10}>
          <Text
            as="b"
            align="center"
            fontSize="3xl"
            textTransform="uppercase"
            color="gray.800"
          >
            Our Delicious sushi and Sashimi
          </Text>
          <ImageGallery />
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Gallery;
