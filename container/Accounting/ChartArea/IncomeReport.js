import React from "react";
import AreaBorder from "/components/UI/AreaBorder/AreaBorder";
import Title from "/components/UI/Typography/Title";
import IncomeByDepartment from "/components/Not Reusable/Charts/BarChart/IncomeByDepartment";
import IncomeExpensePie from "/components/Not Reusable/Charts/PieChart/IncomeExpensePie";
import { greenScheme } from "/constants/colorArrays";
import { simpleGreenScheme } from "/constants/colorArrays";
import classes from "./ChartArea.module.css";

const IncomeReport = ({ incomeData, title }) => {
  return (
    <AreaBorder>
      <Title fontSize="1.2rem" marginBottom="15px">
        {title}
      </Title>
      <div className={classes.chartsContainer}>
        <IncomeByDepartment
          title="Income Report By Department"
          fontSize="1.2rem"
          barColor={simpleGreenScheme}
          data={incomeData}
        />
        <IncomeExpensePie
          data={incomeData}
          colorScheme={greenScheme}
          dataKey="income"
        />
      </div>
    </AreaBorder>
  );
};

export default IncomeReport;
