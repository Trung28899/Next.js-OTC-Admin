import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const BarCharts = (props) => {
  const { fontSize, barColor, data, title } = props;
  const titleStyleObj = {};

  if (fontSize) titleStyleObj.fontSize = fontSize;

  return (
    <div>
      <h1 style={titleStyleObj}>{title || ""}</h1>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="income" tickFormatter={(value) => `$${value}`} />
        <Tooltip
          tick={{ fontSize: fontSize, color: "black" }}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="income" stackId="a" unit=" $">
          {data.map((item, index) => (
            <Cell
              key={`cell-${index}`}
              fill={barColor[index % barColor.length || 0]}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default BarCharts;
