import React, { Fragment } from "react";
import AreaBorder from "../../../components/UI/AreaBorder/AreaBorder";
import Title from "../../../components/UI/Typography/Title";
import Button from "../../../components/UI/Button/Button";
import classes from "./JournalContainer.module.css";
import { useRouter } from "next/router";

import TransLine from "../../../components/Not Reusable/TransactionLine/TransLine";

const Transactionlist = ({ journalID, transList, month, year }) => {
  const router = useRouter();
  const addTrans = () =>
    router.push(`/accounting/transaction/add/${journalID}`);

  return (
    <Fragment>
      <AreaBorder>
        <div className={classes.titleContainer}>
          <Title fontSize="1.1rem" primary>
            Transactions Listing
          </Title>
          <Button black glow onClick={addTrans}>
            <i className="fas fa-plus"></i> Add Transaction
          </Button>
        </div>
        <div className={classes.transactions}>
          <div className={classes.columnsDivider}>
            <p>Date</p>
            <p>Description</p>
            <p>Trans Type</p>
            <p>Amount</p>
            <div></div>
          </div>
          {transList.map((item, index) => (
            <TransLine key={index} month={month} year={year} data={item} />
          ))}
        </div>
      </AreaBorder>
    </Fragment>
  );
};

export default Transactionlist;
