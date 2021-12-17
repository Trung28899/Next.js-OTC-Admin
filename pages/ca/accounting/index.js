import React, { useState, useEffect } from "react";
import classes from "./home.module.css";
import Card from "/components/UI/Cards/Card";
import { useGetState } from "/context/AppContext";
import BackDrop from "/components/UI/BackDrop/BackDrop";
import Modal from "/components/UI/Modal/AddJournalModal";
import mongoose from "mongoose";
import Journal from "/models/accounting/Journal";
import { useUpdateState } from "/context/AppContext";
import { sortJournals } from "/utilities/algorithm_helper";
import Loader from "/components/UI/Loader/Loader";
import { useRouter } from "next/router";
import Button from "/components/UI/Button/Button";
import Title from "../../../components/UI/Typography/Title";

const Home = (props) => {
  const { setJournalOnFetch } = useUpdateState();
  const { accountingData } = useGetState();
  const { journalArray } = accountingData;
  const router = useRouter();

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
      <Title fontSize="1.5rem" marginTop="50px">
        ONTHECARD Canada's
      </Title>
      <Title fontSize="1.5rem" marginTop="5px">
        Transaction Journals By Month
      </Title>
      <div className={classes.btnHome}>
        <Button glow black onClick={() => router.push("/dashboard")}>
          Return To Dashboard
        </Button>
      </div>
      <div className={classes.cardsContainer}>
        <Card add onClick={addMonth} />
        {journalArray.map((item, index) => {
          const cardClicked = () =>
            router.push(`/ca/accounting/journal/${item.journalID}`);
          return <Card data={item} key={index} onClick={cardClicked} />;
        })}
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
