import React from "react";
import classes from "./journal.module.css";
import Journal from "../../../models/accounting/Journal";
import mongoose from "mongoose";
import Title from "../../../components/UI/Typography/Title";
import SummaryReport from "../../../container/Accounting/Journal/SummaryReport";
import Transactionlist from "../../../container/Accounting/Journal/TransactionList";

const Id = (props) => {
  const { name, journalID } = JSON.parse(props.journalDetails);

  return (
    <div className={classes.container}>
      <Title marginTop="50px" fontSize="1.25rem">
        {name}: Transactions Journal
      </Title>
      <div className={classes.detailContainer}>
        <Transactionlist journalID={journalID} />
        <SummaryReport />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const journalID = parseInt(context.params.id);
  const client = await mongoose.connect(process.env.DB_HOST);

  const journalDetails = await Journal.findOne({ journalID: journalID });
  const propsData = {
    journalDetails: JSON.stringify(journalDetails),
  };

  client.connection.close();

  return {
    props: propsData,
  };
}

export default Id;
