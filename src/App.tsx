// App.tsx
import React, { useEffect, useState } from "react";
import { Network, fetchNetworks } from "./api";
import "./styles.css";
import Map from "./Map";

const App: React.FC = () => {
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

  return (
    <div className="app">
      <h1>Bike Sharing App</h1>
      <Map networks={networks} />
    </div>
  );
};

export default App;
