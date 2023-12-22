"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const PortfolioCapitalizationAllocation = ({ company }: any) => {
  console.log(company);
  const capitalizationValues: { [key: string]: number } = {};

  // Agréger les valeurs de marketValue pour chaque catégorie
  company.forEach((item: any) => {
    const capitalization = item.company.capitalisation;
    const marketValue = item.company.marketValue;

    if (capitalizationValues[capitalization]) {
      capitalizationValues[capitalization] += marketValue;
    } else {
      capitalizationValues[capitalization] = marketValue;
    }
  });

  // Extraire les catégories et les valeurs agrégées pour le graphique
  const labels = Object.keys(capitalizationValues);
  const data = Object.values(capitalizationValues);
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
    options: {
      plugins: {
        title: {
          display: true,
          text: "Custom Chart Title",
        },
      },
    },
  };
  return <Pie data={chartData} />;
};

export default PortfolioCapitalizationAllocation;
