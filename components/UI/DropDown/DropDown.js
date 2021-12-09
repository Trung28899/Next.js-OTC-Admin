import React, { useState } from "react";
import classes from "./DropDown.module.css";

export default function DropDown({ optionName, options, setChosen }) {
  const [openDrop, setOpenDrop] = useState(false);
  const [chosenOption, setChosenOption] = useState("");

  const toggleDrop = () => setOpenDrop(!openDrop);

  const optionChosen = (option) => {
    setChosen(option);
    setChosenOption(option);
    setOpenDrop(false);
  };

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>{optionName}</h3>
      <div className={classes.container}>
        <div onClick={toggleDrop} className={classes.dropBtn}>
          {chosenOption || optionName}
        </div>
        {openDrop && (
          <div className={classes.option}>
            {options.map((item) => (
              <div key={item} onClick={() => optionChosen(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
