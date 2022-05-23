import { useEffect, useState } from "react";

const InputSearch = ({ searchTerm, handleSearchTerm }) => {
  const [term, setTerm] = useState(searchTerm);
  useEffect(() => {
    let timerId = setTimeout(() => {
      handleSearchTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);
  //   console.log(searchTerm);
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="search">
      <i className="fas fa-search"></i>
      <input
        onChange={handleChange}
        value={term}
        type="text"
        placeholder="Search for a country"
      />
    </div>
  );
};

export default InputSearch;
