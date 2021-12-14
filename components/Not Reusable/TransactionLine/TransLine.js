import React from "react";
import classes from "./TransLine.module.css";
import Button from "../../UI/Button/Button";

const TransLine = (props) => {
  const { month, year, data } = props;
  const containerClass = [classes.container];
  let sign = "";

  if (data.transType === "Expense") {
    containerClass.push(classes.expense);
    sign = "-";
  }
  if (data.transType === "Income") containerClass.push(classes.income);

  return (
    <div className={containerClass.join(" ")}>
      <p className={classes.date}>
        {month} {data.date}, {year}
      </p>
      <p className={classes.description}>{data.description} </p>
      <p className={classes.type}>
        {data.department} {data.transType}
      </p>
      <p className={classes.amount}>
        {sign} $ {data.amount}
      </p>
      <div className={classes.btnContainer}>
        <div className={[classes.btn, classes.btnInfo].join(" ")}>
          <i className="fas fa-info-circle"></i> Details
        </div>
        <div className={[classes.btn, classes.btnDelete].join(" ")}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default TransLine;
