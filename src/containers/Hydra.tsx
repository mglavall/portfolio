import { useEffect } from "react";
import { styled } from "~/styles/stitches.config";
const HydraEngine = require("hydra-synth");

const StyledCanvas = styled("canvas", {
  width: "100%",
});

const Hydra = ({ height = "400", width = "400" }) => {
  useEffect(() => {
    const canvas = document.getElementById("hydra-canvas");
    const hydra = new HydraEngine({
      canvas: document.getElementById("hydra-canvas"),
      detectAudio: false,
    });

    // by default, hydra makes everything global.
    // see options to change parameters
    shape(1, 1)
      .mult(voronoi(1000, 2).blend(o0).luma())
      .add(
        shape(3, 0.225).rotate(1, 1).mult(voronoi(1000, 1).luma()).rotate(1.5)
      )
      .scrollX([0.1, -0.0625, 0.005, 0.00001], 0)
      .scrollY([0.1, -0.0625, 0.005, 0.00001], 0)
      .out(o0);
    s1.initImage("/marsa.jpg");
    src(s1).out(o1);

    src(o0)
      .contrast(0.7)
      .brightness()
      .luma(1.3, 0.2)
      .mult(o1)
      .saturate()
      .thresh(0.2, 0.1)
      .out(o2);
    render(o2);
  });

  return (
    <StyledCanvas id="hydra-canvas" width="1000" height="562"></StyledCanvas>
  );
};

export default Hydra;
