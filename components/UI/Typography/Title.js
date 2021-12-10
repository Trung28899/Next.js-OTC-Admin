import React from "react";
import classes from "./Typography.module.css";

const Title = (props) => {
  const { children, marginTop, fontSize } = props;
  const { marginBottom, marginRight, marginLeft } = props;
  const { primary } = props;

  const styleObject = {};
  const styleClass = [classes.title];

  if (marginTop) styleObject.marginTop = marginTop;
  if (marginBottom) styleObject.marginBottom = marginBottom;
  if (marginRight) styleObject.marginRight = marginRight;
  if (marginLeft) styleObject.marginLeft = marginLeft;
  if (fontSize) styleObject.fontSize = fontSize;

  if (primary) styleClass.push(classes.primary);

  return (
    <h3 style={styleObject} className={styleClass.join(" ")}>
      {children}
    </h3>
  );
};

export default Title;
