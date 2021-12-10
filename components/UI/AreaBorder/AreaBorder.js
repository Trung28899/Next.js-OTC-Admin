import React from "react";
import classes from "./AreaBorder.module.css";

const Areaborder = (props) => {
  const { children, redBorder, alignStart, infoBorder } = props;
  const styleClass = [classes.container];

  if (redBorder) styleClass.push(classes.redBorder);
  if (alignStart) styleClass.push(classes.alignStart);
  if (infoBorder) styleClass.push(classes.infoBorder);

  return <div className={styleClass.join(" ")}>{children}</div>;
};

export default Areaborder;
