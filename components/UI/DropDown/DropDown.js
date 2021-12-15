import React, { useState } from "react";
import classes from "./DropDown.module.css";

export default function DropDown(props) {
  const { optionName, options, setChosen } = props;
  const { fontSize, width, value } = props;

  const [openDrop, setOpenDrop] = useState(false);
  const [chosenOption, setChosenOption] = useState(value || "");

  const toggleDrop = () => setOpenDrop(!openDrop);

  const optionChosen = (option) => {
    setChosen(option);
    setChosenOption(option);
    setOpenDrop(false);
  };

  const titleObject = {};
  const optionStyle = {};
  const dropBtnStyle = {};

  if (fontSize) {
    titleObject.fontSize = fontSize;
    optionStyle.fontSize = fontSize;
    dropBtnStyle.fontSize = fontSize;
  }

  if (width) {
    dropBtnStyle.width = width;
    optionStyle.width = width;
  }

  return (
    <div className={classes.wrapper}>
      <h3 style={titleObject} className={classes.title}>
        {optionName}
      </h3>
      <div className={classes.container}>
        <div
          style={dropBtnStyle}
          onClick={toggleDrop}
          className={classes.dropBtn}
        >
          {chosenOption || "Choose"}
        </div>
        {openDrop && (
          <div className={classes.option}>
            {options.map((item) => (
              <div
                style={optionStyle}
                key={item}
                onClick={() => optionChosen(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
