import { ChakraBaseProvider } from "@chakra-ui/react";

import customTheme from "lib/styles/theme";

interface ChakraProps {
  children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return (
    <ChakraBaseProvider theme={customTheme}>{children}</ChakraBaseProvider>
  );
};
