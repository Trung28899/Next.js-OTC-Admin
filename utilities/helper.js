import { Colors } from "../constants/colors";

export const getColorByNumber = (number) => {
  if (number % 2 === 0) {
    return Colors.primary;
  } else if (number % 3 === 0) {
    return Colors.danger;
  } else if (number % 5 === 0) {
    return Colors.success;
  } else {
    return Colors.faded;
  }
};

export const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const yearArray = [
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
];

export const transactionType = ["Income", "Expense"];

export const dayInMonth = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11st",
  "12nd",
  "13rd",
  "14th",
  "15th",
  "16th",
  "17th",
  "18th",
  "19th",
  "20th",
  "21st",
  "22nd",
  "23rd",
  "24th",
  "25th",
  "26th",
  "27th",
  "28th",
  "29th",
  "30th",
  "31st",
];

export const departments = [
  "Sales",
  "Fulfilment",
  "Logistic",
  "IT",
  "Legal",
  "R&D",
  "Marketing",
  "Finance",
  "Human Resource",
];
