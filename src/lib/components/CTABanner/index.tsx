import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

interface ButtonItem {
  btnText: string;
  hasBackground: boolean;
  link: string;
}

interface CTABannerProps {
  bgImage: string;
  height?: string;
  headingText: string;
  buttons?: Array<ButtonItem>;
  id?: string;
  isTextCenter?: boolean;
  descText?: string;
}

const CTABanner = ({
  bgImage,
  height = "400px",
  headingText,
  buttons,
  isTextCenter,
  descText,
  id,
}: CTABannerProps) => {
  const router = useRouter();
  return (
    <Flex
      w="full"
      h={height}
      backgroundImage={`url(${bgImage})`}
      backgroundSize="cover"
      backgroundPosition="center center"
      id={id}
    >
      <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient="linear(to-r, blackAlpha.600, transparent)"
      >
        <Stack
          maxW="2xl"
          align={isTextCenter ? "center" : "flex-start"}
          spacing={6}
        >
          <Text
            color="white"
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            textAlign={isTextCenter ? "center" : "inherit"}
          >
            {headingText}
          </Text>
          {descText && (
            <Text
              color="white"
              lineHeight={1.5}
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign={isTextCenter ? "center" : "inherit"}
            >
              {descText}
            </Text>
          )}

          <Stack direction="row">
            {buttons?.map(({ btnText, hasBackground, link }) => (
              <Button
                key={btnText}
                bg={hasBackground ? "orange.400" : "whiteAlpha.300"}
                rounded="full"
                color="white"
                _hover={{ bg: hasBackground ? "blue.500" : "whiteAlpha.500" }}
                onClick={() => router.push(link)}
              >
                {btnText}
              </Button>
            ))}
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default CTABanner;
