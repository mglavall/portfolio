import { useEffect } from "react";
import { styled } from "~/styles/stitches.config";
const HydraEngine = require("hydra-synth");

const StyledCanvas = styled("canvas", {
  width: "100%",
});

const Hydra = ({ height = "400", width = "400" }) => {
  useEffect(() => {
    if (typeof window == "undefined") {
      return;
    }
    const canvas = document.getElementById("hydra-canvas");
    const hydra = new HydraEngine({
      canvas: document.getElementById("hydra-canvas"),
      detectAudio: false,
    });

    // by default, hydra makes everything global.
    // see options to change parameters
    osc(80, -0.015, 0.3)
      .diff(osc(60, 0.08).rotate(Math.PI / 2))
      .modulateScale(
        noise(2.5, 0.25).modulateScale(
          osc(15).rotate(() => Math.sin(time / 2))
        ),
        0.6
      )
      .color(7, 220, 220)
      .contrast(1)
      .add(src(o0).modulate(o0, 0.04), 0.6)
      .invert()
      .brightness(0.01)
      .contrast(1)
      .modulateScale(osc(2), -0.1)
      .out();
    // s1.initImage("/marsa.jpg");
    // src(s1).out(o1);

    // src(o0)

    //   .contrast(0.7)
    //   .brightness()
    //   .luma(1.3, 0.2)
    //   .saturate()
    //   .thresh(0.2, 0.1)
    //   .out(o2);
    // render(o2);
  }, []);

  return (
    <div style={{ height: "200px", overflow: "hidden" }}>
      <StyledCanvas
        id="hydra-canvas"
        width={width}
        height={height}
      ></StyledCanvas>
    </div>
  );
};

export default Hydra;
