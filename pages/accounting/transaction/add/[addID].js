import React, { useState } from "react";
import mongoose from "mongoose";
import Journal from "../../../../models/accounting/Journal";
import AddTransactionContain from "./../../../../container/Accounting/AddTransaction/AddTransaction";
import Loader from "../../../../components/UI/Loader/Loader";
import ConfirmModal from "../../../../components/UI/Modal/ResultModal";
import BackDrop from "../../../../components/UI/BackDrop/BackDrop";

import { validateAddTrans } from "../../../../utilities/validator";
import { addTransAxios } from "../../../../utilities/api_helper/api_helper";
import { useRouter } from "next/router";

const AddTransaction = (props) => {
  const router = useRouter();
  const propsData = JSON.parse(props.journalDetails);

  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const addTransaction = async (data) => {
    const errorText = validateAddTrans(data);
    if (errorText) return alert(errorText);

    setLoading(true);
    const result = await addTransAxios(data);

    setSuccess(result.success);
    if (result.success) setMessage("Transaction Added Successfully !!");
    if (!result.success) setMessage(result.message);
    setShowResult(true);

    return setLoading(false);
  };

  const confirmAdded = () =>
    router.push(`/accounting/journal/${router.query.addID}`);

  return (
    <div>
      <AddTransactionContain data={propsData} buttonClicked={addTransaction} />
      {loading && <Loader />}
      {showResult && (
        <ConfirmModal
          success={success}
          message={message}
          confirm={confirmAdded}
          confirmText="Return To Journal"
        />
      )}
      {showResult && <BackDrop show />}
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
