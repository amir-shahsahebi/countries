import DropDown from "./DropDown";
import { getCountries } from "../apis/getCountries";
import { useEffect, useState } from "react";
import RenderedItems from "./RenderedItems";

const optionList = [
  "All Regions",
  "Africa",
  "America",
  "Asia",
  "Europe",
  "Oceania",
];
const SearchBar = () => {
  const [countries, setCountries] = useState([]);
  const [term, setTerm] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(optionList[0]);
  //   console.log(countries);
  useEffect(() => {
    getCountries().then((res) => setCountries(res.data));
  }, []);

  const handleRegionClick = (text) => {
    setSelectedRegion(text);
  };

  const filteredCountries = (selectedRegion) => {
    return selectedRegion === "All Regions"
      ? countries
      : countries.filter((country) => country.region === selectedRegion);
  };

  return (
    <div>
      <div className="searchBar">
        <div className="search">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search for a country" />
        </div>
        <DropDown
          optionList={optionList}
          selectedRegion={selectedRegion}
          handleRegionClick={handleRegionClick}
        />
      </div>
      <div className="content">
        <RenderedItems countries={filteredCountries(selectedRegion)} />
      </div>
    </div>
  );
};

export default SearchBar;
