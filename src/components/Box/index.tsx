import { useState } from "react";
import { Network } from "../../api";
import useNetwork from "../../hooks/useNetwork";
import "./styles.css";

interface BoxProps {
  network: Network;
}

enum Layer {
  L1 = "L1",
  L2 = "L2",
  L3 = "L3",
}

const Box = ({ network }: BoxProps) => {
  const [currentLayer, setCurrentLayer] = useState(Layer.L1);

  const {
    handlers: { newtorksPerCountry },
  } = useNetwork();

  const handleClick = (layer: Layer) => {
    setCurrentLayer(layer);
  };

  const networkDescription = (currentLayer: Layer) => {
    if (currentLayer === Layer.L1) {
      return (
        <>
          <h4>{`Name: ${network.name}`}</h4>
          <h4>{`Country: ${network.location.country}`}</h4>
          <h4>{`City: ${network.location.city}`}</h4>
        </>
      );
    }

    if (currentLayer === Layer.L2) {
      return (
        <>
          <h4>{`Stations(${network.company.length})`}</h4>
          {network.company.map((station) => (
            <li>{station}</li>
          ))}
        </>
      );
    }

    if (currentLayer === Layer.L3) {
      return (
        <>
          <h4>{`Country: ${network.location.country}`}</h4>
          <h4>{`Total Networks : ${newtorksPerCountry(
            network.location.country
          )}`}</h4>
        </>
      );
    }
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
      <div className="right-side">{networkDescription(currentLayer)}</div>
    </div>
  );
};

export default Box;
