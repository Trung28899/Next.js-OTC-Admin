import React from "react";
import classes from "./ToolTip.module.css";

function CustomTooltip({ payload, active, totalType }) {
  if (active) {
    return (
      <div className={classes.container}>
        <p>{`Dept: ${payload[0].name}`}</p>
        <p>{`${totalType || ""}: $ ${payload[0].value}`}</p>
        <p></p>
      </div>
    );
  }

  return null;
}

export default CustomTooltip;
