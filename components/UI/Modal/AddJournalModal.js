import React, { useState } from "react";
import classes from "./Modal.module.css";
import DropDown from "../DropDown/DropDown";
import { monthArray, yearArray } from "../../../utilities/helper";
import Button from "../Button/Button";
import { useUpdateState } from "../../../context/AppContext";
import { addJournalAxios } from "../../../utilities/api_helper/api_helper";

export default function Modal(props) {
  const { show, setLoad } = props;
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

  const addJournalHandler = async () => {
    if (!monthChosen || !yearChosen)
      return alert("Please Choose Month And Year For Journal");

    setLoad(true);
    closeModal();
    const journalObject = {
      name: `${monthChosen}, ${yearChosen}`,
      month: monthChosen,
      year: yearChosen,
      journalID: Date.now(),
    };

    const res = await addJournalAxios(journalObject);

    if (!res.success) {
      setLoad(false);
      return alert(`Error Happened: ${res.message}`);
    }

    addJournal(journalObject);
    return setLoad(false);
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
