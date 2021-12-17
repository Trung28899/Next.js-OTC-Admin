import axios from "axios";

// Used in AddJournalModal.js
const addJournalAxios = async (journalObject) => {
  const res = await axios.post("/api/accounting/addJournal", {
    newJournal: journalObject,
  });

  return res.data;
};

// Used in AddJournalModal.js
const addTransAxios = async (data, admin) => {
  const res = await axios.post("/api/accounting/addTrans", {
    transData: data,
    userName: admin.userName,
    fullName: admin.fullName,
  });

  return res.data;
};

// Used in accounting/transaction/details/[transID].js
const updateTransAxios = async (data, previousData, admin) => {
  const res = await axios.post("/api/accounting/updateTrans", {
    transData: data,
    previousData: previousData,
    userName: admin.userName,
    fullName: admin.fullName,
  });

  return res.data;
};

// Used in ./container/Accounting/Journal/TransactionList.js
const deleteTransAxios = async (data, deleteAction, admin) => {
  const res = await axios.post("/api/accounting/deleteTrans", {
    transData: data,
    deleteAction: deleteAction,
    userName: admin.userName,
    fullName: admin.fullName,
  });

  return res.data;
};

export { addJournalAxios, addTransAxios, updateTransAxios };
export { deleteTransAxios };
