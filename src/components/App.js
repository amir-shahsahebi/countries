import "../index.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
function App() {
  const [lightMode, setLightMode] = useState(true);
  useEffect(() => {
    if (!lightMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [lightMode]);

  const handleColor = () => {
    setLightMode(!lightMode);
  };

  return (
    <div>
      <Navbar colorMode={handleColor} />
      <SearchBar />
    </div>
  );
}

export default App;
