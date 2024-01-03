"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend);

const PortfolioPositionPieChart = ({ company, portfolioData }: any) => {
  const labels = company.map((item: any) => item.company.name);
  const data = company.map((item: any) => item.company.marketValue);

  const liquidityLabel = "Liquidité";
  const liquidityValue = portfolioData.liquidity;

  const updatedLabels = [...labels, liquidityLabel];
  const updatedData = [...data, liquidityValue];

  const options = {
    plugins: {
      datalabels: {
        formatter: (value: any, ctx: any) => {
          const sum = ctx.dataset.data.reduce(
            (acc: number, data: any) => acc + data,
            0
          );
          const percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
        display: true,
      },
    },
  };

  const chartData = {
    labels: updatedLabels,
    datasets: [
      {
        label: "Poids en €",
        data: updatedData,
        backgroundColor: [
          "rgba(0, 88, 204, 1)",
          "rgba(10, 116, 255, 1)",
          "rgba(28, 73, 92, 1)",
          "rgba(56, 103, 149, 1)",
          "rgba(17, 61, 112, 1)",
          "rgba(40, 85, 123, 1)",
        ],
        borderColor: [
          "rgba(0, 88, 204, 1)",
          "rgba(10, 116, 255, 1)",
          "rgba(28, 73, 92, 1)",
          "rgba(56, 103, 149, 1)",
          "rgba(17, 61, 112, 1)",
          "rgba(40, 85, 123, 1)",
        ],
        borderWidth: 1,
      },
    ],
    options: {
      plugins: {
        title: {
          display: true,
          text: "Custom Chart Title",
        },
      },
    },
  };
  return <Pie data={chartData} options={options} plugins={[ChartDataLabels]} />;
};

export default PortfolioPositionPieChart;
