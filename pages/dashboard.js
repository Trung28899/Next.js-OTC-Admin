import React from "react";
import classes from "../styles/dashboard.module.css";
import Card from "../components/UI/Cards/Card";
import { useRouter } from "next/router";
import Title from "../components/UI/Typography/Title";
import { useGetState } from "../context/AppContext";

const Dashboard = () => {
  const router = useRouter();
  const firstCardClicked = () => router.push("/ca/accounting");
  const { admin } = useGetState();

  return (
    <div className={classes.container}>
      <Title fontSize="1.5rem" marginTop="50px">
        Administrative Applications Dashboard
      </Title>
      <Title fontSize="1.5rem" marginTop="5px">
        Hello {admin.fullName}
      </Title>
      <div className={classes.cardsContainer}>
        <Card title="Accounting App (Canada)" onClick={firstCardClicked} />
      </div>
    </div>
  );
};

export default Dashboard;
