import React, { Fragment, useState } from "react";
import AreaBorder from "/components/UI/AreaBorder/AreaBorder";
import Title from "/components/UI/Typography/Title";
import classes from "./JournalContainer.module.css";
import { useRouter } from "next/router";

import TransLine from "/components/Not Reusable/TransactionLine/TransLine";
import ConfirmModal from "/components/UI/Modal/ConfirmModal";
import ResultModal from "/components/UI/Modal/ResultModal";
import BackDrop from "/components/UI/BackDrop/BackDrop";
import Loader from "/components/UI/Loader/Loader";
import { deleteTransAxios } from "/utilities/api_helper/api_helper";
import { useGetState } from "../../../context/AppContext";

const Transactionlist = ({ journalID, transList, month, year }) => {
  const { admin } = useGetState();

  const [deleteOn, setDeleteOn] = useState(false);
  const [transData, setTransData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [resultConfirm, setResultConfirm] = useState(false);

  const router = useRouter();

  const deleteTrans = (data) => {
    setTransData(data);
    setDeleteOn(true);
  };

  const closeDeleteModal = () => {
    setTransData(null);
    setDeleteOn(false);
  };

  const restoreConfirm = async () => {
    setDeleteOn(false);
    setLoading(true);

    const result = await deleteTransAxios(transData, false, admin);

    setDeleteSuccess(result.success);
    if (result.success)
      setDeleteMessage("Transaction Restored Successfully !!");
    if (!result.success) setDeleteMessage(result.message);

    setTransData(null);
    setLoading(false);
    return setResultConfirm(true);
  };

  const confirmDelete = () => {
    router.push(`/ca/accounting/journal/${journalID}`);
    return setResultConfirm(false);
  };

  const getDetail = (transID) => {
    return router.push(`/ca/accounting/transaction/details/${transID}`);
  };

  return (
    <Fragment>
      <AreaBorder>
        <div
          style={{ justifyContent: "center" }}
          className={classes.titleContainer}
        >
          <Title fontSize="1.1rem" danger>
            Deleted Transactions
          </Title>
        </div>
        <div className={classes.transactions}>
          <div className={classes.columnsDivider}>
            <p>Date</p>
            <p>Description</p>
            <p>Trans Type</p>
            <p>Amount</p>
            <div></div>
          </div>
          {transList.map((item, index) => {
            if (item.isDeleted)
              return (
                <TransLine
                  key={index}
                  month={month}
                  year={year}
                  data={item}
                  getDetail={getDetail}
                  onDelete={deleteTrans}
                  isDeleted={true}
                />
              );
          })}
        </div>
      </AreaBorder>

      {deleteOn && (
        <ConfirmModal
          message="Do You Want To Restore This Transaction ?"
          confirmText="Confirm Restore"
          confirm={restoreConfirm}
          close={closeDeleteModal}
          confirmPrimary
        />
      )}

      {resultConfirm && (
        <ResultModal
          success={deleteSuccess}
          message={deleteMessage}
          confirmText="Return To Journal"
          confirm={confirmDelete}
        />
      )}

      {loading && <Loader />}
      <BackDrop show={resultConfirm || deleteOn} />
    </Fragment>
  );
};

export default Transactionlist;
