import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { styled } from "~/styles/stitches.config";

const StyledCheckbox = styled(RadixCheckbox.Root, {
  width: "20px",
  height: "20px",
  backgroundColor: "black",
  border: "1px solid white",
  padding: "0px",
});

const StyledIndicator = styled("div", {
  margin: "1px",
  backgroundColor: "white",
  width: "100%",
  height: "100%",
});

const Checkbox = (props) => {
  return (
    <StyledCheckbox>
      <RadixCheckbox.Indicator asChild>
        <StyledIndicator></StyledIndicator>
      </RadixCheckbox.Indicator>
    </StyledCheckbox>
  );
};

export default Checkbox;
