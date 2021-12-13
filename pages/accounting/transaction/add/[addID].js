import React, { useState } from "react";
import mongoose from "mongoose";
import Journal from "../../../../models/accounting/Journal";
import AddTransactionContain from "./../../../../container/Accounting/AddTransaction/AddTransaction";
import Loader from "../../../../components/UI/Loader/Loader";

import { validateAddTrans } from "../../../../utilities/validator";

const AddTransaction = (props) => {
  const propsData = JSON.parse(props.journalDetails);
  const [loading, setLoading] = useState(false);

  const addTransaction = (data) => {
    setLoading(true);
    const errorText = validateAddTrans(data);
    if (errorText) return alert(errorText);

    setLoading(false);
  };

  return (
    <div>
      <AddTransactionContain data={propsData} buttonClicked={addTransaction} />
      {loading && <Loader />}
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
