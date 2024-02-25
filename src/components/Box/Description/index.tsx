import React from "react";
import { Network } from "../../../api";
import useNetwork from "../../../hooks/useNetwork";
import { Layer } from "../enums";

interface NetworkDescriptionProps {
  network: Network;
  currentLayer: Layer;
}

const NetworkDescription = ({
  network,
  currentLayer,
}: NetworkDescriptionProps) => {
  const {
    handlers: { newtorksPerCountry },
  } = useNetwork();

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
        {network.company.map((station, index) => (
          <li key={index}>{station}</li>
        ))}
      </>
    );
  }

  if (currentLayer === Layer.L3) {
    return (
      <>
        <h4>{`Country: ${network.location.country}`}</h4>
        <h4>{`Networks : ${newtorksPerCountry(network.location.country)}`}</h4>
      </>
    );
  }

  return null;
};

export default NetworkDescription;
