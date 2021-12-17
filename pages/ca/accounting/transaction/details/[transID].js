import React, { useState } from "react";
import TransDetails from "/container/Accounting/TransDetail/TransDetails";
import { useRouter } from "next/router";
import { useGetState } from "/context/AppContext";
import { updateTransAxios } from "/utilities/api_helper/api_helper";
import { validateUpdateTrans } from "/utilities/validator";

import ResultModal from "/components/UI/Modal/ResultModal";
import BackDrop from "/components/UI/BackDrop/BackDrop";
import Loader from "/components/UI/Loader/Loader";

const TransID = () => {
  const { accountingData, admin } = useGetState();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const currentData = accountingData.transData;

  const returnToJournal = () => {
    setLoading(true);
    return router.push(`/ca/accounting/journal/${currentData.journalID}`);
  };

  const viewInvoice = (invoiceLink) => {
    if (invoiceLink.includes("http")) return window.open(invoiceLink);
    return;
  };

  const close = () => {
    setShowResult(false);
  };

  const updateDetails = async (data) => {
    const errorText = validateUpdateTrans(data);
    if (errorText) return alert(errorText);

    setLoading(true);
    const result = await updateTransAxios(data, currentData, admin);
    setSuccess(result.success);
    if (result.success) setMessage("Transaction Updated Successfully !!");
    if (!result.success) setMessage(result.message);
    setShowResult(true);

    return setLoading(false);
  };

  return (
    <div>
      <TransDetails
        data={currentData}
        btnClicked={returnToJournal}
        btn2Clicked={viewInvoice}
        updateDetails={updateDetails}
      />
      {loading && <Loader />}
      {showResult && (
        <ResultModal
          confirm={close}
          success={success}
          message={message}
          confirmText="Close"
        />
      )}
      {showResult && <BackDrop show />}
    </div>
  );
};

export default TransID;
