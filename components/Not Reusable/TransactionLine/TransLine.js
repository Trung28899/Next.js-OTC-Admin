import React from "react";
import classes from "./TransLine.module.css";
import { useUpdateState } from "../../../context/AppContext";
import { useRouter } from "next/router";

const TransLine = (props) => {
  const { setTransData } = useUpdateState();
  const router = useRouter();

  const { month, year, data } = props;
  const containerClass = [classes.container];
  let sign = "";

  if (data.transType === "Expense") {
    containerClass.push(classes.expense);
    sign = "-";
  }
  if (data.transType === "Income") containerClass.push(classes.income);

  const detailPage = () => {
    setTransData({ month: month, year: year, ...data });
    return router.push(`/accounting/transaction/details/${data.transID}`);
  };

  return (
    <div className={containerClass.join(" ")}>
      <p className={classes.date} onClick={detailPage}>
        {month} {data.date}, {year}
      </p>
      <p className={classes.description} onClick={detailPage}>
        {data.description}{" "}
      </p>
      <p className={classes.type} onClick={detailPage}>
        {data.department} {data.transType}
      </p>
      <p className={classes.amount}>
        {sign} $ {data.amount}
      </p>
      <div className={classes.btnContainer}>
        <div
          className={[classes.btn, classes.btnInfo].join(" ")}
          onClick={detailPage}
        >
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
