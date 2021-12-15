import React from "react";
import classes from "./TextArea.module.css";

const Textarea = (props) => {
  const { value, title, rows, cols, setValue, editOff } = props;
  const { marginTop, marginBottom, marginRight, marginLeft } = props;
  const { placeHolder, isNumber } = props;

  const styleObjectContainer = {};
  const styleObjectTextArea = {};
  const containerClass = [classes.container];
  const textAreaClass = [classes.textArea];

  if (marginTop) styleObjectContainer.marginTop = marginTop;
  if (marginBottom) styleObjectContainer.marginBottom = marginBottom;
  if (marginRight) styleObjectContainer.marginRight = marginRight;
  if (marginLeft) styleObjectContainer.marginLeft = marginLeft;

  const onChangeText = (event) => {
    let val = event.target.value;

    if (isNumber) {
      const invalidChars = /[^0-9.]/gi;
      if (invalidChars.test(val)) val = val.replace(invalidChars, "");
    }

    setValue(val);
  };

  return (
    <div style={styleObjectContainer} className={containerClass.join(" ")}>
      <label>{title}</label>
      <textarea
        rows={rows}
        cols={cols}
        style={styleObjectTextArea}
        className={textAreaClass.join(" ")}
        onChange={onChangeText}
        value={value || ""}
        placeholder={placeHolder}
        type="number"
        readOnly={editOff}
      />
    </div>
  );
};

export default Textarea;
