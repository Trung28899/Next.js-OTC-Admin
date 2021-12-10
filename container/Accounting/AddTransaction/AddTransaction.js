import React, { useState } from "react";

import AreaBorder from "../../../components/UI/AreaBorder/AreaBorder";
import Title from "../../../components/UI/Typography/Title";
import TextArea from "../../../components/UI/TextArea/TextArea";
import DropDown from "../../../components/UI/DropDown/DropDown";
import Button from "../../../components/UI/Button/Button";

import { transactionType, dayInMonth } from "../../../utilities/helper";
import { departments } from "../../../utilities/helper";

import classes from "./AddTransaction.module.css";

const AddTransactionContain = ({ data }) => {
  const { name, journalID } = data;

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(null);
  const [invoice, setInvoice] = useState("");
  const [notes, setNotes] = useState("");
  const [transType, setTransType] = useState("");
  const [department, setDepartment] = useState("");
  const [date, setDate] = useState("");

  return (
    <AreaBorder alignStart>
      <Title marginLeft="25px">{name}: Add New Transaction</Title>

      <TextArea
        marginTop="30px"
        title="Description"
        placeHolder="Transaction Description..."
        rows="1"
        cols="35"
        setValue={setDescription}
        value={description}
      />

      <TextArea
        marginTop="15px"
        title="Amount ( in CAD )"
        placeHolder="Transaction Amount..."
        rows="1"
        cols="35"
        setValue={setAmount}
        value={amount}
        isNumber
      />

      <TextArea
        marginTop="15px"
        title="Invoice Link"
        placeHolder="Transaction Invoice..."
        rows="1"
        cols="35"
        setValue={setInvoice}
        value={invoice}
      />

      <div className={classes.transType}>
        <DropDown
          optionName="Transaction Type"
          options={transactionType}
          setChosen={setTransType}
          fontSize="0.9rem"
          width="120px"
        />
        <div className={classes.divider}></div>
        <DropDown
          optionName="Department"
          options={departments}
          setChosen={setDepartment}
          fontSize="0.9rem"
          width="150px"
        />
      </div>

      <div className={classes.transType}>
        <DropDown
          optionName="Date"
          options={dayInMonth}
          setChosen={setDate}
          fontSize="0.9rem"
          width="100px"
        />
        <div className={classes.divider}></div>
        <Title marginTop="55px">{name}</Title>
      </div>

      <TextArea
        marginTop="15px"
        title="Notes"
        placeHolder="Transaction Notes..."
        rows="5"
        cols="35"
        setValue={setNotes}
        value={notes}
      />

      <div className={classes.btnContainer}>
        <Button glow black>
          Add Transaction
        </Button>
      </div>
    </AreaBorder>
  );
};

export default AddTransactionContain;
