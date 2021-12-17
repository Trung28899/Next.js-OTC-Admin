import React from "react";
import classes from "./TransLine.module.css";
import { useUpdateState } from "../../../context/AppContext";

const TransLine = (props) => {
  const { setTransData } = useUpdateState();

  const { month, year, data, onDelete } = props;
  const { getDetail, isDeleted } = props;
  const containerClass = [classes.container];
  let sign = "";

  if (data.transType === "Expense") {
    containerClass.push(classes.expense);
    sign = "-";
  }
  if (data.transType === "Income") containerClass.push(classes.income);

  const detailPage = () => {
    setTransData({ month: month, year: year, ...data });
    return getDetail(data.transID);
  };

  const deleteTransaction = () => {
    return onDelete(data);
  };

  const iconStyle = [classes.btn];

  if (isDeleted) iconStyle.push(classes.btnRestore);
  if (!isDeleted) iconStyle.push(classes.btnDelete);

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
        <div className={iconStyle.join(" ")} onClick={deleteTransaction}>
          {isDeleted ? (
            <i className="fas fa-undo"></i>
          ) : (
            <i className="fas fa-trash"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransLine;
