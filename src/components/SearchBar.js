import DropDown from "./DropDown";
import { getCountries } from "../apis/getCountries";
import { useEffect, useState } from "react";
import RenderedItems from "./RenderedItems";

const SearchBar = () => {
  const [countries, setCountries] = useState([]);
  //   console.log(countries);
  useEffect(() => {
    getCountries().then((res) => setCountries(res.data));
  }, []);
  const optionList = [
    "All Regions",
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ];
  return (
    <div>
      <div className="searchBar">
        <div className="search">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search for a country" />
        </div>
        <DropDown optionList={optionList} />
      </div>
      <div className="content">
        <RenderedItems countries={countries} />
      </div>
    </div>
  );
};

export default SearchBar;
