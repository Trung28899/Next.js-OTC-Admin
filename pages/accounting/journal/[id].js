import React from "react";
import classes from "./journal.module.css";
import mongoose from "mongoose";
import Title from "../../../components/UI/Typography/Title";
import SummaryReport from "../../../container/Accounting/Journal/SummaryReport";
import Transactionlist from "../../../container/Accounting/Journal/TransactionList";

import Journal from "../../../models/accounting/Journal";
import Transaction from "../../../models/accounting/Transaction";

import { sortTransaction, getMonthShort } from "../../../utilities/helper2";

const Id = (props) => {
  const { name, journalID, month, year } = JSON.parse(props.journalDetails);
  const transList = JSON.parse(props.transactionList);
  sortTransaction(transList);
  const monthShort = getMonthShort(month);

  return (
    <div className={classes.container}>
      <Title marginTop="50px" fontSize="1.25rem">
        {name}: Transactions Journal
      </Title>
      <div className={classes.detailContainer}>
        <Transactionlist
          month={monthShort}
          year={year}
          journalID={journalID}
          transList={transList}
        />
        <SummaryReport />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const journalID = parseInt(context.params.id);
  const client = await mongoose.connect(process.env.DB_HOST);

  const journalDetails = await Journal.findOne({ journalID: journalID });
  const transList = await Transaction.find({ journalID: journalID });

  const propsData = {
    journalDetails: JSON.stringify(journalDetails),
    transactionList: JSON.stringify(transList),
  };

  client.connection.close();

  return {
    props: propsData,
  };
}

export default Id;
