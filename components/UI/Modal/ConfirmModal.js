import React from "react";
import classes from "./Modal.module.css";
import Button from "../Button/Button";

const ConfirmModal = (props) => {
  const { message, confirm, close, confirmText, confirmPrimary } = props;
  const textClasses = [classes.title];

  return (
    <div className={classes.Modal}>
      <h4 className={textClasses.join(" ")}>{message}</h4>
      <div className={classes.btnContainer}>
        {confirmText && (
          <Button red={!confirmPrimary} blue={confirmPrimary} onClick={confirm}>
            {confirmText}
          </Button>
        )}
        <Button black onClick={close}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default ConfirmModal;
