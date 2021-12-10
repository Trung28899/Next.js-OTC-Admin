import React from "react";
import mongoose from "mongoose";
import Journal from "../../../../models/accounting/Journal";
import AddTransactionContain from "./../../../../container/Accounting/AddTransaction/AddTransaction";

const AddTransaction = (props) => {
  return (
    <div>
      <AddTransactionContain data={JSON.parse(props.journalDetails)} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const journalID = parseInt(context.params.addID);
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

export default AddTransaction;
