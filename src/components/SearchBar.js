import DropDown from "./DropDown";
import { getCountries } from "../apis/getCountries";
import { useEffect, useState } from "react";
import RenderedItems from "./RenderedItems";
import InputSearch from "./InputSearch";

const optionList = [
  "All Regions",
  "Africa",
  "Americas ",
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
  const filteredCountries = (selectedRegion, searchTerm) => {
    return selectedRegion === "All Regions" && !searchTerm
      ? countries
      : selectedRegion === "All Regions" && searchTerm
      ? countries.filter((country) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : !searchTerm
      ? countries.filter((country) => country.region === selectedRegion)
      : countries
          .filter((country) => country.region === selectedRegion)
          .filter((country) =>
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
          );
    // return selectedRegion === "All Regions" && !searchTerm
    //   ? countries
    //   : countries.filter((country) =>
    //       country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
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
        <RenderedItems
          countries={filteredCountries(selectedRegion, searchTerm)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
