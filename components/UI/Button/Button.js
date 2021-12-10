import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const { children, blue, glow, black } = props;
  const { onClick } = props;
  const btnClasses = [classes.button];

  if (blue) btnClasses.push(classes.blue);
  if (black) btnClasses.push(classes.black);
  if (glow) btnClasses.push(classes.glow);

  return (
    <button onClick={onClick} className={btnClasses.join(" ")}>
      {children}
    </button>
  );
};

export default Button;
