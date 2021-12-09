import React from "react";
import classes from "./Cards.module.css";

const Card = ({ add, onClick, data }) => {
  return (
    <div className={classes.cardContainer} onClick={onClick}>
      {add && <div className={classes.plusBtn}>+</div>}
      {data && <div className={classes.journalName}>{data.name}</div>}
    </div>
  );
};

export default Card;
