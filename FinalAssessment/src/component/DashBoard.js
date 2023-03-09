import React from "react";
import { Link } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Employee Chart",
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "Employee Attendance",
      data: [10, 20, 30, 20, 40, 25, 35],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [20, 10, 30, 26, 37, 45, 30],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
function DashBoard() {
  return (
  
    <div style={{ display: "flex" }}>
      <div>
        <Bar height={"500px"} width={"350px"} options={options} data={data} />
      </div>
      <div>
        <Line height={"500px"} width={"350px"} options={options} data={data} />
      </div>

      <div>
        <Pie height={"500px"} width={"350px"} options={options} data={data} />
      </div>

      <div style={{ marginTop: "500px" }}>
            <Link href="/MenuBar">{"<Back to Menu>"}</Link>
      </div>
    </div>
  );
}
export default DashBoard;
