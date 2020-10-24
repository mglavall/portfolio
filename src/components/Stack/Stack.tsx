import { styled } from "~/styles/stitches.config";

const Stack = styled("div", {
  display: "flex",
  variants: {
    direction: {
      column: {
        flexDirection: "column",
      },
      row: {
        fontSize: "row",
      },
    },
    alignItems: {
      center: {
        alignItems: "center",
      },
    },
    justifyContent: {
      spaceBetween: {
        justifyContent: "space-between",
      },
    },
  },
});

export default Stack;
