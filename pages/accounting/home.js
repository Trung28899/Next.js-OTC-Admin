import React, { useState, useEffect } from "react";
import classes from "./home.module.css";
import Card from "../../components/UI/Cards/Card";
import { useGetState } from "../../context/AppContext";
import BackDrop from "../../components/UI/BackDrop/BackDrop";
import Modal from "../../components/UI/Modal/AddJournalModal";
import mongoose from "mongoose";
import Journal from "../../models/accounting/Journal";
import { useUpdateState } from "../../context/AppContext";
import { sortJournals } from "../../utilities/helper";
import Loader from "../../components/UI/Loader/Loader";

const Home = (props) => {
  const { setJournalOnFetch } = useUpdateState();
  const { journalArray } = useGetState();

  const [journalArrayOk, setJournalArrayOk] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const addMonth = () => {
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (!journalArrayOk) {
      const allJournals = sortJournals(JSON.parse(props.allJournals));

      setJournalOnFetch(allJournals);
      setJournalArrayOk(true);
    }
  }, [journalArrayOk]);

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Transaction Journals By Month</h3>
      <div className={classes.cardsContainer}>
        <Card add onClick={addMonth} />
        {journalArray.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
      {loading && <Loader />}
      <BackDrop show={modalOpen} closeModal={closeModal} />
      <Modal show={modalOpen} closeModal={closeModal} setLoad={setLoading} />
    </div>
  );
};

export async function getServerSideProps() {
  const client = await mongoose.connect(process.env.DB_HOST);

  const allJournals = await Journal.find();
  const propsData = {
    allJournals: JSON.stringify(allJournals),
  };

  client.connection.close();

  return {
    props: propsData,
  };
}

export default Home;
