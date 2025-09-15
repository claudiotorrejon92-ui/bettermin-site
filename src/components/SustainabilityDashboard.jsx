import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend);

const energyData = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Consumo Energético (kWh)',
      data: [400, 380, 420, 390, 360, 350],
      borderColor: 'rgb(34,197,94)',
      backgroundColor: 'rgba(34,197,94,0.2)',
    },
  ],
};

const emissionData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Emisiones de CO2 (t)',
      data: [20, 18, 15, 12],
      backgroundColor: 'rgb(59,130,246)',
    },
  ],
};

export default function SustainabilityDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-semibold mb-2">Consumo Energético</h2>
        <Line data={energyData} />
      </div>
      <div>
        <h2 className="font-semibold mb-2">Emisiones de CO2</h2>
        <Bar data={emissionData} />
      </div>
    </div>
  );
}
