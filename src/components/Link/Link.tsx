import { styled } from "~/styles/stitches.config";

export const Link = styled("a", {
  // Custom
  color: "white",
  transition: "color 0.3s ease 0s, background-size 0.3s ease 0s",
  backgroundImage:
    "linear-gradient(to left, rgb(255, 255, 255), rgb(255, 255, 255))",
  backgroundSize: "0% 1px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left bottom",
  lineHeight: "inherit",
  ":hover": {
    backgroundSize: "100% 1px",
  },
  cursor: "pointer",
  fontFamily: "$primary",
  fontSize: "$1",
});
