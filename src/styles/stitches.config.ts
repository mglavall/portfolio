import { createStyled } from "@stitches/react";

export const { styled, css } = createStyled({
  tokens: {
    fonts: {
      $system: "system-ui",
      $primary: "AgrandirGrand",
    },
    colors: {
      $primary: "#ededed",
      $secondary: "#0b0b0b",
      $tertiary: "#903749",
      $alternative: "#53354a",
      $backgroundColor: "#0b0b0b",
    },
    fontSizes: {
      $1: "12px",
      $2: "16px",
      $3: "24px",
      $4: "32px",
      $5: "40px",
      $6: "56px",
      $7: "70px",
    },
  },
});
