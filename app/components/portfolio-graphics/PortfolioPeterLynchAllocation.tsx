"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

const PortfolioPeterLynchAllocation = ({ company, portfolioData }: any) => {
  // Créer un objet pour stocker les valeurs de marketValue pour chaque catégorie
  const categoryValues: { [key: string]: number } = {};

  // Agréger les valeurs de marketValue pour chaque catégorie
  company.forEach((item: any) => {
    const category = item.company.stockCategory;
    const marketValue = item.company.marketValue;

    if (categoryValues[category]) {
      categoryValues[category] += marketValue;
    } else {
      categoryValues[category] = marketValue;
    }
  });

  // Extraire les catégories et les valeurs agrégées pour le graphique
  const labels = Object.keys(categoryValues);
  const data = Object.values(categoryValues);

  const liquidityLabel = "Liquidité";
  const liquidityValue = portfolioData.liquidity;

  labels.push(liquidityLabel);
  data.push(liquidityValue);

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
    labels: labels,
    datasets: [
      {
        label: "Poids en €",
        data: data,
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
  };
  return <Pie data={chartData} options={options} plugins={[ChartDataLabels]} />;
};

export default PortfolioPeterLynchAllocation;
