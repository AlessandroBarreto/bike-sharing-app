import { useEffect, useState } from "react";
import { Network, fetchNetworks } from "../api";

interface useNetworkProps {
  networks: Network[];
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

  return { networks };
};

export default useNetwork;
