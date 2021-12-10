// use in accounting/home
export const sortJournals = (journalArray) => {
  journalArray.sort((a, b) => b.journalID - a.journalID);
  return journalArray;
};
