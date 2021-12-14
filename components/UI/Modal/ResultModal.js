import React from "react";
import classes from "./Modal.module.css";
import Button from "../Button/Button";

const ConfirmModal = (props) => {
  const { success, message, confirm, close, confirmText } = props;
  const textClasses = [classes.title];

  if (success) textClasses.push(classes.greenText);
  if (!success) textClasses.push(classes.redText);

  return (
    <div className={classes.Modal}>
      <h4 className={textClasses.join(" ")}>{message}</h4>
      <div className={classes.btnContainer}>
        {success && (
          <Button blue onClick={confirm}>
            {confirmText}
          </Button>
        )}
        {!success && (
          <Button black onClick={close}>
            Close
          </Button>
        )}
      </div>
    </div>
  );
};

export default ConfirmModal;
