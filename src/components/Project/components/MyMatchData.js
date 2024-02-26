import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const labels = [
  '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
  '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th'
];
 

export default function MyMatchData({teams, team1, team2}) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: teams,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: team1,
        data: [3, 4, 5, 20, 15, 13, 16, 15, 24, 3, 6, 7, 5, 9, 7, 4, 6, 7, 12, 22],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: team2,
        data: [2, 3, 5, 11, 10, 13, 16, 15, 10, 3, 4, 10, 2, 5, 3, 2, 3, 17, 18, 15],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Bar options={options} data={data} />
  );
}