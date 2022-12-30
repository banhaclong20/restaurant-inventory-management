import {
  Flex,
  Badge,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  Container,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

interface ItemProps {
  name: string;
  desc: string;
  image: string;
  badge: string;
  isRaw: boolean;
  moreSpace: boolean;
}

interface MenuSectionProps {
  category: string;
  data: Array<ItemProps>;
  isSubMenu: boolean;
}

const Item = ({ name, desc, image, badge, isRaw, moreSpace }: ItemProps) => {
  const imageHeight = moreSpace ? "143px" : "124px";
  return (
    <Center p={{ base: 1, md: 2 }} width="100%">
      <Stack
        borderWidth="1px"
        borderRadius="sm"
        w={{ sm: "100%" }}
        h={{ base: "100%" }}
        direction={{ base: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        width="100%"
      >
        <Stack
          flex={2}
          flexDirection="column"
          justifyContent="left"
          alignItems="left"
          p={4}
        >
          <Heading fontSize={{ base: "sm", md: "md" }} fontFamily="body">
            {name} {isRaw ? "* " : " "}
            <Badge
              variant="solid"
              colorScheme={badge === "Recommended" ? "orange" : "green"}
              fontSize={{ base: "9px", md: "xs" }}
            >
              {badge}
            </Badge>
          </Heading>
          <Text
            textAlign="left"
            fontSize={{ base: "xs", md: "sm" }}
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {desc}
          </Text>
        </Stack>
        {image && (
          <Flex alignItems="center">
            <Image
              objectFit="cover"
              boxSize="100%"
              width={{ base: "124px", md: "124px" }}
              height={{ base: "124px", md: imageHeight }}
              borderTopRightRadius="sm"
              borderBottomRightRadius="sm"
              className={moreSpace ? "hasMoreSpace" : ""}
              src={image}
            />
          </Flex>
        )}
      </Stack>
    </Center>
  );
};

const MenuSection = ({
  category,
  data,
  isSubMenu = false,
}: MenuSectionProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      mb={8}
      w="full"
    >
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1 }}>
          <Text
            as="b"
            align="center"
            fontSize={{ base: "xl", md: isSubMenu ? "xl" : "3xl" }}
            textTransform="uppercase"
            my={isSubMenu ? "-6" : "0.5"}
          >
            {category}
          </Text>
          <Text
            align="center"
            fontSize={{ base: "sm", md: "md" }}
            mt={category === "Appetizers" && "3.5"}
          >
            {(!isSubMenu || category === "Appetizers") &&
              "*Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness."}
          </Text>
        </SimpleGrid>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={2}
          mb={{ base: "1", md: "2" }}
          mt={isSubMenu ? "4" : "10"}
        >
          {data?.map((item) => (
            <Flex key={item.name}>
              <Item {...item} />
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default MenuSection;