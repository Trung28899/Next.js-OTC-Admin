import { dayInMonth, departments, monthArray } from "./helper";

// sort transactions by date, used in ./pages/accounting/journal/[id].js
const sortTransaction = (transArray) => {
  transArray.sort(
    (a, b) => dayInMonth.indexOf(b.date) - dayInMonth.indexOf(a.date)
  );
};

const getMonthShort = (month) => {
  if (month === "January") return "Jan";
  if (month === "February") return "Feb";
  if (month === "March") return "Mar";
  if (month === "April") return "Apr";
  if (month === "May") return "May";
  if (month === "June") return "June";
  if (month === "July") return "July";
  if (month === "August") return "Aug";
  if (month === "September") return "Sep";
  if (month === "October") return "Oct";
  if (month === "November") return "Nov";
  if (month === "December") return "Dec";

  return "";
};

// Used in ./container/Accounting/Journal/SummaryReport.js
const getTotalIncome = (transList) => {
  let income = 0;
  transList.map((item) => {
    if (item.transType === "Income" && !item.isDeleted)
      income = income + item.amount;
  });

  return income;
};

const getTotalExpense = (transList) => {
  let expense = 0;
  transList.map((item) => {
    if (item.transType === "Expense" && !item.isDeleted)
      expense = expense + item.amount;
  });

  return expense;
};

// Used in container/Accounting/TransDetail/TransDetails.js
const getDateByMillisecond = (millisecond) => {
  const entryDate = new Date(millisecond);

  return {
    date: dayInMonth[entryDate.getDate() - 1],
    month: monthArray[entryDate.getMonth()],
    year: entryDate.getFullYear(),
  };
};

// Some Premium Function For Trung
const isTrung = (admin) => {
  if (admin.userName.toLowerCase().includes("trungtrinh")) return true;
  return false;
};

// Get expenses data by department to render on chart
// Used in /pages/ca/accounting/overall
const getExpensesCategory = (transList) => {
  let departmentList = [];
  let dataObject = [];

  for (let i = 0; i < transList.length; i++) {
    const { transType, department, amount, isDeleted } = transList[i];

    if (transType !== "Expense" || isDeleted) continue;

    if (departmentList.indexOf(department) === -1) {
      dataObject.push({ name: department, expense: amount });
      departmentList.push(department);
    } else {
      const newData = {
        name: department,
        expense:
          dataObject[departmentList.indexOf(department)].expense + amount,
      };
      dataObject[departmentList.indexOf(department)] = newData;
    }
  }

  return dataObject;
};

// Get income data by department to render on chart
// Used in /pages/ca/accounting/overall
const getIncomeCategory = (transList) => {
  let departmentList = [];
  let dataObject = [];

  for (let i = 0; i < transList.length; i++) {
    const { transType, department, amount, isDeleted } = transList[i];

    if (transType !== "Income" || isDeleted) continue;

    if (departmentList.indexOf(department) === -1) {
      dataObject.push({ name: department, income: amount });
      departmentList.push(department);
    } else {
      const newData = {
        name: department,
        income: dataObject[departmentList.indexOf(department)].income + amount,
      };
      dataObject[departmentList.indexOf(department)] = newData;
    }
  }

  return dataObject;
};

export { sortTransaction, getMonthShort, isTrung, getExpensesCategory };
export { getDateByMillisecond, getIncomeCategory };
export { getTotalIncome, getTotalExpense };
