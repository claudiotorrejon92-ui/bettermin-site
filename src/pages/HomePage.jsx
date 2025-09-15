import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { BarChart3 } from 'lucide-react';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [
    {
      label: 'Producción',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.3,
    },
  ],
};

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <BarChart3 /> BetterMin
      </h1>
      <Line data={data} />
    </div>
  );
}
