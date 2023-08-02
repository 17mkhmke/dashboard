import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    Health: 4000,
    Business: 2400,
    Life: 2400,
  },
  {
    name: "Mon",
    Health: 3000,
    Business: 1398,
    Life: 2210,
  },
  {
    name: "Tue",
    Health: 2000,
    Business: 9800,
    Life: 2290,
  },
  {
    name: "Wed",
    Health: 2780,
    Business: 3908,
    Life: 2000,
  },
  {
    name: "Thu",
    Health: 1890,
    Business: 4800,
    Life: 2181,
  },
  {
    name: "Fri",
    Health: 2390,
    Business: 3800,
    Life: 2500,
  },
  {
    name: "Sat",
    Health: 3490,
    Business: 4300,
    Life: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Life"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Business"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Health"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
