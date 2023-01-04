import type { Styles } from "@chakra-ui/theme-tools";

export const styles: Styles = {
  global: () => ({
    html: {
      bg: "white",
    },
    body: {
      bg: "white",
      WebkitTapHighlightColor: "transparent",
    },
    "#chakra-toast-portal > *": {
      pt: "safe-top",
      pl: "safe-left",
      pr: "safe-right",
      pb: "safe-bottom",
    },
  }),
};
