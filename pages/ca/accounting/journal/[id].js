import React, { useState } from "react";
import classes from "./journal.module.css";
import mongoose from "mongoose";
import Title from "/components/UI/Typography/Title";
import SummaryReport from "/container/Accounting/Journal/SummaryReport";
import Transactionlist from "/container/Accounting/Journal/TransactionList";
import DeletedTransList from "/container/Accounting/Journal/DeletedTransList";

import Journal from "/models/accounting/Journal";
import Transaction from "/models/accounting/Transaction";
import Button from "/components/UI/Button/Button";
import Loader from "../../../../components/UI/Loader/Loader";

import { sortTransaction, getMonthShort } from "/utilities/helper2";
import { allTransToExcel } from "../../../../utilities/excelHelper";
import { useRouter } from "next/router";

const Id = (props) => {
  const router = useRouter();
  const { name, journalID, month, year } = JSON.parse(props.journalDetails);
  const transList = JSON.parse(props.transactionList);
  sortTransaction(transList);
  const monthShort = getMonthShort(month);

  const [loading, setLoading] = useState(false);

  const returnToHome = () => {
    setLoading(true);
    return router.push("/ca/accounting");
  };

  const exportToExcel = () => {
    allTransToExcel(transList, `${monthShort}, ${year} OTC Transactions`);
  };

  return (
    <div className={classes.container}>
      <Title marginTop="50px" fontSize="1.25rem">
        {name}: Transactions Journal
      </Title>
      <div className={classes.btnHome}>
        <Button glow black onClick={returnToHome}>
          Return To Home
        </Button>
        <Button marginLeft="15px" glow green onClick={exportToExcel}>
          <i className="fas fa-file-excel"></i> Export Transactions
        </Button>
      </div>
      <div className={classes.detailContainer}>
        <Transactionlist
          month={monthShort}
          year={year}
          journalID={journalID}
          transList={transList}
        />
        <SummaryReport transList={transList} />
      </div>
      <div className={classes.deleteContainer}>
        <DeletedTransList
          month={monthShort}
          year={year}
          journalID={journalID}
          transList={transList}
        />
      </div>
      {loading && <Loader />}
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
