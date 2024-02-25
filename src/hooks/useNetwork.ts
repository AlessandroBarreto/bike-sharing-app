import { useEffect, useState } from "react";
import { Network, fetchNetworks } from "../api";

interface useNetworkProps {
  data: { networks: Network[] };
  handlers: { newtorksPerCountry: (country: string) => number };
}

const useNetwork = (): useNetworkProps => {
  const [networks, setNetworks] = useState<Network[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNetworks();
        setNetworks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const newtorksPerCountry = (country: string) => {
    const filteredCountry = networks.filter(
      (network) => network.location.country === country
    );

    return filteredCountry.length;
  };

  return { data: { networks }, handlers: { newtorksPerCountry } };
};

export default useNetwork;
