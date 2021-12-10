import React, { Fragment } from "react";
import AreaBorder from "../../../components/UI/AreaBorder/AreaBorder";
import Title from "../../../components/UI/Typography/Title";
import Button from "../../../components/UI/Button/Button";
import classes from "./JournalContainer.module.css";

const Transactionlist = () => {
  return (
    <Fragment>
      <AreaBorder>
        <div className={classes.titleContainer}>
          <Title fontSize="1.1rem" primary>
            Transaction Listing
          </Title>
          <Button black glow>
            <i className="fas fa-plus"></i> Add Transaction
          </Button>
        </div>
      </AreaBorder>
    </Fragment>
  );
};

export default Transactionlist;
