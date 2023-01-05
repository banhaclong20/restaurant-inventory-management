import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Container,
  SimpleGrid,
  TableContainer,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const Item = ({ item: { name, desc, price } }) => (
  <Tr>
    <Td color="gray.800">
      <Text as="b">{name}</Text>, {desc}
    </Td>
    <Td textAlign="right" color="gray.800">
      {price}
    </Td>
  </Tr>
);

type ItemProps = {
  name: string;
  desc: string;
  price: string;
};

interface WineListProps {
  category: string;
  data: Array<ItemProps>;
}

const WineList = ({ category, data }: WineListProps) => {
  return (
    <Container maxW="6xl">
      <SimpleGrid
        columns={{ base: 1, md: 1 }}
        spacing={5}
        mb={{ base: "2", md: "6" }}
      >
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th fontSize={{ base: "sm", md: "md" }} color="#f58220">
                  {category}
                </Th>
                <Th textAlign="right">Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((item) => (
                <Item item={item} key={item.name} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </SimpleGrid>
    </Container>
  );
};

export default WineList;
