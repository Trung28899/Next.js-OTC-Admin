import React, { useState } from "react";
import classes from "./journals.module.css";
import Card from "../../components/UI/Cards/Card";
import { useGetState } from "../../context/AppContext";
import BackDrop from "../../components/UI/BackDrop/BackDrop";
import Modal from "../../components/UI/Modal/AddJournalModal";

const Home = () => {
  const { journalArray } = useGetState();
  const [modalOpen, setModalOpen] = useState(false);

  const addMonth = () => {
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Transactions Journals By Month</h3>
      <div className={classes.cardsContainer}>
        <Card add onClick={addMonth} />
        {journalArray.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
      <BackDrop show={modalOpen} closeModal={closeModal} />
      <Modal show={modalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Home;
