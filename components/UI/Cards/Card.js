import React from "react";
import classes from "./Cards.module.css";

const Card = ({ add, onClick, data, title }) => {
  return (
    <div className={classes.cardContainer} onClick={onClick}>
      {add && <div className={classes.plusBtn}>+</div>}
      {data && !title && <div className={classes.journalName}>{data.name}</div>}
      {title && <div className={classes.journalName}>{title}</div>}
    </div>
  );
};

export default Card;
