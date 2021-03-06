import { useEffect, useRef, useState } from "react";

const DropDown = ({ optionList, handleRegionClick, selectedRegion }) => {
  // const [selected, setSelected] = useState(optionList[0]);
  const [clicked, setClicked] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        // console.log("im contains");
        return;
      }
      // console.log("im out");
      setClicked(false);
    };
    window.addEventListener("click", onBodyClick);

    return () => {
      window.removeEventListener("click", onBodyClick);
    };
  }, []);
  const handleClick = (e) => {
    // console.dir(e.target.innerText);
    // setSelected(e.target.innerText);
    setClicked(false);
    // console.log("Im handle Click");
    handleRegionClick(e.target.innerText);
  };
  return (
    <div ref={ref} className="dropDownContainer">
      <span onClick={() => setClicked(!clicked)} className="selectedValue">
        {selectedRegion}
      </span>
      {/* <div className="dropDown" style={!clicked ? { display: "none" } : null}> */}
      <div
        className="dropDown"
        style={
          !clicked
            ? { display: "none", animation: "remove" }
            : { animation: "drop 0.5s ease-out forwards" }
        }
      >
        <ul>
          {optionList
            .filter((option) => option !== selectedRegion)
            .map((option) => {
              return (
                <li key={option} onClick={handleClick}>
                  {option}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
