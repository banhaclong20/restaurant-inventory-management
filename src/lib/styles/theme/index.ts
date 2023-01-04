import { extendTheme } from "@chakra-ui/react";

import { components } from "./components";
import { config } from "./config";
import { fonts } from "./fonts";
import { styles } from "./styles";

const customTheme = extendTheme({
  fonts,
  config,
  styles,
  components,
});

export default customTheme;
