import React from "react";
import AreaBorder from "../../../components/UI/AreaBorder/AreaBorder";
import Title from "../../../components/UI/Typography/Title";
import Badge from "../../../components/UI/Typography/Badge";
import Paragraph from "../../../components/UI/Typography/Paragraph";
import classes from "./AllTime.module.css";

import { getTotalIncome, getTotalExpense } from "../../../utilities/helper2";

const Alltime = ({ allTrans }) => {
  const totalIncome = getTotalIncome(allTrans);
  const totalExpense = getTotalExpense(allTrans);

  return (
    <AreaBorder>
      <div className={classes.titleContainer}>
        <Title fontSize="1.1rem" primary>
          All Time Summary Report
        </Title>
      </div>

      <div style={{ marginTop: "25px" }} className={classes.summaryInfo}>
        <Badge bgSuccess>Total Income</Badge>
        <Paragraph bold success>
          $ {totalIncome}
        </Paragraph>
      </div>

      <div className={classes.summaryInfo}>
        <Badge bgDanger>Total Expense</Badge>
        <Paragraph bold danger>
          - $ {totalExpense}
        </Paragraph>
      </div>

      <div className={classes.summaryInfo}>
        <Badge bgInfo>Current Balance</Badge>
        <Paragraph bold primary>
          {totalIncome - totalExpense} $
        </Paragraph>
      </div>
    </AreaBorder>
  );
};

export default Alltime;
