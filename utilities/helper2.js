import { dayInMonth } from "./helper";

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

export { sortTransaction, getMonthShort };
