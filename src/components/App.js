import "../index.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleItem from "./SingleItem";

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
      <Router>
        <Navbar colorMode={handleColor} lightMode={lightMode} />
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path=":countryName" element={<SingleItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
