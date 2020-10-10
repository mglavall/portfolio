import { useEffect } from "react";
const HydraEngine = require('hydra-synth')

const Hydra = ({height = "400", width = "400"})=>{
    useEffect(()=>{
        const hydra = new HydraEngine({canvas: document.getElementById("hydra-canvas")})

        // by default, hydra makes everything global.
        // see options to change parameters
        osc().out()
    })

    return (<canvas width={width} height={height} id="hydra-canvas"></canvas>)
    
}

export default Hydra;