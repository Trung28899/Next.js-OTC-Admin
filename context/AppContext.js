import { useState, createContext, useContext } from "react";

const AppContext = createContext();
const AppUpdateContext = createContext();

// Custom Hooks to be imported anywhere in the whole code base
// This is used to access app state or modify app state
export function useGetState() {
  return useContext(AppContext);
}

export function useUpdateState() {
  return useContext(AppUpdateContext);
}

export function AppProvider({ children }) {
  const [journalArray, setJournalArray] = useState([]);

  const addJournal = (journalItem) => {
    setJournalArray([journalItem].concat(journalArray));
  };

  const setJournalOnFetch = (journalArr) => {
    setJournalArray(journalArr);
  };

  const stateData = { journalArray: journalArray };
  const updateState = {
    addJournal: addJournal,
    setJournalOnFetch: setJournalOnFetch,
  };

  return (
    <AppContext.Provider value={stateData}>
      <AppUpdateContext.Provider value={updateState}>
        {children}
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  );
}
