import { useEffect } from "react";
const HydraEngine = require("hydra-synth");

const Hydra = ({ height = "400", width = "400" }) => {
  useEffect(() => {
    const hydra = new HydraEngine({
      canvas: document.getElementById("hydra-canvas"),
    });

    // by default, hydra makes everything global.
    // see options to change parameters
    shape(1, 1)
      .mult(voronoi(1000, 2).blend(o0).luma())
      .add(
        shape(3, 0.125).rotate(1, 1).mult(voronoi(1000, 1).luma()).rotate(1.5)
      )
      .scrollX([0.1, -0.0625, 0.005, 0.00001], 0)
      .scrollY([0.1, -0.0625, 0.005, 0.00001], 0)
      .out();
  });

  return <canvas width={width} height={height} id="hydra-canvas"></canvas>;
};

export default Hydra;
