import React, { useState } from "react";
import classes from "../styles/dashboard.module.css";
import Card from "../components/UI/Cards/Card";
import { useRouter } from "next/router";
import Title from "../components/UI/Typography/Title";
import { useGetState } from "../context/AppContext";
import Loader from "../components/UI/Loader/Loader";

const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const firstCardClicked = () => {
    setLoading(true);
    return router.push("/ca/accounting");
  };
  const { admin } = useGetState();

  return (
    <div className={classes.container}>
      <Title fontSize="1.5rem" marginTop="50px">
        Hello, {admin.fullName} ! Welcome To
      </Title>
      <Title fontSize="1.5rem" marginTop="5px">
        Administrative Applications Dashboard
      </Title>
      <div className={classes.cardsContainer}>
        <Card title="Accounting App (Canada)" onClick={firstCardClicked} />
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Dashboard;
