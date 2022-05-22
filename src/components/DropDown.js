import { useState } from "react";

const DropDown = ({ optionList }) => {
  const [selected, setSelected] = useState(optionList[0]);
  return (
    <div className="dropDownContainer">
      <span className="selectedValue">{selected}</span>
      <div className="dropDown">
        <ul>
          {optionList.map((option) => {
            return <li>{option}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
