import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: "#0033FF",
      borderColor: "#2B00FF",
      data: [15500, 20550, 18100, 24000, 23000, 24000, 12000, 26000],
    },
  ],
};

const Gharap = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default Gharap;
