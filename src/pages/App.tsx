// App.tsx
import Map from "../components/Map";
import useNetwork from "../hooks/useNetwork";
import "../styles/global.css";

const App = () => {
  const { networks } = useNetwork();

  return (
    <div className="app">
      <h1>Bike Sharing App</h1>
      <Map networks={networks} />
    </div>
  );
};

export default App;
