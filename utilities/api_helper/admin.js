import axios from "axios";

// Used in ./container/Accounting/Journal/TransactionList.js
const createUserAxios = async (userName) => {
  const res = await axios.post("/api/admin/createUser", {
    userName: userName,
    userID: Date.now(),
  });

  return res.data;
};

// Used in ./container/Accounting/Journal/TransactionList.js
const signInUserAxios = async (userName) => {
  const res = await axios.post("/api/admin/signInUser", {
    userName: userName,
  });

  return res.data;
};

export { createUserAxios, signInUserAxios };
