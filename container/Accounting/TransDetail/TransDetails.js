import React, { useState } from "react";
import classes from "./TransDetails.module.css";

import AreaBorder from "../../../components/UI/AreaBorder/AreaBorder";
import Title from "../../../components/UI/Typography/Title";
import TextArea from "../../../components/UI/TextArea/TextArea";
import DropDown from "../../../components/UI/DropDown/DropDown";
import Button from "../../../components/UI/Button/Button";
import Badge from "../../../components/UI/Typography/Badge";

import { transactionType, dayInMonth } from "../../../utilities/helper";
import { departments } from "../../../utilities/helper";
import { getDateByMillisecond } from "../../../utilities/helper2";

const TransDetails = (props) => {
  const { data, btnClicked, btn2Clicked } = props;
  const { updateDetails } = props;

  const [description, setDescription] = useState(data.description);
  const [amount, setAmount] = useState(data.amount);
  const [invoice, setInvoice] = useState(data.invoice);
  const [notes, setNotes] = useState(data.notes);
  const [transType, setTransType] = useState(data.transType);
  const [department, setDepartment] = useState(data.department);
  const [date, setDate] = useState(data.date);
  const [editOff, setEditOff] = useState(true);

  const { month, year, journalID, transID } = data;
  const entryDate = getDateByMillisecond(data.transID);

  const submitEdit = () => {
    if (editOff) return setEditOff(false);
    updateDetails({
      description,
      amount,
      invoice,
      transType,
      department,
      date,
      notes,
      transID,
    });
  };

  return (
    <AreaBorder alignStart>
      <div className={classes.titleContainer}>
        <Title>Transaction Details</Title>
        {data.isDeleted && (
          <Badge marginTop="5px" fontSize="0.85rem" bgDanger>
            Deleted Transaction
          </Badge>
        )}
      </div>

      <TextArea
        marginTop="30px"
        title="Description"
        placeHolder="Transaction Description..."
        rows="1"
        cols="35"
        setValue={setDescription}
        value={description}
        editOff={editOff}
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
        editOff={editOff}
      />

      <TextArea
        marginTop="15px"
        title="Invoice Link"
        placeHolder="Transaction Invoice..."
        rows="1"
        cols="35"
        setValue={setInvoice}
        value={invoice}
        editOff={editOff}
      />

      {editOff && (
        <div className={classes.transType}>
          <Title fontSize="0.9rem" marginTop="25px">
            Transaction Type:{" "}
          </Title>
          <Badge
            fontSize="0.85rem"
            bgDanger={transType === "Expense"}
            bgSuccess={transType === "Income"}
            marginTop="20px"
            marginLeft="10px"
          >
            {department} {transType}
          </Badge>
        </div>
      )}

      {!editOff && (
        <div className={classes.transType}>
          <DropDown
            optionName="Transaction Type"
            options={transactionType}
            setChosen={setTransType}
            fontSize="0.9rem"
            width="120px"
            value={transType}
          />
          <div className={classes.divider}></div>
          <DropDown
            optionName="Department"
            options={departments}
            setChosen={setDepartment}
            fontSize="0.9rem"
            width="150px"
            value={department}
          />
        </div>
      )}

      {editOff && (
        <div className={classes.transType}>
          <Title fontSize="0.9rem" marginTop="15px" marginRight="15px">
            Date of Transaction:
          </Title>
          <Title fontSize="0.9rem" marginTop="15px" primary>
            {month} {date}, {year}
          </Title>
        </div>
      )}

      {!editOff && (
        <div className={classes.transType}>
          <DropDown
            optionName="Date"
            options={dayInMonth}
            setChosen={setDate}
            fontSize="0.9rem"
            width="100px"
            value={date}
          />
          <div className={classes.divider}></div>
          <Title marginTop="55px">
            {month}, {year}
          </Title>
        </div>
      )}

      <div className={classes.transType}>
        <Title fontSize="0.9rem" marginTop="15px" marginRight="15px">
          Date of Entry:
        </Title>
        <Title fontSize="0.9rem" marginTop="15px" primary>
          {entryDate.month} {entryDate.date}, {entryDate.year}
        </Title>
      </div>

      <TextArea
        marginTop="15px"
        title="Notes"
        placeHolder="Transaction Notes..."
        rows="5"
        cols="35"
        setValue={setNotes}
        value={notes}
        editOff={editOff}
      />

      <div className={classes.btnContainer}>
        <Button glow marginRight="15px" blue onClick={submitEdit}>
          {editOff ? "Edit Details" : "Update Changes"}
        </Button>
        <Button glow black onClick={btnClicked}>
          Return
        </Button>
      </div>
      {editOff && (
        <div className={classes.btnContainer}>
          <Button glow warning onClick={() => btn2Clicked(invoice)}>
            View Invoice
          </Button>
        </div>
      )}
    </AreaBorder>
  );
};

export default TransDetails;
