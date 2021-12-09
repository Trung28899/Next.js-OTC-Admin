import React from "react";

import classes from "./BackDrop.module.css";

const BackDrop = (props) => {
  const cssClasses = [
    classes.Backdrop,
    props.show ? classes.BackdropOpen : classes.BackdropClosed,
  ];
  return (
    <div className={cssClasses.join(" ")} onClick={props.closeModal}></div>
  );
};

export default BackDrop;
