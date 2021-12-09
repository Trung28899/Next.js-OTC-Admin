import React, { useState } from "react";
import classes from "./Modal.module.css";
import DropDown from "../DropDown/DropDown";
import { monthArray, yearArray } from "../../../utilities/helper";
import Button from "../Button/Button";
import { useUpdateState } from "../../../context/AppContext";

export default function Modal(props) {
  const { show } = props;
  const { addJournal } = useUpdateState();
  const [monthChosen, setMonthChosen] = useState("");
  const [yearChosen, setYearChosen] = useState("");

  const cssClasses = [
    classes.Modal,
    show ? classes.ModalOpen : classes.ModalClosed,
  ];

  const closeModal = () => {
    props.closeModal();
    setMonthChosen("");
    setYearChosen("");
  };

  const addJournalHandler = () => {
    if (!monthChosen || !yearChosen) {
      return alert("Please Choose Month And Year For Journal");
    }
    addJournal({ name: `${monthChosen}, ${yearChosen}` });
    return closeModal();
  };

  return (
    <div className={cssClasses.join(" ")}>
      <h3 className={classes.title}>Add New Journal</h3>
      <div className={classes.linkDiv}>
        {show && (
          <DropDown
            optionName="Choose Month"
            options={monthArray}
            setChosen={setMonthChosen}
          />
        )}
        {show && (
          <DropDown
            optionName="Choose Year"
            options={yearArray}
            setChosen={setYearChosen}
          />
        )}
      </div>
      <div className={classes.btnContainer}>
        <Button blue glow onClick={addJournalHandler}>
          Add Journal
        </Button>
        <Button black onClick={closeModal}>
          Close
        </Button>
      </div>
    </div>
  );
}
