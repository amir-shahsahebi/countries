import DropDown from "./DropDown";
// import { getCountries } from "../apis/getCountries";
import { useEffect, useRef, useState } from "react";
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
const SearchBar = ({ AllCountries }) => {
  // const [AllCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(optionList[0]);
  const [barClick, setBarClick] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();
  //   console.log(countries);
  // useEffect(() => {
  //   getCountries().then((res) => setAllCountries(res.data));
  // }, []);

  useEffect(() => {
    selectedRegion === "All Regions" && !searchTerm
      ? setCountries(AllCountries)
      : selectedRegion === "All Regions" && searchTerm
      ? setCountries(
          AllCountries.filter((country) =>
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      : !searchTerm
      ? setCountries(
          AllCountries.filter((country) => country.region === selectedRegion)
        )
      : setCountries(
          AllCountries.filter(
            (country) => country.region === selectedRegion
          ).filter((country) =>
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
  }, [selectedRegion, searchTerm, AllCountries]);

  useEffect(() => {
    const checkClick = (e) => {
      if (ref1.current.contains(e.target) || ref2.current.contains(e.target)) {
        return;
      }
      setBarClick(false);
    };
    window.addEventListener("click", checkClick);
    return () => {
      window.removeEventListener("click", checkClick);
    };
  }, []);

  const handleRegionClick = (text) => {
    setSelectedRegion(text);
  };
  const handleSearchTerm = (term) => {
    setSearchTerm(term);
  };
  // console.log(barClick);
  return (
    <div>
      <div ref={ref1} onClick={() => setBarClick(!barClick)} className="bars">
        <i className={!barClick ? "fas fa-bars" : "far fa-times-circle"}></i>
      </div>
      <div
        ref={ref2}
        className="searchBar"
        style={
          barClick
            ? { animation: "barMoveIn 0.6s forwards" }
            : { animation: "barMoveOut 0.5s forwards" }
        }
      >
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
          // countries={filteredCountries(selectedRegion, searchTerm)}
          countries={countries}
        />
      </div>
    </div>
  );
};

export default SearchBar;
