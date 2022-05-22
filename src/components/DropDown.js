import { useEffect, useRef, useState } from "react";

const DropDown = ({ optionList }) => {
  const [selected, setSelected] = useState(optionList[0]);
  const [clicked, setClicked] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setClicked(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, [clicked]);
  const handleClick = (e) => {
    // console.dir(e.target.innerText);
    setSelected(e.target.innerText);
    setClicked(!clicked);
  };
  return (
    <div ref={ref} className="dropDownContainer">
      <span onClick={() => setClicked(!clicked)} className="selectedValue">
        {selected}
      </span>
      <div className="dropDown" style={!clicked ? { display: "none" } : null}>
        <ul>
          {optionList
            .filter((option) => option !== selected)
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
