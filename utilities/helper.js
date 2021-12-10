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

export const sortJournals = (journalArray) => {
  journalArray.sort((a, b) => b.journalID - a.journalID);
  return journalArray;
};
