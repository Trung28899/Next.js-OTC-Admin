import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import CustomTooltip from "../Customs/ToolTip/CustomToolTip";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  let radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  let fillValue = "white";

  if (percent * 100 < 7.5) {
    radius = innerRadius + (outerRadius - innerRadius) * 1.1;
    fillValue = "grey";
  }

  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={fillValue}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ExpensePieChart = ({ data, colorScheme, dataKey }) => {
  const filledData = data.map((item, index) => {
    return {
      name: item.name,
      value: item[dataKey],
      fill: colorScheme[index % colorScheme.length],
    };
  });

  return (
    <div>
      <PieChart width={450} height={400} margin={{ bottom: 80 }}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={filledData}
          cx="50%"
          cy="50%"
          outerRadius={90}
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colorScheme[index % colorScheme.length]}
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip totalType={dataKey} />} />

        <Legend
          layout="vetical"
          verticalAlign="middle"
          align="right"
          height={200}
          iconType="circle"
          iconSize={14}
        />
      </PieChart>
    </div>
  );
};

export default ExpensePieChart;
