import React from "react";
import classes from "./JournalContainer.module.css";
import AreaBorder from "../../../components/UI/AreaBorder/AreaBorder";
import Title from "../../../components/UI/Typography/Title";
import Badge from "../../../components/UI/Typography/Badge";
import Paragraph from "../../../components/UI/Typography/Paragraph";

const SummaryReport = () => {
  return (
    <div style={{ height: "fit-content" }}>
      <AreaBorder alignStart>
        <Title primary>Summary Report</Title>

        <div className={classes.summaryInfo}>
          <Badge bgSuccess>Income</Badge>
          <Paragraph bold success>
            $3000
          </Paragraph>
        </div>

        <div className={classes.summaryInfo}>
          <Badge bgDanger>Expense</Badge>
          <Paragraph bold danger>
            - $1500
          </Paragraph>
        </div>

        <div className={classes.summaryInfo}>
          <Badge bgInfo>Profit</Badge>
          <Paragraph bold primary>
            $1500
          </Paragraph>
        </div>
      </AreaBorder>
    </div>
  );
};

export default SummaryReport;
