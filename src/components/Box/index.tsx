import { useState } from "react";
import { Network } from "../../api";
import "./styles.css";
import NetworkDescription from "./Description";

interface BoxProps {
  network: Network;
}

export enum Layer {
  L1 = "L1",
  L2 = "L2",
  L3 = "L3",
}

const Box = ({ network }: BoxProps) => {
  const [currentLayer, setCurrentLayer] = useState(Layer.L1);

  const handleClick = (layer: Layer) => {
    setCurrentLayer(layer);
  };

  return (
    <div className="box-container">
      <div className="left-side">
        {Object.values(Layer).map((layer) => (
          <div
            key={layer}
            className={`layer ${currentLayer === layer && "current-layer"}`}
            onClick={() => handleClick(layer)}
          >
            {layer}
          </div>
        ))}
      </div>
      <div className="right-side">
        <NetworkDescription network={network} currentLayer={currentLayer} />
      </div>
    </div>
  );
};

export default Box;
