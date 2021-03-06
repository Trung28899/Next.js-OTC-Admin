import React, { useState } from "react";
import mongoose from "mongoose";
import classes from "./OverallReport.module.css";
import Title from "../../../../components/UI/Typography/Title";
import Button from "../../../../components/UI/Button/Button";
import Alltime from "../../../../container/Accounting/AllTimeSummary/AllTime";
import Loader from "../../../../components/UI/Loader/Loader";

import Transaction from "../../../../models/accounting/Transaction";
import ExpenseByDepartment from "../../../../components/Not Reusable/Charts/BarChart/ExpenseByDepartment";

import ExpenseReport from "/container/Accounting/ChartArea/ExpenseReport";
import IncomeReport from "/container/Accounting/ChartArea/IncomeReport";

import { getExpensesCategory, getIncomeCategory } from "/utilities/helper2";
import { useRouter } from "next/router";
import { allTransToExcel } from "../../../../utilities/excelHelper";
import { Colors } from "/constants/colors";

const OverallReport = (props) => {
  const router = useRouter();
  const allTrans = JSON.parse(props.allTrans);
  const expenseData = getExpensesCategory(allTrans);
  const incomeData = getIncomeCategory(allTrans);

  const [loading, setLoading] = useState(false);

  const exportToExcel = () => {
    allTransToExcel(allTrans, "All Time Transactions Report");
  };

  const returnToHome = () => {
    setLoading(true);
    return router.push("/ca/accounting");
  };

  return (
    <div className={classes.container}>
      <Title fontSize="1.5rem" marginTop="50px">
        ONTHECARD Canada&apos;s
      </Title>
      <Title fontSize="1.5rem" marginTop="5px">
        All Time Financial Reports
      </Title>
      <div className={classes.btnHome}>
        <Button glow black onClick={returnToHome}>
          Return To Home
        </Button>
        <Button marginLeft="10px" glow green onClick={exportToExcel}>
          <i className="fas fa-file-excel"></i> Export Transactions
        </Button>
      </div>
      <Alltime allTrans={allTrans} />
      {expenseData.length > 0 && (
        <ExpenseReport
          title={"All Time Expenses By Department Report"}
          expenseData={expenseData}
        />
      )}

      {incomeData.length > 0 && (
        <IncomeReport
          title={"All Time Income By Department Report"}
          incomeData={incomeData}
        />
      )}
      {loading && <Loader />}
    </div>
  );
};

export async function getServerSideProps() {
  const client = await mongoose.connect(process.env.DB_HOST);

  const allTransactions = await Transaction.find({ isDeleted: false });
  const propsData = {
    allTrans: JSON.stringify(allTransactions),
  };

  client.connection.close();

  return {
    props: propsData,
  };
}

export default OverallReport;
