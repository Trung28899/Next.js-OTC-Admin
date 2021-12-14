import axios from "axios";

// Used in AddJournalModal.js
const addJournalAxios = async (journalObject) => {
  const res = await axios.post("/api/accounting/addJournal", {
    newJournal: journalObject,
  });

  return res.data;
};

// Used in AddJournalModal.js
const addTransAxios = async (data) => {
  const res = await axios.post("/api/accounting/addTrans", {
    transData: data,
  });

  return res.data;
};

export { addJournalAxios, addTransAxios };
