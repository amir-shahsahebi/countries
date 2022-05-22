import DropDown from "./DropDown";

const SearchBar = () => {
  const optionList = [
    "All Regions",
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ];
  return (
    <div className="searchBar">
      <div className="search">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search for a country" />
      </div>
      <DropDown optionList={optionList} />
      {/* <div className="select">
        <select name="dropDown" id="">
          <option value="">All Regions</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
        </select>
      </div> */}
    </div>
  );
};

export default SearchBar;
