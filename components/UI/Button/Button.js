import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const { children, blue, glow, black, warning } = props;
  const { onClick, red, borderWhite, green } = props;
  const { marginTop, marginBottom, marginRight, marginLeft } = props;

  const btnClasses = [classes.button];
  const styleObject = {};

  if (blue) btnClasses.push(classes.blue);
  if (green) btnClasses.push(classes.green);
  if (red) btnClasses.push(classes.red);
  if (black) btnClasses.push(classes.black);
  if (warning) btnClasses.push(classes.warning);
  if (glow) btnClasses.push(classes.glow);

  if (marginTop) styleObject.marginTop = marginTop;
  if (marginBottom) styleObject.marginBottom = marginBottom;
  if (marginRight) styleObject.marginRight = marginRight;
  if (marginLeft) styleObject.marginLeft = marginLeft;

  if (borderWhite) btnClasses.push(classes.borderWhite);

  return (
    <button
      style={styleObject}
      onClick={onClick}
      className={btnClasses.join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
