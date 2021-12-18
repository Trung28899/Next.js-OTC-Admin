import React from "react";
import AreaBorder from "/components/UI/AreaBorder/AreaBorder";
import Title from "/components/UI/Typography/Title";
import ExpenseByDepartment from "/components/Not Reusable/Charts/BarChart/ExpenseByDepartment";
import IncomeExpensePie from "/components/Not Reusable/Charts/PieChart/IncomeExpensePie";
import { redScheme } from "/constants/colorArrays";
import { simpleRedScheme } from "/constants/colorArrays";
import classes from "./ChartArea.module.css";

const ExpenseReport = ({ expenseData, title }) => {
  return (
    <AreaBorder>
      <Title fontSize="1.2rem" marginBottom="15px">
        {title}
      </Title>
      <div className={classes.chartsContainer}>
        <ExpenseByDepartment
          fontSize="1rem"
          barColor={simpleRedScheme}
          data={expenseData}
        />
        <IncomeExpensePie
          data={expenseData}
          colorScheme={redScheme}
          dataKey="expense"
        />
      </div>
    </AreaBorder>
  );
};

export default ExpenseReport;
