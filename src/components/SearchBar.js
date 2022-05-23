import DropDown from "./DropDown";
import { getCountries } from "../apis/getCountries";
import { useEffect, useState } from "react";
import RenderedItems from "./RenderedItems";
import InputSearch from "./InputSearch";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(optionList[0]);
  //   console.log(countries);
  useEffect(() => {
    getCountries().then((res) => setCountries(res.data));
  }, []);

  const handleRegionClick = (text) => {
    setSelectedRegion(text);
  };
  const handleSearchTerm = (term) => {
    setSearchTerm(term);
  };
  const filteredCountries = (selectedRegion) => {
    return selectedRegion === "All Regions"
      ? countries
      : countries.filter((country) => country.region === selectedRegion);
  };

  return (
    <div>
      <div className="searchBar">
        <InputSearch
          searchTerm={searchTerm}
          handleSearchTerm={handleSearchTerm}
        />
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
